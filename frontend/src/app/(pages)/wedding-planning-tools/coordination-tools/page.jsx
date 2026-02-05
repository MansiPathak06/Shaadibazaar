export default function CoordinationTools() {
  const tools = [
    {
      title: "Walkie-Talkies",
      description: "Essential communication devices for real-time coordination between wedding staff and vendors. Ensure seamless communication across venues with reliable range and instant connectivity.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Bluetooth Headsets",
      description: "Hands-free communication solution for coordinators and staff on the move. Stay connected while managing multiple tasks simultaneously with crystal-clear audio quality.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "Clipboard",
      description: "Classic organizational tool for keeping schedules, checklists, and important documents at hand. Perfect for quick note-taking and managing day-of details efficiently.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Portable Printer",
      description: "Print last-minute seating cards, schedules, or signage on-site. Handle unexpected changes and additions with compact, wireless printing capability.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Label Printer",
      description: "Create professional labels for gift bags, place settings, and organizational purposes. Streamline identification and categorization with quick, on-demand label printing.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "QR Code Check-in Scanner",
      description: "Modernize guest check-in with fast, contactless QR code scanning. Track attendance in real-time and reduce congestion at entry points with efficient digital verification.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "Power Banks",
      description: "Keep all devices charged throughout the event day. Ensure phones, tablets, and equipment stay powered for uninterrupted coordination and communication.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    },
    {
      title: "Wi-Fi Hotspot Device",
      description: "Provide reliable internet connectivity for digital tools and live streaming. Ensure backup connectivity for critical online services and guest social media sharing.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Wedding Coordination Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Equip your coordination team with essential tools for flawless wedding day execution. 
            From communication devices to tech solutions, ensure every detail runs smoothly and stays on schedule.
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
            Ready to Coordinate Like a Pro?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Equip your team with the right coordination tools for seamless wedding day management. 
            With proper communication and organization tools, your special day will run smoothly from start to finish.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}