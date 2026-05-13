export default function CaseStudy() {
  return (
    <section className="sec" id="case">
      <div className="sec-head">
        <span className="num">04 / Featured</span>
        <h2 className="name">
          Caldera OS<span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        <span className="meta">
          A design system for
          <br />a calm operating layer.
        </span>
      </div>

      <div className="work-wrap">
        <div className="case-hero">
          <svg
            className="case-bg"
            viewBox="0 0 1600 800"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" stopOpacity=".15" />
              </linearGradient>
            </defs>
            <rect width="1600" height="800" fill="url(#cg1)" />
            <g stroke="currentColor" strokeOpacity=".15" strokeWidth=".5" fill="none">
              {Array.from({ length: 24 }).map((_, i) => (
                <line key={i} x1={i * 70} y1="0" x2={i * 70} y2="800" />
              ))}
              <rect x="200" y="160" width="1200" height="480" />
              <rect x="280" y="220" width="1040" height="60" fill="currentColor" fillOpacity=".05" stroke="none" />
              <rect x="280" y="300" width="640" height="320" fill="currentColor" fillOpacity=".05" stroke="none" />
              <rect x="940" y="300" width="380" height="150" fill="currentColor" fillOpacity=".05" stroke="none" />
              <rect x="940" y="470" width="380" height="150" fill="currentColor" fillOpacity=".05" stroke="none" />
            </g>
          </svg>
          <p className="ph">Caldera OS — Cover image</p>
        </div>
      </div>

      <div className="case-meta">
        {[
          ["Client", "Caldera Systems Inc."],
          ["Year", "2025"],
          ["Role", "Design · Identity · Code"],
          ["Scope", "Brand, Product UI, Design System, Marketing site"],
        ].map(([k, v]) => (
          <div key={k}>
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </div>
        ))}
      </div>

      <div className="case-body">
        <h3>
          The brief was
          <br />
          one word:
          <br />
          <span
            style={{
              fontFamily: "var(--ff-serif)",
              fontStyle: "italic",
              fontVariationSettings: '"wdth" 100',
              color: "var(--accent)",
            }}
          >
            quiet
          </span>
          .
        </h3>

        <div>
          <p>
            Caldera builds infrastructure for engineering teams. The category
            sells itself on speed and density — pages full of metrics,
            dashboards stacked like radar screens. Our hypothesis was the
            opposite: the tool that <strong>recedes</strong> wins.
          </p>
          <p>
            We rebuilt the identity around a single grotesk, a restrained
            two-color palette, and a 4-pt grid that would later become the
            entire product&rsquo;s spacing system. The marketing site and the
            app share one design token file. Designers ship in Figma. Engineers
            consume the same tokens via CSS variables. No translation layer.
          </p>
          <blockquote className="blockquote">
            &ldquo;The redesign cut our component count by 60% and our marketing
            launch time by half. We stopped arguing about pixels.&rdquo;
          </blockquote>
          <p>
            <strong>Outcome.</strong> Twelve weeks, end to end. One designer,
            two engineers, shipped a 140-component system, a six-page marketing
            site, and a new product surface for a 2,000-customer beta. Acquired
            by a larger infra player six months later.
          </p>
        </div>
      </div>

      <div className="case-gallery">
        {[
          "Brand mark · 04 variations",
          "Component library · selected",
          "Marketing site · home",
        ].map((label) => (
          <div className="case-tile" key={label}>
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
