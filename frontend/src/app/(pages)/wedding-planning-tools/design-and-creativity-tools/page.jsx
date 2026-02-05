export default function DesignAndCreativityTools() {
  const tools = [
    {
      title: "Canva",
      description: "User-friendly design platform perfect for creating wedding invitations, save-the-dates, menus, and signage. Access thousands of templates and customize them to match your wedding theme effortlessly.",
      image: ""
    },
    {
      title: "Photoshop / Lightroom",
      description: "Professional photo editing software for perfecting engagement photos and creating stunning wedding graphics. Advanced tools for color correction, retouching, and creating custom designs.",
      image: ""
    },
    {
      title: "Video Editing Tools",
      description: "Create engaging save-the-date videos, wedding teasers, and social media content. Edit footage with professional transitions, music, and effects to tell your love story beautifully.",
      image: ""
    },
    {
      title: "Moodboard Creator",
      description: "Visualize your wedding aesthetic by compiling colors, textures, flowers, and decor inspiration. Share your vision with vendors and ensure everyone understands your style perfectly.",
      image: ""
    },
    {
      title: "Floor Plan Layout Designer",
      description: "Design your venue layout with precision. Plan table arrangements, dance floor placement, and traffic flow to maximize space and create the perfect atmosphere for your celebration.",
      image: ""
    },
    {
      title: "Stage & Decor Visualization Software",
      description: "Bring your decor ideas to life with 3D visualization tools. Experiment with different stage setups, backdrops, and decoration arrangements before the big day.",
      image: ""
    },
    {
      title: "Color Palette Generator",
      description: "Create harmonious color schemes for your wedding theme. Generate complementary colors, test combinations, and ensure consistency across all wedding elements from invitations to decor.",
      image: ""
    },
    
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Design & Creativity Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unleash your creativity with powerful design tools to bring your wedding vision to life. 
            From stunning invitations to breathtaking decor visualizations, create every detail of your special day with professional-quality design resources.
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
            Ready to Design Your Dream Wedding?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Select the design tools that match your creative vision and start crafting beautiful, personalized elements for your wedding. 
            Transform your ideas into reality and make your celebration truly unique and unforgettable.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Start Designing Now
          </button>
        </div>
      </div>
    </div>
  );
}