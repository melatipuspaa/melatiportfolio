import Link from "next/link";

export default function Hero() {
  const highlights = [
    {
      id: "01",
      label: "Design",
      desc: "Visual & graphic pieces",
      emoji: "𖦹",
    },
    {
      id: "02",
      label: "Edit",
      desc: "Video, Image & short reels",
      emoji: "𖦹",
    },
    {
      id: "03",
      label: "Create",
      desc: "Ideas into reality",
      emoji: "𖦹",
    },
  ];

  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 py-20 md:px-10 lg:px-16">
      {/* Top Label */}
      <div className="mb-14 flex items-center justify-center gap-4 animate-fade-in">
        <span className="h-px w-10 bg-[#C2B280]/50" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C2B280]/80">
          Mel&apos;s Portfolio
        </span>

        <span className="h-px w-10 bg-[#C2B280]/50" />
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center">
        {/* ── Left floating image ───────────── */}
        <img
          src="/image/055978d77058ad7bf886adcc5ab2a561-Photoroom.png"
          alt=""
          className="
            pointer-events-none
            absolute
            left-[2%]
            top-1/2
            z-10
            hidden
            w-20
            -translate-y-1/2
            rotate-[-12deg]
            opacity-80
            animate-[float_6s_ease-in-out_infinite]
            md:block
            md:w-24
            lg:left-[5%]
            lg:w-28
            xl:left-[8%]
          "
        />

        {/* ── Right floating image ──────────── */}
        <img
          src="/image/255f0d5cdb56a237f7839f201a2342ae-Photoroom.png"
          alt=""
          className="
            pointer-events-none
            absolute
            right-[2%]
            top-1/2
            z-10
            hidden
            w-16
            -translate-y-1/2
            rotate-[15deg]
            opacity-70
            animate-[float_8s_ease-in-out_infinite]
            md:block
            md:w-20
            lg:right-[5%]
            lg:w-24
            xl:right-[8%]
          "
        />

        {/* ── Main title ───────────────────── */}
        <div className="relative z-20 text-center">
          <h1 className="mx-auto max-w-5xl text-6xl font-medium leading-[0.85] tracking-[-0.06em] text-[#F3E8D6] sm:text-7xl md:text-8xl lg:text-[9rem] animate-fade-in">
            Little things,
            <br />

            <span className="font-serif italic text-[#C2B280]">
              made slowly.
            </span>
          </h1>

          {/* ⭐ FLOATING IMAGE — Bawah headline, muncul di mobile juga */}
          <div className="relative mx-auto mt-6 flex items-center justify-center sm:mt-8">
            <img
              src="/image/copi.png"
              alt=""
              className="
                pointer-events-none
                w-24
                rotate-[-6deg]
                opacity-90
                animate-[float_5s_ease-in-out_infinite]
                sm:w-28
                md:w-32
                lg:w-40
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              "
            />
          </div>

          {/* Decorative underline */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <span className="h-px w-12 bg-[#C2B280]/30 md:w-16" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#C2B280]" />

            <span className="h-px w-12 bg-[#C2B280]/30 md:w-16" />
          </div>
        </div>
      </div>

      {/* Short Description */}
      <div className="mx-auto mt-10 max-w-xl text-center animate-fade-in">
        <p className="text-sm leading-7 text-[#E4CDAF]/70 md:text-base">
          Fan edits, random design experiments, and things I made for
          friends — collected in one place. No strict theme, just things I
          genuinely enjoyed creating.
        </p>
      </div>

      {/* CTA BUTTONS */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 rounded-full border border-[#C2B280]/40 bg-[#C2B280]/10 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#E4CDAF] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C2B280] hover:text-[#3a251a]"
        >
          View Projects

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-full border border-[#E4CDAF]/15 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#E4CDAF]/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C2B280]/50 hover:text-[#C2B280]"
        >
          Get in Touch
        </Link>
      </div>

      {/* Highlights */}
      <div className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in">
        {highlights.map((h) => (
          <div
            key={h.id}
            className="group relative overflow-hidden rounded-2xl border border-[#E4CDAF]/10 bg-[#3a251a]/20 p-7 backdrop-blur-md transition-all duration-500 hover:border-[#C2B280]/40 hover:bg-[#3a251a]/40"
          >
            {/* Corner accent */}
            <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#C2B280]/5 blur-2xl transition-all duration-500 group-hover:bg-[#C2B280]/10" />

            {/* Top row */}
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C2B280]/50">
                {h.id}
              </span>

              <span className="text-2xl text-[#C2B280]/70 transition-all duration-500 group-hover:scale-125 group-hover:text-[#C2B280]">
                {h.emoji}
              </span>
            </div>

            {/* Label */}
            <p className="relative mt-10 font-serif text-3xl italic text-[#F3E8D6] transition-colors duration-300 group-hover:text-[#C2B280] md:text-4xl">
              {h.label}
            </p>

            {/* Description */}
            <p className="relative mt-3 text-[10px] uppercase tracking-[0.25em] text-[#E4CDAF]/40">
              {h.desc}
            </p>

            {/* Bottom line */}
            <div className="relative mt-6 h-px w-full bg-[#C2B280]/10 transition-all duration-500 group-hover:bg-[#C2B280]/40" />
          </div>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="mt-16 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.35em] text-[#E4CDAF]/30 animate-fade-in">
      </div>
    </section>
  );
}