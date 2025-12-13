export default function PersonalKitForWeddingPlanners() {
  const tools = [
    {
      title: "Backpack",
      description: "A durable, organized backpack with multiple compartments to carry all your essentials. Choose one with padded straps for comfort during long wedding days and weather-resistant material.",
      image: ""
    },
    {
      title: "Notebook & Pens",
      description: "High-quality notebooks and reliable pens for taking notes, sketching seating arrangements, and jotting down last-minute changes. Keep multiple pens as backups for signing documents.",
      image: ""
    },
    {
      title: "Snacks & Water",
      description: "Stay energized throughout the day with nutritious snacks and hydration. Pack protein bars, nuts, and a reusable water bottle to maintain your energy during busy wedding events.",
      image: ""
    },
    {
      title: "Portable Charger",
      description: "Never run out of battery with a high-capacity portable charger. Essential for keeping your phone, tablet, and other devices powered throughout the entire wedding day.",
      image: ""
    },
    {
      title: "ID Badge",
      description: "Professional identification badge that establishes your role as the wedding planner. Helps vendors and venue staff quickly identify you for seamless coordination.",
      image: ""
    },
    {
      title: "Comfortable Shoes",
      description: "Invest in supportive, stylish footwear designed for all-day wear. Wedding planners are on their feet constantly, so comfort is crucial without sacrificing professionalism.",
      image: ""
    },
    {
      title: "Weather Protection",
      description: "Be prepared for any weather with a compact umbrella, sunscreen, and a light jacket. Protect yourself and stay comfortable whether it's sunny, rainy, or unexpectedly cold.",
      image: ""
    },
    {
      title: "Emergency Kit",
      description: "A comprehensive emergency kit with safety pins, stain remover, sewing kit, tissues, and bandages. Be the hero who saves the day when wardrobe malfunctions or minor accidents occur.",
      image: ""
    },
    {
      title: "Multi-Tool & Scissors",
      description: "Compact multi-tool with scissors, knife, and screwdriver for quick fixes. Perfect for cutting ribbons, tightening loose screws, or handling unexpected setup challenges.",
      image: ""
    },
    {
      title: "Flashlight or Headlamp",
      description: "Portable lighting for dimly lit venues or evening setup. A hands-free headlamp is ideal for checking under tables or working in low-light conditions during setup.",
      image: ""
    },
    {
      title: "Tablet or Laptop",
      description: "Digital device loaded with all wedding plans, vendor contacts, timelines, and contracts. Access important documents instantly and stay connected with your team throughout the event.",
      image: ""
    },
    {
      title: "First Aid Supplies",
      description: "Basic first aid supplies including pain relievers, allergy medication, and blister treatments. Be prepared to handle minor health issues for yourself or the wedding party.",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Personal Kit for Wedding Planners
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the essential items every professional wedding planner needs to have on hand. 
            From emergency supplies to comfort essentials, equip yourself with everything required to handle any situation and ensure smooth wedding day execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
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

        <div className="mt-20 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Kit?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Equip yourself with these essential items and be prepared for anything on wedding day. 
            A well-stocked personal kit is the mark of a professional wedding planner who can handle any situation with confidence.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}