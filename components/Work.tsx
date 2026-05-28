const PROJECTS = [
  {
    n: "01",
    title: "Gyreo",
    tags: "Dashboard · Maritime · Code",
    year: "2026",
    href: "https://github.com/veelpau-hub/dashboard_maritimo",
    desc: "Maritime intelligence dashboard for the Bay of Cádiz — AIS vessel tracking, live weather layers, SAR Sentinel-1 satellite imagery, and tide predictions.",
  },
  {
    n: "02",
    title: "Ilervis",
    tags: "Product · IoT · Science",
    year: "2025",
    href: "#",
    desc: "Multi-module scientific platform: ESP32 weather stations with D3.js dashboards, photogrammetry pipeline, Mars HiRISE imagery processing, and ADS-B aircraft tracking.",
  },
  {
    n: "03",
    title: "VeelRun",
    tags: "Mobile · GPS · PWA",
    year: "2025",
    href: "#",
    desc: "Real-time GPS running tracker installable as a PWA. Live compass bearing to home, distance, pace, and split stats — minimal dark UI built for one hand.",
  },
  {
    n: "04",
    title: "Anvie",
    tags: "Branding · Identity · Studio",
    year: "2022 – present",
    href: "#",
    desc: "Personal creative studio defining brand identity for early-stage companies — naming, visual language, motion and web.",
  },
  {
    n: "05",
    title: "VMLY&R",
    tags: "Digital Design · Social · Brand",
    year: "2022 – 2023",
    href: "#",
    desc: "Digital content and social campaigns for Danone, Naturgy, Miravia, Ultima and Cacaolat. Motion, still and interactive formats at scale.",
  },
  {
    n: "06",
    title: "Kingston Garden",
    tags: "Branding · Identity · Print",
    year: "2022",
    href: "#",
    desc: "Brand identity for a hospitality concept in Amsterdam — visual language, typography system, and print and digital collateral.",
  },
];

function rng(seed: number, n: number) {
  const x = Math.sin(seed * 9301 + n * 49297) * 233280;
  return x - Math.floor(x);
}

/* Gyreo: nautical chart — concentric rings + rhumb lines */
function ThumbGyreo() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tg0" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".07" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tg0)" />
      {[180, 140, 100, 60, 30].map((r) => (
        <circle key={r} cx="200" cy="150" r={r} fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
      ))}
      {[0, 45, 90, 135].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={200 - Math.cos(rad) * 200} y1={150 - Math.sin(rad) * 200}
            x2={200 + Math.cos(rad) * 200} y2={150 + Math.sin(rad) * 200}
            stroke="currentColor" strokeOpacity=".1" strokeWidth=".5"
          />
        );
      })}
      <circle cx="200" cy="150" r="4" fill="currentColor" fillOpacity=".3" />
      <circle cx="200" cy="150" r="1.5" fill="currentColor" fillOpacity=".6" />
      {/* vessel track */}
      <path d="M 60 220 Q 130 180 200 150 Q 270 120 320 90" fill="none" stroke="currentColor" strokeOpacity=".2" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

/* Ilervis: sensor grid + data plot */
function ThumbIlervis() {
  const pts = [40,180, 80,140, 120,160, 160,110, 200,130, 240,90, 280,120, 320,80, 360,100];
  const d = pts.reduce((s, v, i) => s + (i % 2 === 0 ? (i === 0 ? `M ${v}` : ` L ${v}`) : ` ${v}`), "");
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tg1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".06" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tg1)" />
      {/* grid */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="30" y1={60 + i * 36} x2="370" y2={60 + i * 36} stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={40 + i * 40} y1="40" x2={40 + i * 40} y2="260" stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
      ))}
      {/* data line */}
      <path d={d} fill="none" stroke="currentColor" strokeOpacity=".3" strokeWidth="1" />
      {/* data points */}
      {Array.from({ length: pts.length / 2 }).map((_, i) => (
        <circle key={i} cx={pts[i * 2]} cy={pts[i * 2 + 1]} r="2.5" fill="currentColor" fillOpacity=".4" />
      ))}
      {/* sensor boxes */}
      {[60, 200, 300].map((x) => (
        <rect key={x} x={x - 18} y="210" width="36" height="24" rx="3" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".15" strokeWidth=".5" />
      ))}
    </svg>
  );
}

/* VeelRun: compass + motion arc */
function ThumbVeelRun() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".05" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tg2)" />
      {/* outer ring */}
      <circle cx="200" cy="150" r="110" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
      <circle cx="200" cy="150" r="90" fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
      {/* tick marks */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const r1 = i % 6 === 0 ? 100 : 96;
        const r2 = 110;
        return (
          <line key={i}
            x1={200 + Math.sin(a) * r1} y1={150 - Math.cos(a) * r1}
            x2={200 + Math.sin(a) * r2} y2={150 - Math.cos(a) * r2}
            stroke="currentColor" strokeOpacity={i % 6 === 0 ? ".25" : ".12"} strokeWidth=".5"
          />
        );
      })}
      {/* needle */}
      <line x1="200" y1="150" x2="200" y2="52" stroke="currentColor" strokeOpacity=".35" strokeWidth="1" />
      <polygon points="200,45 196,58 204,58" fill="currentColor" fillOpacity=".35" />
      {/* center */}
      <circle cx="200" cy="150" r="4" fill="currentColor" fillOpacity=".2" />
      <circle cx="200" cy="150" r="1.5" fill="currentColor" fillOpacity=".5" />
      {/* route dots */}
      {[[140,240],[165,215],[185,195],[200,180]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2" fill="currentColor" fillOpacity=".2" />
      ))}
    </svg>
  );
}

