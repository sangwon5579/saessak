// Inline SVG icons for Bium — minimal, uniform stroke style.
// Avoids loading a full icon library; all icons share strokeWidth=1.7, currentColor.

const Ico = ({ size = 22, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
       style={style}>
    {children}
  </svg>
);

const IconLeaf = (p) => <Ico {...p}>
  <path d="M3 21c0-9 7-15 18-15-1 11-7 17-15 17a8 8 0 0 1-3 0Z"/>
  <path d="M3 21c4-6 9-9 14-10"/>
</Ico>;

const IconSparkles = (p) => <Ico {...p}>
  <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z"/>
  <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>
</Ico>;

const IconCoffee = (p) => <Ico {...p}>
  <path d="M4 9h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z"/>
  <path d="M16 11h2a3 3 0 0 1 0 6h-2"/>
  <path d="M7 4c.5 1-.5 2 0 3M11 4c.5 1-.5 2 0 3"/>
</Ico>;

const IconGift = (p) => <Ico {...p}>
  <rect x="3" y="9" width="18" height="11" rx="2"/>
  <path d="M3 13h18M12 9v11"/>
  <path d="M8 9c-2 0-3-3-1-4s4 1 5 4M16 9c2 0 3-3 1-4s-4 1-5 4"/>
</Ico>;

const IconBars = (p) => <Ico {...p}>
  <path d="M5 20V10M12 20V4M19 20v-7"/>
</Ico>;

const IconLink = (p) => <Ico {...p}>
  <path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1"/>
  <path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>
</Ico>;

const IconHome = (p) => <Ico {...p}>
  <path d="M4 11l8-7 8 7v8a2 2 0 0 1-2 2h-4v-6h-4v6H6a2 2 0 0 1-2-2v-8Z"/>
</Ico>;

const IconBroom = (p) => <Ico {...p}>
  <path d="M14 4l6 6"/>
  <path d="M5 21l6-6 4 4-6 6c-3 1-5-1-4-4Z"/>
  <path d="M11 14l4-4 5 1-2 4-4 2-3-3Z"/>
</Ico>;

const IconChart = (p) => <Ico {...p}>
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3a9 9 0 0 1 9 9h-9V3Z" fill="currentColor" fillOpacity=".2"/>
</Ico>;

const IconChevR = (p) => <Ico {...p}>
  <path d="M9 6l6 6-6 6"/>
</Ico>;

const IconCheck = (p) => <Ico {...p}>
  <path d="M5 13l4 4 10-11"/>
</Ico>;

const IconX = (p) => <Ico {...p}>
  <path d="M6 6l12 12M18 6L6 18"/>
</Ico>;

const IconArchive = (p) => <Ico {...p}>
  <rect x="3" y="4" width="18" height="4" rx="1"/>
  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/>
  <path d="M10 13h4"/>
</Ico>;

const IconShield = (p) => <Ico {...p}>
  <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3Z"/>
  <path d="M9 12l2 2 4-4"/>
</Ico>;

const IconLock = (p) => <Ico {...p}>
  <rect x="5" y="11" width="14" height="9" rx="2"/>
  <path d="M8 11V8a4 4 0 1 1 8 0v3"/>
</Ico>;

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

const IconTree = (p) => <Ico {...p}>
  <path d="M12 3c4 2 5 6 3 8h2c-1 3-4 4-5 4s-4-1-5-4h2c-2-2-1-6 3-8Z"/>
  <path d="M12 15v6"/>
</Ico>;

const IconBolt = (p) => <Ico {...p}>
  <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7Z"/>
</Ico>;

const IconCalendar = (p) => <Ico {...p}>
  <rect x="3" y="5" width="18" height="16" rx="2"/>
  <path d="M3 9h18M8 3v4M16 3v4"/>
</Ico>;

const IconUser = (p) => <Ico {...p}>
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 21c1-4 5-6 8-6s7 2 8 6"/>
</Ico>;

const IconFlame = (p) => <Ico {...p}>
  <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-3 2-6 1 1 2 1 3-4Z"/>
</Ico>;

const IconCloud = (p) => <Ico {...p}>
  <path d="M7 18a4 4 0 0 1-1-8 6 6 0 0 1 11 1 4 4 0 0 1 0 7H7Z"/>
</Ico>;

const IconTrash = (p) => <Ico {...p}>
  <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
  <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/>
</Ico>;

Object.assign(window, {
  Ico,
  IconLeaf, IconSparkles, IconCoffee, IconGift, IconBars, IconLink,
  IconHome, IconBroom, IconChart, IconChevR, IconCheck, IconX,
  IconArchive, IconShield, IconLock, IconMail, IconImage, IconPhone,
  IconCpu, IconTree, IconBolt, IconCalendar, IconUser, IconFlame,
  IconCloud, IconTrash,
});
