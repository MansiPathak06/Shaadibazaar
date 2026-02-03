export default function PlanningKits() {
  const kits = [
    {
      title: "Master Wedding Planner Book",
      description: "Your comprehensive planning companion with sections for every detail of your wedding journey. Includes worksheets, inspiration pages, and space for notes to keep everything organized in one beautiful book.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Budget Planner File",
      description: "Complete financial planning system with category breakdowns, expense trackers, and payment schedules. Keep your wedding finances organized and under control with detailed budget worksheets.",
      image: "https://i.pinimg.com/736x/8b/d9/1f/8bd91f37722cd66672580a8543443f0c.jpg"
    },
    {
      title: "Vendor Contract Folder",
      description: "Professional organization system for all vendor agreements and documents. Store contracts, quotes, correspondence, and payment receipts in one secure, organized folder.",
      image: "https://i.pinimg.com/1200x/11/8b/59/118b593a6115ddc03e95eb994f6260e7.jpg"
    },
    {
      title: "Guest List Register",
      description: "Elegant register to track all guest information including addresses, RSVPs, meal preferences, and gift records. Maintain accurate guest counts and manage invitations with ease.",
      image: "https://i.pinimg.com/1200x/79/1a/1a/791a1a62a2cda0e26cd1ec5d2c7c395f.jpg"
    },
    {
      title: "Timeline Printouts",
      description: "Beautifully designed timeline templates for every phase of wedding planning. From 12-month countdowns to day-of schedules, stay on track with clear, printable timelines.",
      image: "https://i.pinimg.com/1200x/54/c2/fd/54c2fda843189154157c03c1be65008b.jpg"
    },
    {
      title: "Event Flow Sheets",
      description: "Detailed minute-by-minute schedules for your wedding day. Coordinate ceremony, reception, and vendor timings to ensure everything runs smoothly from start to finish.",
      image: "https://i.pinimg.com/1200x/db/8a/3c/db8a3c36ac832d1f621f68fabddff8c7.jpg"
    },
    
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Wedding Planning Kits
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Essential planning kits and printable resources to keep your wedding preparation organized and beautiful. 
            From comprehensive planner books to detailed checklists, find everything you need to plan your perfect celebration with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {kit.image ? (
                  <img 
                    src={kit.image} 
                    alt={kit.title}
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
                  {kit.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {kit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Organized?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the planning kits that match your style and start creating your dream wedding today. 
            With our comprehensive resources, every detail of your special day will be perfectly planned and beautifully organized.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}