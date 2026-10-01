"use client";

import { useEffect, useState } from "react";
import { Project, MediaItem } from "@/types";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectGallery({ project, onClose }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lock body scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Reset when project changes
  useEffect(() => {
    setShowAll(false);
    setLightboxIndex(null);
  }, [project]);

  // Keyboard
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else if (showAll) {
          setShowAll(false);
        } else {
          onClose();
        }
      }

      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") {
          setLightboxIndex((current) =>
            current === null
              ? 0
              : (current + 1) % project.gallery.length
          );
        }

        if (e.key === "ArrowLeft") {
          setLightboxIndex((current) =>
            current === null
              ? 0
              : (current - 1 + project.gallery.length) %
                project.gallery.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, showAll, lightboxIndex, onClose]);

  if (!project) return null;

  const gallery = project.gallery;

  // Aspect ratio dari data
  const projectAspect = project.aspect ?? "4/5";

  // Aspect yang dianggap "landscape"
  const isLandscapeProject = projectAspect === "16/9";

  // Ukuran card di marquee slider
  const cardSize = getCardSize(projectAspect);

  return (
    <>
      {/* =====================================================
          MAIN PROJECT EXPERIENCE
      ===================================================== */}
      <div
        className="fixed inset-0 z-[100] overflow-hidden bg-[#0b0806] text-[#E4CDAF] animate-fade-in"
        onClick={onClose}
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#8b5e3c]/10 blur-[160px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C2B280]/5 blur-[150px]" />

        {/* Top progress line */}
        <div className="absolute left-0 right-0 top-0 z-50 h-px bg-[#C2B280]/10">
          <div className="h-full w-full bg-linear-to-r from-[#C2B280] via-[#C2B280]/30 to-transparent" />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[#C2B280]/20 bg-[#15100d]/70 text-sm text-[#E4CDAF] backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:border-[#C2B280]/60 hover:bg-[#C2B280]/10"
          aria-label="Close"
        >
          ✕
        </button>

        <div
          className="relative mx-auto flex h-full max-w-[1600px] items-center px-6 py-16 md:px-10 lg:px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] xl:gap-20">
            {/* =================================================
                LEFT — INFINITE SLIDER
            ================================================= */}
            <div className="min-w-0">
              {/* Label */}
              <div className="mb-7 flex items-end justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C2B280]" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C2B280]">
                      Selected works
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#E4CDAF]/25">
                    A moving collection
                  </p>
                </div>

                <span className="hidden font-mono text-[9px] tracking-[0.3em] text-[#E4CDAF]/30 sm:block">
                  {String(gallery.length).padStart(2, "0")} WORKS
                </span>
              </div>

              {/* Slider viewport */}
              <div className="relative w-full overflow-hidden">
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-linear-to-r from-[#0b0806] to-transparent md:w-28" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-linear-to-l from-[#0b0806] to-transparent md:w-28" />

                {/* Infinite track */}
                <div className="gallery-marquee group flex w-max gap-4 py-8 md:gap-5">
                  {gallery.map((item, index) => (
                    <GalleryCard
                      key={`first-${index}`}
                      item={item}
                      index={index}
                      size={cardSize}
                      onClick={() => setLightboxIndex(index)}
                    />
                  ))}

                  {gallery.map((item, index) => (
                    <GalleryCard
                      key={`second-${index}`}
                      item={item}
                      index={index}
                      size={cardSize}
                      onClick={() => setLightboxIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom information */}
              <div className="mt-5 flex items-center justify-between border-t border-[#C2B280]/10 pt-5">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C2B280]" />
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#E4CDAF]/30">
                    Auto scrolling
                  </span>
                </div>

                <span className="hidden text-[8px] uppercase tracking-[0.3em] text-[#E4CDAF]/25 md:block">
                  Hover to pause
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT — PROJECT INFORMATION
            ================================================= */}
            <aside className="relative">

              <div className="relative">
                {/* Category */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#C2B280]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C2B280]">
                    {project.tech.join(" · ")}
                  </span>
                </div>

                {/* Title */}
                <h2 className="max-w-sm font-serif text-5xl italic leading-[0.9] tracking-[-0.04em] text-[#F3E8D6] md:text-6xl">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-8 text-sm leading-7 text-[#E4CDAF]/60 md:text-base">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-[#C2B280]/10" />

                {/* View all */}
                <button
                  onClick={() => setShowAll(true)}
                  className="group mt-2 flex w-full items-center justify-between border border-[#C2B280]/25 px-5 py-4 transition-all duration-500 hover:border-[#C2B280]/60 hover:bg-[#C2B280]/5"
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E4CDAF]">
                    View all project
                  </span>

                  <span className="text-lg text-[#C2B280] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>

                <p className="mt-5 text-[8px] uppercase tracking-[0.25em] text-[#E4CDAF]/20">
                  Click a visual to inspect it
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* =====================================================
          ALL DESIGNS
      ===================================================== */}
      {showAll && (
        <AllDesigns
          project={project}
          projectAspect={projectAspect}
          onClose={() => setShowAll(false)}
          onOpen={(index) => setLightboxIndex(index)}
        />
      )}

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}
      {lightboxIndex !== null && (
        <Lightbox
          gallery={gallery}
          index={lightboxIndex}
          setIndex={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
          title={project.title}
        />
      )}

      {/* =====================================================
          GLOBAL MARQUEE CSS
      ===================================================== */}
      <style jsx global>{`
        .gallery-marquee {
          animation: gallery-marquee 42s linear infinite;
          will-change: transform;
        }

        .gallery-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes gallery-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 10px));
          }
        }

        @media (max-width: 768px) {
          .gallery-marquee {
            animation-duration: 34s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-marquee {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

/* =====================================================
   CARD SIZE HELPER — sesuai aspect ratio
===================================================== */

function getCardSize(aspect: string) {
  // 16:9 → landscape card lebar
  if (aspect === "16/9") {
    return "h-[220px] w-[390px] md:h-[250px] md:w-[445px]";
  }

  // 9:16 → portrait panjang (Stories/Wallpaper)
  if (aspect === "9/16") {
    return "h-[400px] w-[225px] md:h-[480px] md:w-[270px]";
  }

  // 1:1 → square
  if (aspect === "1/1") {
    return "h-[280px] w-[280px] md:h-[320px] md:w-[320px]";
  }

  // 3:2 → landscape klasik
  if (aspect === "3/2") {
    return "h-[240px] w-[360px] md:h-[270px] md:w-[405px]";
  }

  // 4/5 (default) → portrait Instagram post
  return "h-[330px] w-[264px] md:h-[390px] md:w-[312px]";
}

/* =====================================================
   GALLERY CARD
===================================================== */

function GalleryCard({
  item,
  index,
  size,
  onClick,
}: {
  item: MediaItem;
  index: number;
  size: string;
  onClick: () => void;
}) {
  const thumbSrc = item.type === "video" ? item.poster || "" : item.src;

  return (
    <button
      onClick={onClick}
      className={`gallery-card group relative flex-shrink-0 overflow-hidden bg-[#17110e] text-left transition-all duration-700 hover:z-30 hover:-translate-y-3 ${size}`}
    >
      {thumbSrc ? (
        <img
          src={thumbSrc}
          alt={`Work ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#17110e]">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#C2B280]/40">
            VIDEO
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-linear-to-t from-[#0b0806]/80 via-transparent to-[#0b0806]/10 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-0 border border-[#C2B280]/10 transition-colors duration-500 group-hover:border-[#C2B280]/50" />

      <div className="absolute left-5 top-5">
        <span className="font-mono text-[9px] tracking-[0.25em] text-[#F3E8D6]/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-end justify-between gap-4">
          <span className="text-[8px] uppercase tracking-[0.25em] text-[#E4CDAF]/50">
            {item.type === "video" ? "Motion" : "Visual"}
          </span>

          <span className="translate-x-2 text-sm text-[#C2B280] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            ↗
          </span>
        </div>
      </div>
    </button>
  );
}

/* =====================================================
   ALL DESIGNS — grid dengan kolom per aspect
===================================================== */

function AllDesigns({
  project,
  projectAspect,
  onClose,
  onOpen,
}: {
  project: Project;
  projectAspect: string;
  onClose: () => void;
  onOpen: (index: number) => void;
}) {
  // Grid columns per aspect
  const gridCols = "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  // Aspect untuk cell
  const cellAspect =
    projectAspect === "16/9"
      ? "aspect-video"
      : projectAspect === "9/16"
        ? "aspect-[9/16]"
        : projectAspect === "1/1"
          ? "aspect-square"
          : projectAspect === "3/2"
            ? "aspect-[3/2]"
            : "aspect-[4/5]";

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-[#0a0806] animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#C2B280]/10 bg-[#0a0806]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          <div>
            <p className="font-serif text-xl italic text-[#F3E8D6]">
              {project.title}
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#E4CDAF]/30">
              Full collection · {project.gallery.length} works · {projectAspect}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2B280]/20 text-sm text-[#E4CDAF] transition-all duration-300 hover:rotate-90 hover:border-[#C2B280]/60"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Collection */}
      <main className="mx-auto max-w-[1500px] px-6 py-12 md:px-10 lg:px-16 lg:py-20">
        <div className="mb-12 max-w-xl">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#C2B280]">
            The collection
          </p>

          <h3 className="mt-4 font-serif text-4xl italic text-[#F3E8D6] md:text-5xl">
            The whole
            <br />
            <span className="text-[#C2B280]">chaotic bunch.</span>
          </h3>
        </div>

        <div className={`grid gap-3 md:gap-4 ${gridCols}`}>
          {project.gallery.map((item, index) => {
            const thumbSrc =
              item.type === "video" ? item.poster || "" : item.src;

            return (
              <button
                key={index}
                onClick={() => onOpen(index)}
                className={`group relative overflow-hidden bg-[#17110e] ${cellAspect}`}
              >
                {thumbSrc ? (
                  <img
                    src={thumbSrc}
                    alt={`Work ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#C2B280]/40">
                      Video
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[#0a0806]/80 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-3 left-3">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#E4CDAF]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute right-3 top-3 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full border border-[#F3E8D6]/20 bg-[#0a0806]/40 text-xs text-[#F3E8D6] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </div>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}

/* =====================================================
   LIGHTBOX
===================================================== */

function Lightbox({
  gallery,
  index,
  setIndex,
  onClose,
  title,
}: {
  gallery: MediaItem[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onClose: () => void;
  title: string;
}) {
  const total = gallery.length;
  const current = gallery[index];

  const goNext = () => {
    setIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % total
    );
  };

  const goPrev = () => {
    setIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex - 1 + total) % total
    );
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex flex-col bg-[#050403]/98 backdrop-blur-3xl animate-fade-in"
      onClick={onClose}
    >
      {/* Top */}
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <div>
          <p className="font-serif text-lg italic text-[#F3E8D6]">{title}</p>
          <p className="mt-1 font-mono text-[9px] tracking-[0.3em] text-[#C2B280]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>

        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2B280]/20 text-sm text-[#E4CDAF] transition-all hover:rotate-90"
        >
          ✕
        </button>
      </div>

      {/* Main */}
      <div
        className="relative flex flex-1 items-center justify-center px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={goPrev}
          className="absolute left-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C2B280]/20 bg-[#15100d]/80 text-xl text-[#E4CDAF] backdrop-blur-md transition-all hover:border-[#C2B280]/60"
        >
          ←
        </button>

        <div className="flex max-h-[80vh] max-w-[90vw] items-center justify-center">
          {current.type === "image" ? (
            <img
              src={current.src}
              alt={`${title} ${index + 1}`}
              className="max-h-[80vh] max-w-full object-contain"
            />
          ) : (
            <video
              src={current.src}
              poster={current.poster}
              controls
              autoPlay
              muted
              playsInline
              className="max-h-[80vh] max-w-full"
            />
          )}
        </div>

        <button
          onClick={goNext}
          className="absolute right-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#C2B280]/20 bg-[#15100d]/80 text-xl text-[#E4CDAF] backdrop-blur-md transition-all hover:border-[#C2B280]/60"
        >
          →
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="overflow-x-auto px-6 pb-6">
        <div className="mx-auto flex w-max gap-2">
          {gallery.map((item, i) => {
            const thumb =
              item.type === "video" ? item.poster || "" : item.src;

            return (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-14 w-14 overflow-hidden border transition-all ${
                  i === index
                    ? "border-[#C2B280] opacity-100"
                    : "border-transparent opacity-30 hover:opacity-70"
                }`}
              >
                {thumb && (
                  <img
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}