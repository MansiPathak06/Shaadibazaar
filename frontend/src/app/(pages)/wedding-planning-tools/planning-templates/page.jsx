export default function PlanningTemplates() {
  const templates = [
    {
      title: "Wedding Day Timeline",
      description: "A comprehensive hour-by-hour schedule for your entire wedding day. Coordinate with vendors, track ceremony timing, reception events, and ensure everything runs smoothly from start to finish.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Ceremony Flow Chart",
      description: "Detailed sequence of your wedding ceremony from processional to recessional. Map out every moment including vows, ring exchange, readings, and special rituals with precise timing.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "Decor Checklist",
      description: "Complete inventory of all decoration items needed for your venue. Track centerpieces, floral arrangements, lighting, signage, table settings, and every decorative detail.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Vendor Checklist",
      description: "Comprehensive list to manage all your wedding vendors. Track contact information, payment schedules, arrival times, and specific requirements for each service provider.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Bride Prep Checklist",
      description: "Essential timeline and checklist for the bride's preparation day. Coordinate hair, makeup, dress fitting, accessories, and ensure nothing is forgotten on your special morning.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "Groom Prep Checklist",
      description: "Organized preparation guide for the groom and groomsmen. Track suit fittings, grooming appointments, accessories, and ensure a stress-free getting-ready experience.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "Photobooth Checklist",
      description: "Planning tool for your photobooth setup and props. List backdrop options, fun props, signage, and technical requirements to create memorable guest experiences.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    },
    {
      title: "Shot List",
      description: "Detailed photography checklist ensuring all important moments are captured. List must-have shots, family groupings, couple portraits, and special detail photos.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg"
    },
    {
      title: "DJ Playlist Sheet",
      description: "Curated music planning template for your reception. Organize songs for ceremony, cocktail hour, dinner, first dance, and party time with special requests and do-not-play lists.",
      image: "https://i.pinimg.com/1200x/c3/46/61/c346611a9859cf0f5224f498ac9a5ae1.jpg"
    },
    {
      title: "Baraat Timeline Sheet",
      description: "Structured timeline for the traditional Baraat procession. Coordinate departure time, route, music, dance breaks, arrival timing, and ensure a spectacular entrance celebration.",
      image: "https://i.pinimg.com/1200x/66/81/0d/66810d3dea919815a11ef99649fba02f.jpg"
    },
    {
      title: "Menu Planning Sheet",
      description: "Complete meal planning template for your wedding feast. Plan appetizers, main courses, desserts, beverages, dietary accommodations, and coordinate with catering team.",
      image: "https://i.pinimg.com/736x/16/18/0f/16180f598dc535f01062bb16db038cc9.jpg"
    },
    {
      title: "Transport Movement Sheet",
      description: "Logistics tracker for all wedding transportation needs. Coordinate vehicles for bride, groom, family, guests, track pickup times, routes, and ensure timely arrivals.",
      image: "https://i.pinimg.com/1200x/11/1e/fb/111efb470cf544efb7bca779d2e5a880.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Planning Templates
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Download and customize our comprehensive wedding planning templates to stay organized throughout your journey. 
            From timelines to checklists, these ready-to-use templates will help you manage every detail of your celebration with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                {template.image ? (
                  <img 
                    src={template.image} 
                    alt={template.title}
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
                  {template.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {template.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Organized?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download these professionally designed templates and customize them to match your unique wedding vision. 
            Stay organized, reduce stress, and ensure every detail is perfectly planned for your special day.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Download Templates
          </button>
        </div>
      </div>
    </div>
  );
}