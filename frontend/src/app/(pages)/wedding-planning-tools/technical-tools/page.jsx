export default function TechnicalTools() {
  const tools = [
    {
      title: "Extension Cords",
      description: "Heavy-duty extension cords essential for powering equipment across your venue. Available in various lengths to reach distant power sources for lighting, audio systems, and decorations.",
      image: ""
    },
    {
      title: "Multi-Plugs",
      description: "Multiple outlet adapters to power several devices from a single socket. Perfect for vendor setups, DJ equipment, and charging stations throughout your wedding venue.",
      image: ""
    },
    {
      title: "Power Distribution Box",
      description: "Professional power distribution units for managing multiple electrical connections safely. Ideal for larger weddings with extensive lighting and sound requirements.",
      image: ""
    },
    {
      title: "Generator Backup Plan",
      description: "Reliable backup power solutions for outdoor or remote wedding venues. Ensure uninterrupted power supply for critical equipment like sound systems, lighting, and catering equipment.",
      image: ""
    },
    {
      title: "Voltage Stabilizers",
      description: "Protect sensitive audio-visual equipment from power fluctuations. Essential for maintaining consistent power quality for DJ equipment, projectors, and lighting systems.",
      image: ""
    },
    {
      title: "Cable Organizers",
      description: "Keep cables neat, organized, and safe from tripping hazards. Professional cable management solutions ensure a clean appearance and guest safety throughout your venue.",
      image: ""
    },
    {
      title: "Batteries",
      description: "Backup batteries for wireless microphones, emergency lighting, and portable devices. Keep spare batteries charged and ready for all your wireless equipment needs.",
      image: ""
    },
    {
      title: "Fuse Box Backup",
      description: "Emergency fuse replacements and circuit protection equipment. Be prepared for any electrical issues with backup fuses and circuit breakers on hand.",
      image: ""
    },
  
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Technical Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ensure your wedding runs smoothly with essential technical equipment and power solutions. 
            From backup generators to cable management, we've covered all the technical aspects you need for a flawless celebration.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            Power Your Perfect Day
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't let technical issues disrupt your special day. Ensure you have all the necessary equipment and backup solutions 
            to keep everything running smoothly from ceremony to reception.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Your Checklist
          </button>
        </div>
      </div>
    </div>
  );
}