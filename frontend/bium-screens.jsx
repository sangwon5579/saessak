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

function CleanScreen({ onCleaned, onTrashBin, onComplete }) {
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
// 6. REWARDS MARKET — 경기지역화폐 금액권 단일 라인업
// 디자인 참조: docs PDF, reference/src/variation-c.jsx
// ═══════════════════════════════════════════════════════════════════════

// 경기 블루 톤 (지폐 그라데이션용)
const GG_PAY = {
  light: '#1F6FBF',
  base:  '#084796',
  deep:  '#053467',
  ink:   '#042450',
  badgeBg: 'rgba(127,177,240,0.28)',
  badgeFg: '#BFD7F5',
  blue50:  '#F1F6FD',
  blue100: '#E4EFFB',
  blueText:'#003C7E',
};

// 1새싹 = 1원. cost(새싹) = won(원).
const VOUCHERS = [
  { id: 'gp1k',  won: 1000,  accent: GG_PAY.light, tag: null },
  { id: 'gp3k',  won: 3000,  accent: GG_PAY.base,  tag: '인기' },
  { id: 'gp5k',  won: 5000,  accent: GG_PAY.base,  tag: null },
  { id: 'gp10k', won: 10000, accent: GG_PAY.deep,  tag: null },
];

// reward 객체 정규화 — RewardsDetailScreen 등 외부 호출 호환 유지.
function toRewardLike(v) {
  return {
    id: v.id,
    won: v.won,
    cost: v.won,        // 1새싹 = 1원
    name: `경기지역화폐 ${v.won.toLocaleString()}원권`,
    brand: 'GYEONGGI PAY',
    sub: `경기도 내 가맹점 약 122,000곳에서 사용 가능`,
    tag: v.tag,
    accent: v.accent,
    kind: 'gyeonggi_pay',
  };
}

// 가로줄 한 개짜리 원화 표시(W + 단일 스트로크). 기본 ₩ 글리프는 폰트마다 가로줄이 두 줄이라 별도 컴포넌트로 처리.
function WonSign({ style }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', ...style }}>
      W
      <span aria-hidden="true" style={{
        position: 'absolute',
        left: '-0.04em',
        right: '-0.04em',
        top: '50%',
        height: '0.08em',
        background: 'currentColor',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />
    </span>
  );
}

function RewardsScreen({ saessak, onClaim, onDetail }) {
  const tier = '어린잎';
  const nextGoal = 3000;
  const remain = Math.max(0, nextGoal - saessak);
  const pct = Math.min(100, saessak / nextGoal * 100);
  // 데모용 — 사용자가 이미 보유한 경기지역화폐 권수
  const heldCount = 3;
  const heldTotalWon = 9000;

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
            모은 새싹을 경기지역화폐로 바꿔보세요
          </div>
        </div>
        <button className="relative w-9 h-9 rounded-full bg-white grid place-items-center"
                style={{ boxShadow: '0px 4px 12px rgba(15,26,20,0.05)', color: C.primary }}>
          <IconBell size={16}/>
          <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] rounded-full grid place-items-center px-1 num"
                style={{ background: C.orAcc, color: '#fff', fontSize: 9, fontWeight: 700 }}>
            3
          </span>
        </button>
      </div>

      {/* ─── hero: 새싹 잔액 + 환전 가능 표시 + 어린잎 진척 ─── */}
      <div className="px-[26px] mt-5">
        <div className="relative overflow-hidden rounded-[24px] text-white"
             style={{ background: 'linear-gradient(165deg,#2D6A4F 0%,#1B4332 55%,#143028 100%)',
                      boxShadow: '0px 18px 40px rgba(20,48,40,0.30)',
                      padding: '20px 22px 18px' }}>
          {/* 잔잔한 곡선 텍스처 */}
          <svg viewBox="0 0 360 200" className="absolute inset-0 w-full h-full pointer-events-none"
               style={{ opacity: 0.16 }}>
            <path d="M0 180 Q90 130 200 155 T420 125 L420 200 L0 200 Z" fill="#74C69D"/>
          </svg>

          <div className="relative flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="text-[11.5px] font-bold"
                   style={{ color: 'rgba(255,255,255,0.78)' }}>
                내 새싹 잔액
              </div>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="num font-extrabold leading-none"
                      style={{ fontSize: 42, letterSpacing: '-1.3px' }}>
                  {fmtNum(saessak)}
                </span>
                <span className="text-[15px] font-bold">새싹</span>
              </div>
              {/* 경기지역화폐 환전 가능 — 한 줄에 들어가도록 폰트/뱃지 조정 */}
              <div className="mt-3 flex items-center gap-1.5 whitespace-nowrap">
                <span className="inline-flex items-center gap-1 rounded-full font-extrabold shrink-0"
                      style={{ background: GG_PAY.badgeBg, color: GG_PAY.badgeFg,
                               fontSize: 9, letterSpacing: '0.02em',
                               padding: '2px 7px 2px 3px', lineHeight: 1 }}>
                  <GyeonggiMark size={12}/>
                  경기지역화폐
                </span>
                <span className="font-semibold shrink-0"
                      style={{ color: 'rgba(255,255,255,0.82)', fontSize: 10.5 }}>
                  최대 <b style={{ fontWeight: 800, color: '#fff' }}>{fmtNum(saessak)}원</b> 환전 가능
                </span>
              </div>
            </div>

            {/* 어린잎(새싹 화분) 일러스트 — 한 줄 공간 확보 위해 살짝 축소 */}
            <SproutPotMark size={64}/>
          </div>

          {/* 등급 진척률 */}
          <div className="relative mt-3.5 pt-3"
               style={{ borderTop: '1px solid rgba(255,255,255,0.16)' }}>
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] font-semibold"
                    style={{ color: 'rgba(255,255,255,0.78)' }}>
                🌱 {tier} · 다음 등급까지
              </span>
              <span className="text-[12px] font-extrabold num text-white">
                {fmtNum(remain)} 새싹
              </span>
            </div>
            <div className="relative mt-2 h-[5px] rounded-full overflow-hidden"
                 style={{ background: 'rgba(255,255,255,0.18)' }}>
              <div className="absolute inset-y-0 left-0 rounded-full"
                   style={{ width: `${pct}%`,
                            background: 'linear-gradient(90deg,#B7E4C7,#74C69D)' }}/>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 내 경기지역화폐 (보유 현황) ─── */}
      <div className="px-[26px] mt-3">
        <button className="w-full bg-white rounded-[18px] flex items-center gap-3 text-left active:scale-[0.99] transition-transform"
                style={{ boxShadow: '0px 6px 18px rgba(15,26,20,0.05)', padding: '14px 16px' }}>
          <TicketMark size={36}/>
          <div className="flex-1 min-w-0">
            <div className="text-[13.5px] font-extrabold tracking-tight"
                 style={{ color: C.primary }}>
              내 경기지역화폐
            </div>
            <div className="text-[11px] font-semibold mt-0.5" style={{ color: C.text3 }}>
              보유 {heldCount}장 · 총 <b style={{ color: GG_PAY.blueText, fontWeight: 800 }}>{fmtNum(heldTotalWon)}원</b>
            </div>
          </div>
          <IconChevR size={16} style={{ color: C.text3 }}/>
        </button>
      </div>

      {/* ─── 섹션 헤더 ─── */}
      <div className="px-[26px] mt-6 flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-extrabold tracking-tight"
                style={{ color: C.primary, letterSpacing: '-0.16px' }}>
            경기지역화폐 금액권
          </span>
          <span className="inline-flex items-center justify-center rounded-full"
                style={{ background: GG_PAY.blue100, color: GG_PAY.blueText,
                         fontSize: 11, fontWeight: 800, padding: '3px 8px' }}>
            {VOUCHERS.length}종
          </span>
        </div>
        <span className="text-[11px] font-bold" style={{ color: C.text3 }}>1새싹 = 1원</span>
      </div>

      {/* ─── 금액권 그리드 (2-col) ─── */}
      <div className="px-[26px] mt-3 grid grid-cols-2 gap-2.5">
        {VOUCHERS.map(v => (
          <VoucherCard key={v.id} voucher={v} saessak={saessak}
                       onClaim={onClaim} onDetail={onDetail}/>
        ))}
      </div>

      {/* ─── 사용 안내 ─── */}
      <div className="px-[26px] mt-5">
        <div className="rounded-[14px] flex gap-2.5 items-start"
             style={{ background: C.bg3, border: `1px solid ${C.pale}`,
                      padding: '14px 16px' }}>
          <IconInfo size={16} style={{ color: C.mid, flex: 'none', marginTop: 1 }}/>
          <div className="text-[11.5px] font-semibold leading-relaxed"
               style={{ color: C.mid }}>
            구매한 금액권은 <b style={{ fontWeight: 800, color: C.primary }}>경기지역화폐 앱으로 자동 충전</b>되고,
            도내 약 122,000개 가맹점에서 사용 가능해요.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Voucher Card (그리드 한 칸) ─────────────────────────────────────────────
