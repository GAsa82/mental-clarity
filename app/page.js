 "use client";

/* 👉 REPLACE THESE WITH YOUR REAL LINKS */
const GUMROAD_MAIN = "https://gumroad.com/l/your-paid-product";
const GUMROAD_PREVIEW = "https://gumroad.com/l/your-free-preview";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/tt.png"
            alt="MentalClarity Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">MentalClarity</h1>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-5 py-2 rounded-full bg-black text-white"
        >
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Stop Overthinking.
            <br />
            Start Deciding.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            MentalClarity gives you simple, practical systems to cut mental noise,
            escape decision paralysis, and act with confidence — daily.
          </p>

          <ul className="mt-6 space-y-2 text-slate-600">
            <li>✔ Clear mental clutter</li>
            <li>✔ Make faster decisions</li>
            <li>✔ Build calm focus</li>
          </ul>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 rounded-xl bg-black text-white"
            >
              Explore Notes
            </button>

            <button
              onClick={() => window.open(GUMROAD_PREVIEW, "_blank")}
              className="px-7 py-3 rounded-xl border"
            >
              Free Preview
            </button>
          </div>
        </div>

        {/* HERO IMAGES (3 only) */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/hero1.jpg"
            alt="Focus and clarity"
            className="rounded-3xl shadow-xl"
          />
          <img
            src="/images/hero2.jpg"
            alt="Calm thinking"
            className="rounded-3xl shadow-xl mt-10"
          />
          <img
            src="/images/hero3.jpg"
            alt="Clear decisions"
            className="rounded-3xl shadow-xl col-span-2"
          />
        </div>
      </section>

    </main>
  );
}
