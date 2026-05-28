import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Link from "next/link";

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
    desc: "This portfolio. Designed in Figma, coded from scratch in Next.js with Claude as the primary coding partner. No templates, no page builders.",
  },
  {
    n: "02",
    title: "Homerun v2",
    tags: "Web App · React · AI-assisted",
    year: "2025",
    status: "wip" as const,
    href: "#",
    desc: "Second iteration of a personal productivity tool. Architecture and component logic co-designed with AI.",
  },
  {
    n: "03",
    title: "— Coming soon",
    tags: "",
    year: "",
    status: "soon" as const,
    href: "#",
    desc: "",
  },
];

function StatusBadge({ status }: { status: "live" | "wip" | "soon" }) {
  const map = {
    live: { label: "Live", color: "var(--accent)" },
    wip:  { label: "WIP",  color: "var(--ink-dim)" },
    soon: { label: "",     color: "transparent" },
  };
  const { label, color } = map[status];
  if (!label) return null;
  return (
    <span
      style={{
        fontFamily: "var(--ff-mono)",
        fontSize: 10,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        color,
        border: `1px solid ${color}`,
        padding: "2px 8px",
        borderRadius: 999,
      }}
    >
      {label}
    </span>
  );
}

/* AI chip SVG — circuit/node pattern */
function ChipThumb({ index }: { index: number }) {
  if (index === 0) return <ThumbPortfolio />;
  if (index === 1) return <ThumbHomerun />;
  return <ThumbSoon />;
}

function ThumbPortfolio() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ai0" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity=".07" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ai0)" />
      {/* browser chrome */}
      <rect x="60" y="50" width="280" height="200" rx="4" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".12" strokeWidth=".75" />
      {/* title bar */}
      <rect x="60" y="50" width="280" height="28" rx="4" fill="currentColor" fillOpacity=".06" stroke="none" />
      {[80, 96, 112].map((x) => (
        <circle key={x} cx={x} cy="64" r="4" fill="currentColor" fillOpacity=".12" />
      ))}
      {/* content lines */}
      {[110, 125, 140, 165, 180, 195, 220].map((y, i) => (
        <line key={y} x1="80" y1={y} x2={i % 3 === 0 ? 320 : i % 3 === 1 ? 280 : 240} y2={y}
          stroke="currentColor" strokeOpacity=".12" strokeWidth=".75" />
      ))}
      {/* accent block */}
      <rect x="80" y="230" width="60" height="8" rx="2" fill="currentColor" fillOpacity=".2" />
    </svg>
  );
}

function ThumbHomerun() {
  const pts = [70,200, 115,155, 160,170, 205,120, 250,138, 295,90, 330,110];
  const d = pts.reduce((s, v, i) => s + (i % 2 === 0 ? (i === 0 ? `M ${v}` : ` L ${v}`) : ` ${v}`), "");
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ai1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".05" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ai1)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={i} x1="40" y1={60 + i * 44} x2="360" y2={60 + i * 44}
          stroke="currentColor" strokeOpacity=".07" strokeWidth=".5" />
      ))}
      <path d={d} fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth="1.25" />
      {Array.from({ length: pts.length / 2 }).map((_, i) => (
        <circle key={i} cx={pts[i * 2]} cy={pts[i * 2 + 1]} r="3"
          fill="currentColor" fillOpacity=".3" />
      ))}
      {/* AI node cluster */}
      {[[180,230],[210,240],[240,228],[210,215]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="5" fill="currentColor" fillOpacity=".08"
          stroke="currentColor" strokeOpacity=".18" strokeWidth=".5" />
      ))}
      <line x1="180" y1="230" x2="210" y2="240" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
      <line x1="210" y1="240" x2="240" y2="228" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
      <line x1="240" y1="228" x2="210" y2="215" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
      <line x1="210" y1="215" x2="180" y2="230" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
    </svg>
  );
}

function ThumbSoon() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" fill="currentColor" fillOpacity=".02" />
      <line x1="40" y1="40" x2="360" y2="260" stroke="currentColor" strokeOpacity=".05" strokeWidth=".5" />
      <line x1="360" y1="40" x2="40" y2="260" stroke="currentColor" strokeOpacity=".05" strokeWidth=".5" />
      <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeOpacity=".07" strokeWidth=".5" strokeDasharray="4 4" />
    </svg>
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
            <span className="italic-acc" style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>
              AI.
            </span>
          </h1>
          <span className="meta">
            Prototypes, tools and<br />
            shipped products.
          </span>
        </div>

        <div
          style={{
            padding: "0 var(--gutter)",
            marginBottom: 48,
            fontFamily: "var(--ff-sans)",
            fontSize: 15,
            color: "var(--ink-dim)",
            maxWidth: "60ch",
            lineHeight: 1.6,
          }}
        >
          Apps and tools where AI played an active role — as a coding partner,
          design critic, or core feature. Not prompt demos: real products built
          to solve a real problem.
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
                style={app.status === "soon" ? { pointerEvents: "none", opacity: 0.35 } : undefined}
              >
                <div className="thumb" style={app.status === "soon" ? { borderStyle: "dashed" } : undefined}>
                  <div className="thumb-placeholder">
                    <ChipThumb index={i} />
                  </div>
                </div>
                <div className="meta-row">
                  <span className="card-num">{app.n}</span>
                  <span className="card-title-grid">{app.title}</span>
                  <span className="card-year" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <StatusBadge status={app.status} />
                    {app.year}
                  </span>
                </div>
                {app.tags && <span className="card-tags">{app.tags}</span>}
                {app.desc && (
                  <p
                    style={{
                      fontFamily: "var(--ff-sans)",
                      fontSize: 13,
                      color: "var(--ink-dim)",
                      marginTop: 10,
                      paddingLeft: 26,
                      lineHeight: 1.5,
                      maxWidth: "52ch",
                    }}
                  >
                    {app.desc}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{
          padding: "48px var(--gutter)",
          borderTop: "1px solid var(--rule)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--ff-mono)",
          fontSize: 11,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "var(--ink-dim)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 16, lineHeight: 1 }}>←</span>
          Back to portfolio
        </Link>
        <span>Pau Vidal © MMXXVI</span>
      </div>
    </>
  );
}
