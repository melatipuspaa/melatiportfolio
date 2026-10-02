export default function About() {
  const creativeFields = [
    "Design",
    "Visual Content",
    "Video Editing",
    "Content Creation",
    "Sketching",
    "Singing",
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

      <section className="relative mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-16 lg:py-10">

              {/* Floating cute images */}
      <img
        src="/image/1f418962a2bd325f69c5135da202f54e-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          left-[3%]
          top-[30%]
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
        src="/image/38fdbdbb0a8170ea4d4c4f250e5b66d4-Photoroom.png"
        alt=""
        className="
          pointer-events-none
          fixed
          right-[3%]
          top-[55%]
          z-0
          hidden
          2xl:block
          w-40
          rotate-[15deg]
          opacity-55
          animate-[float_8s_ease-in-out_infinite]
        "
      />

        {/* Intro */}
        <section className="grid gap-14 py-20 md:grid-cols-[1fr_0.8fr] md:items-center md:py-28">

          {/* Text */}
          <div>
  <div className="mb-8 flex items-center gap-4">
    <span className="h-px w-14 bg-[#E4CDAF]" />

    <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E4CDAF]/70">
      A little about me
    </span>
  </div>

  <h1 className="text-6xl font-medium leading-[0.9] tracking-[-0.06em] text-[#F3E8D6] sm:text-7xl md:text-8xl">
    More than
    <br />
    <span className="font-serif italic text-[#C2B280]">
      just a designer.
    </span>
  </h1>

  <p className="mt-10 max-w-xl text-sm leading-7 text-[#E4CDAF]/75 md:text-base">
    Hi, I'm Melati, a recent high school graduate who somehow ended
      up falling in love with <em>everything</em> creative. I like turning
      random ideas into visuals, edits, or content.
  </p>

  <p className="mt-5 max-w-xl text-sm leading-7 text-[#E4CDAF]/65 md:text-base">
    I started with a lot of curiosity and a slightly unhealthy amount of{" "}
      <em>wait, what if I tried this?.</em> Which eventually
      led me to design, video editing, content creation, and everything in between.
  </p>

  <p className="mt-5 max-w-xl text-sm leading-7 text-[#E4CDAF]/55 md:text-base">
    Outside of design, I sing whenever I can like in the shower, in my bedroom, in front of my friends,
      and occasionally in front of an actual microphone like school events or just want to sing every chance I get. I draw when I'm
      feeling quiet, cook when I'm feeling adventurous, and drink an
      unreasonable amount of coffee while pretending to be productive. I've also had fun stepping in as
      an MC for a few events, which is basically my excuse to talk a lot
      and call it a skill. I haven't done it very often, but I’d like to learn if I get the chance, in order to boost my self-confidence.
  </p>

  <p className="mt-5 max-w-xl text-sm leading-7 text-[#E4CDAF]/50 md:text-base italic">
      Basically, I'm the kind of person who likes listening to music 24/7 and singing along to it while i'm working, chilling, or just doing nothing. At night, I became more productive and creative. Sometimes introverted, sometimes extroverted, but always curious and open to learning new things.
    </p>
</div>

          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm md:ml-auto">
            <div className="absolute -bottom-4 -left-4 h-full w-full border border-[#E4CDAF]/20" />

            <div className="relative aspect-[4/5] overflow-hidden bg-[#5B3A29]">
              <img
                src="/image/Copy of Potapoto (21 of 85) - Copy.JPG"
                alt="Melati Puspa Anindita"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#5B3A29]/80 to-transparent p-6 pt-20">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#E4CDAF]/70">
                  𝑺𝒊𝒏𝒈𝒆𝒓 / 𝑫𝒆𝒔𝒊𝒈𝒏𝒆𝒓 / 𝑪𝒐𝒇𝒇𝒆𝒆 𝒍𝒐𝒗𝒆𝒓
                </p>
              </div>
            </div>

            <span className="absolute -right-6 -top-6 font-serif text-5xl italic text-[#C2B280]/90">
              𝜗ৎ
            </span>
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-[#E4CDAF]/15 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[0.35fr_1fr]">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E4CDAF]/50">
                Experience
              </p>

              <p className="mt-4 font-serif text-3xl italic text-[#C2B280]">
                Where 'oops' becomes 'oh, that works.
                <br />
              </p>
            </div>

            <div>
              <div className="border-l border-[#E4CDAF]/20 pl-6 md:pl-10">

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-2xl font-medium text-[#F3E8D6]">
                    Bingkai Karya
                  </h2>

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#E4CDAF]/45">
                    Creative Team / 6 Months (Nov 2025 — Apr 2026)
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E4CDAF]/70 md:text-base">
                  During my internship at Bingkai Karya, I got to experience
                  what it's like to turn creative ideas into actual
                  content. I worked on YouTube thumbnails, Instagram feeds
                  and Stories, video editing, and YouTube News productions.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#E4CDAF]/60 md:text-base">
                  I also got the chance to step in front of the camera for
                  several productions. It taught me that creative work isn't
                  always about making things look good — sometimes it's about
                  knowing how to communicate an idea, adapt quickly, and not
                  panic when the plan suddenly changes.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#E4CDAF]/50 md:text-base">
                Bingkai Karya is a media bringing the concept of Podcast Network and News Portal providing various programs. 
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.25em] text-[#C2B280]">
                  <span>Design</span>
                  <span>Video Editing</span>
                  <span>Content Creation</span>
                  <span>On-Camera Talent</span>
                </div>
              </div>

              <div className="mt-12 border-l border-[#E4CDAF]/20 pl-6 md:pl-10">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-2xl font-medium text-[#F3E8D6]">
                    Look At Love International
                  </h2>

                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#E4CDAF]/45">
                    Graphic Designer
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E4CDAF]/70 md:text-base">
                  More recently, I became part of Look At Love International
                  as a graphic designer. Look at Love is a youth-led volunteer community dedicated to creating meaningful impact through service, compassion, and integrity.
                  It's another space where I can
                  explore visual storytelling while working with people who
                  care about creativity, collaboration, and making something
                  meaningful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Identity */}
        <section className="border-t border-[#E4CDAF]/15 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-end">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E4CDAF]/50">
                What I'm into
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-[#F3E8D6] md:text-6xl">
                I like making
                <br />
                <span className="font-serif italic text-[#C2B280]">
                  things feel alive.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-7 text-[#E4CDAF]/65 md:text-base">
                I'm naturally curious, so putting myself into just one
                creative box has never really worked. I enjoy designing,
                editing, drawing, singing, creating content,
                and experimenting with new ideas just to see where they go.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#E4CDAF]/55 md:text-base">
                Sometimes the result is polished. Sometimes it's a
                questionable midnight idea. Either way, I usually learn something
                from it.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 border-y border-[#E4CDAF]/15 md:grid-cols-3">
            {creativeFields.map((field, index) => (
              <div
                key={field}
                className="group border-b border-[#E4CDAF]/15 p-6 last:border-b-0 md:p-8
                  md:nth-[3n+1]:border-r
                  md:nth-[3n+2]:border-r"
              >
                <span className="text-[9px] tracking-[0.2em] text-[#E4CDAF]/35">
                  0{index + 1}
                </span>

                <p className="mt-8 font-serif text-xl text-[#E4CDAF] transition-colors duration-300 group-hover:text-[#C2B280]">
                  {field}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Music Industry Dream */}
        <section className="border-t border-[#E4CDAF]/15 py-20 md:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#E4CDAF]/40" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E4CDAF]/50">
                One slightly unserious career goal
              </span>

              <span className="h-px w-10 bg-[#E4CDAF]/40" />
            </div>

            <div className="text-center">
              <h2 className="font-serif text-4xl leading-tight text-[#F3E8D6] md:text-6xl">
                Someday, I'd love to work
                <br />
                somewhere in the{" "}
                <span className="italic text-[#C2B280]">
                  music/media industry.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#E4CDAF]/65 md:text-base">
                Music has always been a huge part of how I connect with
                creativity, from singing and making edits to obsessing over
                songs, singers, visuals, and the stories behind an artist and their work.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E4CDAF]/55 md:text-base">
                And yes, there is absolutely a tiny bit of ulterior motive.
                If I work in the music industry or media who loves to talk about music, maybe one day I'll get a
                free pass to see my favorite singer or band.
              </p>

              <p className="mt-8 font-serif text-xl italic text-[#C2B280]">
                Career development? Yes.
                <br />
                Convenient concert access? Also yes.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Note */}
<section className="border-t border-[#E4CDAF]/15 py-20 md:py-28">
  <div className="mx-auto max-w-3xl text-center">
    <span className="font-serif text-5xl italic text-[#C2B280]/60">
      &ldquo;
    </span>

    <p className="mt-2 font-serif text-3xl leading-relaxed text-[#F3E8D6] md:text-5xl">
      Learning slowly,
      <br />
      <span className="italic text-[#C2B280]">growing loudly.</span>
    </p>

    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#E4CDAF]/55">
      I'm always open to learning, experimenting, meeting creative
      people, and taking on projects that push me somewhere new. If
      there's something I haven't tried yet, chances are I'll
      want to try it.
    </p>
  </div>
</section>

      </section>
    </main>
  );
}