const NAV = [
  ["01", "Intro", "#intro"],
  ["02", "Selected Work", "#work"],
  ["03", "About", "#about"],
  ["04", "Case Study", "#case"],
  ["05", "Contact", "#contact"],
  ["↗", "AI Apps", "/ai-apps"],
] as const;

export default function IndexStrip() {
  return (
    <div className="index-strip">
      <div className="container">
        {NAV.map(([n, label, href]) => (
          <a key={n} href={href}>
            <span className="n">{n}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
