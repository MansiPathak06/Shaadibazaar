'use client'

import React, { useState, useEffect } from "react";

// Data Objects and Arrays
const siteData = {
  brand: "LuxeStay",
  tagline: "Experience timeless hospitality — crafted with passion, perfected with care.",
  contact: {
    phone: "+91-98765-43210",
    email: "reservations@example.com",
    address: "City Center, Business District"
  }
};

const heroData = {
  eyebrow: "Relax in refined comfort",
  title: "Stay Where Comfort Meets Elegance",
  subtitle: "Discover luxury, warmth, and unforgettable hospitality — crafted to make every stay feel like home.",
  image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630631/hotel-hero_gvllyb.jpg",
  buttons: [
    { text: "Explore Our Hotels", variant: "primary" },
    { text: "Book Your Stay", variant: "ghost" }
  ]
};

const aboutData = {
  eyebrow: "Relax in refined comfort",
  title: "Redefining the Art of Hospitality",
  subtitle: "Every moment at our hotels is designed with your comfort in mind. From tastefully designed rooms to curated dining experiences and personalized service, we bring the essence of luxury to life — seamlessly blending style and comfort.",
  tagline: "More than a stay — it's an experience.",
  mainImage: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630718/about-maIn_wfkypq.jpg",
  insetImage: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630718/about-small_wwync9.jpg"
};

const roomsData = {
  title: "Rooms Crafted for Rest & Rejuvenation",


  subtitle: "Choose from our collection of contemporary rooms and luxurious suites — each thoughtfully designed to combine elegance, functionality, and warmth.",
  tagline: "Sleep well, wake inspired.",
  rooms: [
    {
      id: 1,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630884/delux-room_ogkzas.jpg",
      title: "Deluxe Room",
      price: "$220",
      description: "Spacious rooms with elegant interiors and modern amenities for a comfortable stay.",
      amenities: {
        bath: { label: "Private bath", value: "Shower" },
        wifi: { label: "Peak WiFi Zone", value: "24/7" },
        bed: { label: "Bed", value: "King Size" },
        meal: { label: "Meal", value: "Breakfast" }
      }
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630883/executive-suite_bjiyto.jpg",
      title: "Executive Suite",
      price: "$320",
      description: "Premium suites with separate living area and enhanced luxury amenities.",
      amenities: {
        bath: { label: "Private bath", value: "Bathtub" },
        wifi: { label: "Peak WiFi Zone", value: "24/7" },
        bed: { label: "Bed", value: "King Size" },
        meal: { label: "Meal", value: "Full Board" }
      }
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630882/presidential_suite_qvewf5.jpg",
      title: "Presidential Suite",
      price: "$520",
      description: "Luxurious presidential suite with panoramic views and exclusive services.",
      amenities: {
        bath: { label: "Private bath", value: "Jacuzzi" },
        wifi: { label: "Peak WiFi Zone", value: "24/7" },
        bed: { label: "Bed", value: "King Size" },
        meal: { label: "Meal", value: "All Inclusive" }
      }
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761630881/standard-room_e1n2ra.jpg",
      title: "Standard Room",
      price: "$180",
      description: "Comfortable rooms with essential amenities for a pleasant stay experience.",
      amenities: {
        bath: { label: "Private bath", value: "Shower" },
        wifi: { label: "Peak WiFi Zone", value: "24/7" },
        bed: { label: "Bed", value: "Queen Size" },
        meal: { label: "Meal", value: "Breakfast" }
      }
    }
  ],
  categories: [
    "Deluxe Rooms – Chic comfort with modern amenities",
    "Executive Suites – Perfect blend of style and space",
    "Presidential Suite – Where luxury knows no limits"
  ]
};

