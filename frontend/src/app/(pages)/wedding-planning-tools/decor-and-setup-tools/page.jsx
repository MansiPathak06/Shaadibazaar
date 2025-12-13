export default function DecorAndSetupTools() {
  const tools = [
    {
      title: "Measuring Tape",
      description: "Essential for accurate measurements of your venue space, table layouts, and decor placement. Ensure perfect proportions and spacing for all your wedding setup elements.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Color Swatches",
      description: "Match your wedding color palette perfectly with physical color samples. Compare shades in different lighting and coordinate with vendors for consistent theming.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "Fabric Samples",
      description: "Test and compare different textile options for table linens, draping, and decorative elements. Feel the quality and see how fabrics complement your overall design.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Flower Samples Board",
      description: "Create a visual reference board with your chosen blooms and arrangements. Present ideas to florists and visualize how different flowers work together.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Moodboard Printouts",
      description: "Bring your wedding vision to life with printed inspiration boards. Share your aesthetic with vendors and keep everyone aligned on the creative direction.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "Glue Gun & Glue Sticks",
      description: "Perfect for DIY decor projects and last-minute fixes. Secure embellishments, create custom centerpieces, and assemble decorative elements with ease.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "Scissors",
      description: "Sharp, reliable scissors for cutting ribbons, fabric, and paper decor. A must-have for crafting projects and making quick adjustments on setup day.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    },
    {
      title: "Cutter Knife",
      description: "Precision cutting tool for clean edges on foam boards, cardstock, and other materials. Essential for creating professional-looking signage and decorations.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg"
    },
    {
      title: "Zip Ties",
      description: "Secure decorations, bundle cables, and attach elements quickly and firmly. Versatile fasteners that work for both indoor and outdoor wedding setups.",
      image: "https://i.pinimg.com/1200x/c3/46/61/c346611a9859cf0f5224f498ac9a5ae1.jpg"
    },
    {
      title: "Ropes & Safety Cords",
      description: "Ensure stability for hanging decor, draping, and outdoor installations. Keep guests safe while creating stunning visual displays at your venue.",
      image: "https://i.pinimg.com/1200x/66/81/0d/66810d3dea919815a11ef99649fba02f.jpg"
    },
    {
      title: "Pins & Clips",
      description: "Hold fabric draping, secure tablecloths, and attach decorative elements without damage. Perfect for temporary installations and fabric arrangements.",
      image: "https://i.pinimg.com/736x/16/18/0f/16180f598dc535f01062bb16db038cc9.jpg"
    },
    {
      title: "Stapler + Staple Gun",
      description: "Fasten fabric backdrops, secure bunting, and attach materials to wooden structures. Essential for professional-looking installations and upholstery work.",
      image: "https://i.pinimg.com/1200x/11/1e/fb/111efb470cf544efb7bca779d2e5a880.jpg"
    },
    {
      title: "Hammer & Nails",
      description: "Mount decorations, assemble wooden structures, and secure elements firmly in place. Basic tools that solve countless setup challenges on wedding day.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Screwdriver & Tool Kit",
      description: "Handle furniture assembly, tighten fixtures, and make mechanical adjustments. A comprehensive toolkit ensures you're prepared for any technical challenge.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "Duct Tape",
      description: "The ultimate quick-fix solution for securing, bundling, and repairing. Strong adhesive handles everything from cord management to emergency decor repairs.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Jute Rope",
      description: "Add rustic charm while securing decorations and creating visual interest. Perfect for tying bouquets, bundling items, and achieving that natural aesthetic.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Safety Tape",
      description: "Mark walkways, secure cables, and prevent tripping hazards at your venue. Keep guests safe while maintaining an organized, professional appearance.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "Torch / Flashlight",
      description: "Navigate dark venues, find items in storage, and work in dimly lit areas during setup. Essential for evening events and outdoor wedding preparations.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "Ladder",
      description: "Reach high ceilings for hanging decorations, install lighting, and create dramatic vertical displays. A stable ladder is crucial for safe, professional setup work.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Decor & Setup Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to bring your wedding vision to life. From essential measuring tools to heavy-duty equipment, 
            this comprehensive collection ensures your decor setup is flawless, safe, and stunning from start to finish.
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
            Ready to Set Up Your Dream Wedding?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Equip yourself with the right tools to transform your venue into a breathtaking celebration space. 
            With proper preparation and quality equipment, your wedding decor setup will be smooth, efficient, and spectacular.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Your Tools Ready
          </button>
        </div>
      </div>
    </div>
  );
}