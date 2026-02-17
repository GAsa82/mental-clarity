 "use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">MentalClarity</h1>
        <button className="px-5 py-2 rounded-full bg-black text-white">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Clear Your Mind.
            <br />
            Take Back Control.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Simple, practical notes to reduce overthinking and build focus.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-xl bg-black text-white">
              Explore Notes
            </button>
            <button className="px-7 py-3 rounded-xl border">
              Free Preview
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            alt="Mental clarity"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-center mb-12">
          Popular Notes
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <Product title="Overthinking Detox" price="₹499" />
          <Product title="Daily Mental Reset" price="₹299" />
          <Product title="Clarity Blueprint" price="₹999" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500">
        © 2026 MentalClarity. All rights reserved.
      </footer>

    </main>
  );
}

function Product({ title, price }) {
  return (
    <div className="border rounded-2xl p-8 shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-4 text-2xl font-bold">{price}</p>
      <button className="mt-6 w-full py-3 rounded-xl bg-black text-white">
        Buy Now
      </button>
    </div>
  );
}