const diningData = {
  title: "A Culinary Journey Awaits",
  subtitle: "Our chefs craft exquisite menus that celebrate global flavors and local freshness. From romantic dinners to grand buffets, every meal is a celebration of taste and art.",
  tagline: "Every bite tells a story.",
  highlights: [
    { title: "Multi-cuisine restaurant", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631055/dining-image_kkty32.jpg" },
    { title: "Rooftop dining with city views", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631054/dining-image-2_sg3bjv.jpg" },
    { title: "Signature cocktails and curated wine list", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631053/dining-image-3_em3ypw.jpg" }
  ]
};

const eventsData = {
  title: "Where Every Event Becomes a Memory",
  subtitle: "Host weddings, corporate events, and private gatherings in elegantly designed spaces that set the perfect tone for every occasion.",
  tagline: "Celebrate in style, surrounded by beauty.",
  spaces: [
    { name: "Grand Ballroom for large events", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631263/hotel-event-3_ld4iwj.jpg" },
    { name: "Banquet halls for intimate gatherings", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631264/hotel-event-1_tqtkko.jpg" },
    { name: "Outdoor garden setups for weddings", image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631264/hotel-event-2_yath4j.jpg" }
  ]
};

const splitRoomsData = [
  {
    title: "Standard Room",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631399/standard-rooms_a6foxv.jpg",
    description: "Thoughtfully appointed with soothing palettes and premium linens for deeply restful nights.",
    specs: [
      { label: "Size", value: "22 m²" },
      { label: "Guests", value: "2 Adults" },
      { label: "Bed", value: "180x200 cm" },
      { label: "Bath", value: "Shower" }
    ]
  },
  {
    title: "Deluxe Room",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631398/delux-rooms_nruhqm.jpg",
    description: "Spacious accommodations with premium amenities and contemporary design elements.",
    specs: [
      { label: "Size", value: "32 m²" },
      { label: "Guests", value: "2-3 Adults" },
      { label: "Bed", value: "King Size" },
      { label: "Bath", value: "Bathtub" }
    ]
  }
];

const bookingData = {
  title: "Your Perfect Stay Awaits",
  subtitle: "Whether it's a family getaway, a romantic escape, or a business trip — we promise comfort, style, and unforgettable hospitality.",
  buttons: [
    { text: "Check Availability", variant: "ghost" },
    { text: "Book Now", variant: "primary" }
  ]
};

// Components with proper padding
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-35 md:py-32 px-10 md:px-8 ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`container mx-auto px-10 md:px-8 ${className}`}>{children}</div>
);

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md px-6 py-3.5 text-sm md:text-base transition-all";
  const styles = {
    primary: "bg-amber-500 text-white hover:bg-amber-600 shadow",
    ghost: "border border-slate-300 text-slate-800 hover:bg-slate-100",
    dark: "bg-slate-900 text-white hover:bg-slate-800",
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeader = ({ eyebrow, title, subtitle, center }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-8`}>
    {eyebrow && <p className="tracking-[0.2em] text-xs uppercase text-slate-500 mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">{title}</h2>
    {subtitle && <p className="mt-5 text-slate-600 leading-relaxed">{subtitle}</p>}
  </div>
);

const Stat = ({ label, value }) => (
  <div className="flex items-center gap-3">
    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
    <p className="text-slate-700"><span className="font-medium">{value}</span> {label}</p>
  </div>
);

const Hero = () => (
  <div className="relative">
    <div className="relative h-[80vh] min-h-[540px] w-full overflow-hidden">
      <img
        src={heroData.image}
        alt="Luxury Hotel Lobby"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/60" />
      <Container className="relative h-full">
        <div className="h-full flex items-center">
          <div className="max-w-2xl text-white px-4">
            <p className="text-xs tracking-[0.25em] uppercase text-slate-200">{heroData.eyebrow}</p>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-tight">
              {heroData.title}
            </h1>
            <p className="mt-6 text-slate-200/90 leading-relaxed">
              {heroData.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {heroData.buttons.map((button, idx) => (
                <Button key={idx} variant={button.variant}>{button.text}</Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

const About = () => (
  <Section id="about" className="bg-[#F6F3EE]">
    <Container className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative px-4 md:px-0">
        <img
          src={aboutData.mainImage}
          alt="Hotel Rooms"
          className="rounded-xl shadow-lg"
        />
        <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-lg p-3 shadow">
          <img
            src={aboutData.insetImage}
            alt="Inset"
            className="h-28 w-40 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="px-4 md:px-0">
        <SectionHeader
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          subtitle={aboutData.subtitle}
        />
        <ul className="mt-6 space-y-3 text-slate-700">
          <li>{aboutData.tagline}</li>
        </ul>
        <div className="mt-8">
          <Button variant="dark" className="cursor-pointer">More About Us</Button>
        </div>
      </div>
    </Container>
  </Section>
);

const RoomCard = ({ room }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
    <div className="aspect-[16/9]">
      <img src={room.img} alt={room.title} className="h-full w-full object-cover hover:scale-110 transition duration-700 cursor-pointer" />
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
            <span>★★★★★</span>
          </div>
          <h3 className="text-xl font-serif text-slate-900">{room.title}</h3>
          <p className="text-slate-600 mt-2 leading-relaxed">
            {room.description}
          </p>
        </div>
        <div className="text-right">
          <p className="text-amber-600 font-semibold text-lg">{room.price}</p>
          <p className="text-xs text-slate-500">Per Night</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700 text-sm">
        <Stat label={room.amenities.bath.label} value={room.amenities.bath.value} />
        <Stat label={room.amenities.wifi.label} value={room.amenities.wifi.value} />
        <Stat label={room.amenities.bed.label} value={room.amenities.bed.value} />
        <Stat label={room.amenities.meal.label} value={room.amenities.meal.value} />
      </div>

      <div className="mt-8">
        <Button className="w-full">Booking Now</Button>
      </div>
    </div>
  </div>
);

const Rooms = () => (
  <Section id="rooms">
    <Container>
      <div className="mb-12 px-4">
        < div className="text-center mb-16" >
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Rooms Crafted for Rest & Rejuvenation
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Sleep well, wake inspired</p>
        </div >
        <p className="mt-5 text-center text-slate-600">{roomsData.tagline}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 px-4">
        {roomsData.rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </Container>
  </Section>
);

const Dining = () => (
  <Section id="dining" className="bg-white">
    <Container>
      <div className="mb-12 px-4">
        <SectionHeader
          title={diningData.title}
          subtitle={diningData.subtitle}
          center
        />
        <p className="mt-5 text-center text-slate-600">{diningData.tagline}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {diningData.highlights.map((item, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow border border-slate-100 bg-white">
            <div className="aspect-[16/10]">
              <img src={item.image} alt="Dining" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
            </div>
            <div className="p-6 text-center">
              <p className="font-medium text-slate-800">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const wellnessData = {
  title: "Relax. Refresh. Reconnect.",
  subtitle: "Unwind in our spa, take a dip in the pool, or enjoy a private yoga session. Our wellness spaces are designed to rejuvenate your mind, body, and soul.",
  tagline: "Luxury that restores balance.",
  features: [
    {
      icon: "spa",
      title: "Spa Therapies & Massages",
      description: "Rejuvenating treatments using premium organic products and ancient healing techniques",
      benefits: ["Stress Relief", "Muscle Recovery", "Skin Rejuvenation"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631670/Spa_Therapies_Massages_uwqjho.jpg"
    },
    {
      icon: "fitness",
      title: "Fitness Studio & Sauna",
      description: "State-of-the-art equipment with personalized training and thermal wellness experiences",
      benefits: ["Cardio Training", "Strength Building", "Detoxification"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631676/Fitness_Studio_Sauna_zjneqj.jpg"
    },
    {
      icon: "pool",
      title: "Infinity Pool with City Views",
      description: "Temperature-controlled pool offering panoramic skyline views and aqua therapy sessions",
      benefits: ["Relaxation", "Low-Impact Exercise", "Mental Clarity"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631669/Infinity_Pool_with_City_Views_yyi30x.jpg"
    }
  ]
};

const IconSpa = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const IconFitness = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconPool = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const getIcon = (iconName) => {
  const icons = {
    spa: <IconSpa />,
    fitness: <IconFitness />,
    pool: <IconPool />
  };
  return icons[iconName] || <IconSpa />;
};

const Wellness = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Section id="wellness" className="bg-linear-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mb-16 text-center px-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase">Wellness Sanctuary</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
            {wellnessData.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            {wellnessData.subtitle}
          </p>
          <p className="text-amber-600 font-medium italic">{wellnessData.tagline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {wellnessData.features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:transform hover:scale-[1.02] border border-slate-100"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-white/50">
                    <div className="text-amber-600">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-amber-500/20 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mx-auto mb-3 border border-white/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Explore Experience</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100 group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200 transition-all duration-300"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-amber-600 transition-all duration-300 group-hover:shadow-lg">
                  Book Experience
                </button>
              </div>

              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-linear-to-br from-amber-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Events = () => (
  <Section id="events">
    <Container>
      <div className="mb-12 px-4">
        <SectionHeader
          title={eventsData.title}
          subtitle={eventsData.subtitle}
          center
        />
        <p className="mt-5 text-center text-slate-600">{eventsData.tagline}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        {eventsData.spaces.map((space, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow border border-slate-100 bg-white">
            <div className="aspect-[16/10]">
              <img src={space.image} alt="Event space" className="h-full w-full object-cover hover:scale-110 transition duration-700" />
            </div>
            <div className="p-6">
              <p className="font-medium text-slate-800">{space.name}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

const nearbyData = {
  title: "Stay Close to the Heart of the City",
  subtitle: "Our hotels are strategically located to offer easy access to shopping, entertainment, and cultural landmarks — making every stay convenient and inspiring.",
  tagline: "Luxury meets location.",
  attractions: [
    {
      id: 1,
      category: "Shopping & Dining",
      title: "City Center & Shopping Districts",
      description: "Premium shopping destinations, gourmet restaurants, and vibrant markets just minutes away",
      distance: "2 min walk",
      highlights: ["Designer Boutiques", "Fine Dining", "Rooftop Bars", "Artisan Markets"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631833/nearbydata-1_efpx7q.jpg",
      icon: "shopping"
    },
    {
      id: 2,
      category: "Culture & History",
      title: "Museums & Heritage Sites",
      description: "Rich cultural heritage with world-class museums and historical landmarks within easy reach",
      distance: "5 min drive",
      highlights: ["Art Galleries", "Historic Architecture", "Cultural Centers", "Heritage Tours"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631832/nearbydata-2_d1ktlg.jpg",
      icon: "museum"
    },
    {
      id: 3,
      category: "Nature & Entertainment",
      title: "Scenic Trails & Nightlife",
      description: "Beautiful walking paths, vibrant entertainment districts, and stunning city viewpoints",
      distance: "3 min walk",
      highlights: ["Sunset Views", "Live Music", "Night Markets", "Riverside Walks"],
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631831/nearbydata-3_kumvmx.jpg",
      icon: "entertainment"
    }
  ]
};

const IconShopping = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
  </svg>
);

const IconMuseum = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const IconEntertainment = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Nearby = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Section id="nearby" className="bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-40" />
      </div>

      <Container className="relative z-10">
        <div className="mb-16 text-center px-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase">Prime Location</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
            {nearbyData.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            {nearbyData.subtitle}
          </p>
          <p className="text-amber-600 font-medium italic">{nearbyData.tagline}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {nearbyData.attractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:transform hover:scale-[1.02] border border-slate-100"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full shadow-sm">
                    {attraction.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {attraction.distance}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <div className="text-amber-600">
                      {getIcon(attraction.icon)}
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-amber-500/20 backdrop-blur-[1px] flex items-center justify-center transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="text-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mx-auto mb-2 border border-white/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Get Directions</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {attraction.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {attraction.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-slate-50 hover:bg-amber-50 text-slate-700 hover:text-amber-700 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-100 hover:border-amber-200">
                  Explore Area
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const galleryData = {
    title: "A Glimpse Into Our World",
    subtitle: "Explore stunning visuals of interiors, dining spaces, and signature moments — where elegance meets emotion.",
    filters: ['All', 'Rooms', 'Dining', 'Events'],
    images: [
      {
        id: 1,
        category: 'Rooms',
        name: 'Luxury Suite',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632071/gallery-rooms_l0rkxx.jpg',
        description: 'Premium accommodations with modern amenities'
      },
      {
        id: 2,
        category: 'Dining',
        name: 'Fine Dining Restaurant',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632070/gallery-dining_uiyzer.jpg',
        description: 'Exquisite culinary experiences'
      },
      {
        id: 3,
        category: 'Events',
        name: 'Grand Ballroom',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632067/Grand_Ballroom_itbaxv.jpg',
        description: 'Elegant spaces for memorable celebrations'
      },
      {
        id: 4,
        category: 'Rooms',
        name: 'Executive Room',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632064/executive-room_pgeghe.jpg',
        description: 'Contemporary design with luxury touches'
      },
      {
        id: 5,
        category: 'Dining',
        name: 'Rooftop Terrace',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632064/rooftop-terrace_j3kzcz.jpg',
        description: 'Panoramic city views with exceptional cuisine'
      },
      {
        id: 6,
        category: 'Events',
        name: 'Private Garden',
        image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632063/private-garden_cqaxpy.jpg',
        description: 'Outdoor elegance for special occasions'
      }
    ]
  };

  const filteredImages = activeFilter === 'All'
    ? galleryData.images
    : galleryData.images.filter(image => image.category === activeFilter);

  return (
    <Section id="gallery" className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-linear(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 text-sm font-medium tracking-wider uppercase">Visual Journey</span>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
            {galleryData.title}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {galleryData.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-12 px-4">
          <div className="bg-slate-50 rounded-full p-2 border border-slate-100 shadow-sm">
            <div className="flex gap-1">
              {galleryData.filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:transform hover:scale-[1.02] hover:border-slate-200"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full shadow-sm border border-white/50">
                    {item.category}
                  </span>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 border border-white shadow-lg">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-2 transition-colors duration-300">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full hover:bg-slate-50 transition-colors duration-300">
                      <svg className="w-4 h-4 text-slate-400 hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-50 transition-colors duration-300">
                      <svg className="w-4 h-4 text-slate-400 hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const SplitRooms = () => (
  <Section className="bg-[#FAFAF9]">
    <Container className="grid md:grid-cols-2 gap-12 px-4">
      {splitRoomsData.map((room, i) => (
        <div key={i} className={`${i % 2 === 0 ? "" : "md:order-2"} grid md:grid-cols-2 gap-6 items-center`}>
          <div className="px-2">
            <h3 className="text-3xl font-serif text-slate-900">{room.title}</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">{room.description}</p>
            <div className="mt-6 space-y-2 text-slate-700">
              {room.specs.map((spec, idx) => (
                <p key={idx}><span className="font-medium">{spec.label}:</span> {spec.value}</p>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <Button>Book Now</Button>
              <Button variant="ghost">Show Details</Button>
            </div>
          </div>
          <div className="relative">
            <img src={room.image} alt={room.title} className="rounded-xl shadow-lg object-cover w-full h-64 md:h-[340px]" />
            <div className="absolute inset-0 rounded-xl ring-8 ring-white/20 pointer-events-none [mask-image:radial-linear(circle_at_80%_20%,transparent_0,transparent_35%,black_36%)]" />
          </div>
        </div>
      ))}
    </Container>
  </Section>
);

const Booking = () => (
  <Section id="booking">
    <Container className="grid md:grid-cols-2 gap-8 items-center px-4">
      <div>
        <SectionHeader
          title={bookingData.title}
          subtitle={bookingData.subtitle}
        />
      </div>
      <div className="flex gap-4 md:justify-end flex-wrap">
        {bookingData.buttons.map((button, idx) => (
          <Button key={idx} variant={button.variant} className="cursor-pointer">{button.text}</Button>
        ))}
      </div>
    </Container>
  </Section>
);

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-slate-800">
      <main className="ng-">
        <Hero />
        <About />
        <Rooms />
        <Dining />
        <Wellness />
        <Events />
        <Nearby />
        <Gallery />
        <SplitRooms />
        <Booking />
      </main>
    </div>
  );
}
