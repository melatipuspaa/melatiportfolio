"use client";

import { useState } from "react";
import ProjectCard from "@/components/projectcard";
import ProjectGallery from "@/components/projectgallery";
import { projects } from "@/lib/data";
import { Project } from "@/types";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen text-[#E4CDAF]">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,205,175,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(228,205,175,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10 md:px-10 lg:px-16 lg:py-14">
        
              {/* ⭐ Floating cute images — FIXED position, di luar container text
          Muncul hanya di layar lebar (2xl: 1536px+) biar tidak nutupin konten */}
      <img
        src="/image/6fd60530cacb2cb0bcd010d46c64787e-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          left-[2%]
          top-[55%]
          z-0
          hidden
          2xl:block
          w-50
          rotate-[-12deg]
          opacity-60
          animate-[float_6s_ease-in-out_infinite]
        "
      />

      <img
        src="/image/1f2d5dea132d8e15005b8f9ffa4bff79-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          right-[3%]
          top-[30%]
          z-0
          hidden
          2xl:block
          w-35
          rotate-[15deg]
          opacity-55
          animate-[float_8s_ease-in-out_infinite]
        "
      />
        
        {/* Hero */}
        <div className="mt-20 max-w-3xl md:mt-28">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C2B280]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C2B280]">
              Things I've made
            </span>
          </div>

          <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-[#F3E8D6] sm:text-6xl md:text-7xl">
            The whole chaotic
            <br />
            <span className="font-serif italic text-[#C2B280]">
              collection.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[#E4CDAF]/70 md:text-base">
            A mix of everything I love making. Fan edits of my favorite singers,
            school projects, designs I made just for fun, and whatever else
            caught my attention. No strict theme, just things I
            genuinely loved making.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#E4CDAF]/50 md:text-base">
            Click any card to see the full story behind each one. 𐔌՞. .՞𐦯
          </p>
        </div>

        {/* Meta bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-[#E4CDAF]/15 py-5 md:mt-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C2B280]/80">
            {projects.length} Projects · Made with love
          </p>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#E4CDAF]/40">
            Personal · Friends · For Fun
          </span>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {projects.map((project, i) => (
        <ProjectCard
          key={project.title}   // ← ganti dari project.id
          project={project}
          index={i}
          onClick={() => setSelected(project)}
        />
        ))}
        </div>
      </section>

      {/* Gallery modal */}
      <ProjectGallery project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}