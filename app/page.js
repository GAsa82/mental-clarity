 "use client";

/* 👉 GLOBAL LINKS */
const WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb7NJHw3mFYDENkWmn38";

/* 👉 GUMROAD PRODUCT LINKS */
const PRODUCTS = {
  detox: "https://63592130913.gumroad.com/l/overthinking-detox",
  reset: "https://63592130913.gumroad.com/l/daily-mental-reset",
  blueprint: "https://63592130913.gumroad.com/l/clarity-blueprint",
};

export default function Page() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 to-white text-slate-800 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.jpg"
              alt="MentalClarity Logo"
              className="w-20 h-20 rounded-2xl shadow-lg object-cover"
            />
            <h1 className="text-xl font-bold leading-tight">
              Mental<br />Clarity
            </h1>
          </div>

          {/* SCROLL NAV */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <button onClick={() => scrollTo("overthinking")} className="hover:text-black">
              Overthinking
            </button>
            <button onClick={() => scrollTo("decision")} className="hover:text-black">
              Decision Paralysis
            </button>
            <button onClick={() => scrollTo("clarity")} className="hover:text-black">
              Mental Clarity
            </button>
            <button onClick={() => scrollTo("discipline")} className="hover:text-black">
              Discipline
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="px-4 py-2 rounded-full bg-green-600 text-white text-sm"
          >
            Join WhatsApp
          </button>
        </div>
      </nav>

      {/* OFFSET FOR FIXED NAV */}
      <div className="h-28" />

      {/* ================= PAGE 1 — OVERTHINKING ================= */}
      <section id="overthinking" className="min-h-screen max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Stop Overthinking. <br /> Start Deciding.
          </h2>

          <p className="mt-4 text-xl font-medium text-slate-700">
            I help people who overthink decisions and feel mentally stuck.
          </p>

          <p className="mt-6 text-lg text-slate-600">
            No motivation fluff. Just systems that cut mental noise.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              className="px-7 py-3 rounded-xl bg-green-600 text-white"
            >
              Get Daily Clarity
            </button>

            <button
              onClick={() => window.open(PRODUCTS.detox, "_blank")}
              className="px-7 py-3 rounded-xl border"
            >
              Overthinking Detox
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="/images/hero1.jpg" className="rounded-3xl shadow-xl" />
          <img src="/images/hero2.jpg" className="rounded-3xl shadow-xl mt-10" />
        </div>
      </section>

      {/* ================= PAGE 2 — DECISION PARALYSIS ================= */}
      <section id="decision" className="min-h-screen bg-slate-100 flex items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Decision Paralysis</h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Too many options. Zero movement.  
            You don’t need confidence — you need filters.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card text="Fear of choosing wrong" />
            <Card text="Waiting for perfect clarity" />
            <Card text="Over-research addiction" />
          </div>
        </div>
      </section>

      {/* ================= PAGE 3 — MENTAL CLARITY ================= */}
      <section id="clarity" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Mental Clarity</h3>
            <p className="text-lg text-slate-600">
              Clarity = fewer thoughts, better ones.
            </p>
          </div>

          <img src="/images/hero3.jpg" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* ================= PAGE 4 — DISCIPLINE ================= */}
      <section id="discipline" className="min-h-screen bg-slate-900 text-white flex items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Discipline & Addiction</h3>
          <p className="text-lg text-slate-300">
            Not a willpower problem. A system problem.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500">
        © 2026 MentalClarity. All rights reserved.
      </footer>

    </main>
  );
}

/* CARD */
function Card({ text }) {
  return (
    <div className="p-6 rounded-2xl shadow bg-white">
      <p className="text-slate-600">{text}</p>
    </div>
  );
}