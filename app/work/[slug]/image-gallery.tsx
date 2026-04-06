"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(i)}
            className="relative w-full overflow-hidden group cursor-zoom-in"
            style={{ aspectRatio: "16 / 9", background: "var(--charcoal)" }}
          >
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(16,11,0,0.95)" }}
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-8"
            style={{ aspectRatio: "16 / 9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} — ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Controls */}
          <button
            onClick={close}
            className="absolute top-6 right-8 text-[10px] tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            Close
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

          {/* Counter */}
          <span
            className="absolute bottom-6 text-[10px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-label)", color: "var(--cool-steel)" }}
          >
            {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
