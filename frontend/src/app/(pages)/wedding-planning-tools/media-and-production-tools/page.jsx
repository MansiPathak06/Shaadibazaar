export default function MediaAndProductionTools() {
  const tools = [
    {
      title: "DSLR & Mirrorless Cameras",
      description: "Professional-grade cameras for capturing stunning wedding moments in high resolution. Full-frame sensors and interchangeable lenses deliver exceptional image quality in any lighting condition.",
      image: "https://i.pinimg.com/1200x/78/af/64/78af64d8085525b2e0cf28761a2ecf22.jpg"
    },
    {
      title: "Drone Camera",
      description: "Capture breathtaking aerial shots and cinematic footage of your venue and celebration. Create stunning overhead perspectives that add a unique dimension to your wedding video.",
      image: "https://i.pinimg.com/736x/25/94/0b/25940b9b6681582500343767a6923c6c.jpg"
    },
    {
      title: "GoPro Action Cameras",
      description: "Compact and versatile cameras perfect for unique angles and immersive POV shots. Waterproof and durable design allows creative filming in any wedding scenario.",
      image: "https://i.pinimg.com/736x/66/b2/b5/66b2b545ba6934b203411479ac146f38.jpg"
    },
    {
      title: "Lighting Stands",
      description: "Adjustable and sturdy stands to position your lighting equipment precisely. Essential for creating professional lighting setups that enhance photo and video quality.",
      image: "https://i.pinimg.com/736x/ed/ab/e1/edabe1205d92e4ff110644d490525f52.jpg"
    },
    {
      title: "Softboxes",
      description: "Diffuse harsh light for flattering portraits and romantic ambiance. Create soft, even lighting that eliminates unflattering shadows and highlights natural beauty.",
      image: "https://i.pinimg.com/736x/9c/b1/9b/9cb19ba3081d7082e01a1f74d388aa70.jpg"
    },
    {
      title: "Gimbal Stabilizer",
      description: "Achieve smooth, cinematic video footage with professional stabilization. Eliminate camera shake and create fluid movement shots that rival Hollywood productions.",
      image: "https://i.pinimg.com/736x/41/10/36/411036e76b66cd8760881c44d318d3ab.jpg"
    },
    {
      title: "Tripods",
      description: "Stable support for cameras and lighting equipment during long ceremonies and speeches. Heavy-duty construction ensures shake-free shots in any environment.",
      image: "https://i.pinimg.com/1200x/59/ae/98/59ae9849571e150f735e1de342433d20.jpg"
    },
    {
      title: "Memory Cards",
      description: "High-capacity, high-speed storage for thousands of photos and hours of 4K video. Reliable performance ensures you never miss a precious moment due to storage limitations.",
      image: "https://i.pinimg.com/1200x/14/1a/76/141a76506810bfbca43bb2186f1b3e0f.jpg"
    },
    {
      title: "Backup Hard Drives",
      description: "Secure, portable storage solutions to protect your irreplaceable wedding memories. Multiple backup copies ensure your photos and videos are safe for generations.",
      image: "https://i.pinimg.com/1200x/4e/f9/cf/4ef9cf865f1c492a1dedf95fa2ff600d.jpg"
    },
    {
      title: "LED Wall Controllers",
      description: "Manage dynamic visual displays and lighting effects for modern wedding venues. Create synchronized light shows and stunning visual backdrops that wow your guests.",
      image: "https://i.pinimg.com/1200x/85/27/30/8527300871188cd8dbe20f32e31c642e.jpg"
    },
    {
      title: "Audio Mixer",
      description: "Professional sound control for crystal-clear ceremony audio and reception entertainment. Balance multiple microphones and music sources for perfect sound quality.",
      image: "https://i.pinimg.com/1200x/71/14/29/711429a675a8cce93933f2ba67dfbda0.jpg"
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