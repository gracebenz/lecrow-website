import Link from "next/link";
import { checkPassword } from "./actions";

export default async function EnterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ background: "var(--pitch-black)" }}
    >
      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-8 text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
        style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
      >
        ← CROW
      </Link>

      <div className="flex flex-col items-center gap-10 w-full max-w-xs px-8">
        {/* Wordmark — consistent with landing */}
        <span
          className="text-sm font-bold tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-label)", color: "var(--parchment)" }}
        >
          CROW
        </span>

        {/* Form */}
        <form action={checkPassword} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoFocus
              autoComplete="off"
              className="w-full bg-transparent border-b py-2 text-sm tracking-widest outline-none transition-colors"
              style={{
                fontFamily: "var(--font-label)",
                color: "var(--parchment)",
                borderColor: "rgba(150,172,183,0.3)",
              }}
            />
            {error && (
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--almond-silk)", fontFamily: "var(--font-label)" }}
              >
                Incorrect password.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="mt-2 text-xs tracking-[0.25em] uppercase py-3 border transition-opacity hover:opacity-60"
            style={{
              fontFamily: "var(--font-label)",
              color: "var(--parchment)",
              borderColor: "rgba(150,172,183,0.3)",
            }}
          >
            Enter
          </button>
        </form>

        <p
          className="text-[10px] tracking-[0.2em] uppercase text-center"
          style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
        >
          For access, contact{" "}
          <a
            href="mailto:hello@lecrow.com"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--almond-silk)" }}
          >
            hello@lecrow.com
          </a>
        </p>
      </div>
    </div>
  );
}
