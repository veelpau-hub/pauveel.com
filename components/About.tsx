const SKILLS = [
  ["01", "UX/UI Design",       "Figma · Wireframing · Prototyping · User Research"],
  ["02", "Front-end Dev",      "HTML · CSS · JS · React · D3.js"],
  ["03", "Data & Geo",         "Mapbox GL JS · Python · Flask · Data Viz · APIs"],
  ["04", "Brand & Motion",     "Adobe Suite · Illustrator · After Effects · Motion"],
  ["05", "Product & Platform", "App Store · Google Play · Reskyt · Docker · Node.js"],
  ["06", "Languages",          "Catalan (Native) · Spanish (Native) · English (C1)"],
] as const;

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="sec-head">
        <span className="num">03 / About</span>
        <h2 className="name">About.</h2>
        <span className="meta">
          Designer, developer,
          <br />
          occasional cartographer.
        </span>
      </div>

      <div className="about-grid">
        <p className="about-quote">
          I design the interface and <span className="it acc">write the code</span>{" "}
          that makes it ship.
        </p>

        <div className="about-col">
          <p>
            <strong>Pau Vidal</strong> is a UX/UI designer and front-end
            developer based in Lleida, Cataluña. Trained in graphic design at
            the UOC, currently completing an MBA — sharpened by years of
            shipping mobile apps and technical interfaces.
          </p>
          <p>
            At <strong>Reskyt</strong> he designs and builds mobile apps for
            ecommerce brands — from wireframe to App Store. At{" "}
            <strong>Anvie Studio</strong> he defines brand identity for early-stage
            companies. Previously at <strong>VMLY&amp;R</strong>, creating digital
            campaigns for Danone, Naturgy and Miravia.
          </p>
          <p>
            Side projects explore the edges: real-time maritime dashboards,
            IoT sensor networks, GPS running trackers. The through-line is
            always the same — design and code as one thing, not two.
          </p>
        </div>

        <div className="about-col">
          <div className="skills">
            {SKILLS.map(([n, name, tools]) => (
              <div className="skill-row" key={n}>
                <span className="sk-n">{n}</span>
                <span className="sk-name">{name}</span>
                <span className="sk-tools">{tools}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
