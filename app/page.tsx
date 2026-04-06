import Link from "next/link";
import { projects } from "./data";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full overflow-hidden flex flex-col"
      style={{ background: "var(--pitch-black)" }}
    >
      {/* Background gradient — replace with full-bleed film still */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #1c1c28 0%, #0d0d0d 55%, var(--pitch-black) 100%)",
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-8 py-6"
        style={{ fontFamily: "var(--font-label)" }}
      >
        <span
          className="text-sm font-bold tracking-[0.3em] uppercase"
          style={{ color: "var(--parchment)" }}
        >
          CROW
        </span>
        <div className="flex items-center gap-10">
          <Link
            href="/enter"
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

      {/* Body */}
      <div className="relative z-10 flex flex-1 items-stretch px-8 pb-8">
        {/* Left — project list teaser */}
        <div className="flex flex-col justify-center gap-7 w-64 shrink-0">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href="/enter"
              className="group block transition-opacity hover:opacity-60"
              style={{ fontFamily: "var(--font-label)" }}
            >
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--parchment)" }}
              >
                {p.title}
              </p>
              <p
                className="text-[10px] tracking-[0.18em] uppercase mt-0.5"
                style={{ color: "var(--cool-steel)" }}
              >
                [ {p.client} ]
              </p>
            </Link>
          ))}
        </div>

        {/* Right — tagline */}
        <div className="flex flex-col justify-end flex-1 pl-16 pb-2">
          <h1
            className="text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.08] font-light italic"
            style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
          >
            Shaping the worlds<br />that films inhabit.
          </h1>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 flex items-center justify-between px-8 py-4 border-t"
        style={{
          borderColor: "rgba(150,172,183,0.15)",
          fontFamily: "var(--font-label)",
        }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--cool-steel)" }}
        >
          Los Angeles
        </span>
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--cool-steel)" }}
        >
          7× Academy Award Nominated &nbsp;·&nbsp; 1× Winner
        </span>
        <a
          href="mailto:hello@lecrow.com"
          className="text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          style={{ color: "var(--cool-steel)" }}
        >
          hello@lecrow.com
        </a>
      </div>
    </div>
  );
}
