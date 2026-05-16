from datetime import datetime, timezone
import re
from typing import Dict, List, Optional, Set, Tuple

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


app = FastAPI(title="Saessack File Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://saessak-nine.vercel.app",
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "null",
    ],
    allow_origin_regex=r"https://saessak-nine-.*\.vercel\.app",
    allow_credentials=False,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


class FileMetadata(BaseModel):
    name: str
    sizeBytes: int = Field(ge=0)
    lastModified: Optional[datetime] = None
    type: str = ""
    relativePath: str = ""
    extension: str = ""


class AnalyzeRequest(BaseModel):
    files: List[FileMetadata]


DUPLICATE_KEYWORDS = (
    "copy",
    "copied",
    "duplicate",
    "복사본",
    "사본",
    "final_final",
    "수정본",
)

ONE_YEAR_DAYS = 365
LARGE_FILE_BYTES = 100 * 1024 * 1024


CO2_GRAM_PER_MB = 4.0
BYTES_PER_POINT = 100 * 1024
# 라면 1개 끓이는 데 약 1,000 g CO2 (디자인 내러티브용 환산).
CO2_GRAM_PER_RAMEN = 1000.0


def split_name(name: str) -> Tuple[str, str]:
    if "." not in name:
        return name, ""
    base, ext = name.rsplit(".", 1)
    return base, ext.lower()


def normalized_duplicate_key(file: FileMetadata) -> str:
    base, ext = split_name(file.name.lower())
    base = re.sub(r"\s*\(\d+\)$", "", base)
    base = re.sub(r"[\s._-]+copy(?:\s*\d+)?$", "", base)
    base = re.sub(r"[\s._-]+copied(?:\s*\d+)?$", "", base)
    base = re.sub(r"[\s._-]+duplicate(?:\s*\d+)?$", "", base)
    base = base.replace("final_final", "final")
    base = base.replace("복사본", "").replace("사본", "").replace("수정본", "")
    base = re.sub(r"[\s._-]+", " ", base).strip()
    extension = (file.extension or ext).lower().strip(".")
    return f"{base}.{extension}"


def has_duplicate_keyword(name: str) -> bool:
    lowered = name.lower()
    return any(keyword in lowered for keyword in DUPLICATE_KEYWORDS)


def detect_duplicate_indexes(files: List[FileMetadata]) -> Set[int]:
    duplicate_indexes: Set[int] = set()

    exact_groups: Dict[Tuple[str, int], List[int]] = {}
    for idx, file in enumerate(files):
        exact_groups.setdefault((file.name.lower(), file.sizeBytes), []).append(idx)

    for indexes in exact_groups.values():
        if len(indexes) > 1:
            duplicate_indexes.update(indexes[1:])

    similar_groups: Dict[str, List[int]] = {}
    for idx, file in enumerate(files):
        similar_groups.setdefault(normalized_duplicate_key(file), []).append(idx)

    for indexes in similar_groups.values():
        if len(indexes) < 2:
            continue
        original_idx = sorted(indexes, key=lambda i: (has_duplicate_keyword(files[i].name), i))[0]
        for idx in indexes:
            if idx == original_idx or idx in duplicate_indexes:
                continue
            for other_idx in indexes:
                if other_idx == idx:
                    continue
                bigger = max(files[idx].sizeBytes, files[other_idx].sizeBytes, 1)
                smaller = min(files[idx].sizeBytes, files[other_idx].sizeBytes)
                if smaller / bigger >= 0.98:
                    duplicate_indexes.add(idx)
                    break

    for idx, file in enumerate(files):
        if has_duplicate_keyword(file.name):
            duplicate_indexes.add(idx)

    return duplicate_indexes


def candidate_reason(file: FileMetadata, category: str) -> str:
    if category == "DUPLICATE_CANDIDATE":
        return "이름 또는 용량이 유사한 중복 후보입니다."
    if category == "OLD_LARGE_FILE":
        return "1년 이상 수정되지 않았고 100MB 이상인 대용량 파일입니다."
    if category == "LARGE_FILE":
        return "100MB 이상인 대용량 파일입니다."
    return "1년 이상 수정되지 않은 파일입니다."


def risk_level(category: str) -> str:
    if category == "OLD_LARGE_FILE":
        return "MEDIUM"
    return "LOW"


@app.post("/api/bium/files/analyze")
def analyze_files(payload: AnalyzeRequest):
    now = datetime.now(timezone.utc)
    duplicate_indexes = detect_duplicate_indexes(payload.files)
    candidates = []

    for idx, file in enumerate(payload.files):
        modified = file.lastModified
        if modified and modified.tzinfo is None:
            modified = modified.replace(tzinfo=timezone.utc)

        is_old = bool(modified and (now - modified).days >= ONE_YEAR_DAYS)
        is_large = file.sizeBytes >= LARGE_FILE_BYTES
        is_duplicate = idx in duplicate_indexes

        category = None
        if is_duplicate:
            category = "DUPLICATE_CANDIDATE"
        elif is_old and is_large:
            category = "OLD_LARGE_FILE"
        elif is_large:
            category = "LARGE_FILE"
        elif is_old:
            category = "OLD_FILE"

        if not category:
            continue

        saved_bytes = file.sizeBytes
        saved_mb_raw = saved_bytes / 1024 / 1024
        co2_gram_raw = saved_mb_raw * CO2_GRAM_PER_MB
        point = max(1, round(saved_bytes / BYTES_PER_POINT))
        candidates.append(
            {
                "name": file.name,
                "relativePath": file.relativePath or file.name,
                "category": category,
                "riskLevel": risk_level(category),
                "recommendation": "직접 확인 후 삭제 추천",
                "reason": candidate_reason(file, category),
                "savedBytes": saved_bytes,
                "savedMb": round(saved_mb_raw, 6),
                "co2Gram": round(co2_gram_raw, 6),
                # 새 디자인은 "포인트"를 "새싹"으로 부른다. 둘 다 같은 값을 노출해
                # 구 클라이언트(point)와 신 클라이언트(seed) 모두 호환되게 유지한다.
                "point": point,
                "seed": point,
            }
        )

    total_bytes = sum(item["savedBytes"] for item in candidates)
    estimated_saved_mb = round(total_bytes / 1024 / 1024, 6)
    estimated_co2_gram = round(total_bytes / 1024 / 1024 * CO2_GRAM_PER_MB, 6)
    total_seed = sum(item["point"] for item in candidates)
    # 디자인의 라면(🍜) 환산 — 소수 1자리.
    ramen_count = round(estimated_co2_gram / CO2_GRAM_PER_RAMEN, 1)

    return {
        "summary": {
            "totalFiles": len(payload.files),
            "cleanableFiles": len(candidates),
            "estimatedSavedBytes": total_bytes,
            "estimatedSavedMb": estimated_saved_mb,
            "estimatedCo2Gram": estimated_co2_gram,
            # point/seed 둘 다 노출 → 구·신 클라이언트 모두 호환.
            "earnedPoint": total_seed,
            "earnedSeed": total_seed,
            # 디자인 카드("🍜 라면 N개 끓일 수 있는 탄소를 아꼈어요")용 환산값.
            "ramenCount": ramen_count,
        },
        "candidates": candidates,
    }
