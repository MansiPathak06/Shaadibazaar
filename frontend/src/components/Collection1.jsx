import React from 'react';

export default function Collection1() {
  const categories = [
    {
      name: "Wedding gown",
      image: "https://i.pinimg.com/1200x/a3/b6/2c/a3b62c437be6548d59a0ce1497c2bdfc.jpg"
    },
    {
      name: "Kurta–Pajama",
      image: "https://i.pinimg.com/1200x/38/fc/1c/38fc1ce264b0e9e6f1c6451fa1e34ef3.jpg"
    },
    
    
    
    {
      name: "Bridal Saree",
      image: "https://i.pinimg.com/736x/0c/59/54/0c595425995f9f810491a8ccc4995f4e.jpg"
    },
    {
      name: "Anarkali suit",
      image: "https://i.pinimg.com/1200x/cd/c7/52/cdc752101c04b381f3a721811e872355.jpg"
    },
    {
      name: "3-piece suit",
      image: "https://i.pinimg.com/736x/1c/a6/d2/1ca6d25ddbe7a7040983f61af2d6c80b.jpg"
    },
    {
      name: "Punjabi suit",
      image: "https://i.pinimg.com/736x/54/02/7d/54027daf6d104ba726e08790fe993c39.jpg"
    },
    {
      name: "Sherwani",
      image: "https://i.pinimg.com/736x/66/9f/44/669f44f7c86cfb4b941eaa6bec0bad08.jpg"
    },
    {
      name: "Phulkari dupatta",
      image: "https://i.pinimg.com/1200x/6a/8b/a3/6a8ba3fe279066df7d91cc3681446aa3.jpg"
    },
    {
      name: "Pathani suit",
      image: "https://i.pinimg.com/736x/c0/71/da/c071da29b66183da03189acffaae80f5.jpg"
    },
    
    {
      name: "Bridesmaid dresses",
      image: "https://i.pinimg.com/1200x/92/ea/c0/92eac081e4827a5875b4695a0c145cd1.jpg"
    },
    {
      name: "Bridal hijab",
      image: "https://i.pinimg.com/1200x/31/4d/2d/314d2d0de27566dc257e638e97a04a98.jpg"
    },
    
    {
      name: "Tuxedo",
      image: "https://i.pinimg.com/1200x/d1/fb/b0/d1fbb0950790724719e6c0ef8bae6794.jpg"
    },
  ];

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-[1600px] mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-top"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Category Name */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}