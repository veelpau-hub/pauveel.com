export default function CaseStudy() {
  return (
    <section className="sec" id="case">
      <div className="sec-head">
        <span className="num">04 / Featured</span>
        <h2 className="name">
          Gyreo<span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        <span className="meta">
          Maritime intelligence
          <br />
          for the Bay of Cádiz.
        </span>
      </div>

      <div className="work-wrap">
        <div className="case-hero">
          {/* Nautical chart SVG placeholder — replace with real screenshot */}
          <svg
            className="case-bg"
            viewBox="0 0 1600 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" stopOpacity=".12" />
              </linearGradient>
            </defs>
            <rect width="1600" height="800" fill="url(#cg1)" />
            {/* Grid lines */}
            <g stroke="currentColor" strokeOpacity=".08" strokeWidth=".5" fill="none">
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 84} y1="0" x2={i * 84} y2="800" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 88} x2="1600" y2={i * 88} />
              ))}
            </g>
            {/* Concentric rings — nautical chart */}
            {[320, 240, 160, 90, 40].map((r) => (
              <circle key={r} cx="800" cy="400" r={r} fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth=".5" />
            ))}
            {/* Rhumb lines */}
            {[0, 45, 90, 135].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <line key={deg}
                  x1={800 - Math.cos(rad) * 450} y1={400 - Math.sin(rad) * 450}
                  x2={800 + Math.cos(rad) * 450} y2={400 + Math.sin(rad) * 450}
                  stroke="currentColor" strokeOpacity=".1" strokeWidth=".5"
                />
              );
            })}
            {/* Dashboard panels */}
            <rect x="120" y="80" width="320" height="200" rx="2" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
            <rect x="120" y="300" width="320" height="140" rx="2" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
            <rect x="1160" y="80" width="320" height="200" rx="2" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
            <rect x="1160" y="300" width="320" height="140" rx="2" fill="currentColor" fillOpacity=".04" stroke="currentColor" strokeOpacity=".1" strokeWidth=".5" />
            {/* Vessel track */}
            <path d="M 400 600 Q 560 520 680 460 Q 760 420 800 400" fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth="1" strokeDasharray="5 4" />
            <circle cx="800" cy="400" r="5" fill="currentColor" fillOpacity=".35" />
            <circle cx="800" cy="400" r="2" fill="currentColor" fillOpacity=".7" />
          </svg>
          <p className="ph">Gyreo — Dashboard view<br /><span style={{ opacity: 0.5, fontSize: "0.85em" }}>Screenshot pending</span></p>
        </div>
      </div>

      <div className="case-meta">
        {[
          ["Type",   "Personal project"],
          ["Year",   "2025 – 2026"],
          ["Role",   "Design · Development · Deploy"],
          ["Stack",  "Python · Flask · Mapbox GL JS · D3.js · Open-Meteo · Render"],
        ].map(([k, v]) => (
          <div key={k}>
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </div>
        ))}
      </div>

      <div className="case-body">
        <h3>
          Built for the
          <br />
          people who read
          <br />
          <span
            style={{
              fontFamily: "var(--ff-serif)",
              fontStyle: "italic",
              fontVariationSettings: '"wdth" 100',
              color: "var(--accent)",
            }}
          >
            the sea.
          </span>
        </h3>

        <div>
          <p>
            Gyreo started as a personal tool for sailors and naval professionals
            in the Bay of Cádiz — a region with complex tidal patterns, heavy
            maritime traffic, and weather that changes faster than any standard
            forecast app conveys.
          </p>
          <p>
            The dashboard aggregates live AIS vessel positions, Open-Meteo
            marine and atmospheric forecasts, Copernicus Sentinel-1 SAR imagery,
            and tide prediction data into a single Mapbox GL JS interface. Every
            data source is refreshed on independent cycles; the backend is a
            Flask app running background threads, deployed on Render. No
            third-party weather widgets — every widget is{" "}
            <strong>hand-drawn in D3.js</strong>: wind rose, Beaufort arc,
            wave height chart, solar arc, barometer.
          </p>
          <blockquote className="blockquote">
            &ldquo;The goal was a tool that a professional would trust at 06:00,
            not a consumer app dressed up in nautical colours.&rdquo;
          </blockquote>
          <p>
            <strong>Outcome.</strong> Deployed and live. The same codebase that
            started as a weekend experiment now handles WebSocket AIS streams,
            SAR image processing with NumPy and Pillow, and a Telegram alert
            bot for anomalous vessel behaviour — all from a single Python process.
          </p>
        </div>
      </div>

      <div className="case-gallery">
        {[
          "AIS vessel tracking · live",
          "D3.js weather widgets · 7 panels",
          "SAR Sentinel-1 · overlay",
        ].map((label) => (
          <div className="case-tile" key={label}>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
