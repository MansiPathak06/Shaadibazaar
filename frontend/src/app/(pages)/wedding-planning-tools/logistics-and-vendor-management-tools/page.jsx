export default function LogisticsAndVendorManagementTools() {
  const tools = [
    {
      title: "Vendor Contact List",
      description: "Centralized directory of all vendor contacts with phone numbers, emails, and emergency contacts. Quick access to florists, caterers, photographers, and all service providers in one organized list.",
      image: "https://i.pinimg.com/1200x/19/fe/06/19fe066120f7ca1d1c9d20f8541f3e4b.jpg"
    },
    {
      title: "Delivery Schedule Sheet",
      description: "Comprehensive timeline tracking all vendor deliveries and arrival times. Coordinate cake delivery, floral arrangements, equipment setup, and ensure everything arrives on schedule.",
      image: "https://i.pinimg.com/736x/c3/a8/99/c3a89907c87fab1a10cc134014d7f3ca.jpg"
    },
    {
      title: "Pickup/Drop Checklist",
      description: "Track rental items, borrowed decorations, and return schedules. Ensure nothing gets lost with detailed pickup and drop-off documentation for all wedding materials.",
      image: "https://i.pinimg.com/1200x/b9/5b/45/b95b457406458947aace64a26e20d1e2.jpg"
    },
    {
      title: "Vendor Payment Tracker",
      description: "Monitor all vendor payments including deposits, installments, and final balances. Track payment deadlines, payment methods, and maintain receipts for complete financial transparency.",
      image: "https://i.pinimg.com/1200x/49/9b/8b/499b8b0b46238df722340d6373efc2c0.jpg"
    },
    {
      title: "Inventory Control Sheet",
      description: "Maintain detailed records of all wedding inventory from decorations to favors. Track quantities, locations, and condition of items to ensure nothing is forgotten or misplaced.",
      image: "https://i.pinimg.com/1200x/f4/81/12/f4811268de3520079fce77c44585292e.jpg"
    },
    {
      title: "Material Movement Passes",
      description: "Official documentation for moving materials between venues and storage locations. Essential for venue security requirements and keeping track of item transfers during setup.",
      image: ""
    },
    {
      title: "Loading/Unloading Scripts",
      description: "Step-by-step instructions for efficient loading and unloading of wedding materials. Assign responsibilities, optimize timing, and ensure smooth logistics on the big day.",
      image: ""
    },
    {
      title: "Permission Documents File",
      description: "Secure storage for all permits, venue contracts, and authorization letters. Keep insurance certificates, alcohol permits, and venue agreements organized and accessible.",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Logistics & Vendor Management Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Master the logistics of your wedding with our comprehensive vendor management and coordination tools. 
            From delivery schedules to payment tracking, streamline every aspect of vendor coordination and material management for a seamless wedding day.
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
            Ready to Streamline Your Logistics?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take control of your wedding logistics with professional vendor management tools. 
            Coordinate deliveries, track payments, and manage materials efficiently for a perfectly executed celebration.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}