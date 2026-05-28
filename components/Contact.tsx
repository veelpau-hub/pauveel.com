const SOCIALS = [
  { label: "LinkedIn",  href: "https://linkedin.com/in/pauveel" },
  { label: "GitHub",    href: "https://github.com/veelpau-hub" },
  { label: "Instagram", href: "#" },
  { label: "Are.na",    href: "#" },
  { label: "Read.cv",   href: "#" },
];

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <p className="pre">— Let&rsquo;s make something —</p>

        <h2>
          <span className="it">magnan</span>
          imous
          <span className="acc">.</span>
        </h2>

        <a
          className="email"
          href="mailto:veelpau@gmail.com"
          aria-label="Send an email to veelpau@gmail.com"
        >
          veelpau@gmail.com
          <span className="arr">↗</span>
        </a>

        <div className="socials">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={`${label} profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="colophon" id="colophon">
        <div>
          Pau Vidal © MMXXVI
          <br />
          All rights reserved
        </div>
        <div className="col-center">
          Set in Bricolage Grotesque,
          <br />
          Instrument Serif &amp; JetBrains Mono
        </div>
        <div className="col-right">
          Coded by hand
          <br />
          in Barcelona
        </div>
      </footer>
    </>
  );
}
