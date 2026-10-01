export default function Contact() {
  const contacts = [
    {
      id: "01",
      label: "Email",
      value: "puspamamel@gmail.com",
      href: "mailto:puspamamel@gmail.com",
      external: false,
    },
    {
      id: "02",
      label: "Instagram",
      value: "@_melatipuspa",
      href: "https://www.instagram.com/_melatipuspa/",
      external: true,
    },
    {
      id: "03",
      label: "Phone",
      value: "+62 858-4796-6662",
      href: "https://wa.me/6285847966662",
      external: true,
    },
    {
      id: "04",
      label: "Based in",
      value: "Malang, Indonesia",
      href: "https://maps.google.com/?q=Malang,Indonesia",
      external: true,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-[#E4CDAF]">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,205,175,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(228,205,175,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ⭐ Floating cute images — hanya muncul di layar lebar biar tidak nutupin konten */}
      <img
        src="/image/7193c0cd996787268b1c5e09c6e8696b-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          left-[3%]
          top-[30%]
          z-0
          hidden
          2xl:block
          w-40
          rotate-[-12deg]
          opacity-60
          animate-[float_6s_ease-in-out_infinite]
        "
      />

      <img
        src="/image/f8bb29ade26ae6ea37cc87d0ee465306-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          right-[3%]
          top-[55%]
          z-0
          hidden
          2xl:block
          w-36
          rotate-[15deg]
          opacity-55
          animate-[float_8s_ease-in-out_infinite]
        "
      />

      {/* ⭐ Konten utama */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16 lg:py-14">
        {/* ── Split Hero + Contact ──────────────── */}
        <div className="mt-20 grid flex-1 grid-cols-1 gap-12 sm:mt-24 md:mt-24 md:grid-cols-12 md:gap-10">
          {/* LEFT: Hero text */}
          <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
            <div className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="h-px w-10 bg-[#C2B280] sm:w-12" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C2B280] sm:text-[10px] sm:tracking-[0.35em]">
                Get in touch
              </span>
            </div>

            <h1 className="text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-[#E4CDAF] sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s keep
              <br />
              <span className="font-serif italic text-[#C2B280]">
                in touch.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#E4CDAF]/70 sm:mt-8 md:text-base">
              Whether it&apos;s a creative opportunity, collaboration, or
              just want to say hello — you can find me through the contacts
              on the right.
            </p>
          </div>

          {/* RIGHT: Contact list */}
          <div className="md:col-span-7">
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C2B280]/80 sm:text-[10px] sm:tracking-[0.3em]">
                Contact information
              </p>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#E4CDAF]/40 sm:text-[10px] sm:tracking-[0.25em]">
                01 — 04
              </span>
            </div>

            {/* Card wrapper */}
            <div className="rounded-2xl border border-[#C2B280]/20 bg-[#3a251a]/60 p-1.5 backdrop-blur-xl shadow-2xl shadow-black/30 sm:rounded-3xl sm:p-2">
              <div className="divide-y divide-[#C2B280]/15">
                {contacts.map((c) => (
                  <a
                    key={c.id}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-4 rounded-xl px-4 py-5 transition-all duration-300 hover:bg-[#C2B280]/[0.06] sm:gap-6 sm:rounded-2xl sm:px-6 sm:py-7"
                  >
                    <div className="flex items-start gap-4 sm:gap-6 md:gap-10">
                      <span className="pt-0.5 text-[9px] uppercase tracking-[0.2em] text-[#C2B280]/50 sm:pt-1 sm:text-[10px] sm:tracking-[0.25em]">
                        {c.id}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#C2B280]/70 sm:text-[10px] sm:tracking-[0.25em]">
                          {c.label}
                        </p>
                        <p className="mt-1.5 break-all text-base font-light text-[#E4CDAF] transition-colors duration-300 group-hover:text-[#C2B280] sm:mt-2 sm:text-lg md:text-xl">
                          {c.value}
                        </p>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 sm:flex">
                      <span className="h-px w-6 bg-[#C2B280]/30 transition-all duration-300 group-hover:w-10 group-hover:bg-[#C2B280]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C2B280]/40 transition-all duration-300 group-hover:bg-[#C2B280] group-hover:scale-125" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-[#E4CDAF]/35 sm:mt-6 sm:text-[10px] sm:tracking-[0.3em]">
              Feel free to reach out anytime ⋆˚꩜｡
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}