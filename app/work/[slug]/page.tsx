import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data";

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
    <div className="min-h-screen flex flex-col" style={{ background: "var(--pitch-black)" }}>

      {/* Nav */}
      <nav
        className="flex items-center justify-between px-8 py-6 border-b"
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

      {/* Main */}
      <div className="flex-1 flex flex-col px-8 pt-16 pb-16 max-w-4xl">

        {/* Back */}
        <Link
          href="/work"
          className="text-[10px] tracking-[0.25em] uppercase mb-12 transition-opacity hover:opacity-60 self-start"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          ← Selected Work
        </Link>

        {/* Metadata row */}
        <div
          className="flex flex-wrap gap-x-8 gap-y-1 mb-8 text-[10px] tracking-[0.2em] uppercase"
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
          className="text-[clamp(3rem,8vw,7rem)] leading-[1.0] font-light italic mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
        >
          {project.title}
        </h1>

        {/* Credits */}
        <div
          className="flex flex-wrap gap-x-10 gap-y-1 mb-12 text-[10px] tracking-[0.2em] uppercase border-t pt-6"
          style={{
            fontFamily: "var(--font-label)",
            color: "var(--cool-steel)",
            borderColor: "rgba(150,172,183,0.15)",
          }}
        >
          <span>{project.role} — Nathan Crowley</span>
          <span>Dir. {project.director}</span>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed font-light max-w-2xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Prev / Next */}
      <div
        className="flex items-center justify-between px-8 py-6 border-t"
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
