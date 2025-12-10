export default function EventExecutionTools() {
  const tools = [
    {
      title: "Crowd Control Barriers",
      description: "Essential physical barriers for managing guest flow and creating organized pathways. Ensure safety and structure with professional-grade barricades for entrances, exits, and high-traffic areas.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Queue Marking Tapes",
      description: "Clearly define waiting areas and guide guests through organized lines. Use color-coded tapes to designate different zones and maintain smooth traffic flow throughout your venue.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "Floor Markers",
      description: "Designate specific positions for vendors, equipment, and key event elements. Use durable floor markers to indicate placement zones and ensure perfect setup execution.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Stage Markers",
      description: "Mark precise positions for performers, speakers, and ceremony participants. Ensure everyone knows exactly where to stand with clear, discreet stage marking systems.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Sound Check List",
      description: "Comprehensive checklist for audio equipment testing and optimization. Verify microphones, speakers, music systems, and backup equipment to guarantee flawless sound throughout your event.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "Lighting Cue Sheets",
      description: "Detailed schedules for lighting transitions and effects throughout your event. Coordinate ambient lighting, spotlights, and special effects with precision timing for maximum impact.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "MC Script Book",
      description: "Complete master of ceremonies guide with announcements, introductions, and transition scripts. Keep your event flowing smoothly with prepared remarks and timing notes for every moment.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    },
    {
      title: "Minute-to-Minute Cue Sheet",
      description: "Comprehensive timeline breaking down every single moment of your event. Coordinate all vendors, performers, and staff with precise scheduling to ensure seamless execution from start to finish.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg"
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Event Execution Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover essential execution tools for flawless event day coordination. From crowd management to minute-by-minute scheduling, 
            ensure every detail runs smoothly with our comprehensive collection of professional event execution resources.
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
            Ready for Event Day?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Equip yourself with professional execution tools to ensure your event runs flawlessly from setup to breakdown. 
            With proper preparation and the right tools, your event day will be smooth, organized, and unforgettable.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Your Execution Kit
          </button>
        </div>
      </div>
    </div>
  );
}