const WORDS = [
  "Identity",
  "Product",
  "Editorial",
  "Web",
  "Brand",
  "Motion",
  "Code",
  "Direction",
  "System",
  "Type",
];

function Track() {
  return (
    <div className="track" aria-hidden="true">
      {WORDS.map((w, i) => (
        <span key={i}>
          {w}
          <span className="mdot">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <Track />
      <Track />
    </div>
  );
}
