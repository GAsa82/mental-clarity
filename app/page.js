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
    <main className="min-h-screen bg-white text-slate-800">

      {/* GODLY HERO STRIP */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="/images/godly.jpg"
          alt="Godly Inspiration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT ON IMAGE */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-10">
          
          {/* TOP BAR */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              MentalClarity
            </h1>

            <button
              onClick={() => window.open(WHATSAPP_LINK, "_blank")}
              className="px-6 py-3 rounded-full bg-green-600 text-white font-medium"
            >
              Join WhatsApp
            </button>
          </div>

          {/* CENTER MESSAGE */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Stop Overthinking.
              <br />
              Start Deciding.
            </h2>

            <p className="mt-6 text-lg text-slate-200">
              Practical mental clarity systems to escape decision paralysis
              and take calm, confident action.
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
                className="px-7 py-3 rounded-xl bg-white text-black"
              >
                View Notes
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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
