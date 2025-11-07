// // app/accessories/all-products/page.jsx
// export default function AllProducts({ searchParams }) {
//   const category = searchParams?.category ?? "jewellery";
//   // fetch/render products by `category` with a single shared layout
//   return <div>All products for: {category}</div>;
// }

// app/(pages)/accessories/all-products/page.jsx
import Link from "next/link";

// ---- demo data (swap with API/db later) ----
const PRODUCTS = {
  jewellery: [
    { id: 101, name: "Diamond Necklace Set", price: 249999, mrp: 299999, rating: 4.8,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending1_edrd0n.jpg" },
    { id: 102, name: "Gold Earrings", price: 45999, mrp: 55999, rating: 4.9,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending2_frlpp4.jpg" },
    { id: 103, name: "Pearl Bracelet", price: 32999, mrp: 39999, rating: 4.7,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending3_vvlofx.jpg" },
    { id: 104, name: "Ruby Ring", price: 78999, mrp: 95999, rating: 4.9,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending4_a7xgcj.jpg" },
  ],
  bagsandpurses: [
    { id: 201, name: "Leather Tote", price: 8999, mrp: 11999, rating: 4.6,
      img: "https://images.unsplash.com/photo-1584917865442-f271ddc9baff?w=800" },
    { id: 202, name: "Evening Clutch", price: 4999, mrp: 6999, rating: 4.5,
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800" },
  ],
  shoes: [
    { id: 301, name: "Embellished Heels", price: 5999, mrp: 7999, rating: 4.3,
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800" },
  ],
  watches: [
    { id: 401, name: "Classic Gold Watch", price: 15999, mrp: 19999, rating: 4.7,
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800" },
  ],
  perfumes: [
    { id: 501, name: "Floral Oud", price: 3999, mrp: 4999, rating: 4.4,
      img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800" },
  ],
  "hair-accessories": [
    { id: 601, name: "Crystal Hairpin Set", price: 1499, mrp: 1999, rating: 4.5,
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800" },
  ],
};

// ---- helpers ----
const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(
    Number(n || 0)
  );

export default function AllProducts({ searchParams }) {
  const category = (searchParams?.category || "jewellery").toLowerCase();
  const items = PRODUCTS[category] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* breadcrumb / heading */}
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/accessories" className="hover:underline">Accessories</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 capitalize">{category.replace("-", " ")}</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-light tracking-tight capitalize">
          {category.replace("-", " ")} – Products
        </h1>
        <p className="text-gray-600 mt-1">{items.length} items</p>
      </div>

      {/* grid */}
      {items.length === 0 ? (
        <div className="rounded border border-dashed p-10 text-center text-gray-500">
          No products found for <span className="font-medium">{category}</span>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-sm overflow-hidden border hover:shadow-lg transition"
            >
              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-800 line-clamp-1">{p.name}</h3>

                <div className="mt-1 text-sm text-gray-500">⭐ {p.rating}</div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-semibold">{formatINR(p.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatINR(p.mrp)}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  {/* to a single Buy Now route (adjust if your route differs) */}
                  <Link
                    href={`/accessories/buy-now/${p.id}?category=${category}`}
                    className="flex-1 inline-flex items-center justify-center rounded-sm bg-neutral-900 text-white px-4 py-2 text-sm hover:opacity-90"
                  >
                    Buy Now
                  </Link>
                  <Link
                    href={`/accessories/${category}`}
                    className="px-4 py-2 text-sm border rounded-sm hover:bg-gray-50"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
