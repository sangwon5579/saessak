// Inline SVG icons for 비움/새싹 redesign.
// Single uniform stroke style (strokeWidth=1.7, currentColor) so icons
// can be tinted via CSS color anywhere. Avoids loading a full icon
// library; replaces the 7-day-expiring Figma asset URLs.

const Ico = ({ size = 22, children, style, fill = 'none', strokeWidth = 1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
       stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
       style={style}>
    {children}
  </svg>
);

// ─── Brand / Nature ─────────────────────────────────────────
const IconLeaf = (p) => <Ico {...p}>
  <path d="M3 21c0-9 7-15 18-15-1 11-7 17-15 17a8 8 0 0 1-3 0Z"/>
  <path d="M3 21c4-6 9-9 14-10"/>
</Ico>;

const IconSeed = (p) => <Ico {...p}>
  <path d="M12 21c-4-1-7-5-7-9a7 7 0 0 1 7-7c4 1 7 5 7 9a7 7 0 0 1-7 7Z"/>
  <path d="M12 4v17M8 9c2 1 3 3 4 6M16 9c-2 1-3 3-4 6"/>
</Ico>;

const IconSprout = (p) => <Ico {...p}>
  <path d="M12 20v-7"/>
  <path d="M12 13C9 13 6 10 6 7c3 0 6 3 6 6Z"/>
  <path d="M12 13c3 0 6-3 6-6-3 0-6 3-6 6Z"/>
</Ico>;

const IconTree = (p) => <Ico {...p}>
  <path d="M12 3c4 2 5 6 3 8h2c-1 3-4 4-5 4s-4-1-5-4h2c-2-2-1-6 3-8Z"/>
  <path d="M12 15v6"/>
</Ico>;

const IconSparkles = (p) => <Ico {...p}>
  <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/>
  <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>
</Ico>;

const IconBolt = (p) => <Ico {...p}>
  <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7Z"/>
</Ico>;

const IconFlame = (p) => <Ico {...p}>
  <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-3 2-6 1 1 2 1 3-4Z"/>
</Ico>;

// ─── Navigation tabs ────────────────────────────────────────
const IconHome = (p) => <Ico {...p}>
  <path d="M4 11l8-7 8 7v8a2 2 0 0 1-2 2h-4v-6h-4v6H6a2 2 0 0 1-2-2v-8Z"/>
</Ico>;

const IconChart = (p) => <Ico {...p}>
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3a9 9 0 0 1 9 9h-9V3Z" fill="currentColor" fillOpacity=".2"/>
</Ico>;

const IconBroom = (p) => <Ico {...p}>
  <path d="M14 4l6 6"/>
  <path d="M5 21l6-6 4 4-6 6c-3 1-5-1-4-4Z"/>
  <path d="M11 14l4-4 5 1-2 4-4 2-3-3Z"/>
</Ico>;

const IconGift = (p) => <Ico {...p}>
  <rect x="3" y="9" width="18" height="11" rx="2"/>
  <path d="M3 13h18M12 9v11"/>
  <path d="M8 9c-2 0-3-3-1-4s4 1 5 4M16 9c2 0 3-3 1-4s-4 1-5 4"/>
</Ico>;

const IconLink = (p) => <Ico {...p}>
  <path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1"/>
  <path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>
</Ico>;

// ─── Arrows / chevrons ──────────────────────────────────────
const IconChevR = (p) => <Ico {...p}>
  <path d="M9 6l6 6-6 6"/>
</Ico>;

const IconChevL = (p) => <Ico {...p}>
  <path d="M15 6l-6 6 6 6"/>
</Ico>;

const IconArrowR = (p) => <Ico {...p}>
  <path d="M4 12h16M14 6l6 6-6 6"/>
</Ico>;

const IconArrowDown = (p) => <Ico {...p}>
  <path d="M12 4v16M6 14l6 6 6-6"/>
</Ico>;

// ─── Status / feedback ──────────────────────────────────────
const IconCheck = (p) => <Ico {...p}>
  <path d="M5 13l4 4 10-11"/>
</Ico>;

const IconX = (p) => <Ico {...p}>
  <path d="M6 6l12 12M18 6L6 18"/>
</Ico>;

const IconInfo = (p) => <Ico {...p}>
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 8v.01M12 11v6"/>
</Ico>;

const IconClock = (p) => <Ico {...p}>
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 7v5l3 2"/>
</Ico>;

// ─── Actions ────────────────────────────────────────────────
const IconArchive = (p) => <Ico {...p}>
  <rect x="3" y="4" width="18" height="4" rx="1"/>
  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/>
  <path d="M10 13h4"/>
</Ico>;

const IconSnooze = (p) => <Ico {...p}>
  <path d="M5 9h6L5 17h6"/>
  <path d="M14 6h6l-6 8h6"/>
</Ico>;

const IconTrash = (p) => <Ico {...p}>
  <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
  <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>
</Ico>;

const IconSearch = (p) => <Ico {...p}>
  <circle cx="11" cy="11" r="7"/>
  <path d="M20 20l-3.5-3.5"/>
</Ico>;

const IconBell = (p) => <Ico {...p}>
  <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2Z"/>
  <path d="M10 19a2 2 0 0 0 4 0"/>
</Ico>;

const IconPlus = (p) => <Ico {...p}>
  <path d="M12 5v14M5 12h14"/>
</Ico>;

const IconFilter = (p) => <Ico {...p}>
  <path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z"/>
</Ico>;

// ─── Security / privacy ────────────────────────────────────
const IconShield = (p) => <Ico {...p}>
  <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3Z"/>
  <path d="M9 12l2 2 4-4"/>
</Ico>;

const IconLock = (p) => <Ico {...p}>
  <rect x="5" y="11" width="14" height="9" rx="2"/>
  <path d="M8 11V8a4 4 0 1 1 8 0v3"/>
</Ico>;

// ─── Channels / sources ────────────────────────────────────
const IconMail = (p) => <Ico {...p}>
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <path d="M3 7l9 7 9-7"/>
</Ico>;

const IconImage = (p) => <Ico {...p}>
  <rect x="3" y="4" width="18" height="16" rx="2"/>
  <circle cx="9" cy="10" r="1.6"/>
  <path d="M5 18l5-5 4 4 2-2 4 4"/>
</Ico>;

const IconPhone = (p) => <Ico {...p}>
  <rect x="6" y="2" width="12" height="20" rx="3"/>
  <path d="M11 19h2"/>
</Ico>;

const IconCpu = (p) => <Ico {...p}>
  <rect x="6" y="6" width="12" height="12" rx="2"/>
  <rect x="9" y="9" width="6" height="6" rx="1"/>
  <path d="M3 10h2M3 14h2M19 10h2M19 14h2M10 3v2M14 3v2M10 19v2M14 19v2"/>
</Ico>;

const IconCloud = (p) => <Ico {...p}>
  <path d="M7 18a4 4 0 0 1-1-8 6 6 0 0 1 11 1 4 4 0 0 1 0 7H7Z"/>
</Ico>;

const IconFolder = (p) => <Ico {...p}>
  <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/>
</Ico>;

const IconFile = (p) => <Ico {...p}>
  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/>
  <path d="M14 3v5h5"/>
</Ico>;

const IconCoffee = (p) => <Ico {...p}>
  <path d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z"/>
  <path d="M16 11h2a3 3 0 0 1 0 6h-2"/>
  <path d="M7 4c.5 1-.5 2 0 3M11 4c.5 1-.5 2 0 3"/>
</Ico>;

const IconBars = (p) => <Ico {...p}>
  <path d="M5 20V10M12 20V4M19 20v-7"/>
</Ico>;

// ─── Misc ──────────────────────────────────────────────────
const IconCalendar = (p) => <Ico {...p}>
  <rect x="3" y="5" width="18" height="16" rx="2"/>
  <path d="M3 9h18M8 3v4M16 3v4"/>
</Ico>;

const IconUser = (p) => <Ico {...p}>
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 21c1-4 5-6 8-6s7 2 8 6"/>
</Ico>;

// ─── Decorative illustrations (filled, multi-color) ────────
// These are larger composite SVGs used as inline illustrations.

function LeafBig({ size = 90, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" style={style}>
      <defs>
        <linearGradient id="leafBigGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#95D5B2"/>
          <stop offset="60%" stopColor="#52B788"/>
          <stop offset="100%" stopColor="#2D6A4F"/>
        </linearGradient>
      </defs>
      <path d="M12 78C12 36 38 12 80 12c-4 42-28 66-58 66-3 0-7-.5-10 0Z"
            fill="url(#leafBigGrad)"/>
      <path d="M16 76c14-22 32-36 56-42" stroke="#fff" strokeWidth="2.4"
            strokeLinecap="round" fill="none" opacity=".55"/>
      <path d="M28 78c6-12 18-20 32-22" stroke="#fff" strokeWidth="1.6"
            strokeLinecap="round" fill="none" opacity=".35"/>
    </svg>
  );
}

function TrashCanIllustration({ size = 120, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
      <defs>
        <linearGradient id="canBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B7E4C7"/>
          <stop offset="100%" stopColor="#74C69D"/>
        </linearGradient>
        <linearGradient id="canLid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8EEDF"/>
          <stop offset="100%" stopColor="#95D5B2"/>
        </linearGradient>
      </defs>
      {/* body */}
      <path d="M28 36h64l-6 64a8 8 0 0 1-8 7H42a8 8 0 0 1-8-7L28 36Z" fill="url(#canBody)"/>
      {/* vertical lines */}
      <path d="M48 50v50M60 50v50M72 50v50" stroke="#1B4332" strokeWidth="2.2"
            strokeLinecap="round" opacity=".25"/>
      {/* lid */}
      <rect x="20" y="26" width="80" height="14" rx="6" fill="url(#canLid)"/>
      <rect x="48" y="18" width="24" height="10" rx="4" fill="#52B788"/>
      {/* sparkle */}
      <g transform="translate(96 22)">
        <path d="M0 -8L2 -2L8 0L2 2L0 8L-2 2L-8 0L-2 -2Z" fill="#FCBF5E"/>
      </g>
    </svg>
  );
}

function CoffeeCupIllustration({ size = 120, style }) {
  // generic disposable coffee cup with a green band — used in rewards
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style}>
      <defs>
        <linearGradient id="cupBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#F1EDE5"/>
        </linearGradient>
      </defs>
      {/* cup */}
      <path d="M30 36h60l-7 64a8 8 0 0 1-8 7H45a8 8 0 0 1-8-7L30 36Z" fill="url(#cupBody)" stroke="#D8D2C6" strokeWidth="1.4"/>
      {/* lid */}
      <ellipse cx="60" cy="34" rx="32" ry="8" fill="#2D6A4F"/>
      <ellipse cx="60" cy="32" rx="32" ry="8" fill="#1B4332"/>
      <ellipse cx="60" cy="30" rx="28" ry="5" fill="#0F1A14" opacity=".4"/>
      {/* sip hole */}
      <ellipse cx="72" cy="28" rx="6" ry="3" fill="#0F1A14"/>
      {/* band */}
      <rect x="32" y="56" width="56" height="16" fill="#74C69D"/>
      <text x="60" y="68" textAnchor="middle" fontSize="9" fontWeight="700"
            fill="#1B4332" fontFamily="Inter">MORNING</text>
      <text x="60" y="98" textAnchor="middle" fontSize="6" fontWeight="600"
            fill="#7C8A80" fontFamily="Inter">TALL</text>
    </svg>
  );
}

