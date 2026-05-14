# SAESSACK PC 폴더 비움 스캐너 MVP

새싹(SAESSACK)은 디지털 정리, 탄소 절감, 포인트 보상을 연결하는 웹앱 MVP입니다..

## 화면 확인

프론트엔드를 실행한 뒤 브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000
```



## 백엔드 실행

처음 한 번만 Python 패키지를 설치합니다.

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

백엔드 서버를 실행합니다.

```bash
cd backend
uvicorn main:app --reload --port 8080
```

API 주소:

```text
http://localhost:8080/api/bium/files/analyze
```

## 프론트엔드 실행

방법 1: Python 정적 서버

```bash
cd frontend
python -m http.server 8000
```

방법 2: Node가 설치되어 있다면 `serve` 사용

```bash
cd frontend
npx serve . -l 8000
```

브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000
```

## API 요청 예시

`POST http://localhost:8080/api/bium/files/analyze`

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

## API 응답 예시

```json
{
  "summary": {
    "totalFiles": 1,
    "cleanableFiles": 1,
    "estimatedSavedMb": 2.37,
    "estimatedCo2Gram": 0.95,
    "earnedPoint": 0
  },
  "candidates": [
    {
      "name": "report_final_copy.pdf",
      "relativePath": "Downloads/report_final_copy.pdf",
      "category": "DUPLICATE_CANDIDATE",
      "riskLevel": "LOW",
      "recommendation": "직접 확인 후 삭제 추천",
      "reason": "이름 또는 용량이 유사한 중복 후보입니다.",
      "savedMb": 2.37,
      "co2Gram": 0.95,
      "point": 0
    }
  ]
}
```