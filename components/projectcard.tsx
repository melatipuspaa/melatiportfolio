"use client";

import { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: Props) {
  const hasVideo = project.gallery.some((item) => item.type === "video");

  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-2xl border border-[#C2B280]/15 bg-[#3a251a]/40 p-8 text-left backdrop-blur-xl transition-all duration-300 hover:border-[#C2B280]/50 hover:-translate-y-1 hover:bg-[#3a251a]/60"
    >
      {/* Top row: number + video badge */}
      <div className="flex items-center justify-between">
        <span className="font-serif text-5xl italic leading-none text-[#C2B280]/40 transition-colors duration-300 group-hover:text-[#C2B280]/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        {hasVideo && (
          <span className="flex items-center gap-1.5 rounded-full border border-[#C2B280]/40 bg-[#1a1310]/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#C2B280] backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2B280] animate-pulse" />
            Video
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="mt-8 h-px w-full bg-linear-to-r from-[#C2B280]/40 via-[#C2B280]/10 to-transparent" />

      {/* Title */}
      <h3 className="mt-8 font-serif text-3xl italic leading-tight text-[#F3E8D6] transition-colors duration-300 group-hover:text-[#C2B280] md:text-4xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-md text-sm leading-7 text-[#E4CDAF]/60">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280]/70"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer row: count + arrow */}
      <div className="mt-10 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#E4CDAF]/40">
          {project.gallery.length} items
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C2B280]/30 text-[#E4CDAF] transition-all duration-300 group-hover:border-[#C2B280] group-hover:bg-[#C2B280]/20 group-hover:translate-x-1">
          →
        </span>
      </div>

      {/* Subtle corner accent */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#C2B280]/5 blur-2xl transition-all duration-500 group-hover:bg-[#C2B280]/10" />
    </button>
  );
}