// 비움/새싹 shared design tokens, helpers, charts.
// All tokens map to test/design-system.md (Noto Sans KR + Inter, green + orange palette).

const C = {
  // ─── greens ──────────────────────────────────
  darkest: '#0F1A14',
  dark:    '#143028',
  primary: '#1B4332',
  mid:     '#2D6A4F',
  success: '#2EA647',
  light:   '#52B788',
  soft:    '#74C69D',
  sage:    '#84BA99',
  pale:    '#B7E4C7',
  bg1:     '#D8EEDF',
  bg2:     '#EFF1E8',
  bg3:     '#F0F5EE',
  infoBg:  '#F6F8F3',

  // ─── oranges ─────────────────────────────────
  orDark:  '#A85A1F',
  orPri:   '#FF7100',
  orAcc:   '#F4A261',
  orSoft:  '#ED9864',
  orYel:   '#FCBF5E',
  orBg1:   '#FCE5CB',
  orBg2:   '#FFE4D6',
  orBg3:   '#FFF5EB',
  orBg4:   '#FFD9A8',

  // ─── neutrals ────────────────────────────────
  base:    '#F8F9F4',
  white:   '#FFFFFF',
  text:    '#1B4332',
  text2:   '#3B4A40',
  text3:   '#5D6B62',
  text4:   '#7C8A80',
  text5:   '#9AA89F',
  divider: '#E4E7DD',

  // ─── external brand ──────────────────────────
  gmail:   '#EA4335',
  outlook: '#0327C7',
  icloud:  '#3A55A3',

  // ─── legacy aliases (kept so older code paths don't crash) ──
  deep:    '#1B4332',
  deep2:   '#143028',
  deep3:   '#2D6A4F',
  sage2:   '#B7E4C7',
  earth:   '#F4A261',
  earth2:  '#F8C291',
  earth3:  '#FFD9A8',
  paper:   '#F8F9F4',
  paper2:  '#EFF1E8',
  ink:     '#0F1A14',
  ink2:    '#3B4A40',
  mute:    '#7C8A80',
  border:  '#E4E7DD',
};

// ─── Gradients (reused on hero cards & buttons) ───────
const G = {
  heroDark:    'linear-gradient(154deg, #2D7A3F 0%, #1B4332 50%, #143028 100%)',
  heroOrange:  'linear-gradient(150deg, #FFD9A8 0%, #F4A261 50%, #E07A2C 100%)',
  rewardHero:  'linear-gradient(150deg, #2EA647 0%, #1B5E2E 100%)',
  greenBtn:    'linear-gradient(170deg, #1B5E2E 15%, #0F2E18 85%)',
  orangeBtn:   'linear-gradient(135deg, #F4A261 15%, #E78A45 85%)',
  rewardOrange:'linear-gradient(165deg, #FFF5EB 13%, #FFE4D6 87%)',
};

