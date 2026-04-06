"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(() => setSelected((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setSelected((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  return (
    <>
      <div className="flex flex-col gap-3 w-full mb-4">

        {/* Featured image — top, full width, uncropped */}
        <div
          className="relative w-full cursor-zoom-in overflow-hidden"
          style={{ aspectRatio: "16 / 9", background: "var(--charcoal)" }}
          onClick={() => setLightbox(true)}
        >
          <Image
            src={images[selected]}
            alt={`${title} — ${selected + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />

          {/* Counter */}
          <span
            className="absolute bottom-3 right-4 text-[9px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: "rgba(239,236,235,0.4)" }}
          >
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>

        {/* Thumbnail strip — below */}
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setSelected(i)}
              className="relative shrink-0 overflow-hidden transition-opacity"
              style={{
                width: "120px",
                aspectRatio: "16 / 9",
                opacity: selected === i ? 1 : 0.4,
                outline: selected === i ? "1px solid var(--cool-steel)" : "none",
                outlineOffset: "2px",
              }}
            >
              <Image
                src={src}
                alt={`${title} — ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(16,11,0,0.96)" }}
          onClick={() => setLightbox(false)}
        >
          <div
            className="relative w-full max-w-6xl mx-8"
            style={{ aspectRatio: "16 / 9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected]}
              alt={`${title} — ${selected + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-8 text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            Close ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-6 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
                style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-6 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
                style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
              >
                →
              </button>
            </>
          )}

          <span
            className="absolute bottom-6 text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
