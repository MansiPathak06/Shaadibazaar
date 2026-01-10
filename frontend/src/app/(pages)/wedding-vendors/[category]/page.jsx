// src/app/(pages)/wedding-vendors/[category]/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, MapPin, Phone, Mail, ArrowLeft, Loader2, PhoneCall } from "lucide-react";

export default function CategoryServicesPage() {
  const params = useParams();
  const router = useRouter();
  const { category } = params;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Category display names and images (using the same images as cards)
  const categoryData = {
    planner: {
      name: "Wedding Planner",
      image: "https://i.pinimg.com/1200x/fc/e6/24/fce62422d53e0f53aac6682509df749f.jpg"
    },
    event: {
      name: "Event Manager",
      image: "https://i.pinimg.com/1200x/8f/1a/16/8f1a1635e6ac2c77469d2257e5694d6f.jpg"
    },
    venue: {
      name: "Venue Manager",
      image: "https://i.pinimg.com/736x/57/7a/12/577a1271b9daebccea99feb87f2f1ab2.jpg"
    },
    decorator: {
      name: "Decorator",
      image: "https://i.pinimg.com/736x/a7/62/bc/a762bced6bef3d9b13ba75388aa659c3.jpg"
    },
    caterer: {
      name: "Caterer",
      image: "https://i.pinimg.com/1200x/56/1d/f0/561df0ddacb3d0ddd77ef4dfa6226c9f.jpg"
    },
    photographer: {
      name: "Photographer",
      image: "https://i.pinimg.com/1200x/66/77/85/66778594c92a2bf5727c4393c23059b4.jpg"
    },
    videographer: {
      name: "Videographer",
      image: "https://i.pinimg.com/736x/26/8c/18/268c186fde4f43f025a503db6df6f28f.jpg"
    },
    light: {
      name: "Light & Sound",
      image: "https://i.pinimg.com/736x/e3/34/d4/e334d4ffe873184bfcc6cc177cd53312.jpg"
    },
    dj: {
      name: "DJ Setup",
      image: "https://i.pinimg.com/736x/6f/98/b7/6f98b748da55295f92139809b72d0c0b.jpg"
    },
    band: {
      name: "Band Baja",
      image: "https://i.pinimg.com/1200x/42/94/a3/4294a34c84bcfa062fbe6d169d4686b3.jpg"
    },
    ghodi: {
      name: "Wedding Horse",
      image: "https://i.pinimg.com/736x/21/73/36/21733694ad441a7ce55ef5a890ff60ab.jpg"
    },
    dhol: {
      name: "Dhol Team",
      image: "https://i.pinimg.com/736x/38/27/3e/38273ee1c85c86d8f204e189a49b2bb1.jpg"
    },
    fireworks: {
      name: "Fireworks",
      image: "https://i.pinimg.com/1200x/25/68/2b/25682b0657067901dbb5b5c7fbbdfe74.jpg"
    },
    tent: {
      name: "Tent House",
      image: "https://i.pinimg.com/736x/8e/45/68/8e4568492a10ba340cf836e34e969647.jpg"
    },
    // Beauty Vendor Categories - Using Card Images
    "bridal-makeup": {
      name: "Bridal Makeup Artist",
      image: "https://i.pinimg.com/1200x/49/8e/fd/498efdae882161544ec04d199bfe9bf8.jpg"
    },
    "groom-makeup": {
      name: "Groom Makeup Artist",
      image: "https://i.pinimg.com/736x/17/15/c1/1715c16a3cc36f456270a1754b793596.jpg"
    },
    "hair-stylist": {
      name: "Hair Stylist",
      image: "https://i.pinimg.com/1200x/e7/72/f3/e772f305cee161462e43a816f62d45df.jpg"
    },
    "saree-draper": {
      name: "Saree Draper / Lehenga Pinning Artist",
      image: "https://i.pinimg.com/736x/db/c4/55/dbc4553b46d49179489046532fd5f0b2.jpg"
    },
    "mehendi": {
      name: "Mehendi Artist",
      image: "https://i.pinimg.com/736x/bd/a9/6d/bda96df7d043fccbd701f64bbf8a40a0.jpg"
    },
    "nail-tech": {
      name: "Nail Technician",
      image: "https://i.pinimg.com/1200x/8c/ef/97/8cef970448e7d1bf84ebec3ea185bfb7.jpg"
    },
    "spa-salon": {
      name: "Spa & Salon Services",
      image: "https://i.pinimg.com/1200x/6a/60/e1/6a60e1ab5dab56bccbce0dd4ce73a3bd.jpg"
    },
    "pre-bridal": {
      name: "Pre-bridal Package Vendor",
      image: "https://i.pinimg.com/736x/ef/d9/c6/efd9c6b927b438dfa38e4f93af6fbdbd.jpg"
    },
    "hijab-stylist": {
      name: "Hijab/Headgear Stylist",
      image: "https://i.pinimg.com/736x/e4/33/28/e43328428ec65959911b4b6152984b72.jpg"
    },
    // Add to categoryData object (around line 50)
"stage-decorators": {
  name: "Stage Decorators",
  image: "https://i.pinimg.com/1200x/0e/5d/e4/0e5de4f08c855eb7117b5e20affa20a4.jpg"
},
"mandap-decorators": {
  name: "Mandap/Vedi Decorators",
  image: "https://i.pinimg.com/736x/58/b8/3a/58b83af895ac2a764d6e0744e147812c.jpg"
},
"haldi-decor": {
  name: "Haldi Decor Setup",
  image: "https://i.pinimg.com/736x/d5/41/ce/d541ce392e4e531930feef7fbca7765c.jpg"
},
"mehendi-decor": {
  name: "Mehendi Decor",
  image: "https://i.pinimg.com/736x/ad/5d/69/ad5d698afb415fe786838438d4bd65e9.jpg"
},
"floral-decor": {
  name: "Floral Decor",
  image: "https://i.pinimg.com/1200x/7f/12/42/7f1242acc3533637e515de145c25f3c4.jpg"
},
"balloon-decor": {
  name: "Balloon Decor",
  image: "https://i.pinimg.com/1200x/e9/64/aa/e964aa9187229955624628f2b7e43ee7.jpg"
},
"lighting-decor": {
  name: "Lighting Decor",
  image: "https://i.pinimg.com/736x/b5/d1/40/b5d1408da31f3e615bb06d7a5cfa9904.jpg"
},
"entrance-decor": {
  name: "Entrance Gate Decor",
  image: "https://i.pinimg.com/736x/ba/93/d4/ba93d455e7d9b4fd24db486318560af2.jpg"
},
"photobooth-decor": {
  name: "Photobooth Decor",
  image: "https://i.pinimg.com/1200x/3c/07/da/3c07da704d106d2a1db601beef42da96.jpg"
},
"centerpiece-decor": {
  name: "Table Centerpiece",
  image: "https://i.pinimg.com/736x/12/19/35/1219350893e1db3013f5ead9562777eb.jpg"
},
"props-provider": {
  name: "Props Provider",
  image: "https://i.pinimg.com/1200x/a5/a1/4e/a5a14e2eb1f1d9c3d49aba1e96196b8c.jpg"
},
// Add to categoryData object
"live-singer": {
  name: "Live Singer",
  image: "https://i.pinimg.com/736x/e5/d6/44/e5d644d61e71bef9f96704cf533eb947.jpg"
},
"sufi-band": {
  name: "Sufi Band",
  image: "https://i.pinimg.com/1200x/96/12/98/961298283a0ad830c180c402070a2db5.jpg"
},
"qawwali-group": {
  name: "Qawwali Group",
  image: "https://i.pinimg.com/1200x/88/7e/4c/887e4c95c17d19d0f3d616128d5068f7.jpg"
},
"folk-dance": {
  name: "Folk Dance Groups",
  image: "https://i.pinimg.com/736x/42/f1/18/42f118d2bc40deb10cdc117e9e9ff6c5.jpg"
},
"instrumental-band": {
  name: "Instrumental Band",
  image: "https://i.pinimg.com/1200x/c0/85/3d/c0853da258fb21e892f386ff3fd12c2f.jpg"
},
"anchor-emcee": {
  name: "Anchor / Emcee",
  image: "https://i.pinimg.com/1200x/c6/50/48/c65048db0f6b3ededd41164da0044213.jpg"
},
"choreographer": {
  name: "Choreographer",
  image: "https://i.pinimg.com/1200x/b6/07/54/b60754e598a1c01378b40c2fc99810be.jpg"
},
"dj-dance-floor": {
  name: "DJ & Dance Floor Provider",
  image: "https://i.pinimg.com/736x/ee/7b/93/ee7b93f7581e80dde73d3fc10382c4ba.jpg"
},
"led-wall": {
  name: "LED Wall Provider",
  image: "https://i.pinimg.com/1200x/90/a3/f2/90a3f22793890f4e17b233bb259866d4.jpg"
},
"sound-system": {
  name: "Sound System Vendor",
  image: "https://i.pinimg.com/1200x/a9/7c/9e/a97c9e9dd5fbc558992252d44124ec92.jpg"
},
"celebrity-performer": {
  name: "Celebrity Performer",
  image: "https://i.pinimg.com/736x/33/a9/36/33a93665af894ec121d3622e9f60e795.jpg"
},
"fire-act": {
  name: "Fire Act / Jugglers",
  image: "https://i.pinimg.com/1200x/0a/8a/bc/0a8abc0c27a3e52cb19e6b77f6900436.jpg"
},
"kids-entertainment": {
  name: "Kids Entertainment Team",
  image: "https://i.pinimg.com/1200x/82/0c/b6/820cb6d187ed06459301febc7d9215ca.jpg"
},
// Add to categoryData object
"card-printing": {
  name: "Card Printing Shop",
  image: "https://i.pinimg.com/1200x/43/b1/93/43b1934999cc9241a4d699b9118f1afa.jpg"
},
"digital-invitation": {
  name: "Digital Invitation Designer",
  image: "https://i.pinimg.com/1200x/8e/42/71/8e4271e4b8b95f24c01a0866b1be9cdd.jpg"
},
"ecard-video": {
  name: "E-card Video Maker",
  image: "https://i.pinimg.com/1200x/c3/dc/40/c3dc40a9ab5d71a932d7d80d2c5c36e0.jpg"
},
"whatsapp-invitation": {
  name: "WhatsApp Invitation Designer",
  image: "https://i.pinimg.com/736x/25/bc/23/25bc2396093d1092d9afb4fb2776ed76.jpg"
},
"box-invitation": {
  name: "Box Invitation Vendor",
  image: "https://i.pinimg.com/736x/c8/79/0b/c8790ba78f0921f05c3c7bcb3aa00982.jpg"
},
"gift-hamper": {
  name: "Gift Hamper Packaging",
  image: "https://i.pinimg.com/1200x/e8/f6/28/e8f628712a077aae1fddf2d168a8801c.jpg"
},
"welcome-board": {
  name: "Welcome Board Designer",
  image: "https://i.pinimg.com/1200x/50/6e/07/506e073d7d50c864bdd19f985e40f874.jpg"
},
"flex-printing": {
  name: "Flex/Vinyl Printing Vendor",
  image: "https://i.pinimg.com/736x/90/d3/f7/90d3f76283edaeefed17ed222f3409ab.jpg"
},
// Add to categoryData object
"return-gift": {
  name: "Return Gift Vendor",
  image: "https://i.pinimg.com/1200x/a3/d4/5e/a3d45e6f7a8b9c0d1e2f3a4b5c6d7e8f.jpg"
},
"mehendi-favors": {
  name: "Mehendi Favors Vendor",
  image: "https://i.pinimg.com/1200x/5b/7c/9d/5b7c9d0e1f2a3b4c5d6e7f8a9b0c1d2e.jpg"
},
"haldi-token": {
  name: "Haldi Token Gift Vendor",
  image: "https://i.pinimg.com/1200x/8f/2d/6c/8f2d6c5b4a3e2d1c0b9a8f7e6d5c4b3a.jpg"
},
"shagun-envelope": {
  name: "Shagun Envelope Designer",
  image: "https://i.pinimg.com/1200x/7d/9e/3f/7d9e3f2c1b0a9f8e7d6c5b4a3e2d1c0b.jpg"
},
"gift-packaging": {
  name: "Gift Packaging Artist",
  image: "https://i.pinimg.com/1200x/4c/8d/2e/4c8d2e5f7a9b0c1d2e3f4a5b6c7d8e9f.jpg"
},
"trousseau-packing": {
  name: "Trousseau Packing Vendor",
  image: "https://i.pinimg.com/1200x/9e/3d/7f/9e3d7f8c6b5a4e3d2c1b0a9f8e7d6c5b.jpg"
},
"basket-tray": {
  name: "Basket & Tray Decor Vendor",
  image: "https://i.pinimg.com/1200x/2f/6c/9d/2f6c9d0e1f2a3b4c5d6e7f8a9b0c1d2e.jpg"
},
"dry-fruit-box": {
  name: "Dry Fruit Box Vendor",
  image: "https://i.pinimg.com/1200x/6b/4e/8d/6b4e8d9c0a1f2e3d4c5b6a7f8e9d0c1b.jpg"
},
// Add to categoryData object
"full-catering": {
  name: "Full Catering Service",
  image: "https://i.pinimg.com/1200x/c1/19/92/c11992607f0e64b51f63bba8fdad1ff5.jpg"
},
"live-counters": {
  name: "Live Counters Vendor",
  image: "https://i.pinimg.com/1200x/fe/bb/60/febb60bd0b7a753aa4195454fba6e560.jpg"
},
"sweet-shop": {
  name: "Sweet Shop Vendor",
  image: "https://i.pinimg.com/736x/48/76/4f/48764fe3522563cdff861593d5a68ded.jpg"
},
"halwai": {
  name: "Halwai",
  image: "https://i.pinimg.com/736x/36/63/91/36639136ab91da85255560c4e969485c.jpg"
},
"coffee-tea": {
  name: "Coffee/Tea Stall",
  image: "https://i.pinimg.com/736x/77/93/2d/77932da8a2a5d2d01c872ea58e2cd10d.jpg"
},
"fruit-stall": {
  name: "Fruit Stall",
  image: "https://i.pinimg.com/1200x/5f/b1/16/5fb1164ab2b6aa28e27164ac4dcd1a64.jpg"
},
"chocolate-fountain": {
  name: "Chocolate Fountain Vendor",
  image: "https://i.pinimg.com/1200x/3a/d6/a3/3ad6a38d6c6fef4a194b0bfded6d92f9.jpg"
},
"ice-cream": {
  name: "Ice Cream Counter",
  image: "https://i.pinimg.com/736x/88/ee/87/88ee8731fabdd3d37e5d8718dfb4586a.jpg"
},
"beverages": {
  name: "Water & Beverage Supplier",
  image: "https://i.pinimg.com/736x/80/39/90/8039904113f39daa19943f6110a493dc.jpg"
},
"buffet-setup": {
  name: "Buffet Setup & Service Staff",
  image: "https://i.pinimg.com/736x/12/8c/83/128c830d080584643bb030e59a738bdb.jpg"
},





  };

  const currentCategory = categoryData[category] || { name: "Services", image: "" };

  useEffect(() => {
    fetchServices();
  }, [category]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/services/category/${category}`
      );
      const data = await response.json();

      if (data.success) {
        setServices(data.services);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Fetch services error:", error);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleServiceClick = (serviceId) => {
    router.push(`/wedding-vendors/${category}/${serviceId}`);
  };

  const handleCallClick = (e, phone) => {
    e.stopPropagation();
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-rose-500 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background Image */}
      <div className="relative h-[40vh] overflow-hidden">
        {/* Background Image - Always use image, never video */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {currentCategory.name}
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Browse our verified {currentCategory.name.toLowerCase()} services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services available in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                {/* Top Section: Image on Left, Details on Right */}
                <div className="flex h-[220px]">
                  {/* Left Side - Service Image */}
                  <div className="relative w-[200px] flex-shrink-0 overflow-hidden">
                    {service.images && service.images.length > 0 && (
                      <img
                        src={
                          Array.isArray(service.images)
                            ? service.images[0]
                            : service.images
                        }
                        alt={service.service_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x220?text=Service";
                        }}
                      />
                    )}
                    {service.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Right Side - Location, Working Since, Description */}
                  <div className="flex-1 p-4 flex flex-col">
                    {/* Service Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 line-clamp-2 group-hover:text-rose-500 transition-colors leading-tight">
                      {service.service_name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Location */}
                    {service.area_of_service && (
                      <div className="flex items-start gap-1.5 text-gray-700 text-sm mb-2">
                        <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{service.area_of_service}</span>
                      </div>
                    )}

                    {/* Working Since, Price & Rating */}
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <div className="flex items-center gap-2">
                        {service.working_since && (
                          <span className="text-gray-600 font-medium">
                            Since {service.working_since}
                          </span>
                        )}
                        {service.starting_price && (
                          <span className="text-gray-500 text-xs">
                            | Starting from <span className="font-bold text-rose-500">₹{service.starting_price?.toLocaleString("en-IN")}</span>
                          </span>
                        )}
                      </div>
                      {service.rating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 font-semibold">
                            {service.rating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Buttons Only */}
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleCallClick(e, service.contact_phone)}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call Now
                    </button>
                    <button className="flex-1 px-4 py-2.5 cursor-pointer bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
