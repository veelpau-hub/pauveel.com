"use client";

import { useEffect, useRef, useState } from "react";

const LINES: { text: string; italic?: boolean }[] = [
  { text: "Not your" },
  { text: "average", italic: true },
  { text: "designer." },
];

const PARALLAX = [0.15, -0.2, 0.1];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const tick = () => {
      rafRef.current = 0;
      setScrollY(window.scrollY);
    };
    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero" id="intro">
      <div className="hero-meta">
        {[
          ["Designer / 001", "Pau Veel"],
          ["Discipline", "Visual · Brand · Product · Code"],
          ["Years active", "2017 — present"],
          ["Index", "01 / 05"],
        ].map(([k, v]) => (
          <div className="hero-meta-item" key={k}>
            <span className="k">{k}</span>
            <span className="v">{v}</span>
          </div>
        ))}
      </div>

      <h1 className="hero-stack" aria-label="Not your average designer.">
        {LINES.map((line, i) => {
          const ox = reduced ? 0 : PARALLAX[i] * scrollY;
          return (
            <span
              key={i}
              className="hero-line"
              data-indent={i}
              style={{
                transform: `translate3d(${ox}px, 0, 0)`,
                willChange: reduced ? "auto" : "transform",
              }}
              aria-hidden={i > 0 ? "true" : undefined}
            >
              {line.italic ? (
                <span className="italic-acc">{line.text}</span>
              ) : (
                line.text
              )}
            </span>
          );
        })}
      </h1>

      <div className="hero-foot">
        <p className="tagline">
          A designer who <em>writes the code</em>, draws the marks, and ships
          the product. Studio of one. Quiet by default, loud when it earns it.
        </p>
        <div className="scroll">
          <span>Scroll · Selected Work</span>
          <span className="arrow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
