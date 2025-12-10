export default function HospitalityAndGuestManagementTools() {
  const tools = [
    {
      title: "Guest Welcome Cards",
      description: "Personalized welcome cards for each guest with event details, schedules, and special messages. Create a warm first impression and provide essential information in an elegant format.",
      image: ""
    },
    {
      title: "Wristbands / Entry Tags",
      description: "Custom wristbands and entry tags for easy guest identification and access control. Perfect for multi-day events and ensuring smooth venue entry with style.",
      image: ""
    },
    {
      title: "QR-coded Guest Passes",
      description: "Modern digital guest passes with QR codes for contactless check-in and verification. Streamline entry processes and enhance security with tech-savvy solutions.",
      image: ""
    },
    {
      title: "Luggage Tags",
      description: "Branded luggage tags for destination wedding guests. Help guests identify their belongings easily while adding a personalized touch to their travel experience.",
      image: ""
    },
    {
      title: "Seating Plan Boards",
      description: "Elegant display boards showing guest seating arrangements. Guide guests to their tables with beautiful, easy-to-read signage that complements your wedding décor.",
      image: ""
    },
    {
      title: "Hospitality Desk Kit",
      description: "Complete setup for your wedding hospitality desk including signage, information cards, and supplies. Ensure your guests have a dedicated point of contact for all their needs.",
      image: ""
    },
    {
      title: "Water Dispensers",
      description: "Stylish water stations to keep guests hydrated throughout your celebration. Provide refreshing beverages with elegant dispensers that match your wedding aesthetic.",
      image: ""
    },
    {
      title: "Umbrellas",
      description: "Branded or decorative umbrellas for unexpected weather. Keep your guests comfortable and dry while adding a practical yet charming touch to your wedding.",
      image: ""
    },
    {
      title: "Hand Fans",
      description: "Elegant hand fans for outdoor or summer weddings. Keep guests cool and comfortable while providing a beautiful keepsake that doubles as décor.",
      image: ""
    },
    {
      title: "Guest Feedback Forms",
      description: "Collect valuable feedback from your guests about their experience. Gather insights and testimonials while showing you care about their comfort and enjoyment.",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Hospitality & Guest Management Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover essential hospitality and guest management tools to ensure your wedding guests feel welcomed, comfortable, and cared for. 
            From welcome amenities to comfort essentials, create an unforgettable experience for everyone attending your special day.
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
            Ready to Elevate Guest Experience?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the hospitality tools that will make your guests feel truly special and cared for. 
            With thoughtful amenities and management solutions, you can create a memorable and comfortable experience for everyone.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}