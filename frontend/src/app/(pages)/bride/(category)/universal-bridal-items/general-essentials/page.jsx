import React from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const BridalEssentialsPage = () => {
  const categories = [
    { name: 'Innerwear / Shapewear', items: '8 Items', image: 'https://i.pinimg.com/1200x/b6/6c/33/b66c33dc869eb3b957cb461aa90b33f8.jpg' },
    { name: 'Safety pins, U-pins', items: '12 Items', image: 'https://i.pinimg.com/1200x/cd/a9/96/cda9962dd92f10bda92fa514b8ce1287.jpg' },
    { name: 'Makeup touch-up kit', items: '6 Items', image: 'https://i.pinimg.com/736x/39/b6/8e/39b68ed87e7a3b78ef14e4611a775f0f.jpg' },
    { name: 'Wet wipes', items: '5 Items', image:' https://i.pinimg.com/1200x/76/10/d3/7610d370059b12f590f2d42644f8fca4.jpg' },
    { name: 'Power bank', items: '4 Items', image: 'https://i.pinimg.com/736x/9f/79/59/9f7959637881661dfc9c285871a094b9.jpg' },
    { name: 'Clutch/potli', items: '15 Items', image: 'https://i.pinimg.com/1200x/18/d4/3d/18d43d0d6a9642d098554a3fe267e3c2.jpg' },
    { name: 'Perfume', items: '10 Items', image: 'https://i.pinimg.com/1200x/14/03/25/140325850d39c57f4844c42352ab4fb1.jpg' },
    { name: 'Hand sanitizer', items: '7 Items', image: 'https://i.pinimg.com/1200x/57/4a/6c/574a6c8b725bfcebb3b4aed7e17ed201.jpg' }
  ];

  const products = [
    { name: 'Bridal Shapewear Bodysuit', price: '$45.99', discount: '20% OFF', image: 'https://i.pinimg.com/1200x/77/f0/ea/77f0ea94b838161fa17ef57ac21f08d4.jpg' },
    { name: 'Gold Safety Pin Set (50pcs)', price: '$12.99', image: 'https://i.pinimg.com/1200x/13/1a/3d/131a3d53ec804d1ce13709951420e00a.jpg' },
    { name: 'Bridal Touch-Up Kit Pouch', price: '$34.99', image: 'https://i.pinimg.com/1200x/e7/0c/99/e70c99ec8fa2d713708dbfc13eae48ca.jpg' },
    { name: 'Premium Wet Wipes Pack', price: '$8.99', image: 'https://i.pinimg.com/736x/37/32/5c/37325ccf1b8be1a0f0318657bf5172bd.jpg' },
    { name: 'Rose Gold Power Bank 10000mAh', price: '$29.99', image: 'https://i.pinimg.com/1200x/34/89/f5/3489f5de9e928713f866d3b68c101f83.jpg' }
  ];

  const featuredProducts = [
    { name: 'Luxury Bridal Clutch Pearl', discount: '25% OFF', price: '$89.99', tag: 'Best Seller', image: 'https://i.pinimg.com/736x/31/81/82/3181826831c963f5f3bae16821bdacf6.jpg' },
    { name: 'Designer Potli Bag Golden', discount: '30% OFF', price: '$64.99', tag: 'Trending', image: 'https://i.pinimg.com/736x/df/eb/71/dfeb71e74f403009a6f3dfaff62cb6ec.jpg'},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-r from-rose-100 to-pink-50 py-16 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="max-w-xl">
            <p className="text-rose-600 font-medium mb-2">Universal Bridal Collection</p>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              General Essentials
              <br />
              <span className="text-rose-500">& Wedding Day Must-Haves</span>
            </h1>
            <button className="mt-6 bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors shadow-lg">
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
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
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
              className="relative bg-gradient-to-br from-rose-100 to-pink-50 rounded-3xl overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs px-3 py-1 rounded-full z-10">
                {product.tag}
              </span>
              <div className="flex items-center justify-between p-8">
                <div className="flex-1">
                  <p className="text-rose-600 font-bold text-lg mb-2">{product.discount}</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h3>
                  <p className="text-3xl font-bold text-rose-600 mb-4">{product.price}</p>
                  <button className="bg-white text-rose-600 px-6 py-2 rounded-full font-medium hover:bg-rose-600 hover:text-white transition-colors">
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

        {/* Product Grid */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-6">
            <button className="text-gray-800 font-semibold border-b-2 border-rose-500 pb-2">
              All Items
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">Trending</button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">On Sale</button>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-rose-600 font-bold">{product.price}</p>
                  {product.discount && (
                    <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  )}
                </div>
                <button className="w-full mt-3 bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Featured Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-amber-100 to-orange-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-amber-700 font-semibold mb-2">Premium Collection</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Bridal Perfume
                <br />
                <span className="text-amber-600">Sets</span>
              </h3>
              <p className="text-gray-600 mb-6">Long-lasting fragrance for your special day</p>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 w-48 h-full bg-white/20"></div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-blue-700 font-semibold mb-2">Essential Care</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Sanitizer & Wipes
                <br />
                <span className="text-blue-600">Combo Pack</span>
              </h3>
              <p className="text-gray-600 mb-6">Stay fresh and protected all day long</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
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

export default BridalEssentialsPage;