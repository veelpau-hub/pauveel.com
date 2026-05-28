import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Apps — Pau Vidal",
  description:
    "Apps and tools built with AI assistance — prototypes, experiments and shipped products by Pau Vidal.",
};

const APPS = [
  {
    n: "01",
    title: "pauveel.com",
    tags: "Portfolio · Next.js · Claude Code",
    year: "2026",
    status: "live" as const,
    href: "/",
    desc: "This portfolio. Designed in Figma, coded from scratch in Next.js with Claude as the primary coding partner. No templates, no page builders — every component hand-built.",
    image: undefined as string | undefined,
  },
  {
    n: "02",
    title: "Gyreo",
    tags: "Dashboard · Flask · D3.js · Mapbox",
    year: "2026",
    status: "live" as const,
    href: "https://gyreo.es/",
    desc: "Maritime intelligence dashboard built with Claude from the ground up. Flask backend, 7 hand-drawn D3.js weather panels, Mapbox GL JS, AIS WebSocket stream, Sentinel-1 SAR imagery pipeline with NumPy and Pillow, and a Telegram alert bot for anomalous vessel behaviour — all in a single Python process.",
    image: "/images/ai-apps/gyreo/cover.jpg",
  },
  {
    n: "03",
    title: "VeelRun",
    tags: "PWA · Geolocation · Service Worker",
    year: "2025",
    status: "live" as const,
    href: "https://veelrun.onrender.com/",
    desc: "GPS running tracker built as a PWA in a single session with Claude. Service Worker, Geolocation API, live compass bearing calculations, pace and split timing — from zero to deployed on Render in a few hours.",
    image: "/images/ai-apps/veelrun/cover.jpg",
  },
  {
    n: "04",
    title: "CORTÉS",
    tags: "Python · FFmpeg · YouTube API · Automation",
    year: "2026",
    status: "live" as const,
    href: "#",
    desc: "Fully automated YouTube channel for classical and ambient music. Python + FFmpeg renders 4K video daily: thumbnail intro (5s), background visuals, waveform visualiser and subscription overlay. Uploads automatically via YouTube Data API v3 on Windows Task Scheduler — fully unattended.",
    image: undefined as string | undefined,
  },
  {
    n: "05",
    title: "YouTube Macro",
    tags: "Claude · OpenAI TTS · DALL·E 3 · Exa · MoviePy",
    year: "2026",
    status: "live" as const,
    href: "#",
    desc: "6-phase pipeline producing macroeconomics YouTube content twice a week. Claude writes ~2500-word scripts in Spanish (hook, context, historical parallel, mechanics, conclusion). OpenAI TTS (onyx voice) + DALL·E 3 for visuals. Exa for research. Fully automated from topic discovery to upload.",
    image: undefined as string | undefined,
  },
  {
    n: "06",
    title: "Telegram Bot",
    tags: "Python · Polymarket · SQLite · Claude API",
    year: "2025",
    status: "live" as const,
    href: "#",
    desc: "Polymarket analysis bot with paper trading simulation. Monitors prediction markets, analyses positions and tracks simulated trades in SQLite. Claude interprets market signals and writes trade commentary.",
    image: undefined as string | undefined,
  },
];

function StatusBadge({ status }: { status: "live" | "wip" | "soon" }) {
  if (status === "soon") return null;
  const map = { live: { label: "Live", color: "var(--accent)" }, wip: { label: "WIP", color: "var(--ink-dim)" } };
  const { label, color } = map[status];
  return (
    <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase" as const, color, border: `1px solid ${color}`, padding: "2px 8px", borderRadius: 999 }}>
      {label}
    </span>
  );
}

/* SVG placeholders for apps without screenshots */
function ThumbPortfolio() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ai0" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".07" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#ai0)" />
      <rect x="60" y="50" width="280" height="200" rx="4" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".12" strokeWidth=".75" />
      <rect x="60" y="50" width="280" height="28" rx="4" fill="currentColor" fillOpacity=".06" />
      {[80, 96, 112].map((x) => <circle key={x} cx={x} cy="64" r="4" fill="currentColor" fillOpacity=".12" />)}
      {[110, 125, 140, 165, 180, 195, 220].map((y, i) => (
        <line key={y} x1="80" y1={y} x2={i % 3 === 0 ? 320 : i % 3 === 1 ? 280 : 240} y2={y} stroke="currentColor" strokeOpacity=".12" strokeWidth=".75" />
      ))}
      <rect x="80" y="230" width="60" height="8" rx="2" fill="currentColor" fillOpacity=".2" />
    </svg>
  );
}

