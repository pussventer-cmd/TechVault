const categories = [
  "PCs",
  "Keyboards",
  "Mice",
  "Headsets",
  "Monitors",
  "Microphones",
  "Desks",
  "Lighting",
]

const products = [
  {
    name: "Gaming PCs",
    description: "Find powerful PCs from real sellers.",
  },
  {
    name: "Keyboards",
    description: "Mechanical, magnetic and everything between.",
  },
  {
    name: "Mice",
    description: "Lightweight, wireless and competitive.",
  },
  {
    name: "Headsets",
    description: "Hear every step. Miss nothing.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="text-xl font-black tracking-[0.25em]">
            TECHVAULT
          </a>

          <div className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="/products" className="transition hover:text-white">
              Browse
            </a>

            <a href="/creators" className="transition hover:text-white">
              Creators
            </a>

            <a href="/deals" className="transition hover:text-white">
              Deals
            </a>
          </div>

          <button className="border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black">
            Search
          </button>

        </div>
      </nav>


      {/* HERO */}
<section className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6">

  <div className="grid w-full items-center gap-16 md:grid-cols-2">

    {/* LEFT */}
    <div>

      <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-white/40">
        The tech vault
      </p>

      <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] md:text-8xl">
        FIND
        <br />
        YOUR
        <br />
        TECH.
      </h1>

      <p className="mt-8 text-lg text-white/40">
        Tech by the people, for the people.
      </p>

      {/* SEARCH */}
      <div className="mt-10 flex max-w-2xl">

        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full border border-white/20 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/20 focus:border-white"
        />

        <button className="border border-l-0 border-white/20 px-7 font-bold transition hover:bg-white hover:text-black">
          SEARCH
        </button>

      </div>

    </div>


    {/* MINIMALIST VOID LOGO */}
    <div className="hidden items-center justify-center md:flex">

      <div className="relative flex h-80 w-80 items-center justify-center">

        {/* Outer circle */}
        <div className="absolute h-64 w-64 rounded-full border border-white/20" />

        {/* Minimal V mark */}
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 35L75 115L125 35"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M55 35L75 68L95 35"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Tiny dot */}
        <div className="absolute bottom-12 h-1.5 w-1.5 rounded-full bg-white" />

      </div>

    </div>

  </div>

</section>

      {/* FEATURED */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-12">

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/30">
              Discover
            </p>

            <h2 className="text-4xl font-black tracking-tight">
              FEATURED TECH
            </h2>

          </div>


          <div className="grid gap-px bg-white/10 md:grid-cols-2">

            {products.map((product) => (
              <a
                key={product.name}
                href="/products"
                className="group bg-black p-10 transition hover:bg-white hover:text-black"
              >

                <div className="flex min-h-[220px] flex-col justify-between">

                  <div className="flex justify-between">

                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 group-hover:text-black/40">
                      Featured
                    </span>

                    <span className="text-white/30 group-hover:text-black/40">
                      ↗
                    </span>

                  </div>


                  <div>

                    <h3 className="text-3xl font-black">
                      {product.name}
                    </h3>

                    <p className="mt-3 max-w-md text-white/40 group-hover:text-black/50">
                      {product.description}
                    </p>

                  </div>

                </div>

              </a>
            ))}

          </div>

        </div>

      </section>


      {/* CREATOR SECTION */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-32">

          <div className="max-w-3xl">

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/30">
              Built by the community
            </p>

            <h2 className="text-5xl font-black leading-none tracking-tight md:text-7xl">
              SEE WHAT
              <br />
              CREATORS
              <br />
              USE.
            </h2>

            <p className="mt-8 max-w-xl text-white/40">
              Discover real setups and the gear behind them.
              Creators can share their favourite tech with the community.
            </p>

            <a
              href="/creators"
              className="mt-8 inline-block border border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-black"
            >
              EXPLORE CREATORS →
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 text-xs text-white/30 md:flex-row">

          <span className="font-bold tracking-[0.25em]">
            TECHVAULT
          </span>

          <span>
            Find it. Click it. Own it.
          </span>

        </div>

      </footer>

    </main>
  )
}