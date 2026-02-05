export default function EmergencyBridalGroomKit() {
  const kitItems = [
    {
      title: "Safety Pins",
      description: "Essential for quick wardrobe fixes. Perfect for securing loose hems, adjusting straps, or fixing unexpected tears in clothing. Keep multiple sizes on hand for various emergencies.",
      image: "https://i.pinimg.com/1200x/b3/36/a5/b336a536e0534a68e4d3d349d58ff9b7.jpg"
    },
    {
      title: "U-Pins",
      description: "Must-have for hair emergencies and veil adjustments. Secure updos, fix fallen hair accessories, and keep your hairstyle looking flawless throughout the celebration.",
      image: "https://i.pinimg.com/1200x/c0/6b/09/c06b099c5cd01864886c010bf525ea7d.jpg"
    },
    {
      title: "Makeup Fixing Spray",
      description: "Lock in your makeup for all-day wear. Prevents smudging, controls shine, and keeps you looking fresh from ceremony through reception and photos.",
      image: "https://i.pinimg.com/736x/07/5d/de/075dde54189d92005daba763dc4d3034.jpg"
    },
    {
      title: "Sewing Kit",
      description: "Complete emergency repair solution with needles, thread in various colors, and small scissors. Handle torn seams, loose buttons, and fabric emergencies on the spot.",
      image: "https://i.pinimg.com/1200x/1b/ee/50/1bee50636361a3cb55b0f32465c6860e.jpg"
    },
    {
      title: "Stain Remover",
      description: "Instant treatment for unexpected spills and stains. Quickly address wine, food, or makeup marks on wedding attire to keep everyone looking pristine.",
      image: "https://i.pinimg.com/736x/2c/07/0c/2c070c87a1cf017fde3265ea0e30da54.jpg"
    },
    {
      title: "Bandaids",
      description: "Protection for blisters and minor cuts. Essential for painful shoes and unexpected scrapes. Include various sizes for different needs throughout the day.",
      image: "https://i.pinimg.com/1200x/f5/bd/1f/f5bd1f3423fc75884fb3ab2568cf1362.jpg"
    },
    {
      title: "Tissues & Wet Wipes",
      description: "Handle tears of joy and clean up small messes. Wet wipes perfect for makeup touch-ups, hand cleaning, and quick refreshes between events.",
      image: "https://i.pinimg.com/1200x/74/34/44/74344463b1974d47f1e2a8da887ef818.jpg"
    },
    {
      title: "Mini Deodorant",
      description: "Stay fresh and confident all day long. Compact size perfect for quick touch-ups during dancing, photos, and throughout your celebration.",
      image: "https://i.pinimg.com/1200x/7c/2e/81/7c2e81452a143233c987704624331582.jpg"
    },
    {
      title: "Hair Spray",
      description: "Keep your hairstyle perfect through every moment. Tame flyaways, secure updos, and maintain your look from first look to last dance.",
      image: "https://i.pinimg.com/736x/f9/41/bd/f941bdd45000dc4136f61d2e53ab01db.jpg"
    },
    {
      title: "Perfume",
      description: "Maintain your signature scent throughout the day. Travel-size bottle for convenient touch-ups that keep you smelling wonderful for every embrace and photo.",
      image: "https://i.pinimg.com/736x/12/8f/94/128f940217ef4498d44fca10d10c7b6c.jpg"
    },
    {
      title: "Shoe Polish",
      description: "Keep shoes looking brand new all day. Quick fixes for scuffs and marks on dress shoes. Matching colors for both bride and groom footwear.",
      image: "https://i.pinimg.com/736x/73/9e/ac/739eacda83734eb38d1b80bc6d1977cd.jpg"
    },
    {
      title: "Sanitary Kit",
      description: "Essential feminine hygiene products for peace of mind. Include various options to ensure comfort and confidence throughout your special day.",
      image: "https://i.pinimg.com/1200x/50/53/d6/5053d6c12a158a58e47e91a3c0de80e9.jpg"
    },
    {
      title: "Painkiller Tablets",
      description: "Relief for headaches, muscle tension, or unexpected aches. Keep your celebration comfortable and pain-free so you can enjoy every moment worry-free.",
      image: "https://i.pinimg.com/1200x/23/b7/fe/23b7feab330156c8a85de430d4df830a.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Emergency Bridal / Groom Kit
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Be prepared for any wedding day emergency with our comprehensive kit essentials. 
            From wardrobe malfunctions to makeup touch-ups, these must-have items ensure you're ready to handle anything that comes your way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center px-4">
                    <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-400 text-sm">Add Pinterest image link here</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Prepared for Your Big Day
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Pack these essential items in your emergency kit and face your wedding day with confidence. 
            Being prepared means you can handle any situation gracefully and keep your celebration running smoothly.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Download Checklist
          </button>
        </div>
      </div>
    </div>
  );
}