function VoucherCard({ voucher, saessak, onClaim, onDetail }) {
  const cost = voucher.won; // 1새싹 = 1원
  const affordable = saessak >= cost;
  const reward = toRewardLike(voucher);

  return (
    <button onClick={() => onDetail && onDetail(reward)}
      className="relative text-left bg-white rounded-[18px] overflow-hidden active:scale-[0.99] transition-transform"
      style={{ boxShadow: '0px 6px 16px rgba(15,26,20,0.06)',
               opacity: affordable ? 1 : 0.62,
               padding: '14px 14px' }}>
      {/* 코너 뱃지 */}
      {voucher.tag && (
        <span className="absolute z-10"
              style={{ top: 10, right: 10, background: C.orAcc, color: '#fff',
                       fontSize: 9, fontWeight: 800, padding: '3px 7px',
                       borderRadius: 6, letterSpacing: '0.04em' }}>
          {voucher.tag}
        </span>
      )}

      {/* 지폐 일러스트 */}
      <div className="relative overflow-hidden rounded-[12px]"
           style={{ background: `linear-gradient(135deg, ${voucher.accent} 0%, ${GG_PAY.ink} 100%)`,
                    height: 92, color: '#fff' }}>
        <img src="public/gyeonggi-mark.png" alt=""
             style={{ position: 'absolute', left: -16, top: -14,
                      width: 130, height: 130, opacity: 0.42, pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', top: 8, right: 10,
                      fontSize: 8, fontWeight: 800, letterSpacing: '0.06em', opacity: 0.82 }}>
          경기지역화폐
        </div>
        <div style={{ position: 'absolute', right: 12, bottom: 10,
                      fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em',
                      fontFamily: 'Inter' }}>
          <WonSign />{voucher.won.toLocaleString()}
        </div>
      </div>

      {/* 텍스트 + 가격 + CTA */}
      <div className="mt-3">
        <div className="text-[10px] font-extrabold tracking-wider"
             style={{ color: GG_PAY.base, letterSpacing: '0.06em' }}>
          GYEONGGI PAY
        </div>
        <div className="mt-0.5 text-[14px] font-extrabold leading-tight tracking-tight"
             style={{ color: C.primary }}>
          <WonSign />{voucher.won.toLocaleString()}권
        </div>
        <div className="mt-1.5 flex items-baseline gap-1">
          <span className="text-[12px]" style={{ color: C.success }}>🌱</span>
          <span className="text-[14px] font-extrabold num"
                style={{ color: C.mid, letterSpacing: '-0.01em' }}>
            {fmtNum(cost)}
          </span>
          <span className="text-[11px] font-bold" style={{ color: C.text3 }}>새싹</span>
        </div>
        <button onClick={(e) => {
                  e.stopPropagation();
                  if (affordable) {
                    onClaim && onClaim(reward);
                  } else {
                    onDetail && onDetail(reward);
                  }
                }}
          disabled={false}
          className="mt-2 w-full rounded-[10px] text-[12px] font-extrabold text-white"
          style={{ background: affordable ? C.primary : C.bg2,
                   color: affordable ? '#fff' : C.text4,
                   padding: '9px',
                   boxShadow: affordable ? '0px 6px 14px rgba(27,67,50,0.20)' : 'none' }}>
          {affordable ? '교환하기' : `${fmtNum(cost - saessak)} 새싹 더 필요`}
        </button>
      </div>
    </button>
  );
}

