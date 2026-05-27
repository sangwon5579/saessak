// 비움/새싹 app shell — iOS device frame + screen routing + bottom nav.
// Routing model: a single `screen` enum; sub-screens derive their parent
// tab via `tabFor(screen)`.

const { useState, useMemo, useCallback } = React;

// ─── Bottom-nav tabs (new design order: 홈/분석/정리/리워드/연결) ───
const TAB_DEFS = [
  { key: 'home',    label: '홈',     icon: IconHome  },
  { key: 'analyze', label: '분석',   icon: IconChart },
  { key: 'clean',   label: '정리',   icon: IconBroom },
  { key: 'rewards', label: '리워드', icon: IconGift  },
  { key: 'connect', label: '연결',   icon: IconLink  },
];

// Sub-screen → parent tab map
function tabFor(screen) {
  switch (screen) {
    case 'home':           return 'home';
    case 'analyze':        return 'analyze';
    case 'clean':
    case 'trashBin':
    case 'cleanComplete':  return 'clean';
    case 'rewards':
    case 'rewardsDetail':  return 'rewards';
    case 'connect':        return 'connect';
    default:               return 'home';
  }
}

// Screens where the bottom nav should be hidden
function hideNav(screen) {
  return screen === 'rewardsDetail' || screen === 'trashBin';
}

// ─── Home-screen "areas" (3 digital spaces, per new design) ─────
const AREAS = [
  { key: 'email', label: '이메일',    icon: IconMail,   tint: '#ED9864', pct: 45, delta: 0.8, count: 1842 },
  { key: 'photo', label: 'Cloud 사진', icon: IconImage,  tint: '#84BA99', pct: 45, delta: 0.8, count: 1842 },
  { key: 'file',  label: 'Cloud 파일', icon: IconFolder, tint: '#2D6A4F', pct: 45, delta: 0.8, count: 1842 },
];

// ─── Default connected accounts (Connect screen) ────────────────
const DEFAULT_ACCOUNTS = [
  { id: 'gmail',   kind: 'email', name: 'Gmail',       detail: 'likelion@gmail.com',
    letter: 'G', color: C.gmail,   bg: '#FFE2E0', connected: true,  on: true },
  { id: 'outlook', kind: 'email', name: 'outlook',     detail: 'likelion@outlook.com',
    letter: 'O', color: C.outlook, bg: '#E0E7FF', connected: true,  on: true },
  { id: 'icloud',  kind: 'photo', name: 'iCloud 사진', detail: '4,832장 분석 중',
    letter: 'i', color: C.icloud,  bg: '#E0E7F4', connected: true,  on: true },
  { id: 'gdrive',  kind: 'file',  name: 'Google Drive', detail: '오늘 오전 11:24 동기화',
    letter: 'D', color: C.mid,     bg: '#D8EEDF', connected: true,  on: true },
];

