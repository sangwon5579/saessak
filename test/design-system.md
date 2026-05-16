# 비움(BeeUm) 디자인 시스템

디지털 탄소 감축 앱 비움의 디자인 토큰 명세서입니다.

---

## 🎨 컬러 팔레트

### 메인 그린 (Brand Green)

| 이름 | Hex | 사용처 |
|------|-----|--------|
| `green-darkest` | `#0F1A14` | 텍스트, 가장 진한 다크 그린 |
| `green-dark` | `#143028` | 히어로 카드 그라데이션 끝 |
| `green-primary` | `#1B4332` | **메인 그린** — 타이틀, 강조 텍스트, 진행 바 채움 |
| `green-mid` | `#2D6A4F` | 미디엄 그린, 카드 그라데이션 시작 |
| `green-success` | `#2EA647` | 새싹/포인트 강조 색 |
| `green-light` | `#52B788` | 진행 바, 메트릭 강조 |
| `green-soft` | `#74C69D` | 부드러운 그린 (보조) |
| `green-sage` | `#84BA99` | Cloud 사진 아이콘 배경 (세이지 그린) |
| `green-pale` | `#B7E4C7` | 페일 그린 — 차트 그라데이션 시작 |
| `green-bg-1` | `#D8EEDF` | 절감량 뱃지 배경 |
| `green-bg-2` | `#EFF1E8` | 진행 바 배경, 카테고리 필터 배경 |
| `green-bg-3` | `#F0F5EE` | 추천 카드 배경 (연한 그린) |
| `green-info-bg` | `#F6F8F3` | AI 분석 박스 배경 |

### 오렌지/테라코타 (Accent Orange)

| 이름 | Hex | 사용처 |
|------|-----|--------|
| `orange-dark` | `#A85A1F` | 다크 오렌지 텍스트 (정리하기 버튼) |
| `orange-primary` | `#FF7100` | 라면 텍스트 강조 (`라면 1개`) |
| `orange-accent` | `#F4A261` | **메인 오렌지** — 영구삭제 버튼, 임박 항목 |
| `orange-soft` | `#ED9864` | 이메일 아이콘 배경 |
| `orange-yellow` | `#FCBF5E` | "✨ 영구삭제 시 -1.2kg" 텍스트 |
| `orange-bg-1` | `#FCE5CB` | 남은 양 뱃지 배경 |
| `orange-bg-2` | `#FFE4D6` | 매우 연한 오렌지 |
| `orange-bg-3` | `#FFF5EB` | 임박 항목 뱃지 배경 |
| `orange-bg-4` | `#FFD9A8` | 보상 미리보기 배경 |

### 뉴트럴 (Neutral / Gray)

| 이름 | Hex | 사용처 |
|------|-----|--------|
| `bg-base` | `#F8F9F4` | **앱 메인 배경** (오프 화이트) |
| `white` | `#FFFFFF` | 카드 배경, 버튼 텍스트 |
| `text-primary` | `#1B4332` | 본문 핵심 텍스트 (그린 톤) |
| `text-secondary` | `#3B4A40` | 보조 텍스트 |
| `text-muted` | `#5D6B62` | 설명 텍스트 |
| `text-gray` | `#7C8A80` | 라벨, 메타 정보 |
| `text-light` | `#9AA89F` | 비활성 텍스트, 네비 비활성 아이콘 |
| `divider` | `#E4E7DD` | 구분선 |

### 외부 브랜드 컬러 (외부 서비스 표시용)

| 이름 | Hex | 사용처 |
|------|-----|--------|
| `gmail-red` | `#EA4335` | Gmail 로고 G |
| `outlook-blue` | `#0327C7` | Outlook 로고 O |
| `icloud-blue` | `#3A55A3` | iCloud 사진 로고 i |

---

## 📝 타이포그래피

### 폰트 패밀리

- **한글**: `Noto Sans KR` (Bold, Medium, Regular)
- **영문/숫자**: `Inter` (Extra Bold, Bold, Semi Bold, Medium, Regular)
- **iOS 상태바**: `SF Pro` (Semibold)

### 폰트 크기 시스템

| 용도 | Size | Weight | 예시 |
|------|------|--------|------|
| 화면 타이틀 (L) | `26px` | Bold | "리워드 마켓" |
| 화면 타이틀 (M) | `24px` | Bold | "내 디지털 탄소 🌱" |
| 화면 타이틀 (S) | `22px` | Extra Bold | "정리해볼까요?", "연결 계정" |
| 큰 숫자 (히어로) | `80px` | Extra Bold | "2.6", "0.42" |
| 큰 숫자 (메인) | `56px` | Extra Bold | "2.4", "89" |
| 큰 숫자 (서브) | `44px` | Extra Bold | "2,340" |
| 큰 숫자 (작은) | `36px` | Extra Bold | "4.8", "7.9" |
| 메트릭 숫자 | `32px`, `28px`, `24px` | Extra Bold | "24", "45" |
| 섹션 타이틀 | `17px` / `18px` | Bold | "교환 가능 리워드" |
| 카드 제목 | `15px` / `14px` / `13px` | Bold | "Gmail", "환경단체 기부" |
| 본문 | `12px` / `13px` | Medium / Regular | 설명 텍스트 |
| 라벨 / 메타 | `10px` / `11px` | Medium / Bold | "+ 어제보다 8" |
| 작은 텍스트 | `9px` | Bold | "- 0.8 g" 뱃지 |

