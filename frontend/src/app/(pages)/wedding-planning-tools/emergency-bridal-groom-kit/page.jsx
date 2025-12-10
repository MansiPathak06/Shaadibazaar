export default function EmergencyBridalGroomKit() {
  const kitItems = [
    {
      title: "Safety Pins",
      description: "Essential for quick wardrobe fixes. Perfect for securing loose hems, adjusting straps, or fixing unexpected tears in clothing. Keep multiple sizes on hand for various emergencies.",
      image: ""
    },
    {
      title: "U-Pins",
      description: "Must-have for hair emergencies and veil adjustments. Secure updos, fix fallen hair accessories, and keep your hairstyle looking flawless throughout the celebration.",
      image: ""
    },
    {
      title: "Makeup Fixing Spray",
      description: "Lock in your makeup for all-day wear. Prevents smudging, controls shine, and keeps you looking fresh from ceremony through reception and photos.",
      image: ""
    },
    {
      title: "Sewing Kit",
      description: "Complete emergency repair solution with needles, thread in various colors, and small scissors. Handle torn seams, loose buttons, and fabric emergencies on the spot.",
      image: ""
    },
    {
      title: "Stain Remover",
      description: "Instant treatment for unexpected spills and stains. Quickly address wine, food, or makeup marks on wedding attire to keep everyone looking pristine.",
      image: ""
    },
    {
      title: "Bandaids",
      description: "Protection for blisters and minor cuts. Essential for painful shoes and unexpected scrapes. Include various sizes for different needs throughout the day.",
      image: ""
    },
    {
      title: "Tissues & Wet Wipes",
      description: "Handle tears of joy and clean up small messes. Wet wipes perfect for makeup touch-ups, hand cleaning, and quick refreshes between events.",
      image: ""
    },
    {
      title: "Mini Deodorant",
      description: "Stay fresh and confident all day long. Compact size perfect for quick touch-ups during dancing, photos, and throughout your celebration.",
      image: ""
    },
    {
      title: "Hair Spray",
      description: "Keep your hairstyle perfect through every moment. Tame flyaways, secure updos, and maintain your look from first look to last dance.",
      image: ""
    },
    {
      title: "Perfume",
      description: "Maintain your signature scent throughout the day. Travel-size bottle for convenient touch-ups that keep you smelling wonderful for every embrace and photo.",
      image: ""
    },
    {
      title: "Shoe Polish",
      description: "Keep shoes looking brand new all day. Quick fixes for scuffs and marks on dress shoes. Matching colors for both bride and groom footwear.",
      image: ""
    },
    {
      title: "Sanitary Kit",
      description: "Essential feminine hygiene products for peace of mind. Include various options to ensure comfort and confidence throughout your special day.",
      image: ""
    },
    {
      title: "Painkiller Tablets",
      description: "Relief for headaches, muscle tension, or unexpected aches. Keep your celebration comfortable and pain-free so you can enjoy every moment worry-free.",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
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
              <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
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

        <div className="mt-20 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Prepared for Your Big Day
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Pack these essential items in your emergency kit and face your wedding day with confidence. 
            Being prepared means you can handle any situation gracefully and keep your celebration running smoothly.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Download Checklist
          </button>
        </div>
      </div>
    </div>
  );
}