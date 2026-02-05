export default function CommunicationTools() {
  const tools = [
    {
      title: "WhatsApp Business",
      description: "Connect with guests instantly using WhatsApp Business features. Send bulk messages, automated replies, and updates about your wedding to keep everyone informed in real-time.",
      image: "https://i.pinimg.com/1200x/fe/72/6c/fe726c09d43d4b1391c0e9ae26704ceb.jpg"
    },
    {
      title: "Email Automation Tools",
      description: "Design beautiful email campaigns for save-the-dates, invitations, and updates. Schedule automated reminders and track email opens for better guest engagement.",
      image: "https://i.pinimg.com/736x/0b/0e/88/0b0e88ae39f60e7d0a18fb09ecd4501a.jpg"
    },
    {
      title: "SMS Invite Tools",
      description: "Send personalized text message invitations and quick updates directly to guests' phones. Perfect for last-minute changes and urgent announcements with high open rates.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Google Meet",
      description: "Host virtual planning sessions with vendors, family, and your wedding party. Perfect for destination weddings or coordinating with long-distance guests and planners.",
      image: "https://i.pinimg.com/1200x/e1/75/ca/e175caefec6113c1d3c5ccf8d12ea897.jpg"
    },
    {
      title: "Zoom Video Conferencing",
      description: "Conduct professional video meetings with unlimited participants. Share screens for venue tours, dress fittings, or include remote guests in your special moments.",
      image: "https://i.pinimg.com/1200x/cf/41/e9/cf41e9bcaeabe438236d57ce462e97e7.jpg"
    },
    {
      title: "Client Portal System",
      description: "Create a centralized hub where guests can access all wedding information. Share itineraries, accommodation details, and important updates in one secure location.",
      image: "https://i.pinimg.com/1200x/17/46/2b/17462be4ebc6625450904147d93f186a.jpg"
    },
   
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Wedding Communication Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover powerful communication tools to connect with your guests, vendors, and wedding party effortlessly. 
            From instant messaging to video conferencing, streamline all your wedding conversations in one place.
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
            Ready to Connect?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the communication tools that work best for your wedding style and start connecting with everyone involved. 
            Effective communication makes wedding planning smoother and more enjoyable for everyone.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}