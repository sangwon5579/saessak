// Bium app shell — IOSDevice frame + screen routing + bottom nav.

const { useState, useMemo, useCallback } = React;

const TAB_DEFS = [
  { key:'home',     label:'홈',     icon: IconHome    },
  { key:'clean',    label:'정리',   icon: IconBroom   },
  { key:'analyze',  label:'분석',   icon: IconChart   },
  { key:'rewards',  label:'보상',   icon: IconGift    },
  { key:'connect',  label:'연결',   icon: IconLink    },
];

const AREAS = [
  { key:'pc',    label:'PC',       icon: IconCpu,   tint:'#E8F2EC', color:'#1B4332', pct:67, delta:1.2, count:48 },
  { key:'app',   label:'모바일 앱',  icon: IconPhone, tint:'#FFF1E1', color:'#A85A1F', pct:23, delta:0.4, count:124 },
  { key:'mail',  label:'메일',     icon: IconMail,  tint:'#EFF6F0', color:'#2D6A4F', pct:45, delta:0.8, count:1842 },
  { key:'photo', label:'사진',     icon: IconImage, tint:'#FFE9D1', color:'#E07A2C', pct:12, delta:0.2, count:312 },
];

const ACCOUNTS = [
  { id:'pc',    name:'PC 에이전트',         icon:IconCpu,   tint:'#E8F2EC', color:'#1B4332',
    connected:false, on:false, cta:'macOS / Windows · 다운로드 후 연결' },
  { id:'mob',   name:'모바일 앱 분석',       icon:IconPhone, tint:'#EFF6F0', color:'#2D6A4F',
    connected:true,  on:true, lastSync:'오늘 오전 11:24 · 자동' },
  { id:'gmail', name:'Gmail',              icon:IconMail,  tint:'#FCE5CB', color:'#A85A1F',
    connected:true,  on:true, lastSync:'5월 7일 22:10' },
  { id:'naver', name:'네이버 메일',         icon:IconMail,  tint:'#D8EEDF', color:'#1B4332',
    connected:true,  on:false, lastSync:'5월 5일 18:32' },
  { id:'icloud',name:'iCloud / Google 사진', icon:IconCloud, tint:'#E5EAFF', color:'#3A55A3',
    connected:true,  on:true, lastSync:'오늘 오전 09:01' },
];

