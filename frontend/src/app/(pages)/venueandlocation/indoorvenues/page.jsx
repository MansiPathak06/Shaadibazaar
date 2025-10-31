import Image from 'next/image';

const heroBgImage = 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636166/bg-image_dkaalc.jpg';

const venueGallery1 = [
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636166/venue1_i5cuyk.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636166/venue2_vhljrm.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636166/venue3_h7iglg.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636167/venue4_k43ltz.jpg',
];

const venueGallery2 = [
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636167/venue5_ceqj4g.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636169/venue6_swuvvq.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636171/venue7_astpbg.jpg',
  'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761636170/venue8_dorz5u.jpg',
];

const venueTypes = [
  {
    title: 'Banquet Halls',
    description: 'Elegant banquet halls with sophisticated interiors, perfect for grand weddings and lavish receptions.',
    icon: '🏛️',
  },
  {
    title: 'Hotel Ballrooms',
    description: 'Luxurious ballrooms in premium hotels offering world-class amenities and impeccable service.',
    icon: '✨',
  },
  {
    title: 'Convention Centers',
    description: 'Spacious convention halls ideal for large-scale events, conferences, and mega celebrations.',
    icon: '🏢',
  },
  {
    title: 'Heritage Venues',
    description: 'Historic palaces and heritage properties combining royal grandeur with modern facilities.',
    icon: '👑',
  },
];

const services = [
  {
    title: 'Complete Event Planning',
    description: 'Dedicated event coordinators managing every aspect from initial planning to final execution.',
  },
  {
    title: 'Gourmet Catering',
    description: 'Premium multi-cuisine buffets and plated dinners prepared by award-winning chefs.',
  },
  {
    title: 'Luxury Décor',
    description: 'Exquisite interior decorations with elegant draping, floral arrangements, and themed setups.',
  },
  {
    title: 'Professional AV Systems',
    description: 'High-quality sound systems, projection screens, and intelligent lighting for perfect ambiance.',
  },
  {
    title: 'Climate Control',
    description: 'Fully air-conditioned spaces with temperature control ensuring guest comfort year-round.',
  },
  {
    title: 'VIP Services',
    description: 'Premium hospitality including valet parking, dedicated staff, and luxury accommodations.',
  },
];

const testimonials = [
  {
    quote: "The indoor banquet hall at ShaadiBazaar exceeded all our expectations. The elegance and attention to detail made our wedding truly special!",
    name: "Anjali & Vikram",
  },
  {
    quote: "Hosting our reception indoors was the best decision. Climate-controlled comfort combined with stunning décor created the perfect atmosphere.",
    name: "Meera S.",
  },
  {
    quote: "The hotel ballroom venue was absolutely magnificent. Professional service and luxurious setting made our anniversary celebration unforgettable.",
    name: "Karan & Divya",
  },
  {
    quote: "ShaadiBazaar's indoor venue provided the perfect blend of tradition and modernity. Every guest was impressed with the facilities and service.",
    name: "Pooja & Rohan",
  },
];

const faqs = [
  {
    question: 'What types of events are suitable for indoor venues?',
    answer: 'Our indoor venues are perfect for weddings, receptions, sangeet ceremonies, corporate events, conferences, birthday parties, anniversaries, and any celebration requiring climate-controlled comfort and elegant settings.',
  },
  {
    question: 'What is the seating capacity of your indoor venues?',
    answer: 'We offer venues ranging from intimate spaces for 50 guests to grand halls accommodating 1500+ guests. Each venue can be configured for different seating arrangements based on your requirements.',
  },
  {
    question: 'Do you provide in-house catering services?',
    answer: 'Yes, all our indoor venues come with premium in-house catering services. We offer customizable menus featuring Indian, Continental, Chinese, and fusion cuisines prepared by experienced chefs.',
  },
  {
    question: 'Are there accommodation facilities available?',
    answer: 'Many of our hotel ballroom and heritage venues offer on-site accommodation for guests. We can arrange special rates for wedding parties and out-of-town guests.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 6-12 months in advance for wedding seasons (October-March). However, we also accommodate last-minute bookings based on availability.',
  },
  {
    question: 'Can I customize the venue décor and setup?',
    answer: 'Absolutely! Our team works closely with you to create custom décor themes, stage designs, lighting arrangements, and seating layouts that perfectly match your vision and preferences.',
  },
];

