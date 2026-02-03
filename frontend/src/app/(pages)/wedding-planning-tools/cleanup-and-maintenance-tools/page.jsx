export default function CleanupAndMaintenanceTools() {
  const tools = [
    {
      title: "Garbage Bags",
      description: "Heavy-duty waste disposal bags in various sizes for efficient cleanup. Essential for managing waste throughout your wedding venue, from preparation to post-event cleanup.",
      image: ""
    },
    {
      title: "Sanitizers",
      description: "Keep your wedding venue hygienic and safe for all guests. Hand sanitizers and surface sanitizers ensure cleanliness in high-touch areas throughout your celebration.",
      image: ""
    },
    {
      title: "Tissue Rolls",
      description: "Soft, absorbent tissue papers for guest convenience and quick cleanups. Perfect for restrooms, dining areas, and emergency spill management during your event.",
      image: ""
    },
    {
      title: "Cleaning Cloth",
      description: "Reusable microfiber and cotton cloths for wiping surfaces and maintaining spotless venues. Ideal for quick touch-ups and keeping tables, counters, and décor dust-free.",
      image: ""
    },
    {
      title: "Mop Bucket",
      description: "Professional cleaning buckets with wringer systems for efficient floor maintenance. Keep your venue floors clean and safe throughout the wedding festivities.",
      image: ""
    },
    {
      title: "Disinfectant Sprays",
      description: "Powerful antibacterial sprays for sanitizing surfaces and eliminating germs. Ensure a healthy environment for your guests with regular disinfection of key areas.",
      image: ""
    },
    {
      title: "Brooms & Sweepers",
      description: "Essential tools for keeping floors clean from debris and dirt. Quick and efficient cleanup solutions for both indoor and outdoor wedding venues.",
      image: ""
    },
    
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Cleanup & Maintenance Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover essential cleanup and maintenance tools to keep your wedding venue spotless and hygienic. 
            From sanitizers to cleaning equipment, ensure a clean, safe, and beautiful environment for your special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {tool.image ? (
                  <img 
                    src={tool.image} 
                    alt={tool.title}
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
                  {tool.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Keep Your Venue Spotless?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the right cleaning and maintenance tools to ensure your wedding venue stays pristine throughout your celebration. 
            With proper cleanup equipment, you can maintain a beautiful, hygienic environment for all your guests.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}