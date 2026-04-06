import Link from "next/link";

export default function ContactPage() {
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
            href="/enter"
            className="text-xs font-medium tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--parchment)" }}
          >
            Work
          </Link>
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase"
            style={{ color: "var(--almond-silk)" }}
          >
            Contact
          </span>
        </div>
      </nav>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
        <a
          href="mailto:hello@lecrow.com"
          className="transition-opacity hover:opacity-70"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="block text-[clamp(2rem,6vw,5.5rem)] leading-[1.05] font-light italic"
            style={{ color: "var(--almond-silk)" }}
          >
            hello@lecrow.com
          </span>
        </a>

        <p
          className="mt-8 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          New York &nbsp;—&nbsp; Available for selected projects
        </p>
      </div>
    </div>
  );
}