### Letter Spacing

- 큰 숫자: `-1px` ~ `-4.2px` (음수 spacing)
- 일반 텍스트: 기본
- 영문 대문자 (MORNING COFFEE 등): `+0.5px` ~ `+1px`

---

## 📐 간격 / 레이아웃

### 화면 크기

- **모바일 화면**: 402 × 874px (iPhone 14 Pro 기준)
- **좌우 패딩**: 33px (V3 화면들), 33.5px (V1 화면들)

### 카드 여백

- 카드 내부 패딩: `17px` 세로 / `16-24px` 가로
- 카드 간 간격: `14px`
- 라운드: `18-28px` (카드), `48px` (최외곽 화면)

### 그림자 (Shadow)

| 강도 | 값 |
|------|-----|
| 미세 (small) | `0px 4px 12px 0px rgba(15,26,20,0.05)` |
| 카드 (card) | `0px 8px 24px 0px rgba(15,26,20,0.06)` |
| 강조 (elevated) | `0px 12px 28px 0px rgba(27,94,46,0.22)` |
| 히어로 (hero) | `0px 18px 40px 0px rgba(20,48,40,0.3)` |
| 오렌지 버튼 | `0px 14px 30px 0px rgba(244,162,97,0.4)` |
| 그린 버튼 | `0px 12px 28px 0px rgba(46,166,71,0.4)` |

---

## 🌿 Tailwind Config 예시

`tailwind.config.js`에 바로 복사해서 쓸 수 있는 설정:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          darkest: '#0F1A14',
          dark: '#143028',
          primary: '#1B4332',
          mid: '#2D6A4F',
          success: '#2EA647',
          light: '#52B788',
          soft: '#74C69D',
          sage: '#84BA99',
          pale: '#B7E4C7',
          'bg-1': '#D8EEDF',
          'bg-2': '#EFF1E8',
          'bg-3': '#F0F5EE',
        },
        orange: {
          dark: '#A85A1F',
          primary: '#FF7100',
          accent: '#F4A261',
          soft: '#ED9864',
          yellow: '#FCBF5E',
          'bg-1': '#FCE5CB',
          'bg-2': '#FFE4D6',
          'bg-3': '#FFF5EB',
          'bg-4': '#FFD9A8',
        },
        neutral: {
          base: '#F8F9F4',
          'text-primary': '#1B4332',
          'text-secondary': '#3B4A40',
          'text-muted': '#5D6B62',
          'text-gray': '#7C8A80',
          'text-light': '#9AA89F',
          divider: '#E4E7DD',
        },
      },
      fontFamily: {
        kr: ['Noto Sans KR', 'sans-serif'],
        en: ['Inter', 'sans-serif'],
        ios: ['SF Pro', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '28px',
        'screen': '48px',
      },
      boxShadow: {
        'card-sm': '0px 4px 12px 0px rgba(15,26,20,0.05)',
        'card': '0px 8px 24px 0px rgba(15,26,20,0.06)',
        'elevated': '0px 12px 28px 0px rgba(27,94,46,0.22)',
        'hero': '0px 18px 40px 0px rgba(20,48,40,0.3)',
        'orange-btn': '0px 14px 30px 0px rgba(244,162,97,0.4)',
        'green-btn': '0px 12px 28px 0px rgba(46,166,71,0.4)',
      },
    },
  },
}
```

---

## 🎯 공통 컴포넌트 패턴

### 다크 그린 히어로 카드 (그라데이션)

```jsx
<div style={{ 
  backgroundImage: "linear-gradient(167deg, rgb(45,106,79) 12%, rgb(27,67,50) 54%, rgb(20,48,40) 88%)" 
}}>
  ...
</div>
```

### 그린 그라데이션 버튼

```jsx
<div style={{ 
  backgroundImage: "linear-gradient(170deg, rgb(27,94,46) 15%, rgb(15,46,24) 85%)" 
}}>
  ...
</div>
```

### 오렌지 강조 버튼

```jsx
<div className="bg-[#F4A261] shadow-[0px_14px_30px_0px_rgba(244,162,97,0.4)] rounded-[28px]">
  ...
</div>
```

### 진행 바

```jsx
<div className="bg-[#EFF1E8] h-[4px] rounded-[2px] w-[149px]">
  <div className="bg-[#52B788] h-[4px] rounded-[2px]" 
       style={{ width: `${percent}%` }} />
</div>
```

---

## 📦 하단 네비게이션

5개 탭: 홈 / 분석 / 정리 / 리워드 / 연결

- 활성 탭: 텍스트 `#1B4332`
- 비활성 탭: 텍스트 `#9AA89F`
- 카드 배경: 흰색, 라운드 `28px`, 그림자 `0px 16px 36px 0px rgba(15,26,20,0.1)`