/* Anvie: identity grid — logotype construction lines */
function ThumbAnvie() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ta" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".05" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ta)" />
      {/* baseline grid */}
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="currentColor" strokeOpacity=".07" strokeWidth=".5" />
      ))}
      {/* diamond mark */}
      <polygon points="200,80 260,150 200,220 140,150" fill="none" stroke="currentColor" strokeOpacity=".2" strokeWidth=".75" />
      <polygon points="200,108 236,150 200,192 164,150" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
      <circle cx="200" cy="150" r="6" fill="currentColor" fillOpacity=".15" />
      <circle cx="200" cy="150" r="2" fill="currentColor" fillOpacity=".4" />
      {/* corner marks */}
      {[[140,150],[200,80],[260,150],[200,220]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="none" stroke="currentColor" strokeOpacity=".2" strokeWidth=".75" />
      ))}
      {/* wordmark skeleton */}
      <line x1="100" y1="258" x2="300" y2="258" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
    </svg>
  );
}

/* VMLY&R: social content grid — cards and media blocks */
function ThumbVMLYR() {
  const cards = [
    [40, 40, 148, 130],
    [212, 40, 148, 60],
    [212, 110, 68, 60],
    [290, 110, 70, 60],
    [40, 182, 68, 78],
    [118, 182, 82, 78],
    [212, 182, 148, 78],
  ] as [number, number, number, number][];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".06" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tv)" />
      {cards.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="3"
          fill="currentColor" fillOpacity={i === 0 ? ".08" : ".04"}
          stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
      ))}
      {/* image placeholder on first card */}
      <line x1="40" y1="40" x2="188" y2="170" stroke="currentColor" strokeOpacity=".05" strokeWidth=".5" />
      <line x1="188" y1="40" x2="40" y2="170" stroke="currentColor" strokeOpacity=".05" strokeWidth=".5" />
      {/* text lines */}
      {[220, 232, 244].map((y) => (
        <line key={y} x1="220" y1={y} x2={y === 220 ? 340 : 300} y2={y} stroke="currentColor" strokeOpacity=".15" strokeWidth=".75" />
      ))}
    </svg>
  );
}

/* Kingston Garden: organic botanical — circles and curves */
function ThumbKingston() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="tk" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity=".04" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tk)" />
      {/* outer wreath circles */}
      <circle cx="200" cy="150" r="100" fill="none" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
      <circle cx="200" cy="150" r="76"  fill="none" stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
      {/* leaf arcs */}
      {Array.from({length: 8}).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        const x1 = 200 + Math.cos(a) * 76;
        const y1 = 150 + Math.sin(a) * 76;
        const x2 = 200 + Math.cos(a) * 100;
        const y2 = 150 + Math.sin(a) * 100;
        const mx = 200 + Math.cos(a + 0.3) * 90;
        const my = 150 + Math.sin(a + 0.3) * 90;
        return <path key={i} d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} fill="none" stroke="currentColor" strokeOpacity=".14" strokeWidth=".75" />;
      })}
      {/* monogram centre */}
      <circle cx="200" cy="150" r="28" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
      <circle cx="200" cy="150" r="3"  fill="currentColor" fillOpacity=".3" />
      {/* baseline */}
      <line x1="100" y1="265" x2="300" y2="265" stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
    </svg>
  );
}

const THUMBS = [ThumbGyreo, ThumbIlervis, ThumbVeelRun, ThumbAnvie, ThumbVMLYR, ThumbKingston];

function PlaceholderThumb({ index }: { index: number }) {
  const Thumb = THUMBS[index % THUMBS.length];
  return (
    <div className="thumb">
      <div className="thumb-placeholder">
        <Thumb />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section className="sec" id="work">
      <div className="sec-head">
        <span className="num">02 / Selected Work</span>
        <h2 className="name">
          Selected
          <br />
          Work<span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        <span className="meta">
          Built end to end, shipped.
          <br />
          {PROJECTS.length} projects · 2022—2026
        </span>
      </div>
      <div className="work-wrap">
        <div className="work" data-layout="grid">
          {PROJECTS.map((p, i) => (
            <a className="card" key={p.n} href={p.href} target={p.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer">
              <PlaceholderThumb index={i} />
              <div className="meta-row">
                <span className="card-num">{p.n}</span>
                <span className="card-title-grid">{p.title}</span>
                <span className="card-year">{p.year}</span>
              </div>
              <span className="card-tags">{p.tags}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
