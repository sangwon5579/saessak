// 비움/새싹 — all screens (Home, Analyze, Clean, TrashBin, CleanComplete,
// Rewards, RewardsDetail, Connect). Faithful re-implementation of the
// test/code/01–10 designs as components using inline SVG (no Figma URLs).

// ═══════════════════════════════════════════════════════════════════════
// 1. HOME — based on 01_HomeV3
// ═══════════════════════════════════════════════════════════════════════

function HomeScreen({ saessakToday, saessakTotal, todayCO2g, areas, onCleanTap, onRewardsTap, onAreaTap }) {
  const ramen = ramenCount(todayCO2g);
  return (
    <div className="screen-in pb-6 relative">
      {/* ─── header ───────────────────────────── */}
      <div className="px-[26px] pt-3 flex items-start justify-between">
        <div>
          <div className="text-[24px] font-bold tracking-tight"
               style={{ color: '#1B3A25', fontFamily: 'Noto Sans KR, sans-serif' }}>
            내 디지털 탄소 🌱
          </div>
          <div className="text-[12px] mt-1 font-medium" style={{ color: C.text3 }}>
            오늘도 정리하고 탄소를 줄여봐요
          </div>
        </div>
        <BrandMark glyph="조" palette={['#74C69D', '#1B4332']} size={40} ring/>
      </div>

      {/* ─── hero dark green card ──────────────── */}
      <div className="px-[26px] mt-5">
        <HeroDarkCard className="p-[22px] text-white" style={{ minHeight: 160 }}>
          <div className="relative">
            <div className="text-[13px] font-medium" style={{ color: 'rgba(255,255,255,.9)' }}>
              🌱 오늘 아낀 탄소
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="num font-extrabold text-white leading-none"
                    style={{ fontSize: 56, letterSpacing: '-2px' }}>
                {todayCO2g.toFixed(1)}
              </span>
              <span className="font-bold text-[22px]" style={{ color: 'rgba(255,255,255,.95)' }}>
                g CO₂
              </span>
            </div>
            <div className="mt-4 text-[11px]" style={{ color: 'rgba(255,255,255,.7)' }}>
              실시간 누적 · 자정에 초기화
            </div>
          </div>
        </HeroDarkCard>
      </div>

      {/* ─── ramen equivalence card ───────────── */}
      <div className="px-[26px] mt-[14px]">
        <div className="bg-white rounded-[18px] px-4 py-[14px] flex items-center gap-3"
             style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.05)' }}>
          <span className="text-[32px] leading-none shrink-0">🍜</span>
          <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
            <span className="text-[13px] font-semibold whitespace-nowrap"
                  style={{ color: C.orPri }}>라면</span>
            <span className="num font-extrabold text-[20px] leading-none whitespace-nowrap"
                  style={{ color: C.primary, letterSpacing: '-0.4px' }}>
              {ramen}
            </span>
            <span className="text-[11px] font-semibold whitespace-nowrap"
                  style={{ color: C.text4 }}>
              개 끓일 수 있는 탄소를 아꼈어요
            </span>
          </div>
        </div>
      </div>

      {/* ─── two metric cards (오늘 모은 / 총 새싹) ──── */}
      <div className="px-[26px] mt-[14px] flex gap-[12px]">
        <button className="flex-1 bg-white rounded-[18px] p-[14px] text-left h-[92px] relative"
                style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)' }}
                onClick={onRewardsTap}>
          <div className="text-[11px] font-medium" style={{ color: C.text3 }}>🌱 오늘 모은 새싹</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="num font-extrabold text-[32px] leading-none"
                  style={{ color: '#84BA99' }}>
              {fmtNum(saessakToday)}
            </span>
            <span className="text-[13px] font-bold" style={{ color: C.text3 }}>새싹</span>
          </div>
          <div className="mt-2 text-[10px] font-medium" style={{ color: C.text5 }}>
            + 어제보다 {Math.max(0, saessakToday - 16)}
          </div>
        </button>
        <button className="flex-1 bg-white rounded-[18px] p-[14px] text-left h-[92px] relative"
                style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)' }}
                onClick={onRewardsTap}>
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-medium" style={{ color: C.text3 }}>🌱 총 새싹</div>
            <IconChevR size={14} style={{ color: C.text5 }}/>
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="num font-extrabold text-[28px] leading-none"
                  style={{ color: C.mid }}>
              {fmtNum(saessakTotal)}
            </span>
            <span className="text-[13px] font-bold" style={{ color: C.text3 }}>새싹</span>
          </div>
          <div className="mt-2 text-[10px] font-medium" style={{ color: C.text5 }}>
            어린잎 단계
          </div>
        </button>
      </div>

      {/* ─── area progress ───────────────────── */}
      <div className="px-[26px] mt-7">
        <div className="mb-3.5">
          <div className="text-[16px] font-extrabold tracking-tight"
               style={{ color: C.primary, letterSpacing: '-0.16px' }}>
            영역별 진척률
          </div>
          <div className="text-[12px] font-medium mt-0.5" style={{ color: C.text4 }}>
            AI가 분석한 {areas.length}가지 디지털 공간
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          {areas.map(a => (
            <AreaProgressCard key={a.key} area={a} onTap={() => onAreaTap(a.key)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function AreaProgressCard({ area, onTap }) {
  return (
    <button onClick={onTap}
      className="w-full bg-white rounded-[20px] px-4 py-[17px] flex items-center gap-[18px] active:scale-[0.99] transition-transform"
      style={{ boxShadow: '0px 8px 12px rgba(15,26,20,0.06)' }}>
      {/* icon + label */}
      <div className="flex flex-col items-center gap-1.5 w-[44px] shrink-0">
        <div className="w-[36px] h-[36px] rounded-[10px] grid place-items-center"
             style={{ background: area.tint, color: '#fff' }}>
          <area.icon size={18}/>
        </div>
        <span className="text-[11px] font-medium text-center" style={{ color: '#000' }}>
          {area.label}
        </span>
      </div>

      {/* percent + bar */}
      <div className="flex-1 flex flex-col gap-[12px]">
        <div className="flex items-baseline gap-0.5">
          <span className="num font-extrabold text-[24px] leading-none"
                style={{ color: C.primary, letterSpacing: '-0.48px' }}>
            {area.pct}
          </span>
          <span className="font-semibold text-[13px] opacity-70"
                style={{ color: C.primary }}>
            %
          </span>
        </div>
        <ProgressBar value={area.pct} tone="light" height={4}/>
      </div>

      {/* savings + count */}
      <div className="flex flex-col items-end gap-2.5 w-[68px] shrink-0">
        <span className="inline-flex items-center justify-center rounded-[8px] px-2 py-0.5"
              style={{ background: C.bg1 }}>
          <span className="font-bold text-[9px] num" style={{ color: C.primary }}>
            - {area.delta}g
          </span>
        </span>
        <span className="text-[10px] font-medium num" style={{ color: C.text4 }}>
          {fmtNum(area.count)}개 항목
        </span>
      </div>
    </button>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 2. ANALYZE — based on 03_AnalyzeTop + 04_AnalyzeBottom
// ═══════════════════════════════════════════════════════════════════════

const DONUT_DATA = [
  { label: 'Cloud 파일', value: 51, color: '#2D6A4F' },
  { label: '이메일',      value: 31, color: '#A85A1F' },
  { label: 'Cloud 사진', value: 18, color: '#5D7D6A' },
];

const MONTHLY = [
  { label: '12월',  value: 24.1 },
  { label: '1월',   value: 27.8 },
  { label: '2월',   value: 29.4 },
  { label: '3월',   value: 31.2 },
  { label: '4월',   value: 30.6 },
  { label: '이번 달', value: 12.4, current: true },
];

function AnalyzeScreen() {
  return (
    <div className="screen-in pb-8">
      {/* ─── header ─────────────────────────── */}
      <div className="px-[26px] pt-3">
        <div className="text-[24px] font-bold tracking-tight"
             style={{ color: '#1B3A25', fontFamily: 'Noto Sans KR, sans-serif' }}>
          디지털 탄소 분석
        </div>
        <div className="text-[12px] mt-1 font-medium" style={{ color: C.text3 }}>
          내 탄소가 어디서 나오는지 확인해요
        </div>
      </div>

      {/* ─── 이번 달 발생량 — donut card ───────── */}
      <div className="px-[26px] mt-5">
        <div className="text-[13px] font-bold mb-2.5" style={{ color: C.primary }}>
          이번 달 발생량
        </div>
        <div className="bg-white rounded-[20px] p-5"
             style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              <Donut data={DONUT_DATA} size={130} thickness={18}/>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-[10px] font-medium" style={{ color: C.text4 }}>총 발생량</div>
                <div className="num font-extrabold text-[26px] leading-none mt-0.5"
                     style={{ color: C.primary, letterSpacing: '-0.5px' }}>
                  32.7
                </div>
                <div className="text-[10px] font-medium mt-0.5" style={{ color: C.text4 }}>kg · 5월</div>
              </div>
            </div>
            <div className="flex-1 space-y-2.5">
              {DONUT_DATA.map(d => (
                <div key={d.label} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }}/>
                  <span className="text-[12px] font-medium flex-1" style={{ color: C.text2 }}>{d.label}</span>
                  <span className="text-[12.5px] num font-bold" style={{ color: C.primary }}>{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t flex items-center gap-2 text-[12px]"
               style={{ borderColor: C.divider, color: C.text2 }}>
            <span className="num font-bold" style={{ color: C.success }}>↓ 2.1kg</span>
            <span>지난 달보다 줄었어요!</span>
          </div>
        </div>
      </div>

      {/* ─── 월별 추이 — bar chart card ───────── */}
      <div className="px-[26px] mt-5">
        <div className="flex items-end justify-between mb-2.5">
          <div className="text-[13px] font-bold" style={{ color: C.primary }}>월별 추이</div>
          <div className="text-[10px] num font-medium" style={{ color: C.text4 }}>
            총 32.7 kg CO₂
          </div>
        </div>
        <div className="bg-white rounded-[20px] p-4"
             style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
          <BarChart data={MONTHLY} w={300} h={130}/>
        </div>
      </div>

      {/* ─── 이번 달 정리 진척률 — 2 cards ──────── */}
      <div className="px-[26px] mt-5">
        <div className="text-[13px] font-bold mb-2.5" style={{ color: C.primary }}>
          이번 달 정리 진척률
        </div>
        <div className="flex gap-[12px]">
          {/* 정리한 양 (dark green) */}
          <div className="flex-1 rounded-[20px] p-4 text-white relative overflow-hidden"
               style={{ background: G.heroDark,
                        boxShadow: '0px 12px 28px rgba(27,94,46,0.22)' }}>
            <div className="text-[11px] font-medium opacity-90">정리한 양</div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="num font-extrabold text-[36px] leading-none"
                    style={{ letterSpacing: '-0.7px' }}>
                4.8
              </span>
              <span className="text-[14px] font-bold opacity-90">kg</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full px-2 py-1"
                 style={{ background: 'rgba(255,255,255,.15)' }}>
              <span className="num text-[10px] font-bold">↓ 절감</span>
            </div>
          </div>
          {/* 남은 양 (white) */}
          <div className="flex-1 bg-white rounded-[20px] p-4 relative overflow-hidden"
               style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
            <div className="text-[11px] font-medium" style={{ color: C.text3 }}>남은 양</div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="num font-extrabold text-[36px] leading-none"
                    style={{ color: C.primary, letterSpacing: '-0.7px' }}>
                7.9
              </span>
              <span className="text-[14px] font-bold" style={{ color: C.text3 }}>kg</span>
            </div>
            <div className="mt-3 inline-flex items-center gap-1 rounded-full px-2 py-1"
                 style={{ background: C.bg1 }}>
              <span className="text-[10px] font-bold" style={{ color: C.primary }}>정리하기</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── recommendation card ───────────── */}
      <div className="px-[26px] mt-5">
        <div className="rounded-[20px] p-4 flex items-center gap-3"
             style={{ background: C.bg3, border: `1px solid ${C.pale}` }}>
          <BrandMark glyph="✉" palette={['#FFD9A8', '#ED9864']} size={44}/>
          <div className="flex-1">
            <div className="text-[13px] font-bold" style={{ color: C.primary }}>
              안 보는 메일이 절반 이상이에요
            </div>
            <div className="text-[11.5px] mt-0.5" style={{ color: C.text3 }}>
              구독 해지로 즉시 새싹 🌱 받기
            </div>
          </div>
          <IconChevR size={18} style={{ color: C.primary }}/>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 3. CLEAN — based on 05_CleanTop (card stack with AI box & reward preview)
// ═══════════════════════════════════════════════════════════════════════

const CLEAN_DATA = {
  all: [
    { id: 'a1', kind: '이메일',      name: '쿠팡 광고 메일 234통',
      sender: 'no-reply@coupang.com',
      safe: 98, glyph: '✉', tint: ['#FFD9A8', '#ED9864'],
      ai: '지난 1년간 234통 발송되었지만 한 번도 읽지 않았어요. 정리해도 안전합니다.',
      meta: [
        { v: '47 MB',  l: '용량' },
        { v: '0%',     l: '열람률' },
        { v: '234통',  l: '1년치 발송' },
      ],
      seed: 12, kg: 0.05 },
    { id: 'a2', kind: 'Cloud 파일', name: '오래된 다운로드 92개',
      sender: 'Downloads / 2년 이상',
      safe: 94, glyph: '📁', tint: ['#B7E4C7', '#2D6A4F'],
      ai: '2년 이상 열어보지 않은 파일들입니다. 대부분 임시 다운로드로 추정돼요.',
      meta: [
        { v: '892 MB', l: '용량' },
        { v: '92개',   l: '항목 수' },
        { v: '2년+',   l: '미사용' },
      ],
      seed: 24, kg: 0.18 },
    { id: 'a3', kind: 'Cloud 사진', name: '흔들린 사진 47장',
      sender: '2024년 5월 ~ 2026년 4월',
      safe: 96, glyph: '📷', tint: ['#FCE5CB', '#F4A261'],
      ai: 'AI가 흔들림·초점 흐림으로 판단한 사진들입니다. 같은 장면 다른 컷이 모두 있어요.',
      meta: [
        { v: '193 MB', l: '용량' },
        { v: '47장',   l: '항목 수' },
        { v: '클러스터 12개', l: '유사군' },
      ],
      seed: 18, kg: 0.12 },
  ],
  email: [
    { id: 'e1', kind: '이메일',      name: '쿠팡 광고 메일 234통',
      sender: 'no-reply@coupang.com',
      safe: 98, glyph: '✉', tint: ['#FFD9A8', '#ED9864'],
      ai: '지난 1년간 234통 발송되었지만 한 번도 읽지 않았어요. 정리해도 안전합니다.',
      meta: [
        { v: '47 MB',  l: '용량' },
        { v: '0%',     l: '열람률' },
        { v: '234통',  l: '1년치 발송' },
      ],
      seed: 12, kg: 0.05 },
    { id: 'e2', kind: '이메일',      name: '뉴스레터 78통',
      sender: 'newsletter@brand.example',
      safe: 92, glyph: '✉', tint: ['#FFD9A8', '#ED9864'],
      ai: '구독 중인 뉴스레터로, 최근 3개월 열람률이 4%입니다.',
      meta: [
        { v: '12 MB', l: '용량' },
        { v: '4%',    l: '열람률' },
        { v: '78통',  l: '미열람' },
      ],
      seed: 8, kg: 0.03 },
  ],
  file: [
    { id: 'f1', kind: 'Cloud 파일', name: '오래된 다운로드 92개',
      sender: 'Downloads / 2년 이상',
      safe: 94, glyph: '📁', tint: ['#B7E4C7', '#2D6A4F'],
      ai: '2년 이상 열어보지 않은 파일들입니다.',
      meta: [
        { v: '892 MB', l: '용량' },
        { v: '92개',   l: '항목 수' },
        { v: '2년+',   l: '미사용' },
      ],
      seed: 24, kg: 0.18 },
  ],
  photo: [
    { id: 'p1', kind: 'Cloud 사진', name: '흔들린 사진 47장',
      sender: '2024년 5월 ~ 2026년 4월',
      safe: 96, glyph: '📷', tint: ['#FCE5CB', '#F4A261'],
      ai: 'AI가 흔들림·초점 흐림으로 판단한 사진들입니다.',
      meta: [
        { v: '193 MB', l: '용량' },
        { v: '47장',   l: '항목 수' },
        { v: '클러스터 12개', l: '유사군' },
      ],
      seed: 18, kg: 0.12 },
  ],
};

const CLEAN_TABS = [
  { key: 'all',   label: '전체' },
  { key: 'email', label: '이메일' },
  { key: 'file',  label: 'Cloud 파일' },
  { key: 'photo', label: 'Cloud 사진' },
];

function CleanScreen({ onCleaned, onTrashBin, onPcScanner, onComplete }) {
  const [tab, setTab] = React.useState('all');
  const [stack, setStack] = React.useState(CLEAN_DATA.all.map((c, i) => ({ ...c, idx: i })));
  const [drag, setDrag] = React.useState({ x: 0, y: 0, on: false });
  const [burst, setBurst] = React.useState(null);
  const [popSeed, setPopSeed] = React.useState(null);
  const dragRef = React.useRef({ startX: 0, startY: 0, dragging: false });

  React.useEffect(() => {
    setStack(CLEAN_DATA[tab].map((c, i) => ({ ...c, idx: i })));
    setDrag({ x: 0, y: 0, on: false });
  }, [tab]);

  function commit(direction) {
    const card = stack[0];
    if (!card) return;
    if (direction === 'right') {
      setBurst(Date.now());
      setPopSeed({ amount: card.seed, ts: Date.now() });
      onCleaned && onCleaned(card.seed, card.kg);
    }
    const next = stack.slice(1);
    setStack(next);
    setDrag({ x: 0, y: 0, on: false });

    // last card → completion screen
    if (next.length === 0 && direction === 'right') {
      setTimeout(() => onComplete && onComplete(), 800);
    }
  }

  // "나중에 정리하기" — 현재 카드를 스택 맨 뒤로 보냄. 정리·보관 결정을 미룸.
  function postpone() {
    setStack(s => s.length > 1 ? [...s.slice(1), s[0]] : s);
    setDrag({ x: 0, y: 0, on: false });
  }

  function pStart(e) {
    dragRef.current = { startX: e.clientX, startY: e.clientY, dragging: true };
    setDrag(d => ({ ...d, on: true }));
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function pMove(e) {
    if (!dragRef.current.dragging) return;
    setDrag({ x: e.clientX - dragRef.current.startX, y: e.clientY - dragRef.current.startY, on: true });
  }
  function pEnd() {
    dragRef.current.dragging = false;
    if (drag.x > 90)       commit('right');
    else if (drag.x < -90) commit('left');
    else                   setDrag({ x: 0, y: 0, on: false });
  }

  const top = stack[0];
  const second = stack[1];
  const third = stack[2];

  return (
    <div className="screen-in pb-8 relative">
      {/* ─── header ─────────────────────────── */}
      <div className="px-[26px] pt-3 flex items-start justify-between">
        <div>
          <div className="text-[22px] font-extrabold tracking-tight"
               style={{ color: C.primary, letterSpacing: '-0.44px' }}>
            정리해볼까요?
          </div>
          <div className="text-[13px] mt-1 font-medium" style={{ color: C.text4 }}>
            AI가 고른 삭제 후보예요
          </div>
        </div>
        {/* trash button (top right) */}
        <button onClick={onTrashBin}
                className="relative w-10 h-10 rounded-full grid place-items-center"
                style={{ background: C.bg2 }}>
          <IconTrash size={18} style={{ color: C.primary }}/>
          <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] rounded-full grid place-items-center px-1 num"
                style={{ background: C.orAcc, color: '#fff', fontSize: 9, fontWeight: 700 }}>
            89
          </span>
        </button>
      </div>

      {/* ─── 남은 개수 뱃지 ────────────────────── */}
      <div className="px-[26px] mt-3 flex justify-end">
        <Pill tone="paper" icon={<IconBolt size={11}/>}>{stack.length}개 남음</Pill>
      </div>

      {/* ─── category filter tabs ─────────────── */}
      <div className="px-[26px] mt-3">
        <div className="flex gap-1 p-1 rounded-2xl" style={{ background: C.bg2 }}>
          {CLEAN_TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex-1 py-2 rounded-xl text-[12.5px] font-bold transition-all whitespace-nowrap`}
              style={{
                background: tab === t.key ? '#fff' : 'transparent',
                color: C.primary,
                boxShadow: tab === t.key ? '0px 2px 3px rgba(15,26,20,0.06)' : 'none',
              }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* PC 폴더 스캐너 진입 (전체 탭일 때만 노출) */}
      {tab === 'all' && (
        <div className="px-[26px] mt-3">
          <button onClick={onPcScanner}
            className="w-full rounded-[18px] px-4 py-3 text-[13px] font-bold text-white flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
            style={{ background: G.greenBtn, boxShadow: '0px 10px 24px rgba(27,67,50,0.18)' }}>
            <IconCpu size={16}/> PC 폴더 분석하기
          </button>
        </div>
      )}

      {/* ─── card stack ────────────────────── */}
      <div className="relative mt-4 px-[26px]" style={{ height: 440 }}>
        <LeafBurst run={burst} originX={170} originY={300}/>

        {/* swipe hints */}
        {drag.on && drag.x < -25 && (
          <div className="absolute top-32 left-9 z-10 rotate-[-12deg] px-3 py-1.5 rounded-full bg-white border font-bold text-[13px]"
               style={{ borderColor: C.divider, color: C.text4,
                        boxShadow: '0 8px 18px rgba(15,26,20,.08)' }}>
            ← 보관
          </div>
        )}
        {drag.on && drag.x > 25 && (
          <div className="absolute top-32 right-9 z-10 rotate-[12deg] px-3 py-1.5 rounded-full text-white font-bold text-[13px]"
               style={{ background: C.orAcc, boxShadow: '0 8px 24px rgba(244,162,97,.5)' }}>
            정리 →
          </div>
        )}

        {/* back cards */}
        {third  && <CleanCard data={third}  style={{ transform: 'translateY(20px) scale(.92)', opacity: .55 }}/>}
        {second && <CleanCard data={second} style={{ transform: 'translateY(10px) scale(.96)', opacity: .85 }}/>}
        {top && (
          <div onPointerDown={pStart} onPointerMove={pMove} onPointerUp={pEnd} onPointerCancel={pEnd}
               style={{
                 transform: `translate(${drag.x}px, ${drag.y * 0.4}px) rotate(${drag.x * 0.06}deg)`,
                 transition: drag.on ? 'none' : 'transform .25s cubic-bezier(.22,.61,.36,1)',
                 touchAction: 'none',
                 cursor: drag.on ? 'grabbing' : 'grab',
               }}>
            <CleanCard data={top}/>
          </div>
        )}

        {!top && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full grid place-items-center"
                 style={{ background: C.bg3, color: C.primary }}>
              <IconCheck size={36}/>
            </div>
            <div className="mt-4 text-[18px] font-bold" style={{ color: C.primary }}>
              오늘은 여기까지!
            </div>
            <div className="text-[13px] mt-1" style={{ color: C.text4 }}>
              잘했어요. 내일도 또 찾아올게요 🌱
            </div>
          </div>
        )}

        {/* seed pop */}
        {popSeed && (
          <div key={popSeed.ts}
               className="absolute left-1/2 -translate-x-1/2 top-[200px] lp-pop pointer-events-none z-40"
               onAnimationEnd={() => setPopSeed(null)}>
            <div className="px-4 py-2 rounded-full text-white font-extrabold num text-[18px] flex items-center gap-1.5"
                 style={{ background: G.orangeBtn, boxShadow: '0 12px 30px rgba(244,162,97,.5)' }}>
              <span>🌱</span> +{popSeed.amount} 새싹
            </div>
          </div>
        )}
      </div>

      {/* ─── action buttons (보관 / 미루기 / 확인) ─── */}
      {top && (
        <div className="px-7 pb-4 flex items-center justify-center gap-10">
          <button onClick={() => commit('left')}
            className="w-[52px] h-[52px] rounded-[26px] bg-white grid place-items-center active:scale-95 transition-transform"
            style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.08)', color: C.text4 }}>
            <IconArchive size={22}/>
          </button>
          <button onClick={postpone}
            title="나중에 정리하기"
            disabled={stack.length < 2}
            className="w-[44px] h-[44px] rounded-[22px] bg-white grid place-items-center active:scale-95 transition-transform disabled:opacity-40"
            style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.08)', color: C.primary }}>
            <IconClock size={20}/>
          </button>
          <button onClick={() => commit('right')}
            className="w-[64px] h-[64px] rounded-[32px] grid place-items-center text-white active:scale-95 transition-transform"
            style={{ background: G.orangeBtn, boxShadow: '0px 16px 16px rgba(244,162,97,0.45)' }}>
            <IconCheck size={28}/>
          </button>
        </div>
      )}
    </div>
  );
}

function CleanCard({ data, style }) {
  return (
    <div className="absolute left-[26px] right-[26px] rounded-[28px] bg-white"
         style={{ ...style, height: 420, border: `1px solid ${C.divider}`,
                  boxShadow: '0px 24px 48px rgba(15,26,20,0.1)' }}>
      <div className="p-5">
        {/* top badges */}
        <div className="flex items-center justify-between">
          <Pill tone="paper">{data.kind}</Pill>
          <Pill tone="sage" icon={<IconShield size={11}/>}>안전 {data.safe}%</Pill>
        </div>

        {/* name + sender + big icon */}
        <div className="mt-4 flex items-center gap-3">
          <BrandMark glyph={data.glyph} palette={data.tint} size={56} ring/>
          <div className="flex-1 min-w-0">
            <div className="text-[17px] font-extrabold tracking-tight truncate"
                 style={{ color: C.primary, letterSpacing: '-0.25px' }}>
              {data.name}
            </div>
            <div className="text-[11px] mt-0.5 truncate font-medium" style={{ color: C.text4 }}>
              {data.sender}
            </div>
          </div>
        </div>

        {/* AI box */}
        <div className="mt-4 rounded-[16px] p-3.5" style={{ background: C.infoBg }}>
          <div className="flex items-center gap-1.5">
            <IconSparkles size={12} style={{ color: '#3A3CA3' }}/>
            <span className="text-[11px] font-bold" style={{ color: '#3A3CA3' }}>AI 분석</span>
          </div>
          <div className="mt-1.5 text-[12px] leading-[18px] font-medium" style={{ color: C.text2 }}>
            {data.ai}
          </div>
        </div>

        {/* 3 metric boxes */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {data.meta.map((m, i) => (
            <div key={i} className="rounded-[12px] py-2 text-center"
                 style={{ background: '#FAFBF7',
                          boxShadow: '0px 1px 5px rgba(0,0,0,0.06)' }}>
              <div className="text-[11.5px] font-bold num leading-tight"
                   style={{ color: C.primary }}>
                {m.v}
              </div>
              <div className="text-[10px] mt-0.5 leading-tight font-medium"
                   style={{ color: C.text4 }}>
                {m.l}
              </div>
            </div>
          ))}
        </div>

        {/* reward preview */}
        <div className="absolute left-5 right-5 bottom-5">
          <div className="rounded-[16px] px-3 py-2.5 flex items-center justify-between gap-2"
               style={{ background: G.rewardOrange,
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.06)' }}>
            <span className="text-[10px] font-bold whitespace-nowrap shrink-0"
                  style={{ color: C.orDark }}>
              보상 미리보기
            </span>
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="num font-extrabold text-[12px] whitespace-nowrap"
                    style={{ color: C.mid, letterSpacing: '-0.14px' }}>
                +{data.seed} 🌱 새싹
              </span>
              <span className="text-[11px] font-bold whitespace-nowrap" style={{ color: C.primary }}>
                · -{data.kg}kg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 4. TRASH BIN — based on 06_TrashBin
// ═══════════════════════════════════════════════════════════════════════

const TRASH_ITEMS = [
  { id: 't1', name: '쿠팡 광고 메일 234개', glyph: '✉', tint: ['#FFD9A8', '#ED9864'],
    when: '🕐 2일 후 자동 영구삭제', whenColor: C.orDark,
    sub: '12.4 MB · 새벽 02:00 예정',
    btnBg: '#FFF5EB', btnBd: '#F4A261', btnColor: C.orDark },
  { id: 't2', name: '흔들린 사진 482장',   glyph: '📷', tint: ['#FCE5CB', '#F4A261'],
    when: '🌿 12일 후 친환경 시간에 삭제', whenColor: C.mid,
    sub: '248 MB · 새벽 02:00 예정',
    btnBg: '#F0F7F1', btnBd: '#95D5B2', btnColor: C.mid },
  { id: 't3', name: '옛 다운로드 파일 67개', glyph: '📁', tint: ['#E5EAFF', '#3A55A3'],
    when: '🌿 28일 후 친환경 시간에 삭제', whenColor: C.icloud,
    sub: '892 MB · 새벽 02:00 예정',
    btnBg: '#EEF1FF', btnBd: '#A8B5E0', btnColor: C.icloud },
];

function TrashBinScreen({ onBack }) {
  return (
    <div className="screen-in pb-32 relative">
      {/* ─── header ───────────────────────── */}
      <div className="px-[26px] pt-3 relative h-12 flex items-center">
        <button onClick={onBack}
          className="absolute left-[26px] text-[24px] font-bold leading-none"
          style={{ color: C.primary }}>←</button>
        <div className="w-full text-center text-[17px] font-bold"
             style={{ color: C.primary }}>
          휴지통
        </div>
      </div>

      {/* ─── dark green main card ─────────── */}
      <div className="px-[26px] mt-3">
        <div className="relative rounded-[28px] overflow-hidden h-[168px] p-5 text-white"
             style={{ background: 'linear-gradient(to right, #2D6A4F, #143028)',
                      boxShadow: '0px 18px 40px rgba(20,48,40,0.3)' }}>
          {/* trashcan illustration */}
          <div className="absolute right-2 top-7 opacity-95">
            <TrashCanIllustration size={120}/>
          </div>
          <div className="relative">
            <div className="text-[11px] font-medium" style={{ color: C.pale, letterSpacing: '1px' }}>
              보관 중
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="num font-extrabold text-[56px] leading-none"
                    style={{ letterSpacing: '-1.68px' }}>
                89
              </span>
              <span className="text-[16px] font-bold" style={{ color: C.pale }}>
                개 항목
              </span>
            </div>
            <div className="mt-3 text-[12px] font-semibold" style={{ color: C.orYel }}>
              ✨ 영구삭제 시 -1.2kg CO₂
            </div>
          </div>
        </div>
      </div>

      {/* ─── AI guidance box ────────────── */}
      <div className="px-[26px] mt-5">
        <div className="rounded-[20px] p-4 flex items-center gap-3"
             style={{ background: 'rgba(216,243,220,0.52)',
                      border: `1px dashed ${C.sage}` }}>
          <div className="w-9 h-9 rounded-full grid place-items-center bg-white shrink-0"
               style={{ color: C.primary }}>
            <IconSparkles size={18}/>
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-[13px] font-bold" style={{ color: C.primary }}>
              AI가 친환경 시간에 자동 영구삭제해요
            </div>
            <div className="text-[11px] mt-0.5 font-medium" style={{ color: C.mid, letterSpacing: '-0.44px' }}>
              재생에너지 비중 높은 새벽 02:00 실행 · 탄소 60% 절감
            </div>
          </div>
        </div>
      </div>

      {/* ─── section header ─────────────── */}
      <div className="px-[26px] mt-6 flex items-center justify-between">
        <div className="text-[12px] font-bold uppercase"
             style={{ color: C.text4, letterSpacing: '0.96px' }}>
          보관 중인 항목
        </div>
        <div className="text-[11px] font-semibold" style={{ color: C.primary }}>
          삭제 임박순 ↓
        </div>
      </div>

      {/* ─── item cards ─────────────────── */}
      <div className="px-[26px] mt-3 flex flex-col gap-3">
        {TRASH_ITEMS.map(t => (
          <div key={t.id} className="bg-white rounded-[18px] px-4 py-4 flex items-center gap-3"
               style={{ boxShadow: '0px 6px 12px rgba(15,26,20,0.06)' }}>
            <BrandMark glyph={t.glyph} palette={t.tint} size={40}/>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold truncate" style={{ color: C.primary }}>
                {t.name}
              </div>
              <div className="text-[11px] font-semibold mt-0.5" style={{ color: t.whenColor }}>
                {t.when}
              </div>
              <div className="text-[10px] font-medium mt-0.5" style={{ color: C.text4 }}>
                {t.sub}
              </div>
            </div>
            <button className="rounded-[14px] px-3 py-1.5 text-[10px] font-bold whitespace-nowrap"
                    style={{ background: t.btnBg, border: `1px solid ${t.btnBd}`, color: t.btnColor }}>
              지금 삭제
            </button>
          </div>
        ))}
      </div>

      {/* ─── 영구삭제 버튼 (orange CTA, sticky-ish via bottom margin) ─── */}
      <div className="px-[26px] mt-8">
        <button className="w-full rounded-[28px] h-[56px] font-bold text-[14px] text-white"
                style={{ background: C.orAcc,
                         boxShadow: '0px 14px 30px rgba(244,162,97,0.4)' }}>
          ⚡  지금 모두 영구삭제 (저장공간 즉시 확보)
        </button>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 5. CLEAN COMPLETE — based on 07_CleanComplete
// ═══════════════════════════════════════════════════════════════════════

const CONFETTI_DOTS = [
  { x: 50,  y: 100, size: 8,  color: '#74C69D' },
  { x: 290, y: 78,  size: 6,  color: '#F4A261' },
  { x: 124, y: 132, size: 6,  color: '#F4A261' },
  { x: 264, y: 168, size: 10, color: '#B7E4C7' },
  { x: 64,  y: 208, size: 7,  color: '#F4A261' },
  { x: 256, y: 124, size: 7,  color: '#F4A261' },
];
const CONFETTI_BARS = [
  { x: 96,  y: 64,  w: 4, h: 14, color: '#F4A261', rot: 0 },
  { x: 208, y: 88,  w: 4, h: 14, color: '#F4A261', rot: -120 },
  { x: 176, y: 196, w: 4, h: 14, color: '#74C69D', rot: 0 },
  { x: 148, y: 96,  w: 4, h: 14, color: '#74C69D', rot: -40 },
  { x: 48,  y: 156, w: 14, h: 4, color: '#74C69D', rot: 0 },
  { x: 224, y: 188, w: 14, h: 4, color: '#F4A261', rot: 36 },
];

function CleanCompleteScreen({ earnedSeed, earnedCO2g, onMarket, onHome }) {
  const kg = (earnedCO2g / 1000).toFixed(2);
  const ramen = ramenCount(earnedCO2g);
  return (
    <div className="screen-in pb-6 relative h-full">
      {/* confetti dots */}
      {CONFETTI_DOTS.map((d, i) => (
        <div key={`d${i}`} className="absolute rounded-full confetti-anim"
             style={{ left: d.x, top: d.y, width: d.size, height: d.size,
                      background: d.color, animationDelay: `${i * 0.12}s` }}/>
      ))}
      {/* confetti bars */}
      {CONFETTI_BARS.map((b, i) => (
        <div key={`b${i}`} className="absolute rounded-[2px] confetti-anim"
             style={{ left: b.x, top: b.y, width: b.w, height: b.h,
                      background: b.color, transform: `rotate(${b.rot}deg)`,
                      animationDelay: `${i * 0.18}s` }}/>
      ))}

      {/* leaf illustration */}
      <div className="flex justify-center pt-[100px]">
        <div style={{ filter: 'drop-shadow(0px 4px 5.35px rgba(0,0,0,0.25))' }}>
          <LeafBig size={90}/>
        </div>
      </div>

      {/* main text block */}
      <div className="text-center mt-6">
        <div className="text-[15px] font-semibold" style={{ color: C.text4 }}>
          오늘 정리 완료!
        </div>
        <div className="mt-3 flex items-baseline justify-center gap-2">
          <span className="num font-extrabold leading-none"
                style={{ color: C.primary, fontSize: 84, letterSpacing: '-4.2px' }}>
            {kg}
          </span>
          <span className="text-[24px] font-bold"
                style={{ color: 'rgba(27,67,50,0.8)' }}>
            kg
          </span>
        </div>
        <div className="mt-3 text-[15px] font-semibold" style={{ color: C.primary }}>
          CO₂ 절감했어요
        </div>
      </div>

      {/* ramen card */}
      <div className="px-[26px] mt-7">
        <div className="bg-white rounded-[18px] px-4 py-[14px] flex items-center gap-3"
             style={{ boxShadow: '0px 6px 9px rgba(15,26,20,0.05)' }}>
          <span className="text-[32px] leading-none shrink-0">🍜</span>
          <div className="flex items-baseline gap-1.5 flex-1 min-w-0">
            <span className="text-[13px] font-semibold whitespace-nowrap"
                  style={{ color: C.orPri }}>라면</span>
            <span className="num font-extrabold text-[20px] leading-none whitespace-nowrap"
                  style={{ color: C.primary, letterSpacing: '-0.4px' }}>
              {ramen}
            </span>
            <span className="text-[11px] font-semibold whitespace-nowrap"
                  style={{ color: C.text4 }}>
              개 끓일 수 있는 탄소를 아꼈어요
            </span>
          </div>
        </div>
      </div>

      {/* seed earned banner (orange) */}
      <div className="px-[26px] mt-5">
        <div className="rounded-[28px] h-16 px-5 flex items-center gap-3"
             style={{ background: 'rgba(244,162,97,0.72)',
                      boxShadow: '0px 10px 24px rgba(244,162,97,0.35)' }}>
          <div className="w-9 h-9 rounded-full bg-white grid place-items-center shrink-0"
               style={{ color: C.orDark }}>
            <IconSparkles size={20}/>
          </div>
          <div className="flex-1 leading-tight">
            <div className="text-[13px] font-bold" style={{ color: C.primary }}>
              총 + {fmtNum(earnedSeed)} 새싹 🌱 적립됨
            </div>
            <div className="text-[11px] font-medium mt-0.5" style={{ color: C.primary }}>
              리워드 마켓에서 사용 가능
            </div>
          </div>
        </div>
      </div>

      {/* CTA button */}
      <div className="px-[26px] mt-5">
        <button onClick={onMarket}
          className="w-full rounded-[28px] h-14 font-bold text-[15px] text-white flex items-center justify-center gap-2"
          style={{ background: G.greenBtn,
                   boxShadow: '0px 12px 28px rgba(27,67,50,0.3)',
                   letterSpacing: '-0.15px' }}>
          리워드 마켓 가기 <IconArrowR size={16}/>
        </button>
      </div>

      {/* return home text link */}
      <button onClick={onHome}
        className="block mx-auto mt-6 text-[13px] font-semibold"
        style={{ color: C.text4, letterSpacing: '-0.13px' }}>
        홈으로 돌아가기
      </button>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 6. REWARDS MARKET — based on 08_RewardsMarket
// ═══════════════════════════════════════════════════════════════════════

const REWARD_CATS = ['전체', '식음료', '뷰티', '쇼핑', '교통', '기부'];

const REWARDS = [
  { id: 'c1', name: 'Americano Tall', sub: '모닝커피 디지털 쿠폰',
    brand: 'MORNING COFFEE', cost: 1500, tag: '⚡ 인기 #1',
    palette: ['#D8EEDF', '#74C69D'], cup: true },
  { id: 'c2', name: '환경단체 기부', sub: '환경 보호 단체에 기부',
    brand: 'DONATION', cost: 1500,
    palette: ['#D6D8E8', '#FFF284'], emoji: '🌍' },
  { id: 'c3', name: '올리브영 2만 원권', sub: '뷰티 쇼핑 쿠폰',
    brand: 'OLIVE YOUNG', cost: 1500,
    palette: ['#E3E8CB', '#74C69D'], emoji: '💄' },
  { id: 'c4', name: '카페 톨 사이즈 음료', sub: '전국 매장 사용 가능',
    brand: 'COFFEE', cost: 1200,
    palette: ['#D8EEDF', '#1B4332'], emoji: '☕' },
  { id: 'c5', name: '지하철 1회 이용권', sub: '수도권 전 노선',
    brand: 'METRO', cost: 1450,
    palette: ['#E5EAFF', '#5B7DD6'], emoji: '🚇' },
  { id: 'c6', name: '학식 1식 교환권', sub: '학생식당 / 멋사대 본관',
    brand: 'CAMPUS', cost: 500,
    palette: ['#FFE4D6', '#F4A261'], emoji: '🍱' },
];

function RewardsScreen({ saessak, onClaim, onDetail }) {
  const [cat, setCat] = React.useState('전체');
  const tier = '어린잎';
  const nextTier = '잎무성';
  const nextGoal = 3000;
  const remain = Math.max(0, nextGoal - saessak);
  const pct = Math.min(100, saessak / nextGoal * 100);

  return (
    <div className="screen-in pb-8">
      {/* ─── header ─────────────────────────── */}
      <div className="px-[26px] pt-3 flex items-start justify-between">
        <div>
          <div className="text-[26px] font-extrabold tracking-tight"
               style={{ color: C.primary, letterSpacing: '-0.52px' }}>
            리워드 마켓
          </div>
          <div className="text-[12px] mt-1 font-medium" style={{ color: C.text3 }}>
            모은 새싹을 쿠폰으로 바꿔보세요
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white grid place-items-center"
                  style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)', color: C.primary }}>
            <IconSearch size={16}/>
          </button>
          <button className="relative w-9 h-9 rounded-full bg-white grid place-items-center"
                  style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)', color: C.primary }}>
            <IconBell size={16}/>
            <span className="absolute top-1 right-1 min-w-[14px] h-[14px] rounded-full grid place-items-center px-1 num"
                  style={{ background: '#EA4335', color: '#fff', fontSize: 8, fontWeight: 700 }}>
              3
            </span>
          </button>
        </div>
      </div>

      {/* ─── hero (sprout balance) ───────────── */}
      <div className="px-[26px] mt-5">
        <div className="relative overflow-hidden rounded-[28px] p-5 text-white"
             style={{ background: G.rewardHero,
                      boxShadow: '0px 18px 40px rgba(46,166,71,0.30)' }}>
          {/* decorative leaf */}
          <svg width="180" height="180" viewBox="0 0 180 180"
               className="absolute -right-10 -top-10 opacity-25 pointer-events-none">
            <path d="M20 150C20 60 80 20 170 20c-4 90-50 130-120 130a40 40 0 0 1-30 0Z"
                  fill="#fff"/>
          </svg>

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,.9)' }}>
                내 새싹 잔액
              </span>
              <Pill tone="white">{tier}</Pill>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="num font-extrabold leading-none"
                    style={{ fontSize: 56, letterSpacing: '-2px' }}>
                {fmtNum(saessak)}
              </span>
              <span className="text-[20px] font-bold" style={{ color: 'rgba(255,255,255,.95)' }}>
                새싹
              </span>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-[11px] font-medium mb-1.5"
                   style={{ color: 'rgba(255,255,255,.9)' }}>
                <span>다음 단계 · {nextTier}</span>
                <span className="num font-bold">{fmtNum(remain)} 새싹 남음</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden"
                   style={{ background: 'rgba(255,255,255,.2)' }}>
                <div className="h-full rounded-full relative"
                     style={{ width: `${pct}%`,
                              background: 'linear-gradient(90deg, #B8E6C5, #ffffff)' }}>
                  <div className="absolute inset-0 shimmer-line"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 내 쿠폰함 quick access ──────────── */}
      <div className="px-[26px] mt-3">
        <button className="w-full bg-white rounded-[20px] px-4 py-3.5 flex items-center gap-3"
                style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
          <div className="w-10 h-10 rounded-xl grid place-items-center"
               style={{ background: C.bg3, color: C.primary }}>
            <IconGift size={20}/>
          </div>
          <div className="flex-1 text-left">
            <div className="text-[13px] font-bold" style={{ color: C.primary }}>
              내 쿠폰함
            </div>
            <div className="text-[11px] font-medium mt-0.5" style={{ color: C.text3 }}>
              받은 쿠폰 3장 · 지금 확인하기
            </div>
          </div>
          <IconChevR size={18} style={{ color: C.text4 }}/>
        </button>
      </div>

      {/* ─── section header ────────────────── */}
      <div className="px-[26px] mt-6 flex items-end justify-between">
        <div>
          <div className="text-[17px] font-extrabold tracking-tight" style={{ color: C.primary }}>
            교환 가능 리워드
          </div>
          <div className="text-[11px] font-medium mt-0.5" style={{ color: C.text4 }}>
            {REWARDS.length}개
          </div>
        </div>
        <Pill tone="paper">전체</Pill>
      </div>

      {/* ─── category tabs ────────────────── */}
      <div className="px-[26px] mt-3 flex gap-2 overflow-x-auto noscroll">
        {REWARD_CATS.map(t => (
          <button key={t} onClick={() => setCat(t)}
            className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-colors`}
            style={{
              background: cat === t ? C.primary : '#fff',
              color: cat === t ? '#fff' : C.text2,
              boxShadow: cat === t ? 'none' : '0px 4px 12px rgba(15,26,20,0.05)',
            }}>
            {t}
          </button>
        ))}
      </div>

      {/* ─── featured card (1st item, full width) ─── */}
      <div className="px-[26px] mt-4">
        <button onClick={() => onDetail && onDetail(REWARDS[0])}
          className="w-full bg-white rounded-[22px] overflow-hidden text-left active:scale-[0.99] transition-transform relative"
          style={{ boxShadow: '0px 12px 28px rgba(15,26,20,0.08)' }}>
          {/* orange ribbon */}
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
               style={{ background: 'linear-gradient(90deg,#FF6B3D,#FF8F5A)' }}>
            {REWARDS[0].tag}
          </div>
          <div className="relative h-[140px] grid place-items-center"
               style={{ background: `linear-gradient(135deg, ${REWARDS[0].palette[0]}, ${REWARDS[0].palette[1]})` }}>
            <CoffeeCupIllustration size={108}/>
          </div>
          <div className="p-4">
            <div className="text-[10px] font-bold uppercase tracking-wider"
                 style={{ color: '#808C94', letterSpacing: '1px' }}>
              {REWARDS[0].brand}
            </div>
            <div className="mt-1 text-[18px] font-extrabold" style={{ color: '#1B3A25' }}>
              {REWARDS[0].name}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="num font-extrabold text-[18px] flex items-center gap-1"
                    style={{ color: C.success }}>
                🌱 {fmtNum(REWARDS[0].cost)}
              </span>
              <button onClick={(e) => { e.stopPropagation(); onClaim && onClaim(REWARDS[0]); }}
                className="px-4 py-2 rounded-full text-[12px] font-bold text-white"
                style={{ background: C.success,
                         boxShadow: '0px 6px 16px rgba(46,166,71,0.35)' }}>
                교환하기
              </button>
            </div>
          </div>
        </button>
      </div>

      {/* ─── grid of remaining rewards ───────── */}
      <div className="px-[26px] mt-3 grid grid-cols-2 gap-3">
        {REWARDS.slice(1).map(r => (
          <button key={r.id} onClick={() => onDetail && onDetail(r)}
            className="text-left bg-white rounded-[20px] overflow-hidden active:scale-[0.98] transition-transform"
            style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
            <div className="h-[88px] grid place-items-center text-[36px]"
                 style={{ background: `linear-gradient(135deg, ${r.palette[0]}, ${r.palette[1]})` }}>
              <span style={{ textShadow: '0 2px 8px rgba(0,0,0,.18)' }}>{r.emoji}</span>
            </div>
            <div className="p-3">
              <div className="text-[10px] font-bold uppercase" style={{ color: C.text4 }}>
                {r.brand}
              </div>
              <div className="mt-0.5 text-[12.5px] font-bold leading-tight"
                   style={{ color: '#1B3A25' }}>
                {r.name}
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="num font-extrabold text-[14px] flex items-center gap-0.5"
                      style={{ color: saessak >= r.cost ? C.success : C.text4 }}>
                  🌱 {fmtNum(r.cost)}
                </span>
                <span className="text-[10px] font-bold rounded-full px-2 py-0.5"
                      style={{ background: saessak >= r.cost ? C.primary : C.bg2,
                               color: saessak >= r.cost ? '#fff' : C.text4 }}>
                  {saessak >= r.cost ? '교환' : `${fmtNum(r.cost - saessak)}↑`}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 7. REWARDS DETAIL — based on 09_RewardsDetail
// ═══════════════════════════════════════════════════════════════════════

function RewardsDetailScreen({ reward, saessak, onBack, onExchange }) {
  if (!reward) return null;
  const after = Math.max(0, saessak - reward.cost);
  const canBuy = saessak >= reward.cost;
  return (
    <div className="screen-in pb-32">
      {/* ─── header ─────────────────────── */}
      <div className="px-[26px] pt-3 relative h-12 flex items-center">
        <button onClick={onBack}
          className="absolute left-[26px] text-[24px] font-bold leading-none"
          style={{ color: C.primary }}>←</button>
        <div className="w-full text-center text-[17px] font-bold"
             style={{ color: C.primary }}>
          새싹으로 교환하기
        </div>
      </div>

      {/* ─── hero product card ─────────── */}
      <div className="px-[26px] mt-3">
        <div className="relative overflow-hidden rounded-[28px] p-5 text-white h-[210px]"
             style={{ background: G.rewardHero,
                      boxShadow: '0px 18px 40px rgba(46,166,71,0.3)' }}>
          {/* decorative circles */}
          <div className="absolute -right-8 -top-12 w-44 h-44 rounded-full"
               style={{ background: 'rgba(255,255,255,.12)' }}/>
          <div className="absolute right-6 -bottom-8 w-24 h-24 rounded-full"
               style={{ background: 'rgba(255,255,255,.10)' }}/>

          {/* product illustration */}
          <div className="absolute right-4 top-7">
            {reward.cup
              ? <CoffeeCupIllustration size={120}/>
              : <div className="text-[100px] leading-none">{reward.emoji}</div>}
          </div>

          <div className="relative max-w-[200px]">
            <div className="flex items-center gap-2">
              <Pill tone="white">{reward.brand}</Pill>
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5"
                    style={{ background: 'rgba(255,255,255,.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white"/>
                <span className="text-[10px] font-bold">재고 충분</span>
              </span>
            </div>
            <div className="mt-3 text-[22px] font-extrabold leading-tight"
                 style={{ letterSpacing: '-0.4px' }}>
              {reward.name}
            </div>
            <div className="mt-1 text-[12px]" style={{ color: 'rgba(255,255,255,.9)' }}>
              {reward.sub}
            </div>
          </div>
        </div>
      </div>

      {/* ─── 교환 후 내 새싹 calculator ──── */}
      <div className="px-[26px] mt-5">
        <div className="bg-white rounded-[20px] p-4 relative overflow-hidden"
             style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: C.success }}/>
          <div className="pl-3">
            <div className="text-[13px] font-bold" style={{ color: C.primary }}>
              교환 후 내 새싹
            </div>
            <div className="mt-3 flex items-center gap-3">
              {/* current */}
              <div className="flex-1 rounded-[14px] p-3 border"
                   style={{ background: '#F3F9F3', borderColor: '#E0EEE3' }}>
                <div className="flex items-center gap-1 text-[10px] font-medium"
                     style={{ color: '#808C94' }}>
                  현재
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-bold"
                     style={{ color: '#1B3A25' }}>
                  <TierIcon size={20} tone="light"/> 어린잎
                </div>
                <div className="mt-1 text-[16px] num font-extrabold"
                     style={{ color: C.success }}>
                  🌱 {fmtNum(saessak)}
                </div>
              </div>
              {/* arrow */}
              <IconArrowR size={18} style={{ color: C.text4 }}/>
              {/* after */}
              <div className="flex-1 rounded-[14px] p-3 border border-dashed"
                   style={{ background: '#FFFAF2', borderColor: '#FFB84A' }}>
                <div className="flex items-center gap-1 text-[10px] font-medium"
                     style={{ color: '#B8842C' }}>
                  교환 후
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] font-bold"
                     style={{ color: '#B8842C' }}>
                  <TierIcon size={20} tone="empty"/>
                </div>
                <div className="mt-1 text-[16px] num font-extrabold"
                     style={{ color: '#B8842C' }}>
                  🌱 {fmtNum(after)}
                </div>
              </div>
            </div>

            {/* deduction strip */}
            <div className="mt-3 rounded-[12px] px-3 py-2 flex items-center justify-between"
                 style={{ background: '#FFF5E9' }}>
              <span className="text-[11px] font-bold" style={{ color: '#D97706' }}>
                차감되는 새싹
              </span>
              <span className="text-[13px] num font-extrabold" style={{ color: '#D97706' }}>
                - {fmtNum(reward.cost)} 새싹
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── info cards ───────────────── */}
      <div className="px-[26px] mt-3 flex flex-col gap-2">
        <RewardInfoRow icon="⚡" title="발급 즉시 사용 가능" sub={`${reward.brand} 앱에서 바로 쓸 수 있어요`}/>
        <RewardInfoRow icon="📅" title="유효기간 60일" sub="발급일로부터 60일 이내 사용"/>
      </div>

      {/* ─── CTA button (sticky-ish) ──── */}
      <div className="px-[26px] mt-6">
        <button onClick={() => canBuy && onExchange && onExchange(reward)}
          disabled={!canBuy}
          className="w-full rounded-[28px] h-[64px] px-5 flex items-center justify-between text-white"
          style={{ background: canBuy ? G.greenBtn : 'rgba(15,26,20,.25)',
                   boxShadow: canBuy ? '0px 12px 28px rgba(27,67,50,0.3)' : 'none' }}>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-medium opacity-80">교환 비용</div>
            <div className="text-[15px] font-bold num">🌱 {fmtNum(reward.cost)} 새싹</div>
          </div>
          <div className="flex items-center gap-1 text-[15px] font-bold">
            교환하기 <IconArrowR size={16}/>
          </div>
        </button>
        {!canBuy && (
          <div className="text-center text-[11px] mt-2 font-medium" style={{ color: C.text4 }}>
            {fmtNum(reward.cost - saessak)} 새싹만 더 모으면 가능해요
          </div>
        )}
      </div>
    </div>
  );
}

function RewardInfoRow({ icon, title, sub }) {
  return (
    <div className="bg-white rounded-[16px] px-3.5 py-3 flex items-center gap-3"
         style={{ border: '1px solid rgba(15,26,20,0.04)' }}>
      <div className="w-9 h-9 rounded-full grid place-items-center text-[16px]"
           style={{ background: C.bg3 }}>
        {icon}
      </div>
      <div className="flex-1 leading-tight">
        <div className="text-[13px] font-bold" style={{ color: '#1B3A25' }}>{title}</div>
        <div className="text-[11px] font-medium mt-0.5" style={{ color: C.text3 }}>{sub}</div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 8. CONNECT — based on 10_Connect
// ═══════════════════════════════════════════════════════════════════════

function ConnectScreen({ accounts, onToggle, onAddAccount }) {
  const connected = accounts.filter(a => a.connected).length;
  const total = 5;
  return (
    <div className="screen-in pb-8">
      {/* ─── header ─────────────────────── */}
      <div className="px-[26px] pt-3">
        <div className="text-[22px] font-extrabold tracking-tight"
             style={{ color: C.primary, letterSpacing: '-0.44px' }}>
          연결 계정
        </div>
        <div className="text-[13px] mt-1 font-medium" style={{ color: C.text4 }}>
          연결할수록 탄소 측정이 정확해져요
        </div>
      </div>

      {/* ─── progress banner ──────────── */}
      <div className="px-[26px] mt-5">
        <div className="rounded-[20px] p-4 flex items-center gap-3"
             style={{ background: C.bg3, border: `1px dashed ${C.pale}` }}>
          <div className="relative w-12 h-12 rounded-full bg-white grid place-items-center shrink-0">
            <IconLink size={20} style={{ color: C.primary }}/>
            <span className="absolute inset-0 rounded-full pulse-ring"
                  style={{ background: 'rgba(116,198,157,.4)' }}/>
          </div>
          <div className="flex-1 leading-tight">
            <div className="flex items-center gap-1.5 text-[14px] font-bold"
                 style={{ color: C.primary }}>
              <span>⭐</span>
              <span className="num">{connected} / {total}</span>개 연결됨
            </div>
            <div className="text-[11.5px] font-medium mt-0.5" style={{ color: C.text3 }}>
              완주하면 +2,000 새싹을 받아요
            </div>
            {/* 5 progress dots */}
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: total }).map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full"
                      style={{ background: i < connected ? C.success : '#D8E6DC' }}/>
              ))}
            </div>
          </div>
          <Pill tone="earth">+2,000 🌱</Pill>
        </div>
      </div>

      {/* ─── sections ─────────────────── */}
      <ConnectSection
        title="이메일" icon={IconMail} iconBg={C.orSoft}
        connectedCount={accounts.filter(a => a.kind === 'email' && a.connected).length}
        accounts={accounts.filter(a => a.kind === 'email')}
        onToggle={onToggle}
        addLabel="메일 계정 추가하기"
        onAdd={() => onAddAccount && onAddAccount('email')}
      />
      <ConnectSection
        title="Cloud 사진" icon={IconImage} iconBg={C.sage}
        connectedCount={accounts.filter(a => a.kind === 'photo' && a.connected).length}
        accounts={accounts.filter(a => a.kind === 'photo')}
        onToggle={onToggle}
        addLabel="사진 계정 추가하기"
        onAdd={() => onAddAccount && onAddAccount('photo')}
      />
      <ConnectSection
        title="Cloud 파일" icon={IconFolder} iconBg={C.mid}
        connectedCount={accounts.filter(a => a.kind === 'file' && a.connected).length}
        accounts={accounts.filter(a => a.kind === 'file')}
        onToggle={onToggle}
        addLabel="파일 계정 추가하기"
        onAdd={() => onAddAccount && onAddAccount('file')}
      />
    </div>
  );
}

function ConnectSection({ title, icon: Icon, iconBg, connectedCount, accounts, onToggle, addLabel, onAdd }) {
  return (
    <div className="px-[26px] mt-6">
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-7 h-7 rounded-[8px] grid place-items-center"
             style={{ background: iconBg, color: '#fff' }}>
          <Icon size={16}/>
        </div>
        <span className="text-[14px] font-bold" style={{ color: C.primary }}>{title}</span>
        <Pill tone="sage">{connectedCount}개 연결됨</Pill>
      </div>
      <div className="bg-white rounded-[20px] overflow-hidden"
           style={{ boxShadow: '0px 8px 24px rgba(15,26,20,0.06)' }}>
        {accounts.map((a, i) => (
          <React.Fragment key={a.id}>
            <div className="px-4 py-3.5 flex items-center gap-3">
              <BrandLetter letter={a.letter} color={a.color} size={36} bg={a.bg || '#fff'}/>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-bold truncate" style={{ color: C.primary }}>
                  {a.name}
                </div>
                <div className="text-[11px] mt-0.5 truncate font-medium" style={{ color: C.text4 }}>
                  {a.detail}
                </div>
              </div>
              <Toggle on={a.on} onChange={(v) => onToggle && onToggle(a.id, v)}/>
            </div>
            {i < accounts.length - 1 && (
              <div className="h-px mx-4" style={{ background: C.divider }}/>
            )}
          </React.Fragment>
        ))}
        {accounts.length > 0 && <div className="h-px mx-4" style={{ background: C.divider }}/>}
        <button onClick={onAdd}
          className="w-full px-4 py-3.5 flex items-center gap-2 text-[13px] font-bold"
          style={{ color: C.primary }}>
          <IconPlus size={16}/> {addLabel}
        </button>
      </div>
    </div>
  );
}


Object.assign(window, {
  HomeScreen,
  AnalyzeScreen,
  CleanScreen, CleanCard,
  TrashBinScreen,
  CleanCompleteScreen,
  RewardsScreen,
  RewardsDetailScreen,
  ConnectScreen,
});
