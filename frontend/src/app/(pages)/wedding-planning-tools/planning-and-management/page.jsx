import Link from 'next/link'; // Use Next.js Link instead of React Router


export default function PlanningAndManagementTools() {
  const tools = [
    {
      title: "Wedding Planning Software",
      description: "All-in-one platforms that combine budgeting, guest lists, vendor coordination, and timelines in one system. Stay organized with automated reminders and progress tracking.",
      image: "https://i.pinimg.com/1200x/6e/77/f8/6e77f844142e60f5ae66b449a6c477d8.jpg",
      link: "/wedding-planning-tools/planning-and-management/wedding-planning-software"
    },
    {
      title: "Event Management Software",
      description: "Professional-grade solutions for complex event logistics. Ideal for destination weddings with advanced features like team collaboration and detailed reporting.",
      image: "https://i.pinimg.com/736x/5e/7f/7a/5e7f7a57b4cc5dc9b1f82aa90f35b2d6.jpg",
      link: "/wedding-planning-tools/planning-and-management/Event-Management-Software"
    },
    {
      title: "Google Sheets / Excel Planning Sheets",
      description: "Customizable spreadsheet templates for DIY couples. Easily share with partners and vendors for real-time collaboration and unlimited customization.",
      image: "https://i.pinimg.com/736x/be/8f/a2/be8fa2da56cafa72020a797b371049f1.jpg",
      link: "/wedding-planning-tools/planning-and-management/Google-sheets"
    },
    {
      title: "Budget Calculator",
      description: "Track expenses in real-time and set spending limits for each category. Stay within budget with alerts when approaching spending thresholds.",
      image: "https://i.pinimg.com/1200x/fc/0e/d2/fc0ed2dd7130a5fe1584359e5b4846cd.jpg",
      link: "/wedding-planning-tools/planning-and-management/budget-calculator"

    },
    {
      title: "Guest List Manager",
      description: "Manage RSVPs, dietary restrictions, plus-ones, and seating preferences in one place. Send digital invitations and monitor response rates effortlessly.",
      image: "https://i.pinimg.com/1200x/6c/dc/12/6cdc121ea4f3a50f38798f53be30f03c.jpg",
      link: "/wedding-planning-tools/planning-and-management/Guest-list-manager"
    },
    {
      title: "Vendor Management System",
      description: "Coordinate with all service providers efficiently. Store contracts, track payments, and maintain communication with photographers, caterers, florists, and more.",
      image: "https://i.pinimg.com/736x/66/c5/81/66c5814e6969f9de6e86ce2a44bb480e.jpg",
      link: "/wedding-planning-tools/planning-and-management/Vendor-Management-System"
    },
    {
      title: "Timeline & Checklist Creator",
      description: "Break down wedding preparation into manageable tasks with clear deadlines. Set reminders, mark completed tasks, and visualize your progress.",
      image: "https://i.pinimg.com/1200x/78/42/2f/78422f627a4c889ea7e6e92907b2bbcf.jpg",
      link: "/wedding-planning-tools/planning-and-management/Timeline-&-Checklist-Creator"
    },
    {
      title: "Seating Chart Designer",
      description: "Drag and drop guests into tables with interactive visual tools. Visualize your venue layout and create the perfect seating arrangement.",
      image: "https://i.pinimg.com/1200x/a2/58/93/a2589338b74e223b88ae73589ee2ccc2.jpg",
      link: "/wedding-planning-tools/planning-and-management/Seating-Chart-Designer"
    },
    {
      title: "RSVP Tracking Tool",
      description: "Monitor guest confirmations in real-time. Send automated reminders, track meal choices, and communicate final numbers to vendors effortlessly.",
      image: "https://i.pinimg.com/1200x/c3/46/61/c346611a9859cf0f5224f498ac9a5ae1.jpg",
      link: "/wedding-planning-tools/planning-and-management/RSVP-tracking-tool"
    },
    {
      title: "Calendar Scheduler",
      description: "Coordinate appointments and important dates throughout your planning journey. Sync calendars with your partner and wedding party for seamless coordination.",
      image: "https://i.pinimg.com/1200x/66/81/0d/66810d3dea919815a11ef99649fba02f.jpg",
      link: "/wedding-planning-tools/planning-and-management/Calendar-Scheduler"
    },
    {
      title: "Payment Tracker",
      description: "Track deposits, installments, and final payments to vendors. Set payment reminders and maintain a clear overview of outstanding balances.",
      image: "https://i.pinimg.com/736x/16/18/0f/16180f598dc535f01062bb16db038cc9.jpg",
      link: "/wedding-planning-tools/planning-and-management/Payment-Tracker"
    },
    {
      title: "Contract Storage System",
      description: "Store all wedding contracts and documents in a secure, cloud-based location. Access paperwork anytime, anywhere with peace of mind.",
      image: "https://i.pinimg.com/1200x/11/1e/fb/111efb470cf544efb7bca779d2e5a880.jpg",
      link: "/wedding-planning-tools/planning-and-management/Contract-Storage-System"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Wedding Planning Tools
          </h1>

          <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the ultimate collection of planning and management tools to organize your dream wedding. 
            From budgeting to guest management, we've got everything you need to plan your perfect day with ease and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link 
              key={index} 
              href={tool.link}
              className="block"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Planning?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the tools that best fit your wedding planning style and start organizing your dream celebration today. 
            With the right tools, planning your wedding can be an enjoyable and stress-free experience.
          </p>
          <button className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}