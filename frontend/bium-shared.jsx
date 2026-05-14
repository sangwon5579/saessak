// Shared helpers for Bium prototype.
// Color tokens, pills, progress, brand marks, charts, leaves.

const C = {
  deep:  '#1B4332',
  deep2: '#143028',
  deep3: '#2D6A4F',
  sage:  '#95D5B2',
  sage2: '#B7E4C7',
  earth: '#F4A261',
  earth2:'#F8C291',
  earth3:'#FFD9A8',
  paper: '#F8F9F4',
  paper2:'#EFF1E8',
  ink:   '#0F1A14',
  ink2:  '#3B4A40',
  mute:  '#7C8A80',
  border:'#E4E7DD',
};

// ─── Pill ──────────────────────────────────────────
function Pill({ children, tone='sage', className='', icon }) {
  const tones = {
    sage:   { bg:'#D8EEDF', fg:'#1B4332' },
    earth:  { bg:'#FCE5CB', fg:'#A85A1F' },
    paper:  { bg:'#EFF1E8', fg:'#3B4A40' },
    deep:   { bg:'#1B4332', fg:'#F8F9F4' },
    danger: { bg:'#FEE2E2', fg:'#B91C1C' },
    white:  { bg:'rgba(255,255,255,.18)', fg:'#fff' },
  };
  const t = tones[tone] || tones.sage;
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold leading-none ${className}`}
          style={{background:t.bg, color:t.fg, letterSpacing:'-0.01em'}}>
      {icon}{children}
    </span>
  );
}

// ─── ProgressBar ───────────────────────────────────
function ProgressBar({ value, tone='deep', height=6 }) {
  const grad = {
    deep:  'linear-gradient(90deg,#1B4332,#2D6A4F)',
    earth: 'linear-gradient(90deg,#F8C291,#F4A261)',
    sage:  'linear-gradient(90deg,#95D5B2,#52B788)',
  }[tone];
  return (
    <div className="rounded-full overflow-hidden" style={{height, background:'#EFF1E8'}}>
      <div style={{width:`${Math.max(2,Math.min(100,value))}%`, height:'100%', background:grad,
                   borderRadius:9999, transition:'width .5s ease'}}/>
    </div>
  );
}

// ─── Tiny BrandMark — generic placeholder, NOT real logos ───
// Avoids reproducing copyrighted marks. Uses an abstract gradient
// circle with a single Korean glyph or generic icon.
function BrandMark({ glyph, palette=['#FCE5CB','#F4A261'], size=44, icon, ring=false }) {
  return (
    <div className="relative shrink-0" style={{width:size, height:size}}>
      <div className="absolute inset-0 rounded-full" style={{
        background:`radial-gradient(circle at 30% 30%, ${palette[0]}, ${palette[1]})`,
        boxShadow: ring ? '0 0 0 2px #fff, 0 4px 14px rgba(15,26,20,.12)' : '0 4px 14px rgba(15,26,20,.10)',
      }}/>
      <div className="absolute inset-0 grid place-items-center text-white font-bold"
           style={{fontSize:size*0.42, letterSpacing:'-0.04em', textShadow:'0 1px 2px rgba(0,0,0,.18)'}}>
        {icon ? icon : glyph}
      </div>
    </div>
  );
}

// ─── Leaf SVG (decorative + animation) ─────────────
function Leaf({ size=14, color='#52B788', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M3 21c0-9 7-15 18-15-1 11-7 17-15 17a8 8 0 0 1-3 0Z" fill={color}/>
      <path d="M3 21c4-6 9-9 14-10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".55"/>
    </svg>
  );
}

function LeafBurst({ run, originX=180, originY=380 }) {
  // 12 leaves flutter outward + downward when run id changes
  const leaves = React.useMemo(()=> Array.from({length:14}).map((_,i)=>({
    id: i,
    tx: (Math.random()-0.5) * 240,
    rot: 360 + Math.random()*540 * (Math.random()>.5?1:-1),
    delay: Math.random()*0.18,
    size: 10 + Math.random()*10,
    color: ['#52B788','#95D5B2','#74C69D','#F4A261'][i%4],
    dx: (Math.random()-0.5)*40,
    dy: (Math.random()-0.5)*30,
  })), [run]);
  if (run == null) return null;
  return (
    <div key={run} className="pointer-events-none absolute inset-0 overflow-hidden" style={{zIndex:30}}>
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

// ─── Donut chart ───────────────────────────────────
function Donut({ data, size=180, thickness=22, gap=2 }) {
  // data: [{label, value, color}]
  const total = data.reduce((s,d)=>s+d.value,0);
  const r = size/2 - thickness/2;
  const cx = size/2, cy = size/2;
  const C2 = 2*Math.PI*r;
  let off = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#EFF1E8" strokeWidth={thickness}/>
      {data.map((d,i)=>{
        const frac = d.value/total;
        const len = frac * C2 - gap;
        const dash = `${len} ${C2-len}`;
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

// ─── Mini line chart ───────────────────────────────
function LineChart({ data, w=300, h=120, color='#1B4332', fill='rgba(149,213,178,.35)' }) {
  // data: number[]
  const max = Math.max(...data) * 1.15;
  const min = 0;
  const stepX = w / (data.length - 1);
  const pts = data.map((v,i)=>[i*stepX, h - ((v-min)/(max-min))*h]);
  const path = pts.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const fillPath = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <defs>
        <linearGradient id="lcfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#95D5B2" stopOpacity=".55"/>
          <stop offset="100%" stopColor="#95D5B2" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[0.25,0.5,0.75].map(f => (
        <line key={f} x1="0" y1={h*f} x2={w} y2={h*f} stroke="#E4E7DD" strokeDasharray="2 4"/>
      ))}
      <path d={fillPath} fill="url(#lcfill)"/>
      <path d={path} stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map((p,i)=>(
        <circle key={i} cx={p[0]} cy={p[1]} r={i===pts.length-1?4.5:2.5}
                fill={i===pts.length-1?'#F4A261':'#1B4332'}
                stroke="#fff" strokeWidth={i===pts.length-1?2.5:1.5}/>
      ))}
    </svg>
  );
}

// ─── Tiny sparkline used inside cards ──────────────
function Sparkline({ data, w=64, h=22, color='#1B4332' }) {
  const max = Math.max(...data), min = Math.min(...data);
  const sx = w/(data.length-1);
  const pts = data.map((v,i)=>`${i*sx},${h - ((v-min)/(max-min||1))*h}`).join(' ');
  return (
    <svg width={w} height={h}><polyline points={pts} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

// ─── Section header ────────────────────────────────
function SectionHead({ title, sub, action }) {
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <div className="text-[15px] font-bold text-deep tracking-tight">{title}</div>
        {sub && <div className="text-[12px] text-mute mt-0.5">{sub}</div>}
      </div>
      {action}
    </div>
  );
}

// ─── Generic Card ─────────────────────────────────
function Card({ children, className='', style }) {
  return (
    <div className={`rounded-3xl bg-white shadow-card ${className}`} style={style}>
      {children}
    </div>
  );
}

// ─── Toggle ───────────────────────────────────────
function Toggle({ on, onChange }) {
  return (
    <button onClick={()=>onChange(!on)}
      className="relative w-[44px] h-[26px] rounded-full transition-colors"
      style={{background: on ? '#1B4332' : '#D6DBD0'}}>
      <span className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-white shadow transition-transform"
            style={{transform: on ? 'translateX(18px)' : 'translateX(0)'}}/>
    </button>
  );
}

Object.assign(window, {
  C, Pill, ProgressBar, BrandMark, Leaf, LeafBurst,
  Donut, LineChart, Sparkline, SectionHead, Card, Toggle,
});
