# SAESSACK PC 폴더 비움 스캐너 MVP

새싹(SAESSACK)은 디지털 정리, 탄소 절감, 포인트 보상을 연결하는 웹앱 MVP입니다.

현재 프론트엔드는 처음 업로드된 원본 화면 구성과 디자인을 그대로 사용합니다. `홈`, `정리`, `분석`, `보상`, `연결` 화면은 원본 React 프로토타입 파일을 로드하고, PC 폴더 비움 기능만 백엔드 API와 연결했습니다.

## 현재 연결 구조

- 원본 디자인/화면:
  - `frontend/bium-icons.jsx`
  - `frontend/bium-shared.jsx`
  - `frontend/bium-screens.jsx`
  - `frontend/bium-app.jsx`
- 새로 추가된 PC 폴더 스캐너:
  - `frontend/bium-file-scanner.jsx`
  - `frontend/src/components/BiumFileScanner.tsx`
  - `frontend/src/api/biumApi.ts`
- 백엔드 분석 API:
  - `backend/main.py`

## 화면 확인

프론트엔드를 실행한 뒤 브라우저에서 아래 주소를 엽니다.

```text
http://localhost:8000
```

하단 탭으로 원본 앱 화면을 확인할 수 있습니다.

- `홈`: 원본 대시보드 화면
- `정리`: 원본 카드 스와이프 정리 화면
- `분석`: 원본 탄소/디지털 배출 분석 화면
- `보상`: 원본 포인트 보상 화면
- `연결`: 원본 연결/프라이버시 화면

PC 폴더 스캐너는 원본 화면 안에서 PC 정리 액션으로만 진입합니다.

- 홈 화면의 `PC` 영역 카드 클릭
- 정리 화면의 `PC` 탭에서 `PC 폴더 분석하기` 버튼 클릭

즉, 앱 전체를 PC 스캐너 중심으로 바꾸지 않고 기존 구성은 유지하면서 PC 비움 기능만 실제 API와 연결한 상태입니다.

## 실행 방식 변경 여부

실행 명령은 기존과 동일합니다.

프론트엔드는 CDN 기반 정적 React 프로토타입이라 필수 `npm install`은 없습니다. 정적 파일 서버만 실행하면 됩니다.

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

## 개인정보와 보안

프론트엔드는 `<input type="file" webkitdirectory multiple>`을 사용합니다. 브라우저 보안 정책상 사용자가 직접 선택한 폴더 안의 파일 목록만 읽을 수 있습니다.

서버로 전송하는 데이터는 파일 원본이 아니라 아래 메타데이터뿐입니다.

- `name`
- `sizeBytes`
- `lastModified`
- `type`
- `relativePath`
- `extension`

실제 파일 삭제는 Chrome/Edge의 File System Access API(`showDirectoryPicker`, `removeEntry`)를 지원하는 브라우저에서만 동작합니다.
사용자가 선택하고 쓰기 권한을 허용한 폴더 안의 정리 후보만 삭제할 수 있으며, 지원하지 않는 브라우저에서는 분석과 후보 확인만 가능합니다.
