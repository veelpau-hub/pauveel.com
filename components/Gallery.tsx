"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))", gap: 12 }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{ position: "relative", aspectRatio: "4/3", borderRadius: 4, overflow: "hidden", border: "1px solid var(--rule)", background: "var(--panel)", cursor: "zoom-in", padding: 0, display: "block", width: "100%" }}
          >
            <Image src={src} alt={`${title} — ${i + 1}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          onClick={close}
          style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "min(90vw, 1200px)", maxHeight: "90vh", width: "100%", aspectRatio: "auto" }}
          >
            <img
              src={images[active]}
              alt={`${title} — ${active + 1}`}
              style={{ maxWidth: "min(90vw, 1200px)", maxHeight: "90vh", objectFit: "contain", display: "block", borderRadius: 4 }}
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            style={{ position: "fixed", top: 24, right: 24, background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", lineHeight: 1, opacity: .7, padding: 8 }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{ position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: 20, cursor: "pointer", borderRadius: 999, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Previous"
            >
              ←
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", color: "#fff", fontSize: 20, cursor: "pointer", borderRadius: 999, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Next"
            >
              →
            </button>
          )}

          {/* Counter */}
          <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".1em", color: "rgba(255,255,255,.4)", textTransform: "uppercase" }}>
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
