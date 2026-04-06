import Link from "next/link";
import { projects } from "../data";

export default function WorkPage() {
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
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: "var(--almond-silk)" }}
          >
            Work
          </span>
          <Link
            href="/contact"
            className="text-xs font-medium tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--parchment)" }}
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="px-8 pt-16 pb-12">
        <h1
          className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-light italic"
          style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
        >
          Selected Work
        </h1>
        <p
          className="mt-3 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          Nathan Crowley &nbsp;·&nbsp; Production Designer
        </p>
      </div>

      {/* Project list */}
      <div className="flex-1 px-8 pb-16">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className="flex items-baseline justify-between py-6 border-t"
            style={{ borderColor: "rgba(150,172,183,0.15)" }}
          >
            {/* Left */}
            <div className="flex items-baseline gap-8">
              {/* Index — metadata tier */}
              <span
                className="text-[10px] tracking-[0.2em] w-6 shrink-0"
                style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2
                  className="text-2xl md:text-3xl font-light"
                  style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
                >
                  {project.title}
                  {project.oscarWon && (
                    <span
                      className="ml-3 text-base"
                      style={{ color: "var(--almond-silk)" }}
                      title="Academy Award Winner"
                    >
                      ★
                    </span>
                  )}
                  {project.oscarNominated && !project.oscarWon && (
                    <span
                      className="ml-3 text-base"
                      style={{ color: "var(--cool-steel)" }}
                      title="Academy Award Nominated"
                    >
                      ✦
                    </span>
                  )}
                </h2>
                <p
                  className="text-[10px] tracking-[0.18em] uppercase mt-1"
                  style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
                >
                  [ {project.studio} ]
                </p>
              </div>
            </div>

            {/* Right — metadata tier */}
            <div
              className="flex items-baseline gap-8 shrink-0 ml-8 text-right"
              style={{ fontFamily: "var(--font-label)" }}
            >
              <span
                className="hidden md:block text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--cool-steel)" }}
              >
                Dir. {project.director}
              </span>
              <span
                className="hidden md:block text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--cool-steel)" }}
              >
                {project.type}
              </span>
              <span
                className="text-[10px] tracking-[0.2em]"
                style={{ color: "var(--cool-steel)" }}
              >
                {project.year}
              </span>
            </div>
          </div>
        ))}
        <div className="border-t" style={{ borderColor: "rgba(150,172,183,0.15)" }} />

        {/* Legend */}
        <div className="flex gap-8 mt-8">
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            <span style={{ color: "var(--almond-silk)" }}>★</span> &nbsp;Academy Award Winner
          </span>
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            ✦ &nbsp;Academy Award Nominated
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex items-center justify-between px-8 py-4 border-t"
        style={{ borderColor: "rgba(150,172,183,0.15)", fontFamily: "var(--font-label)" }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--cool-steel)" }}>
          Los Angeles
        </span>
        <a
          href="mailto:hello@lecrow.com"
          className="text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "var(--cool-steel)" }}
        >
          hello@lecrow.com
        </a>
      </footer>
    </div>
  );
}