// ─── Pill ──────────────────────────────────────────
function Pill({ children, tone = 'sage', className = '', icon }) {
  const tones = {
    sage:   { bg: C.bg1,   fg: C.primary },
    paper:  { bg: C.bg2,   fg: C.text2   },
    earth:  { bg: C.orBg1, fg: C.orDark  },
    orange: { bg: C.orBg3, fg: C.orDark  },
    deep:   { bg: C.primary, fg: C.base  },
    white:  { bg: 'rgba(255,255,255,.18)', fg: '#fff' },
    info:   { bg: C.bg3,   fg: C.primary },
    danger: { bg: '#FEE2E2', fg: '#B91C1C' },
  };
  const t = tones[tone] || tones.sage;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold leading-none ${className}`}
          style={{ background: t.bg, color: t.fg, letterSpacing: '-0.01em' }}>
      {icon}{children}
    </span>
  );
}

// ─── ProgressBar — thin track with optional gradient fill ───
function ProgressBar({ value, tone = 'light', height = 4 }) {
  const fill = {
    deep:  'linear-gradient(90deg,#1B4332,#2D6A4F)',
    light: '#52B788',
    earth: 'linear-gradient(90deg,#F8C291,#F4A261)',
    sage:  '#74C69D',
    white: 'linear-gradient(90deg,#B8E6C5,#fff)',
  }[tone] || '#52B788';
  return (
    <div className="rounded-full overflow-hidden" style={{ height, background: C.bg2 }}>
      <div style={{ width: `${Math.max(0, Math.min(100, value))}%`, height: '100%',
                    background: fill, borderRadius: 9999,
                    transition: 'width .5s ease' }}/>
    </div>
  );
}

// ─── BrandMark — abstract gradient avatar (used for senders, friends) ───
function BrandMark({ glyph, palette = ['#FCE5CB', '#F4A261'], size = 40, icon, ring = false }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{
        background: `radial-gradient(circle at 30% 30%, ${palette[0]}, ${palette[1]})`,
        boxShadow: ring
          ? '0 0 0 2px #fff, 0 4px 14px rgba(15,26,20,.12)'
          : '0 4px 14px rgba(15,26,20,.10)',
      }}/>
      <div className="absolute inset-0 grid place-items-center text-white font-bold"
           style={{ fontSize: size * 0.42, letterSpacing: '-0.04em',
                    textShadow: '0 1px 2px rgba(0,0,0,.18)' }}>
        {icon || glyph}
      </div>
    </div>
  );
}

// ─── Leaf SVG (small, decorative + used in burst) ─────────
function Leaf({ size = 14, color = '#52B788', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M3 21c0-9 7-15 18-15-1 11-7 17-15 17a8 8 0 0 1-3 0Z" fill={color}/>
      <path d="M3 21c4-6 9-9 14-10" stroke="#fff" strokeWidth="1.4"
            strokeLinecap="round" fill="none" opacity=".55"/>
    </svg>
  );
}

function LeafBurst({ run, originX = 180, originY = 380 }) {
  // 14 leaves flutter outward+downward each time `run` id changes.
  const leaves = React.useMemo(() => Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    tx: (Math.random() - 0.5) * 240,
    rot: 360 + Math.random() * 540 * (Math.random() > .5 ? 1 : -1),
    delay: Math.random() * 0.18,
    size: 10 + Math.random() * 10,
    color: ['#52B788', '#95D5B2', '#74C69D', '#F4A261'][i % 4],
    dx: (Math.random() - 0.5) * 40,
    dy: (Math.random() - 0.5) * 30,
  })), [run]);
  if (run == null) return null;
  return (
    <div key={run} className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 30 }}>
      {leaves.map(l => (
        <div key={l.id} className="absolute leaf-anim"
             style={{
               left: originX + l.dx, top: originY + l.dy,
               '--tx': `${l.tx}px`, '--rot': `${l.rot}deg`,
               animationDelay: `${l.delay}s`,
             }}>
          <Leaf size={l.size} color={l.color}/>
        </div>
      ))}
    </div>
  );
}

// ─── Donut chart — used in Analyze ────────────────────────
function Donut({ data, size = 180, thickness = 22, gap = 2 }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = size / 2 - thickness / 2;
  const cx = size / 2, cy = size / 2;
  const C2 = 2 * Math.PI * r;
  let off = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.bg2} strokeWidth={thickness}/>
      {data.map((d, i) => {
        const frac = d.value / total;
        const len = frac * C2 - gap;
        const dash = `${len} ${C2 - len}`;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none"
                  stroke={d.color} strokeWidth={thickness}
                  strokeDasharray={dash}
                  strokeDashoffset={-off}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${cx} ${cy})`}/>
        );
        off += frac * C2;
        return el;
      })}
    </svg>
  );
}

// ─── Vertical bar chart — used for monthly trend ───────
function BarChart({ data, w = 300, h = 130, gap = 14 }) {
  // data: [{ label, value, current?:boolean }]
  const max = Math.max(...data.map(d => d.value)) * 1.15;
  const barW = (w - gap * (data.length - 1)) / data.length;
  return (
    <svg width={w} height={h + 22} viewBox={`0 0 ${w} ${h + 22}`}>
      <defs>
        <linearGradient id="barPast" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B7E4C7"/>
          <stop offset="100%" stopColor="#74C69D"/>
        </linearGradient>
        <linearGradient id="barCurrent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D6A4F"/>
          <stop offset="100%" stopColor="#1B4332"/>
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const x = i * (barW + gap);
        const barH = (d.value / max) * h;
        const y = h - barH;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barW} height={barH} rx="6"
                  fill={d.current ? 'url(#barCurrent)' : 'url(#barPast)'}/>
            <text x={x + barW / 2} y={h + 16} textAnchor="middle"
                  fontSize="10" fontWeight={d.current ? 700 : 500}
                  fill={d.current ? C.primary : C.text4}
                  fontFamily="Inter">
              {d.label}
            </text>
            {d.current && (
              <text x={x + barW / 2} y={y - 5} textAnchor="middle"
                    fontSize="10" fontWeight="700"
                    fill={C.primary} fontFamily="Inter">
                {d.value}kg
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Mini line chart — kept for any legacy use ──────────
function LineChart({ data, w = 300, h = 120, color = '#1B4332' }) {
  const max = Math.max(...data) * 1.15;
  const stepX = w / (data.length - 1);
  const pts = data.map((v, i) => [i * stepX, h - (v / max) * h]);
  const path = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const fillPath = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id="lcfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#95D5B2" stopOpacity=".55"/>
          <stop offset="100%" stopColor="#95D5B2" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map(f => (
        <line key={f} x1="0" y1={h * f} x2={w} y2={h * f}
              stroke={C.divider} strokeDasharray="2 4"/>
      ))}
      <path d={fillPath} fill="url(#lcfill)"/>
      <path d={path} stroke={color} strokeWidth="2.4" fill="none"
            strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 4.5 : 2.5}
                fill={i === pts.length - 1 ? C.orAcc : C.primary}
                stroke="#fff" strokeWidth={i === pts.length - 1 ? 2.5 : 1.5}/>
      ))}
    </svg>
  );
}