// ── Gyeonggi mark (real PNG, used in pills + bill backgrounds) ────────────
function GyeonggiMark({ size = 16 }) {
  return (
    <img src="public/gyeonggi-mark.png" alt="경기지역화폐"
         width={size} height={size}
         style={{ display: 'block', flex: 'none' }}/>
  );
}

// ── Sprout pot illustration (어린잎) ───────────────────────────────────────
function SproutPotMark({ size = 78 }) {
  return (
    <svg viewBox="0 0 110 110" width={size} height={size}
         style={{ flex: 'none' }} aria-hidden="true">
      <defs>
        <radialGradient id="sproutPotBg" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="rgba(183,228,199,0.35)"/>
          <stop offset="100%" stopColor="rgba(183,228,199,0)"/>
        </radialGradient>
      </defs>
      <ellipse cx="55" cy="62" rx="44" ry="42" fill="url(#sproutPotBg)"/>
      <path d="M30 70 L80 70 L74 95 Q74 99 70 99 L40 99 Q36 99 36 95 Z" fill="#A85A1F"/>
      <path d="M28 65 L82 65 L80 73 L30 73 Z" fill="#C97343"/>
      <ellipse cx="55" cy="65" rx="27" ry="3" fill="rgba(0,0,0,0.18)"/>
      <ellipse cx="55" cy="65" rx="24" ry="2.5" fill="#3C2A1F"/>
      <path d="M55 65 L55 38" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round"/>
      <path d="M55 50 C40 50 32 42 32 30 C46 30 55 38 55 50 Z" fill="#52B788"/>
      <path d="M55 50 C70 50 78 42 78 30 C64 30 55 38 55 50 Z" fill="#74C69D"/>
      <path d="M50 38 C46 36 42 34 38 32" stroke="#B7E4C7" strokeWidth="1.2"
            strokeLinecap="round" fill="none"/>
      <circle cx="85" cy="32" r="2" fill="#FFE9A8"/>
      <circle cx="22" cy="40" r="1.5" fill="#FFE9A8"/>
    </svg>
  );
}

