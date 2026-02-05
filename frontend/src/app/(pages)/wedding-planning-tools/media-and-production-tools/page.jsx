export default function MediaAndProductionTools() {
  const tools = [
    {
      title: "DSLR & Mirrorless Cameras",
      description: "Professional-grade cameras for capturing stunning wedding moments in high resolution. Full-frame sensors and interchangeable lenses deliver exceptional image quality in any lighting condition.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg"
    },
    {
      title: "Drone Camera",
      description: "Capture breathtaking aerial shots and cinematic footage of your venue and celebration. Create stunning overhead perspectives that add a unique dimension to your wedding video.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg"
    },
    {
      title: "GoPro Action Cameras",
      description: "Compact and versatile cameras perfect for unique angles and immersive POV shots. Waterproof and durable design allows creative filming in any wedding scenario.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg"
    },
    {
      title: "Lighting Stands",
      description: "Adjustable and sturdy stands to position your lighting equipment precisely. Essential for creating professional lighting setups that enhance photo and video quality.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg"
    },
    {
      title: "Softboxes",
      description: "Diffuse harsh light for flattering portraits and romantic ambiance. Create soft, even lighting that eliminates unflattering shadows and highlights natural beauty.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg"
    },
    {
      title: "Gimbal Stabilizer",
      description: "Achieve smooth, cinematic video footage with professional stabilization. Eliminate camera shake and create fluid movement shots that rival Hollywood productions.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg"
    },
    {
      title: "Tripods",
      description: "Stable support for cameras and lighting equipment during long ceremonies and speeches. Heavy-duty construction ensures shake-free shots in any environment.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg"
    },
    {
      title: "Memory Cards",
      description: "High-capacity, high-speed storage for thousands of photos and hours of 4K video. Reliable performance ensures you never miss a precious moment due to storage limitations.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg"
    },
    {
      title: "Backup Hard Drives",
      description: "Secure, portable storage solutions to protect your irreplaceable wedding memories. Multiple backup copies ensure your photos and videos are safe for generations.",
      image: "https://i.pinimg.com/1200x/c3/46/61/c346611a9859cf0f5224f498ac9a5ae1.jpg"
    },
    {
      title: "LED Wall Controllers",
      description: "Manage dynamic visual displays and lighting effects for modern wedding venues. Create synchronized light shows and stunning visual backdrops that wow your guests.",
      image: "https://i.pinimg.com/1200x/66/81/0d/66810d3dea919815a11ef99649fba02f.jpg"
    },
    {
      title: "Audio Mixer",
      description: "Professional sound control for crystal-clear ceremony audio and reception entertainment. Balance multiple microphones and music sources for perfect sound quality.",
      image: "https://i.pinimg.com/736x/16/18/0f/16180f598dc535f01062bb16db038cc9.jpg"
    },
  
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Media & Production Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore professional-grade media and production equipment to capture every precious moment of your wedding. 
            From cameras to lighting, audio to storage, find everything you need to create stunning visual memories that last a lifetime.
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
            Ready to Capture Your Perfect Day?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Equip yourself with professional media and production tools to ensure every moment is beautifully documented. 
            With the right equipment, you'll create timeless memories that you'll treasure forever.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Explore Equipment
          </button>
        </div>
      </div>
    </div>
  );
}