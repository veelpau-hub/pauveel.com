const PROJECTS = [
  { n: "01", title: "Forma Studio",      tags: "Identity · Web",       year: "2025" },
  { n: "02", title: "Caldera OS",        tags: "Product · UI System",  year: "2025" },
  { n: "03", title: "Mota Editorial",    tags: "Brand · Print",        year: "2024" },
  { n: "04", title: "Bruta Coffee",      tags: "Identity · Packaging", year: "2024" },
  { n: "05", title: "Atlas Field Notes", tags: "Editorial · Code",     year: "2023" },
  { n: "06", title: "Sonder Atelier",    tags: "Web · Direction",      year: "2023" },
];

function rng(seed: number, n: number) {
  const x = Math.sin(seed * 9301 + n * 49297) * 233280;
  return x - Math.floor(x);
}

function PlaceholderThumb({ seed }: { seed: number }) {
  const v = seed % 5;
  const id = `g${seed}`;
  return (
    <div className="thumb">
      <div className="thumb-placeholder">
        <svg
          className="bg"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill={`url(#${id})`} />
          {v === 0 && (
            <>
              <circle cx={120 + rng(seed, 1) * 100} cy={150} r={80} fill="none" stroke="currentColor" strokeOpacity=".18" strokeWidth=".5" />
              <circle cx={220 + rng(seed, 2) * 100} cy={150} r={60} fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth=".5" />
            </>
          )}
          {v === 1 && (
            <>
              <line x1="0" y1={100 + rng(seed, 1) * 80} x2="400" y2={100 + rng(seed, 2) * 80} stroke="currentColor" strokeOpacity=".2" strokeWidth=".5" />
              <line x1="0" y1={150 + rng(seed, 3) * 60} x2="400" y2={150 + rng(seed, 4) * 60} stroke="currentColor" strokeOpacity=".15" strokeWidth=".5" />
            </>
          )}
          {v === 2 && (
            <g stroke="currentColor" strokeOpacity=".15" strokeWidth=".5" fill="none">
              {Array.from({ length: 8 }).map((_, i) => (
                <rect key={i} x={20 + i * 45} y={80} width="40" height="140" />
              ))}
            </g>
          )}
          {v === 3 && (
            <g fill="currentColor" fillOpacity=".08">
              <rect x="40" y="40" width="320" height="220" />
              <rect x="80" y="80" width="240" height="140" fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth=".5" />
            </g>
          )}
          {v === 4 && (
            <g stroke="currentColor" strokeOpacity=".18" strokeWidth=".5" fill="none">
              <path d={`M 0 150 Q 100 ${50 + rng(seed, 1) * 100} 200 150 T 400 150`} />
              <path d={`M 0 170 Q 100 ${70 + rng(seed, 2) * 100} 200 170 T 400 170`} />
            </g>
          )}
        </svg>
        <span>{PROJECTS[seed % PROJECTS.length]?.title ?? "Project"}</span>
        <span className="dim">Placeholder</span>
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
          A handful of recent things.
          <br />
          {PROJECTS.length} projects · 2023—2025
        </span>
      </div>
      <div className="work-wrap">
        <div className="work" data-layout="grid">
          {PROJECTS.map((p, i) => (
            <article className="card" key={p.n}>
              <PlaceholderThumb seed={i} />
              <div className="meta-row">
                <span className="card-num">{p.n}</span>
                <span className="card-title-grid">{p.title}</span>
                <span className="card-year">{p.year}</span>
              </div>
              <span className="card-tags">{p.tags}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
