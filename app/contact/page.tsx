"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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

      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <div className="w-full max-w-lg">

          {/* Header */}
          <h1
            className="text-[clamp(2rem,5vw,4rem)] leading-[1.05] font-light italic mb-12"
            style={{ fontFamily: "var(--font-display)", color: "var(--parchment)" }}
          >
            Let&rsquo;s talk.
          </h1>

          {submitted ? (
            <div className="flex flex-col gap-4">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--cool-steel)", fontFamily: "var(--font-label)" }}
              >
                Thank you. We&rsquo;ll be in touch shortly.
              </p>
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--cool-steel)", fontFamily: "var(--font-label)" }}
              >
                Or reach us directly at{" "}
                <a
                  href="mailto:hello@lecrow.com"
                  className="transition-opacity hover:opacity-60"
                  style={{ color: "var(--almond-silk)" }}
                >
                  hello@lecrow.com
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "project", label: "Project / Production", type: "text" },
              ].map(({ id, label, type }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label
                    htmlFor={id}
                    className="text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required
                    className="w-full bg-transparent border-b py-2 text-sm outline-none transition-colors"
                    style={{
                      fontFamily: "var(--font-label)",
                      color: "var(--parchment)",
                      borderColor: "rgba(150,172,183,0.3)",
                    }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b py-2 text-sm outline-none resize-none transition-colors"
                  style={{
                    fontFamily: "var(--font-label)",
                    color: "var(--parchment)",
                    borderColor: "rgba(150,172,183,0.3)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="self-start text-xs tracking-[0.25em] uppercase px-8 py-3 border transition-opacity hover:opacity-60"
                style={{
                  fontFamily: "var(--font-label)",
                  color: "var(--parchment)",
                  borderColor: "rgba(150,172,183,0.3)",
                }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
