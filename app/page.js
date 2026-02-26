 "use client";

import { useState } from "react";

/* 👉 GLOBAL LINKS */
const WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb7NJHw3mFYDENkWmn38";

/* 👉 GUMROAD PRODUCT LINKS */
const PRODUCTS = {
  detox: "https://63592130913.gumroad.com/l/overthinking-detox",
  reset: "https://63592130913.gumroad.com/l/daily-mental-reset",
  blueprint: "https://63592130913.gumroad.com/l/clarity-blueprint",
};

export default function Page() {
  const [active, setActive] = useState("overthinking");

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBtn = (id, color) =>
    `px-3 py-1 rounded-full transition ${
      active === id
        ? `bg-${color}-600 text-white shadow`
        : "text-slate-600 hover:text-black"
    }`;

  return (
    <main className="bg-gradient-to-br from-slate-50 to-white text-slate-800 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="MentalClarity"
              className="w-20 h-20 rounded-xl shadow object-contain"
            />
            <h1 className="text-lg font-bold">MentalClarity</h1>
          </div>

          {/* SCROLL NAV */}
          <div className="hidden md:flex gap-3 text-sm font-medium">
            <button
              onClick={() => scrollTo("overthinking")}
              className={navBtn("overthinking", "indigo")}
            >
              Overthinking
            </button>
            <button
              onClick={() => scrollTo("decision")}
              className={navBtn("decision", "amber")}
            >
              Decision Paralysis
            </button>
            <button
              onClick={() => scrollTo("clarity")}
              className={navBtn("clarity", "emerald")}
            >
              Mental Clarity
            </button>
            <button
              onClick={() => scrollTo("discipline")}
              className={navBtn("discipline", "rose")}
            >
              Discipline
            </button>
          </div>

          <button
            onClick={() => window.open(WHATSAPP_LINK, "_blank")}
            className="px-4 py-2 rounded-full bg-green-600 text-white text-sm"
          >
            Join WhatsApp
          </button>
        </div>
      </nav>

      {/* OFFSET */}
      <div className="h-20" />

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
          </div>
          <img src="/images/hero3.jpg" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* ================= PAGE 4 — DISCIPLINE ================= */}
      <section id="discipline" className="min-h-screen bg-slate-900 text-white flex items-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Discipline & Addiction</h3>
        </div>
      </section>

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