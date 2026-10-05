import Link from "next/link"
import { creators } from "@/lib/creators"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 px-6">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            TECHVAULT
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/50 md:flex">
            <Link href="/" className="transition hover:text-white">
              Browse
            </Link>

            <Link href="/creators" className="transition hover:text-white">
              Creators
            </Link>

            <Link href="/categories/pcs" className="transition hover:text-white">
              Deals
            </Link>
          </div>

          <Link
            href="/products"
            className="border border-white/20 px-5 py-2 text-sm transition hover:border-white/50 hover:bg-white hover:text-black"
          >
            Search
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/30">
            TECH DISCOVERY
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            FIND YOUR
            <br />
            <span className="text-white/30">TECH.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/40">
            Tech by the people, for the people.
          </p>

          <Link
            href="/products"
            className="mt-10 inline-block border border-white/20 px-7 py-4 text-sm transition hover:border-white hover:bg-white hover:text-black"
          >
            EXPLORE TECH →
          </Link>
        </div>
      </section>

      {/* FEATURED TECH */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              EXPLORE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              FEATURED TECH
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Link
              href="/categories/pcs"
              className="group border border-white/10 p-6 transition hover:border-white/30"
            >
              <div className="flex h-40 items-center justify-center bg-white/[0.03]">
                <span className="text-4xl">🖥️</span>
              </div>

              <h3 className="mt-5 font-semibold">Gaming PCs</h3>

              <p className="mt-2 text-sm text-white/30">
                Explore gaming PCs
              </p>
            </Link>

            <Link
              href="/categories/keyboards"
              className="group border border-white/10 p-6 transition hover:border-white/30"
            >
              <div className="flex h-40 items-center justify-center bg-white/[0.03]">
                <span className="text-4xl">⌨️</span>
              </div>

              <h3 className="mt-5 font-semibold">Keyboards</h3>

              <p className="mt-2 text-sm text-white/30">
                Find your keyboard
              </p>
            </Link>

            <Link
              href="/categories/mice"
              className="group border border-white/10 p-6 transition hover:border-white/30"
            >
              <div className="flex h-40 items-center justify-center bg-white/[0.03]">
                <span className="text-4xl">🖱️</span>
              </div>

              <h3 className="mt-5 font-semibold">Mice</h3>

              <p className="mt-2 text-sm text-white/30">
                Find your mouse
              </p>
            </Link>

            <Link
              href="/categories/headsets"
              className="group border border-white/10 p-6 transition hover:border-white/30"
            >
              <div className="flex h-40 items-center justify-center bg-white/[0.03]">
                <span className="text-4xl">🎧</span>
              </div>

              <h3 className="mt-5 font-semibold">Headsets</h3>

              <p className="mt-2 text-sm text-white/30">
                Find your headset
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CREATOR SECTION */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              CREATOR GEAR
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              SEE WHAT CREATORS USE
              <span className="text-purple-400">.</span>
            </h2>

            <p className="mt-4 text-white/40">
              Tech by the people, for the people.
            </p>
          </div>

          {/* SMALL SQUARE CARDS */}
          <div className="flex flex-wrap justify-center gap-6">
            {creators.map((creator) => (
              <div
                key={creator.id}
                className="w-[260px]"
              >
                <Link
                  href={`/creators/${creator.id}`}
                  className="group relative block aspect-square overflow-hidden border border-purple-400/30 bg-white/[0.03] transition hover:border-purple-400"
                >
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400">
                      {creator.role}
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      {creator.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/40">
                      {creator.handle}
                    </p>
                  </div>
                </Link>

                <div className="mt-2 border border-white/10">
                  {creator.gear.slice(0, 3).map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-2 border-b border-white/5 px-3 py-2 text-[10px] last:border-0"
                    >
                      <span className="text-white/30">
                        {item.label}
                      </span>

                      <span className="max-w-[150px] truncate text-right text-white/60">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/creators/${creator.id}`}
                  className="mt-2 block border border-white/10 px-3 py-2 text-center text-[10px] font-medium tracking-widest text-white/40 transition hover:border-purple-400 hover:text-white"
                >
                  VIEW CREATOR →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/creators"
              className="inline-block border border-white/10 px-6 py-3 text-sm text-white/50 transition hover:border-purple-400 hover:text-white"
            >
              VIEW ALL CREATORS →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/30 md:flex-row">
          <p>© 2026 TECHVAULT</p>

          <p>Tech by the people, for the people.</p>
        </div>
      </footer>
    </main>
  )
}