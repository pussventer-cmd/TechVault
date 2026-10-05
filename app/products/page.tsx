import Link from "next/link"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-black tracking-[0.25em]">
            TECHVAULT
          </Link>

          <Link
            href="/"
            className="border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black"
          >
            Home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Browse
        </p>

        <h1 className="mt-3 text-5xl font-black">
          ALL TECH
        </h1>

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-black p-5 transition hover:bg-white hover:text-black"
            >
              <div className="aspect-square bg-white/5">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-5 text-xs uppercase tracking-widest text-white/40">
                {product.brand}
              </p>

              <h2 className="mt-2 text-lg font-bold">
                {product.name}
              </h2>

              <p className="mt-3 font-bold">
                ${product.price} {product.currency}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}