const SKILLS = [
  ["01", "Brand & Identity",  "Logotypes · Marks · Systems · Print"],
  ["02", "Product & UX",      "Figma · Prototyping · Design Systems"],
  ["03", "Visual Direction",  "Editorial · Layout · Type"],
  ["04", "Code",              "HTML · CSS · JS · React · WebGL"],
  ["05", "Motion",            "After Effects · Lottie · CSS / SVG"],
] as const;

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="sec-head">
        <span className="num">03 / About</span>
        <h2 className="name">About.</h2>
        <span className="meta">
          Designer, programmer,
          <br />
          occasional typesetter.
        </span>
      </div>

      <div className="about-grid">
        <p className="about-quote">
          I make{" "}
          <span className="it acc">considered</span>{" "}
          work for people who care about the{" "}
          <span className="it">details</span> nobody asks about.
        </p>

        <div className="about-col">
          <p>
            <strong>Pau Veel</strong> is an independent designer and front-end
            engineer based in Barcelona. Trained as a graphic designer,
            sharpened by ten years of shipping software.
          </p>
          <p>
            The work sits between <strong>visual identity</strong>,{" "}
            <strong>product design</strong>, and <strong>code</strong>. A logo
            and the website it lives on. A design system and the React
            components that render it. The poster and the print file. End to
            end, one person, no handoffs.
          </p>
          <p>
            Currently available for selected studio collaborations and a small
            number of long-term partnerships. Previously: Forma, Caldera, Mota.
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