function BottomNav({ active, onChange }) {
  return (
    <div className="absolute left-0 right-0 bottom-0 px-3 pb-[18px] pt-2 z-30"
         style={{
           background:'linear-gradient(180deg, rgba(248,249,244,0) 0%, rgba(248,249,244,0.9) 30%, rgba(248,249,244,1) 100%)',
         }}>
      <div className="rounded-[28px] bg-white shadow-card flex items-center justify-around py-2 px-2"
           style={{boxShadow:'0 2px 6px rgba(15,26,20,0.05), 0 16px 36px rgba(15,26,20,0.10)'}}>
        {TAB_DEFS.map(t => {
          const on = active === t.key;
          return (
            <button key={t.key} onClick={()=>onChange(t.key)}
                    className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-2xl active:scale-95 transition-transform">
              <div className="relative">
                <t.icon size={22} style={{color: on ? C.deep : '#9AA89F'}}/>
                {on && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-deep"/>}
              </div>
              <span className="text-[10px] font-semibold tracking-tight"
                    style={{color: on ? C.deep : '#9AA89F'}}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Toast for reward feedback
function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-50"
         style={{bottom: 110, animation:'screenIn .3s ease-out'}}>
      <div className="px-4 py-3 rounded-2xl text-white flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap"
           style={{background:'linear-gradient(135deg,#1B4332,#143028)', boxShadow:'0 14px 30px rgba(15,26,20,.35)'}}>
        <IconCheck size={16}/> {msg}
      </div>
    </div>
  );
}

function StatusBarBium() {
  return (
    <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-7 pt-3 pb-1">
      <span className="text-[15px] font-bold text-ink num" style={{letterSpacing:'-0.02em'}}>9:41</span>
      <span className="text-ink flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 19 12">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" fill="currentColor"/>
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" fill="currentColor"/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="currentColor"/>
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" fill="currentColor"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="currentColor"/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="currentColor"/>
          <circle cx="8.5" cy="10.5" r="1.3" fill="currentColor"/>
        </svg>
        <svg width="24" height="12" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill="currentColor"/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState('home');
  const [cleanInitTab, setCleanInitTab] = useState('pc');
  const [lp, setLp] = useState(2340);
  const [kg, setKg] = useState(12.4);
  const [accounts, setAccounts] = useState(ACCOUNTS);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(()=>setToast(null), 1800);
  }, []);

  const onCleaned = useCallback((earnLp, earnKg) => {
    setLp(v => v + earnLp);
    setKg(v => +(v + earnKg).toFixed(2));
    showToast(`정리 완료! +${earnLp} LP · +${earnKg}kg 절감`);
  }, [showToast]);

  const onClaim = useCallback((c) => {
    if (c.cost === 0) {
      showToast('환경단체 기부 페이지로 이동');
      return;
    }
    if (lp < c.cost) {
      showToast(`${(c.cost-lp).toLocaleString()} LP만 더 모으면 가능해요`);
      return;
    }
    setLp(v => v - c.cost);
    showToast(`${c.name} 교환 완료!`);
  }, [lp, showToast]);

  const onCleanTap = useCallback((areaKey) => {
    if (areaKey === 'pc') {
      setTab('pcScanner');
      return;
    }
    setCleanInitTab(areaKey);
    setTab('clean');
  }, []);

  const onToggle = useCallback((id, v) => {
    setAccounts(a => a.map(x => x.id===id ? {...x, on:v} : x));
  }, []);

  const screen = useMemo(() => {
    switch(tab){
      case 'home':
        return <HomeScreen lp={lp} kg={kg} areas={AREAS}
                  onCleanTap={onCleanTap}
                  onRewardsTap={()=>setTab('rewards')}/>;
      case 'clean':
        return <CleanScreen initialTab={cleanInitTab} onCleaned={onCleaned}
                  onPcScanner={()=>setTab('pcScanner')}/>;
      case 'pcScanner':
        return <BiumFileScanner/>;
      case 'analyze':
        return <AnalyzeScreen/>;
      case 'rewards':
        return <RewardsScreen lp={lp} onClaim={onClaim}/>;
      case 'connect':
        return <ConnectScreen accounts={accounts} onToggle={onToggle}/>;
    }
  }, [tab, lp, kg, accounts, cleanInitTab, onCleanTap, onCleaned, onClaim, onToggle]);

  // Phone canvas: 375 x 812
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div className="relative" style={{
        width: 375, height: 812, borderRadius: 48, overflow: 'hidden',
        background: C.paper, boxShadow: '0 40px 80px rgba(15,26,20,0.18), 0 0 0 1px rgba(15,26,20,0.10)',
        fontFamily: 'Pretendard, -apple-system, system-ui, sans-serif',
      }}>
        {/* dynamic island */}
        <div style={{
          position:'absolute', top:11, left:'50%', transform:'translateX(-50%)',
          width:120, height:34, borderRadius:24, background:'#000', zIndex:50,
        }}/>

        <StatusBarBium/>

        {/* content */}
        <div className="absolute inset-0 noscroll" style={{paddingTop:54, paddingBottom:90, overflowY:'auto'}}>
          {screen}
        </div>

        <Toast msg={toast}/>
        <BottomNav active={tab === 'pcScanner' ? 'clean' : tab} onChange={setTab}/>

        {/* home indicator */}
        <div style={{
          position:'absolute', bottom:6, left:0, right:0, zIndex:60,
          display:'flex', justifyContent:'center', pointerEvents:'none',
        }}>
          <div style={{width:139, height:5, borderRadius:100, background:'rgba(15,26,20,0.25)'}}/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
