# 🌱 새싹 (SAESSACK)

> **데이터 정리로 자라는 작은 변화 — 더 가볍고, 더 깨끗한 디지털 지구**
> AI 기반 디지털 탄소 관리 & 리워드 서비스

새싹은 귀찮은 디지털 데이터 정리를 **쉽고, 의미 있게** 바꿉니다.
PC·메일·사진 속 불필요한 파일을 AI가 찾아 정리하고, 절감된 용량을 **탄소 절감량**으로 시각화하며, 정리 행동을 **포인트 리워드**로 보상합니다.

---

## 🧩 Problem — 디지털 데이터는 쌓이는데, 정리는 자꾸 미뤄집니다

- 불필요한 메일·파일이 계속 쌓임
- 저장 공간 부족으로 비용 발생
- 반복적인 정리 작업의 피로감
- 디지털 탄소 배출은 체감하기 어려움

기존 서비스는 *메일 정리만*, 혹은 *탄소 측정만* 가능하고, 사용자가 직접 정리해야 하며 행동을 지속할 동기가 부족했습니다.

## 💡 Solution

새싹은 정리 → 탄소 절감 → 보상으로 이어지는 선순환 구조를 만듭니다.

| | 내용 |
| --- | --- |
| **AI 스와이프 정리** | 쉽고 빠른 정리 결정 |
| **디지털 탄소 측정** | 정리량을 탄소 절감으로 시각화 |
| **리워드 연계** | 정리 행동을 포인트로 보상 |
| **지속적인 관리** | 자동화와 동기로 꾸준한 습관 형성 |

## ✨ Key Features

1. **AI 디지털 탄소 측정** — 메일·사진·파일 분석, 디지털 탄소 수치화, 월별 리포트 제공
2. **AI 스와이프 정리** — AI 삭제 추천, 삭제/보관 스와이프 UX, 정리 피로 최소화
3. **그린 컴퓨팅 스케줄러** — 재생에너지 시간대 자동 실행, 자동 정리 스케줄링

## 🌟 Core Value

- **정리 피로 감소** — AI 추천과 스와이프 UX로 빠르고 간편하게 정리
- **저장 공간 확보** — 불필요한 데이터 정리로 공간과 비용 절약
- **디지털 탄소 시각화** — 정리 데이터를 탄소 절감량으로 변환
- **지속 가능한 행동 전환** — 리워드와 데이터로 꾸준한 관리 습관 형성

## 🔁 Service Flow

```
데이터 정리  →  디지털 탄소 절감  →  포인트 적립  →  리워드 교환
(AI 추천 정리)   (절감량 시각화)      (절감량 비례)    (친환경 브랜드 혜택)
```

> 정리할수록 지구도 가벼워지고, 나도 혜택을 받아요!

## 💰 Business Model

리워드 제휴를 중심으로 한 수익 구조입니다.

1. **브랜드 제휴 수수료** — 포인트 사용 시 제휴 비용 발생
2. **캠페인 협업 수익** — ESG 캠페인 운영 및 리워드 비용 지원
3. **Premium 구독(선택)** — 자동화·고급 기능 이용 시 구독 수익

## 📈 Traction

2024.11 ~ 2025.02, 대학생 및 일반 사용자 120명 대상 MVP 테스트 결과

| 지표 | 결과 |
| --- | --- |
| 사용자 만족도 | 4.6 / 5 |
| 정리 완료율 | 68% |
| 주간 재사용률 | 52% |
| 추천 의향(NPS) | +61 |

## 🗺 Roadmap

- **2025 상반기 — 서비스 고도화**: AI 정리 정확도 강화, 스케줄러 고도화, 리워드 제휴 확대
- **2025 하반기 — 사용자 확장**: 클라우드 연동 확대, 캠페인·학교 협업, 커뮤니티 기능 강화
- **2026 이후 — 플랫폼 확장**: 글로벌 서비스 준비, 기업용 솔루션 출시, 탄소 데이터 사업 확장

---

# 🛠 개발 문서

현재 저장소는 새싹의 첫 MVP인 **PC 폴더 비움 스캐너**를 구현합니다.
폴더 내 파일 메타데이터를 분석해 정리 후보를 추출하고, 절감 용량·탄소량·포인트를 계산합니다.

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Frontend | 정적 HTML + JSX, Vercel 배포 |
| Backend | FastAPI, Uvicorn, Render 배포 |

## 실행 방법

### 백엔드

처음 한 번만 가상환경을 만들고 패키지를 설치합니다.

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

서버를 실행합니다.

```bash
uvicorn main:app --reload --port 8080
```

→ API: `http://localhost:8080/api/bium/files/analyze`

### 프론트엔드

정적 서버로 실행합니다. (둘 중 하나 선택)

```bash
cd frontend
python -m http.server 8000      # Python
npx serve . -l 8000             # Node
```

→ 화면: `http://localhost:8000`

## API 명세

### `POST /api/bium/files/analyze`

#### 요청

```json
{
  "files": [
    {
      "name": "report_final_copy.pdf",
      "sizeBytes": 2481024,
      "lastModified": "2025-11-03T12:30:00.000Z",
      "type": "application/pdf",
      "relativePath": "Downloads/report_final_copy.pdf",
      "extension": "pdf"
    }
  ]
}
```

#### 응답

```json
{
  "summary": {
    "totalFiles": 1,
    "cleanableFiles": 1,
    "estimatedSavedBytes": 2481024,
    "estimatedSavedMb": 2.366028,
    "estimatedCo2Gram": 9.464111,
    "earnedPoint": 24
  },
  "candidates": [
    {
      "name": "report_final_copy.pdf",
      "relativePath": "Downloads/report_final_copy.pdf",
      "category": "DUPLICATE_CANDIDATE",
      "riskLevel": "LOW",
      "recommendation": "직접 확인 후 삭제 추천",
      "reason": "이름 또는 용량이 유사한 중복 후보입니다.",
      "savedBytes": 2481024,
      "savedMb": 2.366028,
      "co2Gram": 9.464111,
      "point": 24
    }
  ]
}
```

## 분석 로직

스캔된 파일은 아래 기준으로 정리 후보 카테고리에 분류됩니다.

| 카테고리 | 조건 | 위험도 |
| --- | --- | --- |
| `DUPLICATE_CANDIDATE` | 이름·용량이 유사하거나 복사본 키워드 포함 | LOW |
| `OLD_LARGE_FILE` | 1년 이상 미수정 + 100MB 이상 | MEDIUM |
| `LARGE_FILE` | 100MB 이상 | LOW |
| `OLD_FILE` | 1년 이상 미수정 | LOW |

**추정 기준**

- 탄소 배출량: `1MB ≈ 4g CO₂`
- 적립 포인트: `100KB당 1포인트` (후보당 최소 1포인트)

## 배포

- https://saessak-nine.vercel.app

