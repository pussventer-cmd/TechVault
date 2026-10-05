import Link from "next/link"
import { creators } from "@/lib/creators"

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="text-sm text-white/40 transition hover:text-white"
        >
          ← Back
        </Link>


        <div className="mt-16 max-w-4xl">

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400">
            CREATOR GEAR
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            SEE WHAT
            <br />
            CREATORS USE
            <span className="text-purple-400">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/40">
            Discover the gear behind creators, streamers and tech personalities.
          </p>

        </div>


        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          {creators.map((creator) => (
            <Link
              key={creator.id}
              href={`/creators/${creator.id}`}
              className="group relative min-h-[620px] overflow-hidden border border-purple-400/40 transition hover:border-purple-400"
            >

              <img
                src={creator.image}
                alt={creator.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">

                <p className="text-sm uppercase tracking-widest text-purple-400">
                  {creator.role}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {creator.name}
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  {creator.handle}
                </p>

                <div className="mt-6 border border-white/10 bg-black/60 p-4 backdrop-blur-sm">

                  {creator.gear.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between gap-4 border-b border-white/5 py-3 text-sm last:border-0"
                    >
                      <span className="text-white/40">
                        {item.label}
                      </span>

                      <span className="text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}

                </div>

                <p className="mt-5 text-sm text-white/60 group-hover:text-purple-400">
                  View Profile →
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </main>
  )
}