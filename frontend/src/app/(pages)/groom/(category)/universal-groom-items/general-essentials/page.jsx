import React from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const GroomEssentialsPage = () => {
  const categories = [
    {
      name: "Innerwear Set",
      items: "10 Items",
      image: "https://i.pinimg.com/1200x/e6/eb/cb/e6ebcbab23582c29954ee8ea741866b1.jpg",
    },
    {
      name: "Handkerchief",
      items: "15 Items",
      image: "https://i.pinimg.com/1200x/19/8f/c2/198fc2fe32f0a7c92f8796f49a9cdfcb.jpg",
    },
    {
      name: "Groom Perfume",
      items: "12 Items",
      image: "https://i.pinimg.com/1200x/49/63/51/4963511b3fc2e2cb1e44abb55e25f2d2.jpg",
    },
    {
      name: "Hair Gel/Spray",
      items: "8 Items",
      image: "https://i.pinimg.com/1200x/39/f3/41/39f341139caa985896e6c76996f04b36.jpg",
    },
    {
      name: "Wet Wipes",
      items: "6 Items",
      image: "https://i.pinimg.com/1200x/25/bd/4f/25bd4f0998ce1b5a6845b200d8487058.jpg",
    },
    {
      name: "Power Bank",
      items: "5 Items",
      image: "https://i.pinimg.com/1200x/64/9d/23/649d23a8c0f0f14290c117d4173e57eb.jpg",
    },
    {
      name: "Wallet",
      items: "18 Items",
      image: "https://i.pinimg.com/1200x/51/24/ad/5124add0c34789ed6f390941cdbdbcaf.jpg",
    },
    {
      name: "Belt",
      items: "14 Items",
      image: "https://i.pinimg.com/736x/05/6b/4d/056b4d88d8312a1ebc13a1f8e6d375a3.jpg",
    },
    {
      name: "Shoe Polish Kit",
      items: "7 Items",
      image: "https://i.pinimg.com/1200x/b6/06/d6/b606d6f2ed958c99789fd4b0a0ac4439.jpg",
    },
  ];

  const products = [
    {
      name: "Premium Cotton Innerwear Set",
      price: "$39.99",
      discount: "15% OFF",
      image: "https://i.pinimg.com/736x/4f/46/8c/4f468ce803eb4a91b18bb5bc7e0fab33.jpg",
    },
    {
      name: "Silk Handkerchief 3-Pack",
      price: "$24.99",
      image: "https://i.pinimg.com/736x/b3/61/b9/b361b98dd9efeeebc1fb904b1a90a91b.jpg",
    },
    {
      name: "Luxury Groom Cologne 100ml",
      price: "$79.99",
      image: "https://i.pinimg.com/736x/45/03/3d/45033d82da395b0bc50a97fb86361c73.jpg",
    },
    {
      name: "Professional Hair Styling Gel",
      price: "$18.99",
      image: "https://i.pinimg.com/1200x/8a/e9/8d/8ae98de79a06cf3072b7b726869b573e.jpg",
    },
    {
      name: "Black Leather Wallet",
      price: "$49.99",
      discount: "20% OFF",
      image: "https://i.pinimg.com/736x/ca/6d/86/ca6d863109cd02df3ddea5f3606d6390.jpg",
    },
  ];

  const featuredProducts = [
    {
      name: "Executive Leather Belt Brown",
      discount: "30% OFF",
      price: "$59.99",
      tag: "Best Seller",
      image: "https://i.pinimg.com/1200x/47/15/df/4715dfed8a3484999c216ae6c6bb3c85.jpg",
    },
    {
      name: "Premium Shoe Care Kit",
      discount: "25% OFF",
      price: "$44.99",
      tag: "Trending",
      image: "https://i.pinimg.com/1200x/6a/75/53/6a7553df1b4950f36c5800a35cd6a9e8.jpg",
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
