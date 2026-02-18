 export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">
          Mental Clarity
        </h1>
        <a
          href="#start"
          className="text-sm text-slate-600 hover:text-slate-900 transition"
        >
          Start here
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Stop overthinking.
          <br />
          Decide with clarity.
        </h2>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Practical systems to quiet mental noise, break decision paralysis,
          and move forward without motivation hacks or therapy talk.
        </p>

        <div className="mt-10">
          <a
            href="#start"
            className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Get clarity today
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-lg">Mental overload</h3>
            <p className="mt-3 text-slate-600">
              Too many thoughts. Too many options. Your brain never shuts up.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Decision paralysis</h3>
            <p className="mt-3 text-slate-600">
              You know what to do — but you keep delaying, second-guessing,
              and looping.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Fake solutions</h3>
            <p className="mt-3 text-slate-600">
              Motivation, quotes, and advice that sounds good but changes nothing.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">
            A system. Not self-help.
          </h3>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Mental clarity isn’t about fixing yourself.
            It’s about reducing friction in how you think and decide.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3 text-left">
            <div>
              <span className="text-sm font-medium text-slate-400">01</span>
              <h4 className="mt-2 font-semibold">Clear the noise</h4>
              <p className="mt-2 text-slate-600">
                Simple mental dumps and filters to stop runaway thinking.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-400">02</span>
              <h4 className="mt-2 font-semibold">Decide faster</h4>
              <p className="mt-2 text-slate-600">
                Lightweight frameworks to choose without over-analysis.
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-slate-400">03</span>
              <h4 className="mt-2 font-semibold">Move forward</h4>
              <p className="mt-2 text-slate-600">
                Small actions that reduce anxiety by creating momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="bg-slate-900 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-white">
            Start with clarity.
          </h3>

          <p className="mt-5 text-slate-300">
            Short, calm prompts and systems you can use daily.
            No pressure. No noise.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition"
            >
              Join WhatsApp channel
            </a>

            <a
              href="#"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              Get daily clarity
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mental Clarity. Built for calm minds.
      </footer>

    </main>
  );
}
