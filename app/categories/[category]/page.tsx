import Link from "next/link"
import { products } from "@/lib/products"

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  )

  const title =
    category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-8 inline-block text-sm text-white/50">
          ← Back
        </Link>

        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="mt-2 text-white/40">
          {categoryProducts.length} products
        </p>

        {categoryProducts.length === 0 ? (
          <div className="mt-12 border border-white/10 p-10 text-center">
            No products found yet.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="border border-white/10 p-4 hover:border-white/30"
              >
                <div className="flex h-56 items-center justify-center bg-white/[0.03]">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="max-h-48 max-w-full object-contain"
                  />
                </div>

                <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
                  {product.brand}
                </p>

                <h2 className="mt-1 font-semibold">
                  {product.name}
                </h2>

                <p className="mt-3 font-bold">
                  ${product.price} {product.currency}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}