// ─── Bottom nav ─────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  return (
    <div className="absolute left-0 right-0 bottom-0 px-3 pb-[18px] pt-2 z-30"
         style={{
           background: 'linear-gradient(180deg, rgba(248,249,244,0) 0%, rgba(248,249,244,0.9) 30%, rgba(248,249,244,1) 100%)',
         }}>
      <div className="rounded-[28px] bg-white flex items-center justify-around py-2 px-2"
           style={{ boxShadow: '0px 16px 36px rgba(15,26,20,0.10)' }}>
        {TAB_DEFS.map(t => {
          const on = active === t.key;
          return (
            <button key={t.key} onClick={() => onChange(t.key)}
                    className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-2xl active:scale-95 transition-transform">
              <t.icon size={22} style={{ color: on ? C.primary : C.text5 }}/>
              <span className="text-[10px] font-bold"
                    style={{ color: on ? C.primary : C.text5 }}>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Splash / launch screen ──────────────────────────────────
// Shown for ~1 second on first mount and on page refresh.
// Layout: logo PNG → tagline → progress bar → "loading ..." text.
// Z-index sits ABOVE the bottom nav / content but BELOW the iOS
// status bar + dynamic island so 9:41 and battery still peek through.
function SplashScreen({ closing }) {
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center px-8 ${closing ? 'splash-out' : 'screen-in'}`}
         style={{ background: C.base, zIndex: 35 }}>
      {/* logo (PNG with transparent background — lives under frontend/public/) */}
      <img src="public/logo.png" alt="새싹 로고"
           style={{ width: 160, height: 160, objectFit: 'contain' }}/>

      {/* tagline */}
      <div className="mt-2 text-[13px] font-medium text-center"
           style={{ color: C.text3 }}>
        디지털 탄소를 지우고, 포인트로 보상받아요
      </div>

      {/* progress bar */}
      <div className="mt-6 w-[180px] h-[5px] rounded-full overflow-hidden"
           style={{ background: '#E4E7DD' }}>
        <div className="h-full splash-fill"
             style={{ background: 'linear-gradient(90deg, #74C69D, #2D6A4F)',
                      borderRadius: 9999 }}/>
      </div>

      {/* loading label */}
      <div className="mt-3 text-[12px] font-medium" style={{ color: C.text2 }}>
        loading ...
      </div>
    </div>
  );
}

// ─── Toast ─────────────────────────────────────────────────────
function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-50"
         style={{ bottom: 110, animation: 'screenIn .3s ease-out' }}>
      <div className="px-4 py-3 rounded-2xl text-white flex items-center gap-2 text-[13px] font-bold whitespace-nowrap"
           style={{ background: 'linear-gradient(135deg,#1B4332,#143028)',
                    boxShadow: '0 14px 30px rgba(15,26,20,.35)' }}>
        <IconCheck size={16}/> {msg}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// App
// ═══════════════════════════════════════════════════════════════════
function App() {
  // Splash gate: shown for 1 s on first mount. `closing` runs a 0.35 s
  // fade-out so the home screen doesn't pop in too abruptly.
  const [splash, setSplash]   = useState('on');     // 'on' | 'closing' | 'off'
  React.useEffect(() => {
    const t1 = setTimeout(() => setSplash('closing'), 1000);
    const t2 = setTimeout(() => setSplash('off'),     1350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const [screen, setScreen]   = useState('home');
  const [reward, setReward]   = useState(null);  // for rewardsDetail
  const [seedTotal, setSeedTotal] = useState(2340);
  const [seedToday, setSeedToday] = useState(24);
  const [todayCO2g, setTodayCO2g] = useState(2.4); // grams
  const [accounts, setAccounts]   = useState(DEFAULT_ACCOUNTS);
  const [sessionEarnedSeed, setSessionEarnedSeed] = useState(150);
  const [sessionEarnedCO2g, setSessionEarnedCO2g] = useState(420);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  }, []);

  // Card swiped 'right' (정리) handler
  const onCleaned = useCallback((earnSeed, earnKg) => {
    setSeedToday(v => v + earnSeed);
    setSeedTotal(v => v + earnSeed);
    setTodayCO2g(v => +(v + earnKg * 1000).toFixed(2));
    setSessionEarnedSeed(v => v + earnSeed);
    setSessionEarnedCO2g(v => +(v + earnKg * 1000).toFixed(2));
    showToast(`정리 완료! +${earnSeed} 새싹 · -${earnKg}kg`);
  }, [showToast]);

  const onClaim = useCallback((r) => {
    if (r.cost === 0) {
      showToast('환경단체 기부 페이지로 이동');
      return;
    }
    if (seedTotal < r.cost) {
      showToast(`${(r.cost - seedTotal).toLocaleString()} 새싹만 더 모으면 가능해요`);
      return;
    }
    setSeedTotal(v => v - r.cost);
    showToast(`${r.name} 교환 완료!`);
    setScreen('rewards');
  }, [seedTotal, showToast]);

  const onAreaTap = useCallback(() => setScreen('clean'), []);

  const onToggle = useCallback((id, v) => {
    setAccounts(a => a.map(x => x.id === id ? { ...x, on: v } : x));
  }, []);

  const onTabChange = useCallback((tab) => {
    setScreen(tab);
    setReward(null);
  }, []);

  const onComplete = useCallback(() => {
    setScreen('cleanComplete');
  }, []);

  const view = useMemo(() => {
    switch (screen) {
      case 'home':
        return <HomeScreen
                  saessakToday={seedToday}
                  saessakTotal={seedTotal}
                  todayCO2g={todayCO2g}
                  areas={AREAS}
                  onAreaTap={onAreaTap}
                  onCleanTap={onAreaTap}
                  onRewardsTap={() => setScreen('rewards')}/>;
      case 'analyze':
        return <AnalyzeScreen/>;
      case 'clean':
        return <CleanScreen
                  onCleaned={onCleaned}
                  onTrashBin={() => setScreen('trashBin')}
                  onComplete={onComplete}/>;
      case 'trashBin':
        return <TrashBinScreen onBack={() => setScreen('clean')}/>;
      case 'cleanComplete':
        return <CleanCompleteScreen
                  earnedSeed={sessionEarnedSeed}
                  earnedCO2g={sessionEarnedCO2g}
                  onMarket={() => setScreen('rewards')}
                  onHome={() => setScreen('home')}/>;
      case 'rewards':
        return <RewardsScreen
                  saessak={seedTotal}
                  onClaim={onClaim}
                  onDetail={(r) => { setReward(r); setScreen('rewardsDetail'); }}/>;
      case 'rewardsDetail':
        return <RewardsDetailScreen
                  reward={reward}
                  saessak={seedTotal}
                  onBack={() => setScreen('rewards')}
                  onExchange={onClaim}/>;
      case 'connect':
        return <ConnectScreen
                  accounts={accounts}
                  onToggle={onToggle}
                  onAddAccount={(kind) => showToast(`${kind} 계정 추가 흐름 (준비 중)`)}/>;
      default:
        return null;
    }
  }, [screen, seedToday, seedTotal, todayCO2g, accounts, reward, sessionEarnedSeed, sessionEarnedCO2g,
      onCleaned, onClaim, onAreaTap, onToggle, onComplete, showToast]);

  // ─── iPhone canvas: 375 × 812, rounded screen ─────────────────
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="relative" style={{
        width: 375, height: 812, borderRadius: 48, overflow: 'hidden',
        background: C.base,
        boxShadow: '0px 40px 80px rgba(15,26,20,0.18), 0 0 0 1px rgba(15,26,20,0.10)',
        fontFamily: 'Inter, "Noto Sans KR", -apple-system, system-ui, sans-serif',
      }}>
        {/* dynamic island */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 120, height: 34, borderRadius: 24, background: '#000', zIndex: 50,
        }}/>

        <StatusBarBium/>

        {/* content scroll area */}
        <div className="absolute inset-0 noscroll"
             style={{ paddingTop: 54, paddingBottom: hideNav(screen) ? 24 : 90, overflowY: 'auto' }}>
          {view}
        </div>

        <Toast msg={toast}/>
        {splash === 'off' && !hideNav(screen) && (
          <BottomNav active={tabFor(screen)} onChange={onTabChange}/>
        )}

        {/* splash overlay — covers everything except status bar / home indicator */}
        {splash !== 'off' && <SplashScreen closing={splash === 'closing'}/>}

        {/* home indicator */}
        <div style={{
          position: 'absolute', bottom: 6, left: 0, right: 0, zIndex: 60,
          display: 'flex', justifyContent: 'center', pointerEvents: 'none',
        }}>
          <div style={{ width: 139, height: 5, borderRadius: 100, background: 'rgba(15,26,20,0.25)' }}/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