const features = [
  'Central air conditioning throughout',
  'State-of-the-art sound systems',
  'High-speed WiFi connectivity',
  'Professional stage and backdrop',
  'LED lighting and effects',
  'Spacious dance floors',
  'Elegant restroom facilities',
  'Secure parking arrangements',
  'Power backup generators',
  'Bridal changing rooms',
  'Guest seating areas',
  'Bar and beverage stations',
];

export default function IndoorVenues() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="relative bg-purple-100">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBgImage}
            alt="Indoor venue background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/85 via-purple-700/75 to-purple-600/65"></div>
        </div>
        <div className="py-32 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl">
            Elegant Indoor Venues for Unforgettable Celebrations
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            ShaadiBazaar brings you a curated selection of premium indoor venues combining luxury, comfort, and sophistication. From intimate gatherings to grand celebrations, find the perfect climate-controlled space for your special occasion.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-700 font-bold inset-0 z-0 text-lg px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors shadow-xl">
              Explore Venues
            </button>
            <button className="bg-purple-900 text-white font-bold inset-0 z-0 text-lg px-8 py-4 rounded-lg hover:bg-purple-950 transition-colors shadow-xl border-2 border-white">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-28">

        {/* Venue Types Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
            Discover Your Ideal Indoor Space
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            From opulent banquet halls to luxurious hotel ballrooms, explore our diverse range of indoor venues designed to host your dream celebration with elegance and style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {venueTypes.map((venue, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-purple-100">
                <div className="text-5xl mb-4">{venue.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">{venue.title}</h3>
                <p className="text-gray-600">{venue.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Venues Gallery */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
            Featured Indoor Venues
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            Step into elegance with our handpicked collection of premium indoor venues, each offering exquisite interiors and world-class amenities for your memorable events.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {venueGallery1.map((src, idx) => (
              <div key={idx} className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Image
                  src={src}
                  alt={`Featured venue ${idx + 1}`}
                  width={400}
                  height={280}
                  className="w-full h-56 object-cover"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-purple-50 rounded-lg p-12 max-w-4xl mx-auto shadow-inner text-center space-y-8">
          <h3 className="text-3xl font-semibold text-purple-800">Why ShaadiBazaar Indoor Venues?</h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            When you choose ShaadiBazaar for your indoor event, you're choosing excellence. Our venues offer the perfect combination of luxury, convenience, and professional service to make your celebration truly exceptional.
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 max-w-xl mx-auto text-left">
            <li>Premium locations in prime areas with easy accessibility and ample parking.</li>
            <li>Climate-controlled comfort ensuring pleasant experience regardless of weather.</li>
            <li>Customizable layouts and décor options to match your unique theme and style.</li>
            <li>Professional event management teams with years of experience.</li>
            <li>State-of-the-art audio-visual equipment and lighting systems.</li>
            <li>In-house catering with diverse menu options and dietary accommodations.</li>
            <li>Elegant interiors requiring minimal additional decoration.</li>
            <li>Comprehensive packages with transparent pricing and no hidden costs.</li>
          </ul>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
            Complete Event Solutions
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            Beyond stunning venues, we provide end-to-end event services to ensure your celebration is seamless, stress-free, and unforgettable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-purple-400">
                <h3 className="text-xl font-bold text-purple-700 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">
            Premium Venue Features
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Our indoor venues come equipped with modern amenities and facilities designed to provide maximum comfort and convenience for you and your guests.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-purple-600 text-xl">✓</span>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Venues Gallery */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-700">
            Explore More Venues
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {venueGallery2.map((src, idx) => (
              <div key={idx} className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Image
                  src={src}
                  alt={`Additional venue ${idx + 1}`}
                  width={400}
                  height={280}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

     

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Get answers to common questions about booking and hosting events at our premium indoor venues.
          </p>
          <div className="space-y-6 text-gray-800">
            {faqs.map(({ question, answer }, idx) => (
              <div key={idx} className="border-l-4 border-purple-400 bg-purple-50 p-5 rounded shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-purple-600">{question}</h3>
                <p className="mt-2">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-16 text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Begin Your Journey to the Perfect Celebration</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Book your dream indoor venue with ShaadiBazaar today and experience the perfect blend of luxury, comfort, and impeccable service!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-700 hover:bg-purple-50 font-bold text-xl px-14 py-5 rounded-lg transition-colors shadow-lg">
              Book Now
            </button>
            <button className="bg-purple-900 text-white hover:bg-purple-950 font-bold text-xl px-14 py-5 rounded-lg transition-colors shadow-lg border-2 border-white">
              Schedule a Visit
            </button>
          </div>
        </section>

      </main>

      
    </div>
  );
}