"use client";
import Link from "next/link";

export default function AccessoriesPage() {
  const categories = [
    { name: "Jewellery", slug: "jewellery" },
    { name: "Perfumes", slug: "perfumes" },
    { name: "Bags & Purses", slug: "bagsandpurses" },
  ];

  return (
    <main className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/accessories/(category)/${cat.slug}`}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/accessories/all-products"
          className="inline-block px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition"
        >
          View All Products →
        </Link>
      </div>
    </main>
  );
}