function ThumbCortes() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="tc" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="currentColor" stopOpacity="0" /><stop offset="1" stopColor="currentColor" stopOpacity=".05" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#tc)" />
      {/* waveform bars */}
      {Array.from({ length: 32 }).map((_, i) => {
        const h = 20 + Math.sin(i * 0.7) * 40 + Math.sin(i * 1.3) * 20;
        return <rect key={i} x={28 + i * 11} y={150 - h / 2} width="7" height={h} rx="2" fill="currentColor" fillOpacity=".15" />;
      })}
      {/* video frame */}
      <rect x="120" y="60" width="160" height="90" rx="3" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
      <polygon points="190,95 190,115 210,105" fill="currentColor" fillOpacity=".12" />
      <line x1="80" y1="270" x2="320" y2="270" stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" />
    </svg>
  );
}

function ThumbYTMacro() {
  const pts = [50,200, 95,160, 140,175, 185,120, 230,140, 275,90, 320,110, 350,80];
  const d = pts.reduce((s, v, i) => s + (i % 2 === 0 ? (i === 0 ? `M ${v}` : ` L ${v}`) : ` ${v}`), "");
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="tym" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".06" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#tym)" />
      {Array.from({ length: 5 }).map((_, i) => <line key={i} x1="40" y1={60 + i * 44} x2="360" y2={60 + i * 44} stroke="currentColor" strokeOpacity=".07" strokeWidth=".5" />)}
      <path d={d} fill="none" stroke="currentColor" strokeOpacity=".22" strokeWidth="1.25" />
      {Array.from({ length: pts.length / 2 }).map((_, i) => <circle key={i} cx={pts[i * 2]} cy={pts[i * 2 + 1]} r="3" fill="currentColor" fillOpacity=".25" />)}
      {[100, 140, 180].map((y) => <line key={y} x1="48" y1={y} x2={y === 140 ? 200 : 170} y2={y} stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />)}
    </svg>
  );
}

function ThumbTelegramBot() {
  const nodes = [[200,120],[140,180],[260,180],[120,240],[200,240],[280,240]];
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5]];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id="ttb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".05" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
      <rect width="400" height="300" fill="url(#ttb)" />
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeOpacity=".12" strokeWidth=".75" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 10 : 6} fill="currentColor" fillOpacity={i === 0 ? ".15" : ".08"} stroke="currentColor" strokeOpacity=".2" strokeWidth=".5" />
      ))}
      <line x1="100" y1="272" x2="300" y2="272" stroke="currentColor" strokeOpacity=".07" strokeWidth=".5" />
    </svg>
  );
}

function AppThumb({ app, index }: { app: typeof APPS[0]; index: number }) {
  if (app.image) {
    return (
      <div className="thumb">
        <Image src={app.image} alt={app.title} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  const Thumbs = [ThumbPortfolio, ThumbPortfolio, ThumbPortfolio, ThumbCortes, ThumbYTMacro, ThumbTelegramBot];
  const Thumb = Thumbs[index] ?? ThumbPortfolio;
  return (
    <div className="thumb">
      <div className="thumb-placeholder"><Thumb /></div>
    </div>
  );
}

export default function AIApps() {
  return (
    <>
      <TopBar />

      <section className="sec" id="ai-apps" style={{ paddingTop: 140 }}>
        <div className="sec-head">
          <span className="num">↗ / AI Apps</span>
          <h1 className="name">
            Built with<br />
            <span style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
              AI.
            </span>
          </h1>
          <span className="meta">
            Pipelines, tools and<br />
            shipped products.
          </span>
        </div>

        <div style={{ padding: "0 var(--gutter)", marginBottom: 48, fontFamily: "var(--ff-sans)", fontSize: 15, color: "var(--ink-dim)", maxWidth: "60ch", lineHeight: 1.6 }}>
          Apps and tools where AI played an active role — as coding partner, architecture critic, or core feature. Not prompt demos: real products built to solve a real problem.
        </div>

        <div className="work-wrap">
          <div className="work" data-layout="grid">
            {APPS.map((app, i) => (
              <Link
                key={app.n}
                className="card"
                href={app.href}
                target={app.href !== "/" && app.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <AppThumb app={app} index={i} />
                <div className="meta-row">
                  <span className="card-num">{app.n}</span>
                  <span className="card-title-grid">{app.title}</span>
                  <span className="card-year" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <StatusBadge status={app.status} />
                    {app.year}
                  </span>
                </div>
                {app.tags && <span className="card-tags">{app.tags}</span>}
                {app.desc && <p className="card-desc">{app.desc}</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: "48px var(--gutter)", borderTop: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 16, lineHeight: 1 }}>←</span>
          Back to portfolio
        </Link>
        <span>Pau Vidal © MMXXVI</span>
      </div>
    </>
  );
}
