import React from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const GroomEssentialsPage = () => {
  const categories = [
    {
      name: "Innerwear Set",
      items: "10 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Handkerchief",
      items: "15 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Groom Perfume",
      items: "12 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Hair Gel/Spray",
      items: "8 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Wet Wipes",
      items: "6 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Power Bank",
      items: "5 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Wallet",
      items: "18 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Belt",
      items: "14 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
    {
      name: "Shoe Polish Kit",
      items: "7 Items",
      image: "https://via.placeholder.com/300x300?text=Category+Image",
    },
  ];

  const products = [
    {
      name: "Premium Cotton Innerwear Set",
      price: "$39.99",
      discount: "15% OFF",
      image: "https://via.placeholder.com/400x400?text=Product+Image",
    },
    {
      name: "Silk Handkerchief 3-Pack",
      price: "$24.99",
      image: "https://via.placeholder.com/400x400?text=Product+Image",
    },
    {
      name: "Luxury Groom Cologne 100ml",
      price: "$79.99",
      image: "https://via.placeholder.com/400x400?text=Product+Image",
    },
    {
      name: "Professional Hair Styling Gel",
      price: "$18.99",
      image: "https://via.placeholder.com/400x400?text=Product+Image",
    },
    {
      name: "Black Leather Wallet",
      price: "$49.99",
      discount: "20% OFF",
      image: "https://via.placeholder.com/400x400?text=Product+Image",
    },
  ];

  const featuredProducts = [
    {
      name: "Executive Leather Belt Brown",
      discount: "30% OFF",
      price: "$59.99",
      tag: "Best Seller",
      image: "https://via.placeholder.com/500x300?text=Featured+Product",
    },
    {
      name: "Premium Shoe Care Kit",
      discount: "25% OFF",
      price: "$44.99",
      tag: "Trending",
      image: "https://via.placeholder.com/500x300?text=Featured+Product",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-slate-100 to-blue-50 py-16 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="max-w-xl">
            <p className="text-blue-600 font-medium mb-2">
              Universal Groom Collection
            </p>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              General Essentials
              <br />
              <span className="text-blue-600">& Wedding Day Must-Haves</span>
            </h1>
            <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
              Shop Now
            </button>
          </div>
          <div className="w-64 h-64 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Shop By Category */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Shop By Category</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.items}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Promotions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10">
                {product.tag}
              </span>
              <div className="flex items-center justify-between p-8">
                <div className="flex-1">
                  <p className="text-blue-600 font-bold text-lg mb-2">
                    {product.discount}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors">
                    Buy Now
                  </button>
                </div>
                <div className="w-48 h-48 bg-white/50 rounded-xl overflow-hidden ml-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Featured Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-amber-100 to-orange-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-amber-700 font-semibold mb-2">
                Premium Collection
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Signature Groom
                <br />
                <span className="text-amber-600">Fragrances</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Long-lasting cologne for your special day
              </p>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 w-48 h-full bg-white/20"></div>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-teal-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-emerald-700 font-semibold mb-2">
                Grooming Essentials
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Hair Styling
                <br />
                <span className="text-emerald-600">Complete Kit</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Perfect look that lasts all day long
              </p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 w-48 h-full bg-white/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomEssentialsPage;
