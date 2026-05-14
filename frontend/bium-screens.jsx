// All 5 screens for Bium prototype.

// ════════════════════════════════════════════════════════
// 1. HOME
// ════════════════════════════════════════════════════════

function HomeScreen({ lp, kg, areas, onCleanTap, onRewardsTap }) {
  return (
    <div className="screen-in pb-6">
      {/* greeting */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div>
          <div className="text-[13px] text-mute">5월 18일 월요일 · 4주차</div>
          <div className="text-[22px] font-bold text-deep tracking-tight mt-0.5 flex items-center gap-1.5">
            안녕하세요
            <Leaf size={20} color="#52B788"/>
          </div>
          <div className="text-[12px] text-mute mt-1.5 leading-relaxed">
            현재는 정리 → PC 폴더 분석하기 기능만을 제공합니다
          </div>
        </div>
        <div className="relative">
          <BrandMark glyph="지" palette={['#B7E4C7','#1B4332']} size={40}/>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-earth border-2 border-white"/>
        </div>
      </div>

      {/* hero: 이번 달 절감 탄소 */}
      <div className="mx-5 mt-5">
        <div className="relative overflow-hidden rounded-[28px] p-5 text-white"
             style={{background:'linear-gradient(155deg,#2D6A4F 0%, #1B4332 60%, #143028 100%)',
                     boxShadow:'0 18px 40px rgba(20,48,40,0.30)'}}>
          {/* deco leaves */}
          <svg width="160" height="160" viewBox="0 0 160 160" className="absolute -right-6 -top-6 opacity-25">
            <path d="M30 130C30 70 70 30 140 30c0 70-40 110-100 110a40 40 0 0 1-10 0Z" fill="#95D5B2"/>
            <path d="M30 130c30-40 60-60 90-70" stroke="#fff" strokeWidth="2" fill="none" opacity=".5"/>
          </svg>
          <div className="relative">
            <div className="flex items-center gap-2 text-sage2/90 text-[12px] font-medium">
              <IconLeaf size={14}/> 이번 달 절감 탄소
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-[68px] font-extrabold tracking-[-0.04em] num leading-none">12.4</span>
              <span className="text-[20px] font-semibold opacity-80">kg</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[13px] text-sage2/95">
              <IconTree size={14}/>
              <span>= 30년생 소나무 <b className="text-white">0.6그루</b>가 1년간 흡수</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-[11px] text-sage2/90 mb-1.5">
                  <span>이번 달 목표 20kg</span>
                  <span className="text-white font-semibold num">62%</span>
                </div>
                <div className="h-[7px] rounded-full bg-white/15 overflow-hidden">
                  <div className="h-full rounded-full"
                       style={{width:'62%', background:'linear-gradient(90deg,#95D5B2,#F4A261)'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LP card */}
      <div className="mx-5 mt-3">
        <button onClick={onRewardsTap} className="w-full text-left">
          <div className="relative overflow-hidden rounded-[24px] p-4 flex items-center"
               style={{background:'linear-gradient(120deg,#FFD9A8 0%, #F4A261 60%, #E78A45 100%)',
                       boxShadow:'0 10px 28px rgba(244,162,97,0.40)'}}>
            <div className="absolute right-4 -bottom-3 opacity-30">
              <IconSparkles size={84}/>
            </div>
            <div className="relative flex-1">
              <div className="text-[11px] font-semibold text-white/85 uppercase tracking-wider">My Points</div>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[36px] font-extrabold text-white num leading-none">2,340</span>
                <span className="text-white/95 font-bold text-[18px]">LP</span>
              </div>
              <div className="text-[11.5px] text-white/85 mt-1">+ 124 LP 오늘 획득</div>
            </div>
            <div className="relative">
              <div className="bg-white text-[#A85A1F] font-bold text-[13px] rounded-full px-4 py-2.5 flex items-center gap-1 shadow">
                쿠폰 교환 <IconChevR size={14}/>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* 4 area grid */}
      <div className="px-5 mt-6">
        <SectionHead title="영역별 진척률" sub="AI가 분석한 4가지 디지털 공간"
          action={<button className="text-[12px] font-semibold text-deep/70">전체</button>}/>
        <div className="grid grid-cols-2 gap-3">
          {areas.map(a => (
            <button key={a.key} onClick={()=>onCleanTap(a.key)}
                    className="text-left rounded-[20px] bg-white p-3.5 shadow-card active:scale-[0.98] transition-transform">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl grid place-items-center"
                     style={{background:a.tint, color:a.color}}>
                  <a.icon size={18}/>
                </div>
                <span className="text-[10px] font-bold text-earth bg-earth/10 rounded-full px-2 py-0.5 num">+{a.delta}kg</span>
              </div>
              <div className="mt-3 text-[12px] text-mute">{a.label}</div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[22px] font-extrabold text-deep num leading-none">{a.pct}</span>
                <span className="text-[12px] font-semibold text-deep/70">%</span>
              </div>
              <div className="mt-2"><ProgressBar value={a.pct} tone={a.pct>50?'sage':'deep'} height={4}/></div>
              <div className="mt-1.5 text-[10.5px] text-mute num">{a.count}개 분석됨</div>
            </button>
          ))}
        </div>
      </div>

      {/* 오늘의 미션 */}
      <div className="px-5 mt-5">
        <SectionHead title="오늘의 미션" sub="3분이면 끝나요"/>
        <button onClick={()=>onCleanTap('photo')}
                className="w-full text-left rounded-[22px] bg-white p-4 shadow-card flex items-center gap-3 active:scale-[0.99] transition-transform">
          <div className="w-12 h-12 rounded-2xl grid place-items-center text-white shrink-0"
               style={{background:'linear-gradient(135deg,#74C69D,#1B4332)'}}>
            <IconImage size={22}/>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[14px] font-bold text-deep">사진 흔들린 거 47장 정리하기</span>
            </div>
            <div className="text-[12px] text-mute mt-0.5">예상 1분 30초 · AI가 자동 선별</div>
            <div className="flex items-center gap-1.5 mt-2">
              <Pill tone="earth" icon={<IconBolt size={11}/>}>+24 LP</Pill>
              <Pill tone="sage" icon={<Leaf size={10}/>}>+0.18 kg</Pill>
            </div>
          </div>
          <IconChevR size={20} style={{color:C.deep}}/>
        </button>
      </div>

      {/* AI 추천 */}
      <div className="px-5 mt-3">
        <button className="w-full text-left rounded-[22px] p-4 flex items-center gap-3"
                style={{background:'#EFF6F0', border:`1px dashed ${C.sage}`}}>
          <div className="w-9 h-9 rounded-full grid place-items-center"
               style={{background:'#fff', color:C.deep}}>
            <IconSparkles size={18}/>
          </div>
          <div className="flex-1">
            <div className="text-[12.5px] font-bold text-deep">AI가 제안: 메일함 정리할 때예요</div>
            <div className="text-[11.5px] text-mute mt-0.5">7일째 안 본 광고메일 312통 발견 · +156 LP</div>
          </div>
          <IconChevR size={18} style={{color:C.deep}}/>
        </button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// 2. CLEAN — Tinder-style swipe
// ════════════════════════════════════════════════════════

const CLEAN_DATA = {
  pc: [
    { id:'p1', glyph:'A', tint:['#FFE4D6','#F4A261'], name:'AdobeUpdater.exe',
      kind:'백그라운드 프로그램',
      ai:'PC 부팅 시 자동 실행되는 어도비 업데이트 도구입니다. 6개월간 사용한 어도비 앱이 없고, 시스템 성능에 영향을 주고 있어요.',
      meta:['183 MB','마지막 사용 6개월 전','부팅 시 실행'],
      risk:98, lp:12, kg:0.05 },
    { id:'p2', glyph:'M', tint:['#D8EEDF','#52B788'], name:'macKeeper Helper',
      kind:'시스템 도우미',
      ai:'사용자가 설치한 적 없는 번들 프로그램입니다. CPU를 평균 4% 사용 중이며 광고를 표시합니다.',
      meta:['64 MB','설치 출처 불명','광고 포함'],
      risk:95, lp:18, kg:0.08 },
    { id:'p3', glyph:'토', tint:['#FFD9A8','#F4A261'], name:'토렌트 클라이언트',
      kind:'네트워크 도구',
      ai:'2년 전 마지막으로 사용했고, 백그라운드에서 항상 켜져 있어 전력 소비가 큰 프로그램입니다.',
      meta:['412 MB','마지막 사용 2년 전','백그라운드 실행'],
      risk:88, lp:24, kg:0.12 },
  ],
  app: [
    { id:'a1', glyph:'환', tint:['#D8EEDF','#1B4332'], name:'환율계산기 Pro',
      kind:'유틸리티 앱',
      ai:'1년 동안 한 번도 열지 않은 앱입니다. 같은 기능이 시스템 기본 앱에 포함되어 있어요.',
      meta:['28 MB','마지막 실행 1년 전','중복 기능'],
      risk:99, lp:6, kg:0.02 },
    { id:'a2', glyph:'쇼', tint:['#FFD9A8','#F4A261'], name:'쇼핑앱 (재설치 흔적)',
      kind:'쇼핑',
      ai:'캐시 1.2GB가 쌓여 있고 알림만 받고 있어요. 푸시만 끄거나 삭제할 수 있습니다.',
      meta:['1.2 GB 캐시','3개월 미사용','알림 47건/주'],
      risk:90, lp:32, kg:0.18 },
  ],
  mail: [
    { id:'m1', glyph:'쇼', tint:['#FFE4D6','#F4A261'], name:'쇼핑몰 마케팅 메일',
      kind:'발신자: marketing@shop.example',
      ai:'234통 발송, 열람 0%. 모두 광고 메일이고 본문은 거의 동일합니다.',
      meta:['234통','열람 0%','용량 38 MB'],
      risk:99, lp:50, kg:0.34 },
    { id:'m2', glyph:'영', tint:['#D8EEDF','#52B788'], name:'영수증 자동 발송',
      kind:'발신자: receipt@pay.example',
      ai:'3년 이상 된 영수증 메일 1,420통. 같은 내역은 가계부 앱에서 확인 가능합니다.',
      meta:['1,420통','평균 12 KB','3년 이상 된 메일'],
      risk:84, lp:42, kg:0.26 },
  ],
  photo: [
    { id:'ph1', glyph:'📷', tint:['#FFD9A8','#F4A261'], name:'흔들린 사진 47장',
      kind:'2024년 5월 ~ 2026년 4월',
      ai:'AI가 흔들림·초점 흐림으로 판단한 사진들입니다. 같은 장면 다른 컷이 모두 있어요.',
      meta:['47장','평균 4.1 MB','클러스터 12개'],
      risk:96, lp:24, kg:0.18 },
    { id:'ph2', glyph:'🖼', tint:['#D8EEDF','#74C69D'], name:'스크린샷 1년치',
      kind:'iOS 스크린샷 폴더',
      ai:'1년 이상 된 스크린샷 312장. 대부분 결제·인증·메모 캡처로 추정됩니다.',
      meta:['312장','용량 1.8 GB','평균 6 MB'],
      risk:78, lp:62, kg:0.42 },
  ],
};

const TABS = [
  { key:'pc',    label:'PC',    icon: IconCpu },
  { key:'app',   label:'앱',    icon: IconPhone },
  { key:'mail',  label:'메일',  icon: IconMail },
  { key:'photo', label:'사진',  icon: IconImage },
];

function CleanScreen({ initialTab='pc', onCleaned, onPcScanner }) {
  const [tab, setTab] = React.useState(initialTab);
  const [stack, setStack] = React.useState(CLEAN_DATA[initialTab].map((c,i)=>({...c, idx:i})));
  const [drag, setDrag] = React.useState({ x:0, y:0, on:false });
  const [burst, setBurst] = React.useState(null);
  const [popLP, setPopLP] = React.useState(null); // {amount, ts}
  const dragRef = React.useRef({ startX:0, startY:0, dragging:false });

  React.useEffect(()=>{
    setStack(CLEAN_DATA[tab].map((c,i)=>({...c, idx:i})));
    setDrag({x:0,y:0,on:false});
  }, [tab]);

  function commit(direction){
    // direction: 'right' = 정리, 'left' = 보관
    const card = stack[0];
    if (!card) return;
    if (direction === 'right'){
      setBurst(Date.now());
      setPopLP({ amount: card.lp, ts: Date.now() });
      onCleaned && onCleaned(card.lp, card.kg);
    }
    setStack(s => s.slice(1));
    setDrag({x:0,y:0,on:false});
  }

  function pStart(e){
    dragRef.current = { startX: e.clientX, startY: e.clientY, dragging:true };
    setDrag(d=>({...d, on:true}));
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function pMove(e){
    if (!dragRef.current.dragging) return;
    setDrag({ x: e.clientX-dragRef.current.startX, y: e.clientY-dragRef.current.startY, on:true });
  }
  function pEnd(){
    dragRef.current.dragging = false;
    const x = drag.x;
    if (x > 90) commit('right');
    else if (x < -90) commit('left');
    else setDrag({x:0,y:0,on:false});
  }

  const top = stack[0];
  const second = stack[1];

  return (
    <div className="screen-in h-full flex flex-col relative">
      {/* tabs */}
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-[20px] font-bold text-deep tracking-tight">정리해볼까요?</div>
          <Pill tone="paper" icon={<IconBolt size={11}/>}>{stack.length}개 남음</Pill>
        </div>
        <div className="mt-3 flex gap-1 p-1 rounded-2xl bg-paper2">
          {TABS.map(t => (
            <button key={t.key} onClick={()=>setTab(t.key)}
                    className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-[12.5px] font-semibold transition-all ${tab===t.key?'bg-white text-deep shadow':'text-mute'}`}>
              <t.icon size={14}/> {t.label}
            </button>
          ))}
        </div>
        {tab === 'pc' && (
          <button onClick={onPcScanner}
                  className="mt-3 w-full rounded-[18px] px-4 py-3 text-[13px] font-bold text-white flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
                  style={{background:'linear-gradient(135deg,#1B4332,#2D6A4F)', boxShadow:'0 10px 24px rgba(27,67,50,.18)'}}>
            <IconCpu size={16}/> PC 폴더 분석하기
          </button>
        )}
      </div>

      {/* card stack */}
      <div className="relative flex-1 mt-4 px-5" style={{minHeight:420}}>
        <LeafBurst run={burst}/>
        {/* directional hints */}
        {drag.on && drag.x < -25 && (
          <div className="absolute top-32 left-7 z-10 rotate-[-12deg] px-3 py-1.5 rounded-full bg-white shadow text-mute font-bold text-[13px] border" style={{borderColor:C.border}}>← 보관</div>
        )}
        {drag.on && drag.x > 25 && (
          <div className="absolute top-32 right-7 z-10 rotate-[12deg] px-3 py-1.5 rounded-full text-white font-bold text-[13px]" style={{background:C.earth, boxShadow:'0 8px 24px rgba(244,162,97,.5)'}}>정리 →</div>
        )}

        {/* third behind (scaled) */}
        {stack[2] && <CleanCard data={stack[2]} style={{ transform:'translateY(20px) scale(.92)', opacity:.55 }}/>}
        {second && <CleanCard data={second} style={{ transform:'translateY(10px) scale(.96)', opacity:.85 }}/>}
        {top && (
          <div onPointerDown={pStart} onPointerMove={pMove} onPointerUp={pEnd} onPointerCancel={pEnd}
               style={{
                 transform: `translate(${drag.x}px, ${drag.y*0.4}px) rotate(${drag.x*0.06}deg)`,
                 transition: drag.on ? 'none' : 'transform .25s cubic-bezier(.22,.61,.36,1)',
                 touchAction: 'none',
                 cursor: drag.on ? 'grabbing' : 'grab',
               }}>
            <CleanCard data={top} live tilt={drag.x}/>
          </div>
        )}
        {!top && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full grid place-items-center" style={{background:'#EFF6F0', color:C.deep}}>
              <IconCheck size={36}/>
            </div>
            <div className="mt-4 text-[18px] font-bold text-deep">오늘은 여기까지!</div>
            <div className="text-[13px] text-mute mt-1">잘했어요. 내일도 또 찾아올게요 🌱</div>
          </div>
        )}

        {/* LP pop */}
        {popLP && (
          <div key={popLP.ts}
               className="absolute left-1/2 -translate-x-1/2 top-[200px] lp-pop pointer-events-none z-40"
               onAnimationEnd={()=>setPopLP(null)}>
            <div className="px-4 py-2 rounded-full text-white font-extrabold num text-[18px] flex items-center gap-1.5"
                 style={{background:'linear-gradient(135deg,#F4A261,#E78A45)', boxShadow:'0 12px 30px rgba(244,162,97,.5)'}}>
              <IconBolt size={16}/> +{popLP.amount} LP
            </div>
          </div>
        )}
      </div>

      {/* action buttons */}
      {top && (
        <div className="px-7 pb-4 flex items-center justify-center gap-5">
          <button onClick={()=>commit('left')}
                  className="w-14 h-14 rounded-full bg-white shadow-card grid place-items-center active:scale-95 transition-transform"
                  style={{color:C.mute}}>
            <IconArchive size={22}/>
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-card grid place-items-center active:scale-95 transition-transform"
                  style={{color:C.deep}}>
            <IconSparkles size={20}/>
          </button>
          <button onClick={()=>commit('right')}
                  className="w-16 h-16 rounded-full grid place-items-center text-white active:scale-95 transition-transform"
                  style={{background:'linear-gradient(135deg,#F4A261,#E78A45)', boxShadow:'0 16px 32px rgba(244,162,97,.45)'}}>
            <IconCheck size={28}/>
          </button>
        </div>
      )}
    </div>
  );
}

function CleanCard({ data, style, live=false, tilt=0 }) {
  return (
    <div className="absolute left-5 right-5 rounded-[28px] bg-white p-5 shadow-pop"
         style={{...style, height: 420, border:`1px solid ${C.border}`}}>
      <div className="flex items-center justify-between">
        <Pill tone="paper">{data.kind}</Pill>
        <Pill tone="sage" icon={<IconShield size={11}/>}>안전 {data.risk}%</Pill>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <BrandMark glyph={data.glyph} palette={data.tint} size={56} ring/>
        <div className="flex-1 min-w-0">
          <div className="text-[18px] font-bold text-deep tracking-tight truncate">{data.name}</div>
          <div className="text-[11.5px] text-mute mt-0.5">탐지일 5월 8일</div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl p-3.5" style={{background:'#F6F8F3'}}>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-deep">
          <IconSparkles size={12}/> AI 분석
        </div>
        <div className="mt-1.5 text-[13.5px] text-ink2 leading-[1.55]">
          {data.ai}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.meta.map((m,i)=>(
          <div key={i} className="rounded-xl py-2 text-center" style={{background:'#FAFBF7'}}>
            <div className="text-[11px] font-bold text-deep num leading-tight">{m.split(/[ ]/)[0]}</div>
            <div className="text-[10px] text-mute mt-0.5 leading-tight">{m.split(/[ ]/).slice(1).join(' ')||' '}</div>
          </div>
        ))}
      </div>

      {/* reward preview */}
      <div className="absolute left-5 right-5 bottom-5">
        <div className="flex items-center justify-between rounded-2xl px-4 py-3"
             style={{background:'linear-gradient(120deg,#FFF5EB,#FFE4D6)'}}>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#A85A1F]">보상 미리보기</div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-extrabold text-[#A85A1F] num flex items-center gap-1"><IconBolt size={12}/> +{data.lp} LP</span>
            <span className="text-[12px] font-bold text-deep flex items-center gap-1"><Leaf size={10}/> +{data.kg}kg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// 3. ANALYZE
// ════════════════════════════════════════════════════════

const DONUT_DATA = [
  { label:'PC',     value:38, color:'#1B4332' },
  { label:'메일',    value:31, color:'#F4A261' },
  { label:'사진',    value:18, color:'#74C69D' },
  { label:'모바일앱', value:13, color:'#FFD9A8' },
];

const SENDERS = [
  { name:'쇼핑몰 마케팅',   addr:'mkt@shop.example',     count:234, read:0,  lp:50 },
  { name:'마켓 광고',      addr:'ads@market.example',    count:178, read:1,  lp:40 },
  { name:'배달앱 프로모션',  addr:'promo@deliv.example',   count:142, read:3,  lp:32 },
  { name:'영수증 자동발송', addr:'receipt@pay.example',   count:96,  read:0,  lp:24 },
];

const MONTH_LINE = [4.2, 5.1, 6.4, 8.0, 7.6, 9.4, 10.8, 12.4];
const MONTHS = ['10','11','12','1','2','3','4','5'];

function AnalyzeScreen() {
  return (
    <div className="screen-in pb-6">
      <div className="px-5 pt-4">
        <div className="text-[13px] text-mute">디지털 탄소 분석</div>
        <div className="text-[22px] font-bold text-deep tracking-tight mt-0.5 leading-tight">
          당신의 디지털 탄소,<br/>어디서 나올까요?
        </div>
      </div>

      {/* donut card */}
      <div className="mx-5 mt-4 rounded-[24px] bg-white p-5 shadow-card">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Donut data={DONUT_DATA} size={148} thickness={20}/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[10px] text-mute font-medium">총 발생량</div>
              <div className="text-[26px] font-extrabold text-deep num leading-none mt-0.5">32.7</div>
              <div className="text-[10px] text-mute">kg / 5월</div>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {DONUT_DATA.map(d=>(
              <div key={d.label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{background:d.color}}/>
                <span className="text-[12.5px] font-medium text-ink2 flex-1">{d.label}</span>
                <span className="text-[12.5px] font-bold text-deep num">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 pt-4 border-t flex items-center gap-2 text-[12px] text-ink2"
             style={{borderColor:C.border}}>
          <IconSparkles size={14} style={{color:C.deep}}/>
          <span>지난 달 대비 <b className="text-deep">2.1kg ↓</b> 줄어드는 중이에요</span>
        </div>
      </div>

      {/* monthly trend */}
      <div className="mx-5 mt-4 rounded-[24px] bg-white p-5 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[13.5px] font-bold text-deep">월별 발생 추이</div>
            <div className="text-[11.5px] text-mute mt-0.5">최근 8개월</div>
          </div>
          <Pill tone="sage">↓ 감소 추세</Pill>
        </div>
        <div className="mt-4">
          <LineChart data={MONTH_LINE} w={300} h={120}/>
          <div className="flex justify-between mt-1.5 text-[10px] text-mute font-medium num">
            {MONTHS.map(m=><span key={m}>{m}월</span>)}
          </div>
        </div>
      </div>

      {/* sender breakdown */}
      <div className="px-5 mt-5">
        <SectionHead title="안 보는 메일이 절반 이상이에요" sub="구독 해지로 즉시 LP 받기"/>
        <div className="space-y-2.5">
          {SENDERS.map((s,i)=>(
            <div key={i} className="rounded-[20px] bg-white p-3.5 shadow-card flex items-center gap-3">
              <BrandMark glyph={s.name[0]} palette={['#FCE5CB','#F4A261']} size={42}/>
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-bold text-deep tracking-tight truncate">{s.name}</div>
                <div className="text-[11px] text-mute truncate">{s.addr}</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[11px] font-semibold text-ink2 num">{s.count}통</span>
                  <span className="w-1 h-1 rounded-full bg-mute/40"/>
                  <span className="text-[11px] font-semibold text-red-600 num">열람 {s.read}%</span>
                </div>
              </div>
              <button className="rounded-full px-3 py-2 text-[12px] font-bold text-white whitespace-nowrap"
                      style={{background:'linear-gradient(135deg,#F4A261,#E78A45)', boxShadow:'0 6px 16px rgba(244,162,97,.35)'}}>
                해지 +{s.lp}LP
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* insight */}
      <div className="mx-5 mt-5 rounded-[22px] p-4 flex gap-3"
           style={{background:'#F0F5EE', border:`1px solid ${C.sage2}`}}>
        <div className="w-9 h-9 rounded-full grid place-items-center bg-white" style={{color:C.deep}}>
          <IconSparkles size={18}/>
        </div>
        <div className="flex-1 text-[12.5px] text-ink2 leading-[1.55]">
          <b className="text-deep">멋사대 평균보다 18% 적게 배출 중!</b><br/>
          PC 정리만 더 하면 상위 10%에 들 수 있어요.
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// 4. REWARDS  ⭐ Hero screen
// ════════════════════════════════════════════════════════

const COUPONS = [
  { id:'c1', name:'학식 1식 교환권', sub:'학생식당 / 멋사대 본관',
    cost:500, palette:['#FFE4D6','#F4A261'], emoji:'🍱', tag:'가장 인기' },
  { id:'c2', name:'카페 톨 사이즈 음료', sub:'전국 매장 사용 가능',
    cost:1200, palette:['#D8EEDF','#1B4332'], emoji:'☕', tag:null },
  { id:'c3', name:'화장품 5,000원권', sub:'온/오프라인 매장',
    cost:2000, palette:['#E8F5DD','#74C69D'], emoji:'🌿', tag:'친환경' },
  { id:'c4', name:'마켓 친환경 코너 10%', sub:'장보기 앱 전용',
    cost:1500, palette:['#FFE9D1','#F4A261'], emoji:'🛒', tag:null },
  { id:'c5', name:'환경단체 기부', sub:'1 LP = 10원 환산',
    cost:0, palette:['#D6E8DD','#1B4332'], emoji:'🌍', tag:'기부' },
  { id:'c6', name:'지하철 1회 이용권', sub:'수도권 전 노선',
    cost:1450, palette:['#E5EAFF','#5B7DD6'], emoji:'🚇', tag:null },
];

const FRIENDS = [
  { rank:1, name:'민지', dept:'경영',  kg:18.7, glyph:'민', palette:['#FFE4D6','#F4A261'] },
  { rank:2, name:'서윤', dept:'디자인', kg:15.3, glyph:'서', palette:['#D8EEDF','#52B788'] },
  { rank:3, name:'준호', dept:'CS',    kg:14.1, glyph:'준', palette:['#E5EAFF','#5B7DD6'] },
  { rank:4, name:'지원 (나)', dept:'미디어', kg:12.4, glyph:'지', palette:['#1B4332','#143028'], me:true },
  { rank:5, name:'태현', dept:'경제',   kg:9.8,  glyph:'태', palette:['#FCE5CB','#E78A45'] },
];

function RewardsScreen({ lp, onClaim }) {
  const next = 3000;
  const remain = Math.max(0, next - lp);
  const pct = Math.min(100, lp/next*100);

  return (
    <div className="screen-in pb-6">
      {/* hero */}
      <div className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-[28px] p-5 text-white"
             style={{background:'linear-gradient(150deg,#FFD9A8 0%, #F4A261 45%, #E07A2C 100%)',
                     boxShadow:'0 24px 48px rgba(224,122,44,0.40)'}}>
          {/* decorative orbs */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full" style={{background:'rgba(255,255,255,.18)', filter:'blur(2px)'}}/>
          <div className="absolute top-12 right-2 w-12 h-12 rounded-full" style={{background:'rgba(255,255,255,.25)'}}/>
          <div className="absolute bottom-2 right-20 w-6 h-6 rounded-full" style={{background:'rgba(255,255,255,.35)'}}/>
          {/* shimmer pulse */}
          <div className="absolute -top-2 -right-2 w-32 h-32 rounded-full pulse-ring"
               style={{background:'rgba(255,255,255,.25)'}}/>

          <div className="relative">
            <div className="flex items-center justify-between">
              <Pill tone="white" icon={<IconBolt size={11}/>}>My Points</Pill>
              <button className="rounded-full bg-white/20 backdrop-blur p-2">
                <IconCalendar size={16} style={{color:'#fff'}}/>
              </button>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-[64px] font-extrabold tracking-[-0.04em] num leading-none">2,340</span>
              <span className="text-[22px] font-bold opacity-90">LP</span>
            </div>
            <div className="mt-1 text-[12.5px] text-white/90">≈ 23,400원 상당</div>

            {/* progress to next */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-[12px] text-white/95 mb-1.5">
                <span>다음 보상까지</span>
                <span className="font-extrabold text-white num">{remain.toLocaleString()} LP</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/20 overflow-hidden relative">
                <div className="h-full rounded-full relative" style={{width:`${pct}%`, background:'#fff'}}>
                  <div className="absolute inset-0 shimmer-line"/>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-white/85 mt-1.5 num">
                <span>0</span>
                <span>{next.toLocaleString()} LP · 화장품 5,000원권</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* category filters */}
      <div className="px-5 mt-5 flex gap-2 overflow-x-auto noscroll">
        {['전체','식음료','뷰티','쇼핑','교통','기부'].map((t,i)=>(
          <button key={t} className={`px-3.5 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap ${i===0?'bg-deep text-white':'bg-white text-ink2 shadow-card'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* coupon grid */}
      <div className="px-5 mt-4 grid grid-cols-2 gap-3">
        {COUPONS.map(c=>(
          <button key={c.id} onClick={()=>onClaim(c)}
            className="text-left rounded-[22px] bg-white shadow-card overflow-hidden active:scale-[0.98] transition-transform">
            <div className="relative h-24 grid place-items-center text-3xl"
                 style={{background:`linear-gradient(135deg,${c.palette[0]},${c.palette[1]})`}}>
              <span className="text-[40px]" style={{textShadow:'0 2px 8px rgba(0,0,0,.18)'}}>{c.emoji}</span>
              {c.tag && (
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-deep bg-white">
                  {c.tag}
                </span>
              )}
              {/* striped placeholder watermark */}
              <svg className="absolute right-2 bottom-2 opacity-30" width="34" height="14" viewBox="0 0 34 14">
                <rect width="34" height="14" rx="3" fill="rgba(255,255,255,.4)"/>
                <text x="17" y="10" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#3B4A40">brand</text>
              </svg>
            </div>
            <div className="p-3">
              <div className="text-[12.5px] font-bold text-deep tracking-tight leading-tight">{c.name}</div>
              <div className="text-[10.5px] text-mute mt-0.5 truncate">{c.sub}</div>
              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-[14px] font-extrabold num"
                      style={{color: lp >= c.cost || c.cost===0 ? C.earth : C.mute}}>
                  {c.cost===0 ? '자유 LP' : `${c.cost.toLocaleString()} LP`}
                </span>
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${lp>=c.cost?'bg-deep text-white':'bg-paper2 text-mute'}`}>
                  {lp>=c.cost ? '교환' : `${(c.cost-lp).toLocaleString()} 더`}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* friend ranking */}
      <div className="mt-6">
        <div className="px-5">
          <SectionHead title="친구 랭킹" sub="이번 달 절감량 기준"
            action={<Pill tone="paper">5월</Pill>}/>
        </div>
        <div className="flex gap-3 px-5 overflow-x-auto noscroll pb-2">
          {FRIENDS.map(f=>(
            <div key={f.rank}
                 className={`shrink-0 w-[120px] rounded-[20px] p-3 ${f.me?'text-white':'bg-white text-deep'} shadow-card`}
                 style={f.me ? {background:'linear-gradient(160deg,#1B4332,#143028)'} : {}}>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-extrabold ${f.me?'text-earth3':'text-mute'} num`}>#{f.rank}</span>
                {f.me && <Pill tone="white">나</Pill>}
              </div>
              <BrandMark glyph={f.glyph} palette={f.palette} size={40} ring/>
              <div className={`text-[12.5px] font-bold mt-2 ${f.me?'text-white':'text-deep'} truncate`}>{f.name}</div>
              <div className={`text-[10px] ${f.me?'text-sage2':'text-mute'} truncate`}>{f.dept}학과</div>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className={`text-[16px] font-extrabold num ${f.me?'text-earth3':'text-deep'}`}>{f.kg}</span>
                <span className={`text-[10px] ${f.me?'text-sage2':'text-mute'}`}>kg</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dept challenge */}
      <div className="mx-5 mt-3 rounded-[22px] p-4 text-white relative overflow-hidden"
           style={{background:'linear-gradient(135deg,#2D6A4F,#1B4332)'}}>
        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute -right-4 -bottom-6 opacity-25">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#95D5B2" strokeWidth="2"/>
          <circle cx="60" cy="60" r="34" fill="none" stroke="#F4A261" strokeWidth="2"/>
        </svg>
        <div className="relative">
          <div className="flex items-center gap-2 text-[11px] font-bold text-sage2 uppercase tracking-wider">
            <IconFlame size={12}/> 학과 챌린지
          </div>
          <div className="text-[15px] font-bold mt-1.5">멋사대 미디어학과 5월 챌린지</div>
          <div className="text-[12px] text-sage2/95 mt-0.5">우리 학과 현재 <b className="text-earth3">3위</b> · 1위까지 124kg</div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              {n:'경영',  v:842, p:100},
              {n:'CS',    v:756, p:90},
              {n:'미디어', v:632, p:75, me:true},
            ].map(d=>(
              <div key={d.n} className={`rounded-xl p-2 ${d.me?'bg-earth/30':'bg-white/10'}`}>
                <div className="text-[10px] text-sage2/90">{d.n}</div>
                <div className="text-[14px] font-extrabold num">{d.v}<span className="text-[9px] font-medium">kg</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════
// 5. CONNECT
// ════════════════════════════════════════════════════════

function ConnectScreen({ accounts, onToggle }) {
  return (
    <div className="screen-in pb-6">
      <div className="px-5 pt-4">
        <div className="text-[13px] text-mute">통합 분석</div>
        <div className="text-[22px] font-bold text-deep tracking-tight mt-0.5 leading-tight">
          연결할수록<br/>더 정확해져요
        </div>
      </div>

      {/* status banner */}
      <div className="mx-5 mt-4 rounded-[22px] p-4 flex items-center gap-3"
           style={{background:'#F0F5EE', border:`1px solid ${C.sage2}`}}>
        <div className="relative w-12 h-12 rounded-full grid place-items-center text-white"
             style={{background:'linear-gradient(135deg,#74C69D,#1B4332)'}}>
          <IconLink size={20}/>
          <span className="absolute inset-0 rounded-full pulse-ring" style={{background:'rgba(116,198,157,.4)'}}/>
        </div>
        <div className="flex-1">
          <div className="text-[14px] font-bold text-deep">4 / 5개 연결됨</div>
          <div className="text-[12px] text-mute mt-0.5">PC 에이전트만 연결하면 완성</div>
        </div>
        <Pill tone="earth">+200 LP</Pill>
      </div>

      <div className="px-5 mt-5">
        <SectionHead title="연결된 계정"/>
        <div className="rounded-[22px] bg-white shadow-card overflow-hidden divide-y" style={{borderColor:C.border}}>
          {accounts.map((a,i)=>(
            <div key={a.id} className="px-4 py-3.5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl grid place-items-center"
                   style={{background:a.tint, color:a.color}}>
                <a.icon size={20}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-bold text-deep">{a.name}</div>
                <div className="text-[11px] text-mute mt-0.5">
                  {a.connected ? `마지막 분석 ${a.lastSync}` : a.cta}
                </div>
              </div>
              {a.connected ? (
                <Toggle on={a.on} onChange={(v)=>onToggle(a.id, v)}/>
              ) : (
                <button className="rounded-full px-3 py-1.5 text-[11.5px] font-bold text-white"
                        style={{background:C.deep}}>
                  연결
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* privacy */}
      <div className="px-5 mt-5">
        <SectionHead title="프라이버시"/>
        <div className="rounded-[22px] bg-white shadow-card p-4 space-y-3">
          {[
            { i:IconLock,   t:'본문은 절대 저장하지 않아요',
                            s:'메타데이터(파일명·용량·발신자)만 분석합니다' },
            { i:IconShield, t:'기기에서 먼저 분석',
                            s:'1차 분석은 디바이스 내에서, 통계만 서버로' },
            { i:IconTrash,  t:'언제든 데이터 삭제',
                            s:'설정에서 한 번에 모든 분석 데이터 삭제' },
          ].map((row,i)=>(
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl grid place-items-center bg-paper2 shrink-0" style={{color:C.deep}}>
                <row.i size={16}/>
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-bold text-deep">{row.t}</div>
                <div className="text-[11.5px] text-mute mt-0.5 leading-snug">{row.s}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-[10.5px] text-mute mt-2 px-2 leading-relaxed">
          새싹은 KISA 정보보호 인증을 받은 보안 표준을 따릅니다. 자세한 처리방침은 설정 &gt; 약관에서 확인할 수 있어요.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen, CleanScreen, AnalyzeScreen, RewardsScreen, ConnectScreen, CleanCard,
});
