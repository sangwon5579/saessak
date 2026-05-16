# 🌱 비움(BeeUm) 개발자 핸드오프 패키지

디지털 탄소 감축 앱 비움의 디자인 → 코드 핸드오프 자료입니다.

---

## 📦 패키지 구성

```
beeum-handoff/
├── 📁 code/                    ← React + Tailwind 화면 코드 (10개)
│   ├── 01_HomeV3.jsx
│   ├── 02_HomeBottom.jsx
│   ├── 03_AnalyzeTop.jsx
│   ├── 04_AnalyzeBottom.jsx
│   ├── 05_CleanTop.jsx
│   ├── 06_TrashBin.jsx
│   ├── 07_CleanComplete.jsx
│   ├── 08_RewardsMarket.jsx
│   ├── 09_RewardsDetail.jsx
│   └── 10_Connect.jsx
├── 📁 screens/                  ← 화면 PNG (디자인 참고용)
│   └── 01_HomeV3.png ~ 10_Connect.png
├── 📄 design-system.md         ← 컬러/폰트/간격 명세서
└── 📄 README.md                ← 이 파일
```

---

## 🚀 시작하기

### 1. 기술 스택

- **프레임워크**: React (Next.js 또는 CRA 추천)
- **스타일링**: Tailwind CSS
- **폰트**: Noto Sans KR (한글), Inter (영문/숫자)

### 2. 코드 파일 사용 방법

각 `.jsx` 파일은 **하나의 화면 컴포넌트**입니다:

```jsx
// 예: src/screens/HomeV3.jsx 로 복사 후 import
import HomeV3 from './screens/HomeV3';

function App() {
  return <HomeV3 />;
}
```

### 3. Tailwind 설정

`design-system.md`에 있는 Tailwind config를 `tailwind.config.js`에 복사하세요.

### 4. 폰트 추가

```html
<!-- index.html or _document.tsx -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## ⚠️ 중요 주의사항

### 1. 이미지 URL 만료 (7일!)

각 코드 파일 상단에 있는 `imgFrame`, `imgEllipse` 같은 URL은 **Figma에서 임시로 호스팅되는 자산**입니다.

```js
const imgEllipse = "https://www.figma.com/api/mcp/asset/c4dc64ea-...";
```

이 URL들은 **7일 후 만료**됩니다. 실제 프로젝트에서는:

1. 디자이너에게 SVG/PNG로 export 받기 (`Figma > Export`)
2. 로컬 경로로 교체:
   ```js
   const imgEllipse = "/assets/icons/profile.svg";
   ```

### 2. 절대 좌표 → 반응형 변환 필요

피그마에서 생성된 코드는 **절대 좌표 기반**(`left: 33px`, `top: 70px`)입니다.

```jsx
// 현재 (절대 좌표)
<p className="absolute left-[33px] top-[70px]">...</p>

// 권장 (Flexbox/Grid)
<div className="flex flex-col gap-4 px-8">
  <p>...</p>
</div>
```

피그마 좌표는 **iPhone 14 Pro 기준 (402×874px)** 입니다. 다른 화면 크기에 대응하려면 반응형 레이아웃으로 다시 짜야 해요.

### 3. 깨질 수 있는 부분

자동 생성 코드는 100% 완벽하지 않아요. 다음 부분은 개발자가 확인/조정 필요:

- **Status Bar 아이콘** (셀룰러/Wifi/Battery): SVG로 교체 권장
- **이모지**: 시스템 이모지로 보이지만 디자인이 OS마다 다를 수 있음
- **카드 스택 효과** (03_CleanTop의 뒤쪽 카드 2장): 정확한 위치 조정 필요
- **3D 효과/그림자**: 다른 브라우저에서 미세하게 다를 수 있음

---

## 📱 화면별 매핑 표

| # | 코드 파일 | 화면 이름 | 비고 |
|---|----------|----------|------|
| 01 | `01_HomeV3.jsx` | 홈 (V3) | 가장 정리된 코드 (참고 템플릿) |
| 02 | `02_HomeBottom.jsx` | 홈 (대안 - 큰 히어로) | 잘 안 쓸 듯, 참고용 |
| 03 | `03_AnalyzeTop.jsx` | 분석 화면 (상단) | 도넛 차트 + 월별 막대 |
| 04 | `04_AnalyzeBottom.jsx` | 분석 화면 (하단) | 정리 진척률 위주 |
| 05 | `05_CleanTop.jsx` | 정리 화면 | 카드 스택 + AI 분석 |
| 06 | `06_TrashBin.jsx` | 휴지통 | 영구삭제 예약 항목 |
| 07 | `07_CleanComplete.jsx` | 정리 완료 | 축하 화면 |
| 08 | `08_RewardsMarket.jsx` | 리워드 마켓 | 새싹 통장 + 상품 그리드 |
| 09 | `09_RewardsDetail.jsx` | 교환 상세 | 커피 쿠폰 교환 |
| 10 | `10_Connect.jsx` | 연결 계정 | Gmail/Outlook/iCloud 등 |

---

## 🔗 Figma 원본 파일

전체 디자인 파일: https://www.figma.com/design/Nr0pcdPIye1uEBDrP5HhF0

각 화면의 정확한 노드 ID는 코드 파일 상단 주석에 있어요. **Figma Dev Mode**에서 확인하면:
- 정확한 색상값 (sRGB → Hex)
- 정확한 간격 (px)
- 폰트 weight 및 size
- 그림자/그라데이션 값

을 다시 확인할 수 있어요. 모르는 부분은 디자이너에게 물어보거나 Dev Mode를 활용해주세요.

---

## 💡 권장 작업 순서

1. **`01_HomeV3.jsx` 부터 시작** — 가장 깔끔하게 정리된 코드라 컨벤션 익히기 좋음
2. **`design-system.md` 읽기** — 컬러/폰트 토큰 이해
3. **Tailwind config 설정**
4. **공통 컴포넌트 추출**:
   - `BottomNav` (5개 탭, 모든 화면 공통)
   - `StatusBar` (iOS 상태바)
   - `ProgressCard` (진척률 카드)
   - `GreenButton` (그라데이션 버튼)
   - `OrangeButton` (강조 버튼)
5. **화면별 구현** — 절대 좌표를 flex/grid 레이아웃으로 변환
6. **이미지/아이콘 SVG export** — 디자이너에게 요청

---

## 🤔 문의 / 추가 자료

- 색상/간격/폰트가 정확하지 않으면 Figma Dev Mode에서 직접 픽업
- 만료된 이미지 URL은 디자이너에게 SVG/PNG export 요청
- 인터랙션/애니메이션 명세는 별도 문서 필요 (이 패키지에는 정적 디자인만 포함)

행운을 빌어요! 🌱