// — Tier icon (잎무성/어린잎 단계 표현용)
function TierIcon({ size = 36, tone = 'light' }) {
  // tone: 'light' (filled), 'empty' (outline)
  const filled = tone !== 'empty';
  return (
    <svg width={size} height={size} viewBox="0 0 36 36">
      <defs>
        <linearGradient id={`tierG${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={filled ? '#95D5B2' : '#E4E7DD'}/>
          <stop offset="100%" stopColor={filled ? '#2D6A4F' : '#B5BFB1'}/>
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="16" fill={filled ? 'rgba(149,213,178,.25)' : 'transparent'} stroke={filled ? 'transparent' : '#D6DCD2'} strokeWidth="1.5"/>
      <path d="M18 27c-3-3-5-7-5-11 0-4 3-7 5-7s5 3 5 7c0 4-2 8-5 11Z" fill={`url(#tierG${tone})`}/>
      <path d="M18 27V13" stroke="#fff" strokeWidth="1" opacity=".5"/>
    </svg>
  );
}

// — 새싹 launch logo: leaf cluster + orange "P" point badge —
// Approximation of the IR-deck cover logo, drawn as inline SVG so it
// works offline and doesn't expire like Figma asset URLs.
function SaessakLogo({ size = 110 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <defs>
        <linearGradient id="ssLeafA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#B7E4C7"/>
          <stop offset="55%" stopColor="#74C69D"/>
          <stop offset="100%" stopColor="#2D6A4F"/>
        </linearGradient>
        <linearGradient id="ssLeafB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#95D5B2"/>
          <stop offset="100%" stopColor="#1B4332"/>
        </linearGradient>
        <linearGradient id="ssLeafC" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%"  stopColor="#52B788"/>
          <stop offset="100%" stopColor="#B7E4C7"/>
        </linearGradient>
      </defs>

      {/* sparkle dots around the cluster */}
      <circle cx="18"  cy="22"  r="1.6" fill="#52B788" opacity=".75"/>
      <circle cx="102" cy="28"  r="1.6" fill="#52B788" opacity=".75"/>
      <circle cx="20"  cy="68"  r="1.2" fill="#74C69D" opacity=".65"/>
      <circle cx="106" cy="74"  r="1.4" fill="#74C69D" opacity=".65"/>
      <circle cx="60"  cy="10"  r="1.0" fill="#95D5B2" opacity=".85"/>
      <circle cx="14"  cy="48"  r="1.0" fill="#95D5B2" opacity=".5"/>
      <line x1="100" y1="14" x2="104" y2="10" stroke="#52B788" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="16"  y1="100" x2="12" y2="104" stroke="#52B788" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="110" y1="55"  x2="114" y2="55" stroke="#74C69D" strokeWidth="1.2" strokeLinecap="round"/>

      {/* central stem */}
      <path d="M 60 100 C 60 82, 60 64, 60 48"
            stroke="#2D6A4F" strokeWidth="2.6" fill="none" strokeLinecap="round"/>

      {/* leaf — upper-left */}
      <path d="M 58 52
               C 38 44, 22 38, 18 22
               C 38 24, 56 36, 60 50 Z"
            fill="url(#ssLeafA)"/>

      {/* leaf — upper-right */}
      <path d="M 62 52
               C 82 44, 100 38, 102 22
               C 82 24, 64 36, 60 50 Z"
            fill="url(#ssLeafB)"/>

      {/* leaf — top center (narrow vertical) */}
      <path d="M 60 48
               C 54 30, 56 14, 68 6
               C 72 22, 66 38, 60 50 Z"
            fill="url(#ssLeafC)" opacity=".95"/>

      {/* leaf — lower spread (small accent) */}
      <path d="M 60 66
               C 46 66, 32 72, 28 84
               C 44 80, 56 76, 60 70 Z"
            fill="url(#ssLeafB)" opacity=".55"/>

      {/* P badge (point) */}
      <circle cx="92" cy="86" r="13" fill="#F4A261"
              stroke="#fff" strokeWidth="2.5"/>
      <text x="92" y="91.5" textAnchor="middle"
            fontSize="16" fontWeight="800"
            fill="#fff" fontFamily="Inter, sans-serif">P</text>
    </svg>
  );
}

// — Brand letter circle (Gmail "G", Outlook "O", iCloud "i") —
function BrandLetter({ letter, color, size = 36, bg = '#fff' }) {
  return (
    <div className="relative shrink-0 grid place-items-center rounded-full"
         style={{ width: size, height: size, background: bg,
                  boxShadow: '0 4px 12px rgba(15,26,20,0.08)' }}>
      <span style={{ color, fontFamily: 'Inter, sans-serif',
                     fontWeight: 800, fontSize: size * 0.5,
                     letterSpacing: '-0.04em', lineHeight: 1 }}>
        {letter}
      </span>
    </div>
  );
}

Object.assign(window, {
  Ico,
  // brand / nature
  IconLeaf, IconSeed, IconSprout, IconTree, IconSparkles, IconBolt, IconFlame,
  // nav
  IconHome, IconChart, IconBroom, IconGift, IconLink,
  // arrows
  IconChevR, IconChevL, IconArrowR, IconArrowDown,
  // status
  IconCheck, IconX, IconInfo, IconClock,
  // actions
  IconArchive, IconSnooze, IconTrash, IconSearch, IconBell, IconPlus, IconFilter,
  // security
  IconShield, IconLock,
  // channels
  IconMail, IconImage, IconPhone, IconCpu, IconCloud, IconFolder, IconFile, IconCoffee, IconBars,
  // misc
  IconCalendar, IconUser,
  // illustrations
  LeafBig, TrashCanIllustration, CoffeeCupIllustration, TierIcon, BrandLetter,
  SaessakLogo,
});
