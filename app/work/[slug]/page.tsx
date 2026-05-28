import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";
import { getProject, PROJECTS } from "@/lib/work";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Pau Vidal`,
    description: project.desc,
  };
}

export default async function WorkDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[idx - 1];
  const next = PROJECTS[idx + 1];

  return (
    <>
      <TopBar />

      <article style={{ paddingTop: 100 }}>

        {/* ── Back ── */}
        <div style={{ padding: "24px var(--gutter) 0", fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <Link href="/#work" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 16 }}>←</span> Selected Work
          </Link>
        </div>

        {/* ── Hero ── */}
        <div style={{ padding: "48px var(--gutter) 0" }}>
          {project.image ? (
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/8", borderRadius: 4, overflow: "hidden", border: "1px solid var(--rule)", background: "var(--panel)" }}>
              <Image src={project.image} alt={project.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
            </div>
          ) : (
            <div style={{ width: "100%", aspectRatio: "16/8", background: "var(--panel)", border: "1px solid var(--rule)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{project.title}</span>
            </div>
          )}
        </div>

        {/* ── Meta ── */}
        <div className="case-meta" style={{ marginTop: 48 }}>
          {Object.entries(project.meta).map(([k, v]) => (
            <div key={k}>
              <span className="k">{k.charAt(0).toUpperCase() + k.slice(1)}</span>
              <span className="v">{v}</span>
            </div>
          ))}
        </div>

        {/* ── Title + body ── */}
        <div className="case-body">
          <h1 style={{ fontFamily: "var(--ff-display)", fontVariationSettings: '"wdth" 75', fontWeight: 800, fontSize: "clamp(40px, 7vw, 100px)", lineHeight: .9, letterSpacing: "-.025em", margin: 0, color: "var(--ink)" }}>
            {project.title}<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <div>
            {project.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {(project.liveHref || project.externalHref) && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
                {project.liveHref && (
                  <a href={project.liveHref} target="_blank" rel="noopener noreferrer" className="contact email" style={{ display: "inline-flex", fontSize: 14 }}>
                    View Live <span className="arr">↗</span>
                  </a>
                )}
                {project.externalHref && (
                  <a href={project.externalHref} target="_blank" rel="noopener noreferrer" className="contact email" style={{ display: "inline-flex", fontSize: 14 }}>
                    View on GitHub <span className="arr">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── Gallery ── */}
        {project.gallery.length > 0 && (
          <div style={{ padding: "64px var(--gutter) 0" }}>
            <Gallery images={project.gallery} title={project.title} />
          </div>
        )}

        {/* ── Prev / Next ── */}
        <nav style={{ marginTop: 96, padding: "32px var(--gutter)", borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, fontFamily: "var(--ff-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>
            {prev && (
              <Link href={`/work/${prev.slug}`} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span>← Previous</span>
                <span style={{ fontFamily: "var(--ff-display)", fontVariationSettings: '"wdth" 88', fontWeight: 600, fontSize: 18, color: "var(--ink)", letterSpacing: "-.01em", textTransform: "none" }}>{prev.title}</span>
              </Link>
            )}
          </div>
          <div style={{ textAlign: "right" }}>
            {next && (
              <Link href={`/work/${next.slug}`} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                <span>Next →</span>
                <span style={{ fontFamily: "var(--ff-display)", fontVariationSettings: '"wdth" 88', fontWeight: 600, fontSize: 18, color: "var(--ink)", letterSpacing: "-.01em", textTransform: "none" }}>{next.title}</span>
              </Link>
            )}
          </div>
        </nav>

        <footer style={{ padding: "32px var(--gutter) 48px", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
          <span>Pau Vidal © MMXXVI</span>
          <Link href="/">pauveel.com</Link>
        </footer>

      </article>
    </>
  );
}