// ── Ticket / coupon icon (보유 카드 좌측) ──────────────────────────────────
function TicketMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none"
         style={{ flex: 'none' }} aria-hidden="true">
      <rect x="4" y="10" width="28" height="16" rx="3" fill="#E4E7DD"/>
      <rect x="4" y="10" width="28" height="16" rx="3" fill="none"
            stroke="#9AA89F" strokeWidth="1.4"/>
      <circle cx="18" cy="10" r="2" fill="#F8F9F4"/>
      <circle cx="18" cy="26" r="2" fill="#F8F9F4"/>
      <path d="M11 18 L25 18" stroke="#9AA89F" strokeWidth="1.4" strokeDasharray="2 2"/>
    </svg>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 7. REWARDS DETAIL — based on 09_RewardsDetail
// ═══════════════════════════════════════════════════════════════════════

function RewardsDetailScreen({ reward, saessak, onBack, onExchange }) {
  if (!reward) return null;
  const won = reward.won || reward.cost;          // 새 voucher / 구 reward 호환
  const cost = reward.cost || reward.won;
  const canBuy = saessak >= cost;
  const accent = reward.accent || GG_PAY.base;

  return (
    <div className="screen-in pb-32 relative">
      {/* ─── header ─── */}
      <div className="px-[18px] pt-3 relative h-12 flex items-center justify-between">
        <button onClick={onBack}
          className="w-9 h-9 rounded-full bg-white grid place-items-center"
          style={{ boxShadow: '0px 4px 10px rgba(15,26,20,0.06)' }}>
          <span style={{ color: C.primary, fontSize: 18, fontWeight: 800, lineHeight: 1 }}>←</span>
        </button>
        <div className="text-[13px] font-extrabold tracking-tight"
             style={{ color: C.primary, letterSpacing: '-0.01em' }}>
          금액권 상세
        </div>
        <button className="w-9 h-9 rounded-full bg-white grid place-items-center"
                style={{ boxShadow: '0px 4px 10px rgba(15,26,20,0.06)' }}>
          <ShareIcon size={15} color={C.primary}/>
        </button>
      </div>

      {/* ─── hero (blue gradient + large bill) ─── */}
      <div className="px-[26px] mt-3">
        <div className="relative overflow-hidden rounded-[24px] text-white"
             style={{ background: `linear-gradient(165deg, ${GG_PAY.light} 0%, ${GG_PAY.base} 55%, ${GG_PAY.deep} 100%)`,
                      boxShadow: '0px 18px 40px rgba(8,71,150,0.32)',
                      padding: '24px 22px 22px' }}>
          {/* 잔잔한 곡선 텍스처 */}
          <svg viewBox="0 0 360 220" className="absolute inset-0 w-full h-full pointer-events-none"
               style={{ opacity: 0.16 }}>
            <path d="M0 200 Q90 150 200 175 T420 145 L420 220 L0 220 Z" fill="#BFD7F5"/>
          </svg>

          {/* 경기지역화폐 뱃지 */}
          <div className="relative inline-flex items-center gap-1.5 rounded-full"
               style={{ background: 'rgba(255,255,255,0.20)', color: '#fff',
                        fontSize: 11, fontWeight: 800, letterSpacing: '0.02em',
                        padding: '4px 12px 4px 4px' }}>
            <GyeonggiMark size={20}/>
            경기지역화폐
          </div>

          {/* 큰 지폐 */}
          <div className="relative mt-4 flex justify-center">
            <BillLarge won={won}/>
          </div>

          {/* 제목 */}
          <div className="relative mt-4 text-center">
            <div className="text-[10.5px] font-extrabold tracking-wider"
                 style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.08em' }}>
              GYEONGGI PAY
            </div>
            <div className="mt-1.5 text-[22px] font-extrabold tracking-tight leading-tight">
              경기지역화폐 {won.toLocaleString()}원권
            </div>
            <div className="mt-1.5 text-[12.5px] font-medium"
                 style={{ color: 'rgba(255,255,255,0.78)' }}>
              경기도 내 가맹점 약 122,000곳에서 사용 가능
            </div>
          </div>
        </div>
      </div>

      {/* ─── 교환 가격 / 내 잔액 ─── */}
      <div className="px-[26px] mt-3.5">
        <div className="bg-white rounded-[18px] flex items-center justify-between"
             style={{ boxShadow: '0px 6px 18px rgba(15,26,20,0.05)',
                      padding: '16px 18px' }}>
          <div>
            <div className="text-[10.5px] font-extrabold tracking-wider"
                 style={{ color: C.text3, letterSpacing: '0.04em' }}>
              교환 가격
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-[15px]" style={{ color: C.success }}>🌱</span>
              <span className="num font-extrabold"
                    style={{ fontSize: 26, letterSpacing: '-0.5px', color: C.primary }}>
                {fmtNum(cost)}
              </span>
              <span className="text-[13px] font-extrabold" style={{ color: C.primary }}>새싹</span>
            </div>
          </div>
          <div className="rounded-[12px] text-right"
               style={{ background: C.bg3, padding: '10px 14px' }}>
            <div className="text-[10px] font-extrabold tracking-wider"
                 style={{ color: C.mid, letterSpacing: '0.02em' }}>
              내 잔액
            </div>
            <div className="mt-0.5 text-[15px] font-extrabold tracking-tight"
                 style={{ color: C.primary }}>
              {fmtNum(saessak)} <span style={{ fontSize: 11 }}>새싹</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 가맹점 위치 ─── */}
      <div className="px-[26px] mt-3.5">
        <div className="bg-white rounded-[18px] overflow-hidden"
             style={{ boxShadow: '0px 6px 16px rgba(15,26,20,0.05)' }}>
          <div className="flex items-center justify-between"
               style={{ padding: '14px 16px 10px' }}>
            <div className="flex items-center gap-2">
              <LocationIcon size={16} color={GG_PAY.blueText} stroke={1.9}/>
              <span className="text-[14px] font-extrabold tracking-tight"
                    style={{ color: C.primary }}>가맹점 위치</span>
            </div>
            <span className="text-[11px] font-bold" style={{ color: GG_PAY.blueText }}>
              전체 지도 ›
            </span>
          </div>

          {/* mini map */}
          <div className="relative" style={{ margin: '0 12px' }}>
            <MerchantMap height={170}/>
            <div className="absolute"
                 style={{ left: '60%', top: '64%', transform: 'translate(-50%, -100%)',
                          background: '#fff', borderRadius: 10,
                          padding: '7px 10px', minWidth: 110,
                          boxShadow: '0 6px 14px rgba(0,0,0,0.18)' }}>
              <div className="text-[9px] font-extrabold tracking-wider"
                   style={{ color: C.orDark, letterSpacing: '0.04em' }}>
                가장 가까움 · 220m
              </div>
              <div className="mt-0.5 text-[11px] font-bold" style={{ color: C.primary }}>
                참새방앗간
              </div>
              <div className="absolute"
                   style={{ left: '50%', bottom: -5, transform: 'translateX(-50%)',
                            width: 0, height: 0,
                            borderLeft: '5px solid transparent',
                            borderRight: '5px solid transparent',
                            borderTop: '5px solid #fff' }}/>
            </div>
          </div>

          {/* merchant list */}
          <div style={{ padding: '6px 16px 14px' }}>
            {[
              { name: '참새방앗간 카페',   tag: '수원시 영통구', dist: '220m', icon: 'cafe'  },
              { name: '동네책방 토끼와거북', tag: '수원시 권선구', dist: '480m', icon: 'book'  },
              { name: '소담 분식',          tag: '수원시 팔달구', dist: '1.1km', icon: 'store' },
            ].map((m, i, arr) => (
              <div key={m.name}
                   className="flex items-center gap-3"
                   style={{ padding: '10px 0',
                            borderBottom: i < arr.length - 1 ? '1px solid rgba(15,26,20,0.05)' : 'none' }}>
                <div className="w-[34px] h-[34px] rounded-[10px] grid place-items-center"
                     style={{ background: GG_PAY.blue50, color: GG_PAY.blueText }}>
                  <MerchantIcon kind={m.icon} size={16}/>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12.5px] font-bold truncate"
                       style={{ color: C.primary }}>{m.name}</div>
                  <div className="text-[10.5px] font-semibold mt-0.5 truncate"
                       style={{ color: C.text3 }}>{m.tag}</div>
                </div>
                <div className="flex items-center gap-1 rounded-full"
                     style={{ background: C.bg3, padding: '4px 8px' }}>
                  <LocationIcon size={10} color={C.mid} stroke={2}/>
                  <span className="text-[10.5px] font-extrabold" style={{ color: C.mid }}>
                    {m.dist}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 정보 ─── */}
      <div className="px-[26px] mt-3.5">
        <div className="bg-white rounded-[16px]"
             style={{ boxShadow: '0px 6px 16px rgba(15,26,20,0.05)',
                      padding: '4px 16px 8px' }}>
          {[
            ['유효기간', '발급 후 5년'],
            ['사용 방식', '경기지역화폐 앱 자동 충전'],
            ['환불·취소', '미사용 시 7일 내 가능'],
          ].map((row, i, arr) => (
            <div key={row[0]}
                 className="flex items-center justify-between"
                 style={{ padding: '12px 0',
                          borderBottom: i < arr.length - 1 ? '1px solid rgba(15,26,20,0.05)' : 'none' }}>
              <span className="text-[12px] font-semibold" style={{ color: C.text3 }}>{row[0]}</span>
              <span className="text-[12.5px] font-bold" style={{ color: C.primary }}>{row[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="absolute left-0 right-0 bottom-0"
           style={{ padding: '14px 20px 34px',
                    background: 'linear-gradient(rgba(248,249,244,0) 0%, #F8F9F4 30%)' }}>
        <button onClick={() => canBuy && onExchange && onExchange(reward)}
          disabled={!canBuy}
          className="w-full rounded-[16px] text-white font-extrabold flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
          style={{ background: canBuy ? C.primary : 'rgba(15,26,20,0.25)',
                   boxShadow: canBuy ? '0 14px 30px rgba(27,67,50,0.35)' : 'none',
                   fontSize: 15, letterSpacing: '-0.01em',
                   padding: '16px' }}>
          <span style={{ fontSize: 15 }}>🌱</span>
          {fmtNum(cost)} 새싹으로 교환하기
        </button>
        {!canBuy && (
          <div className="text-center text-[11px] mt-2 font-semibold" style={{ color: C.text3 }}>
            {fmtNum(cost - saessak)} 새싹만 더 모으면 가능해요
          </div>
        )}
      </div>
    </div>
  );
}

// ── Large bill (detail hero) ─────────────────────────────────────────────
function BillLarge({ won = 1000 }) {
  return (
    <div className="relative overflow-hidden"
         style={{ width: 240, height: 140, borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)',
                  border: '1.5px solid rgba(255,255,255,0.40)',
                  boxShadow: '0 14px 30px rgba(0,0,0,0.28)' }}>
      <img src="public/gyeonggi-mark.png" alt=""
           style={{ position: 'absolute', left: -28, top: -22,
                    width: 180, height: 180, opacity: 0.38, pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: 14, left: 18,
                    fontSize: 11, fontWeight: 800, letterSpacing: '0.04em', color: '#fff' }}>
        경기지역화폐
      </div>
      <div style={{ position: 'absolute', top: 14, right: 18,
                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.72)' }}>
        GYEONGGI PAY
      </div>
      <div style={{ position: 'absolute', right: 18, bottom: 12,
                    fontSize: 34, fontWeight: 800, letterSpacing: '-0.03em',
                    color: '#fff', fontFamily: 'Inter' }}>
        <WonSign />{won.toLocaleString()}
      </div>
      <div style={{ position: 'absolute', left: 18, bottom: 14,
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter' }}>
        GG 0123 4567 8901
      </div>
    </div>
  );
}

// ── Inline icons (share / location / merchant) ───────────────────────────
function ShareIcon({ size = 16, color = '#1B4332' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="18" cy="5"  r="2.5" stroke={color} strokeWidth="1.7" fill="none"/>
      <circle cx="6"  cy="12" r="2.5" stroke={color} strokeWidth="1.7" fill="none"/>
      <circle cx="18" cy="19" r="2.5" stroke={color} strokeWidth="1.7" fill="none"/>
      <path d="M8.2 10.8L15.8 6.5M8.2 13.2l7.6 4.3" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}

function LocationIcon({ size = 16, color = '#003C7E', stroke = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"
            stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="10" r="2.5" stroke={color} strokeWidth={stroke} fill="none"/>
    </svg>
  );
}

function MerchantIcon({ kind, size = 16 }) {
  const color = GG_PAY.blueText;
  const p = { fill: 'none', stroke: color, strokeWidth: 1.6,
              strokeLinecap: 'round', strokeLinejoin: 'round' };
  let body = null;
  if (kind === 'cafe') {
    body = (
      <>
        <path {...p} d="M4 7h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V7z"/>
        <path {...p} d="M17 9h2a2 2 0 0 1 0 4h-2"/>
        <path {...p} d="M8 4v1M11 3v2M14 4v1"/>
      </>
    );
  } else if (kind === 'book') {
    body = (
      <>
        <path {...p} d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5a1.5 1.5 0 0 1-1.5-1.5V5.5z"/>
        <path {...p} d="M20 5.5C20 4.7 19.3 4 18.5 4H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5V5.5z"/>
      </>
    );
  } else {
    body = (
      <path {...p} d="M3 8l1-3.5h16L21 8M3 8h18M3 8v11h18V8M9 19v-7h6v7"/>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {body}
    </svg>
  );
}

// ── Merchant map (stylized Gyeonggi-do outline with pins) ────────────────
function MerchantMap({ height = 170 }) {
  const palette = {
    sea:      '#E4EFFB',
    land:     '#F1F6FD',
    landDark: '#BFD7F5',
    road:     '#fff',
    pin:      GG_PAY.blueText,
    pinHi:    C.orAcc,
  };
  const pins = [
    { x: 205, y: 140, hi: true },
    { x: 175, y: 152 }, { x: 240, y: 152 },
    { x: 220, y: 130 }, { x: 195, y: 158 },
    { x: 110, y: 140 }, { x: 250, y: 95 }, { x: 165, y: 130 },
    { x: 230, y: 165 }, { x: 80,  y: 155 },
  ];
  return (
    <div className="relative w-full overflow-hidden"
         style={{ height, borderRadius: 16, background: palette.sea }}>
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
           aria-hidden="true">
        <defs>
          <pattern id="mapDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.7" fill="rgba(17,103,204,0.10)"/>
          </pattern>
        </defs>
        <rect width="320" height="200" fill="url(#mapDots)"/>
        {/* 경기도 outline */}
        <path d="M30 50 Q40 30 70 32 L120 28 Q150 30 175 45 L220 50 Q260 55 280 80 L295 110 Q290 145 260 160 L210 175 Q170 185 130 175 L80 170 Q40 165 25 140 L20 100 Q22 70 30 50 Z"
              fill={palette.land} stroke={palette.landDark} strokeWidth="1.5"/>
        {/* 서울 enclave */}
        <path d="M120 80 Q135 72 155 80 Q165 95 155 110 Q135 118 118 108 Q108 92 120 80 Z"
              fill={palette.sea} stroke={palette.landDark} strokeWidth="1.2"/>
        <text x="137" y="98" textAnchor="middle" fontSize="9" fontWeight="600"
              fill="#94A2B8" fontFamily="Noto Sans KR, system-ui">서울</text>
        {/* roads */}
        <path d="M50 130 Q90 110 130 130 T230 135" stroke={palette.road} strokeWidth="2.5"
              fill="none" strokeLinecap="round"/>
        <path d="M180 55 Q200 90 215 140" stroke={palette.road} strokeWidth="2"
              fill="none" strokeLinecap="round" opacity="0.7"/>
        <path d="M70 70 Q85 100 75 145" stroke={palette.road} strokeWidth="2"
              fill="none" strokeLinecap="round" opacity="0.7"/>
        {/* city dots */}
        {[[210,145,'수원'],[235,90,'의정부'],[170,150,'안양'],[250,150,'성남'],[80,150,'시흥'],[110,55,'고양'],[260,55,'동두천']].map(([x,y,n],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2" fill={palette.landDark}/>
            <text x={x+5} y={y+3} fontSize="7" fill="#94A2B8"
                  fontFamily="Noto Sans KR, system-ui">{n}</text>
          </g>
        ))}
        {/* pins */}
        {pins.map((pin, i) => (
          <g key={i} transform={`translate(${pin.x}, ${pin.y})`}>
            <circle cx="0" cy="14" r="6" fill="rgba(0,0,0,0.12)"/>
            <path d="M0 0 C-7 0 -10 6 -10 11 C-10 17 -3 25 0 28 C3 25 10 17 10 11 C10 6 7 0 0 0 Z"
                  fill={pin.hi ? palette.pinHi : palette.pin}
                  stroke="#fff" strokeWidth="1.5"/>
            <circle cx="0" cy="11" r="3.5" fill="#fff"/>
          </g>
        ))}
      </svg>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════
// 8. CONNECT — based on 10_Connect
// ═══════════════════════════════════════════════════════════════════════

function ConnectScreen({ accounts, onToggle, onAddAccount }) {
  // 토글이 켜진(on=true) 계정 수가 진척률 카운터에 반영됨.
  // 사용자가 토글을 끄고 켤 때마다 즉시 갱신.
  const connected = accounts.filter(a => a.connected && a.on).length;
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
        connectedCount={accounts.filter(a => a.kind === 'email' && a.connected && a.on).length}
        accounts={accounts.filter(a => a.kind === 'email')}
        onToggle={onToggle}
        addLabel="메일 계정 추가하기"
        onAdd={() => onAddAccount && onAddAccount('email')}
      />
      <ConnectSection
        title="Cloud 사진" icon={IconImage} iconBg={C.sage}
        connectedCount={accounts.filter(a => a.kind === 'photo' && a.connected && a.on).length}
        accounts={accounts.filter(a => a.kind === 'photo')}
        onToggle={onToggle}
        addLabel="사진 계정 추가하기"
        onAdd={() => onAddAccount && onAddAccount('photo')}
      />
      <ConnectSection
        title="Cloud 파일" icon={IconFolder} iconBg={C.mid}
        connectedCount={accounts.filter(a => a.kind === 'file' && a.connected && a.on).length}
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
