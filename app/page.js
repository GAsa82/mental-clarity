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
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        {/* LOGO + GODLY IMAGE */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/images/tt.png"
              alt="MentalClarity Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold">MentalClarity</h1>
          </div>

          {/* GODLY IMAGE */}
          <img
            src="/images/godly.jpg"
            alt="Godly Inspiration"
            className="w-24 rounded-xl shadow"
          />
        </div>

        <button
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
          className="px-5 py-2 rounded-full bg-green-600 text-white"
        >
          Join WhatsApp
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
            Practical mental clarity systems to help you escape decision paralysis
            and take confident action — without motivation fluff.
          </p>

          <ul className="mt-6 space-y-2 text-slate-600">
            <li>✔ Clear mental clutter</li>
            <li>✔ Make faster decisions</li>
            <li>✔ Build calm daily focus</li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              className="px-7 py-3 rounded-xl bg-green-600 text-white"
            >
              Get Daily Clarity on WhatsApp
            </button>

            <button
              onClick={() => window.open(PRODUCTS.detox, "_blank")}
              className="px-7 py-3 rounded-xl border"
            >
              View Notes (Gumroad)
            </button>
          </div>
        </div>

        {/* HERO IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/hero1.jpg" className="rounded-3xl shadow-xl" />
          <img src="/images/hero2.jpg" className="rounded-3xl shadow-xl mt-10" />
          <img src="/images/hero3.jpg" className="rounded-3xl shadow-xl col-span-2" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">
          Popular Notes
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <Product title="Overthinking Detox" price="₹599" link={PRODUCTS.detox} />
          <Product title="Daily Mental Reset" price="₹299" link={PRODUCTS.reset} />
          <Product title="Clarity Blueprint" price="₹999" link={PRODUCTS.blueprint} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500">
        © 2026 MentalClarity. All rights reserved.
      </footer>

    </main>
  );
}

/* PRODUCT COMPONENT */
function Product({ title, price, link }) {
  return (
    <div className="border rounded-3xl p-6 shadow hover:scale-105 transition">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-2 text-2xl font-bold">{price}</p>

      <button
        onClick={() => window.open(link, "_blank")}
        className="mt-4 w-full py-3 rounded-xl bg-black text-white"
      >
        Buy on Gumroad
      </button>
    </div>
  );
}
