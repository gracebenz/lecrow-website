import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";
import { ImageGallery } from "./image-gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div className="h-screen overflow-hidden flex flex-col" style={{ background: "var(--pitch-black)" }}>

      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-6 border-b shrink-0"
        style={{ borderColor: "rgba(150,172,183,0.15)", fontFamily: "var(--font-label)" }}
      >
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.3em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "var(--parchment)" }}
        >
          CROW
        </Link>
        <div className="flex items-center gap-10">
          <Link
            href="/work"
            className="text-xs font-medium tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--parchment)" }}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="text-xs font-medium tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--parchment)" }}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Header — full width, compact */}
      <div className="px-8 pt-8 pb-5 shrink-0">

        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/work"
            className="text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            ← Selected Work
          </Link>
        </div>

        {/* Metadata — above title */}
        <div
          className="flex gap-6 text-[10px] tracking-[0.2em] uppercase mb-2"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          <span>[ {project.studio} ]</span>
          <span>{project.type}</span>
          <span>{project.year}</span>
          {project.oscarWon && (
            <span style={{ color: "var(--almond-silk)" }}>★ Academy Award Winner</span>
          )}
          {project.oscarNominated && !project.oscarWon && (
            <span>✦ Academy Award Nominated</span>
          )}
        </div>

        {/* Title */}
        <h1
          className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.0] font-light italic"
          style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
        >
          {project.title}
        </h1>

        {/* Credits — below title */}
        <div
          className="flex gap-8 text-[10px] tracking-[0.2em] uppercase mt-2 mb-4"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          <span>{project.role} — Nathan Crowley</span>
          <span>Dir. {project.director}</span>
        </div>

        {/* Description */}
        <p
          className="text-lg leading-relaxed font-light max-w-3xl border-t pt-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--parchment)", opacity: 0.85, borderColor: "rgba(150,172,183,0.15)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Gallery — fills remaining space */}
      <div className="flex-1 overflow-hidden px-8 pb-4">
        {project.images && project.images.length > 0 ? (
          <ImageGallery images={project.images} title={project.title} />
        ) : (
          <div className="flex flex-col gap-3 h-full">
            <div
              className="flex-1 flex items-end p-4"
              style={{ background: "var(--charcoal)" }}
            >
              <span
                className="text-[9px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-label)", color: "rgba(150,172,183,0.3)" }}
              >
                Images to be added
              </span>
            </div>
            <div className="flex gap-2 shrink-0">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: "120px", aspectRatio: "16 / 9", background: "var(--charcoal)", opacity: i === 0 ? 1 : 0.4 }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next */}
      <div
        className="flex items-center justify-between px-8 py-4 border-t shrink-0"
        style={{ borderColor: "rgba(150,172,183,0.15)", fontFamily: "var(--font-label)" }}
      >
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--cool-steel)" }}
          >
            ← {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--cool-steel)" }}
          >
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