// ─── Section header ────────────────────────────────────
function SectionHead({ title, sub, action, titleColor }) {
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <div className="text-[16px] font-extrabold tracking-tight"
             style={{ color: titleColor || C.primary, letterSpacing: '-0.16px' }}>
          {title}
        </div>
        {sub && <div className="text-[12px] mt-0.5" style={{ color: C.text4 }}>{sub}</div>}
      </div>
      {action}
    </div>
  );
}

// ─── Generic Card ─────────────────────────────────────
function Card({ children, className = '', style }) {
  return (
    <div className={`rounded-[20px] bg-white ${className}`}
         style={{ boxShadow: '0px 8px 24px 0px rgba(15,26,20,0.06)', ...style }}>
      {children}
    </div>
  );
}

// ─── Toggle switch (dark green on / gray off) ─────────
function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)}
      className="relative w-[44px] h-[26px] rounded-full transition-colors shrink-0"
      style={{ background: on ? C.primary : '#D6DBD0' }}>
      <span className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-white shadow transition-transform"
            style={{ transform: on ? 'translateX(18px)' : 'translateX(0)' }}/>
    </button>
  );
}

// ─── Hero green card (used on Home + reused as a building block) ──
function HeroDarkCard({ children, style, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] ${className}`}
         style={{
           background: G.heroDark,
           boxShadow: '0px 12px 28px 0px rgba(27,94,46,0.22)',
           ...style,
         }}>
      {/* decorative leaf */}
      <svg width="200" height="200" viewBox="0 0 200 200"
           className="absolute -right-12 -top-12 opacity-25 pointer-events-none">
        <path d="M30 160C30 70 90 30 180 30c-4 90-50 130-120 130a40 40 0 0 1-30 0Z" fill="#95D5B2"/>
        <path d="M30 160c30-40 60-60 110-72" stroke="#fff" strokeWidth="2" fill="none" opacity=".4"/>
      </svg>
      {children}
    </div>
  );
}

// ─── Status bar (iOS 9:41 + signal/wifi/battery — inline SVG) ───
function StatusBarBium({ color = '#0F1A14' }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-7 pt-3 pb-1">
      <span className="text-[15px] font-bold num" style={{ color, letterSpacing: '-0.02em' }}>9:41</span>
      <span className="flex items-center gap-1.5" style={{ color }}>
        <svg width="17" height="11" viewBox="0 0 19 12">
          <rect x="0" y="7.5"  width="3.2" height="4.5" rx="0.7" fill="currentColor"/>
          <rect x="4.8" y="5"  width="3.2" height="7"   rx="0.7" fill="currentColor"/>
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" fill="currentColor"/>
          <rect x="14.4" y="0" width="3.2" height="12"  rx="0.7" fill="currentColor"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 17 12">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill="currentColor"/>
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill="currentColor"/>
          <circle cx="8.5" cy="10.5" r="1.3" fill="currentColor"/>
        </svg>
        <svg width="24" height="12" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5"
                stroke="currentColor" strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="20" height="9" rx="2" fill="currentColor"/>
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z"
                fill="currentColor" fillOpacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

// ─── Number formatting helpers ───────────────────────
function fmtNum(n)  { return (n ?? 0).toLocaleString('ko-KR'); }
function fmtKg(g)   { return (g / 1000).toFixed(2); }   // grams → kg with 2 decimals
function fmtG(g)    {
  if (g >= 1000) return (g / 1000).toFixed(2) + ' kg';
  if (g >= 10)   return g.toFixed(1) + ' g';
  return g.toFixed(2) + ' g';
}
// 라면 1개 끓이는 데 약 1000g CO₂ (참고: design narrative)
function ramenCount(gCO2) { return Math.max(0, Math.round(gCO2 / 1000 * 10) / 10); }

Object.assign(window, {
  C, G,
  Pill, ProgressBar, BrandMark, Leaf, LeafBurst,
  Donut, BarChart, LineChart,
  SectionHead, Card, Toggle,
  HeroDarkCard, StatusBarBium,
  fmtNum, fmtKg, fmtG, ramenCount,
});
