"use client";

import React from "react";
import Link from "next/link";

export default function TrendingProducts() {
  const categories = [
    {
      title: "Bride/Groom Collection",
      subtitle: "Elegant wedding attire for every bride and groom !",
      items: [
        {
          title: "Bridal Lehenga",
          icon: "👰",
          linear: "from-cyan-500 to-blue-600",
          image:
            "https://i.pinimg.com/1200x/92/c2/f3/92c2f37a30cab54858cd77ea1873dc8a.jpg",
          redirect_link: "/bride/all-products?category=bridalwear&subCategory=lehenga",
        },
        {
          title: "Sharara Set",
          icon: "💃",
          linear: "from-pink-500 to-rose-600",
          image:
            "https://i.pinimg.com/1200x/b6/4c/6d/b64c6d7ebc3107747de29c6949edae5a.jpg",
          redirect_link: "/bride/all-products?category=bridalwear&subCategory=bridal-sharara",
        },
        {
          title: "Sherwani",
          icon: "🤵",
          linear: "from-purple-500 to-indigo-600",
          image:
            "https://i.pinimg.com/1200x/1b/e7/70/1be7705cdd1b9ebd64a6ad67a46700af.jpg",
          redirect_link: "/groom/all-products?category=sikh-groomwear&subCategory=sherwani",
        },
        {
          title: "Kurta Pajama",
          icon: "👕",
          linear: "from-amber-500 to-orange-600",
          image:
            "https://i.pinimg.com/1200x/8a/5e/38/8a5e38d2463de74238047e8a8624d67f.jpg",
          redirect_link: "/groom/all-products?category=groomwear&subCategory=kurta-pajama&religion=muslim",
        },
      ],
      linkText: "View all collections",
    },
    {
      title: "Vendor and Services",
      subtitle: "Find trusted wedding vendors and premium services !",
      items: [
        {
          title: "Photography",
          icon: "📸",
          badge: "Up to 50% off",
          linear: "from-orange-400 to-red-500",
          image: "https://i.pinimg.com/736x/b2/4c/ab/b24cab6ad04bf63653b3249b9ba8852b.jpg",
          redirect_link: "/wedding-vendors/photography-and-media-vendors",
        },
        {
          title: "Makeup Artist",
          icon: "💄",
          badge: "Bestsellers",
          linear: "from-red-500 to-pink-600",
          image: "https://i.pinimg.com/1200x/49/8e/fd/498efdae882161544ec04d199bfe9bf8.jpg",
          redirect_link: "/wedding-vendors/bride-and-groom-wedding-vendors",
        },
        {
          title: "Catering Service",
          icon: "🍽️",
          badge: "",
          linear: "from-fuchsia-500 to-purple-600",
          image: "https://i.pinimg.com/736x/83/3f/04/833f0484d0b473dd67cd9f28211fb437.jpg",
          redirect_link: "/wedding-vendors/core-wedding-vendors",
        },
        {
          title: "DJ Setup",
          icon: "🎧",
          badge: "",
          linear: "from-violet-500 to-indigo-600",
          image: "https://i.pinimg.com/736x/56/fa/bf/56fabf14ef9c2b0b1e02e406c4543e61.jpg",
          redirect_link: "/wedding-vendors/entertainment-vendors",
        },
      ],
      linkText: "Browse all deals",
    },
    {
      title: "Wedding Venue and Accomodation",
      subtitle: "Find the perfect spaces for every wedding moment !",
      items: [
        {
          title: "Banquet Halls",
          image:
            "https://i.pinimg.com/736x/ec/5f/f8/ec5ff862c504be3092f07d57730e2c1b.jpg",
          description: "Spacious indoor venues for grand celebrations",
          redirect_link: "/venue-and-accomodation/wedding-venues/banquet-venues",
        },
        {
          title: "Destination Wedding",
          image:
            "https://i.pinimg.com/736x/8f/56/6f/8f566f360a13a0a874e093e80e9254f8.jpg",
          description: "Exotic locations for unforgettable weddings",
          redirect_link: "/venue-and-accomodation/wedding-venues/destination-wedding-venues",
        },
        {
          title: "Pre-Wedding Venues",
          image:
            "https://i.pinimg.com/1200x/1f/75/95/1f7595b8a91ba051ab21b793641d743d.jpg",
          description: "Beautiful spaces for engagements & photoshoots",
          redirect_link: "/venue-and-accomodation/venue-categories-by-event-type/pre-wedding-venues",
        },
        {
          title: "Hotels",
          image:
            "https://i.pinimg.com/1200x/2e/eb/ab/2eebab2ac8cf89b25a1e43e9425a3032.jpg",
          description: "Elegant stays and event-ready accommodations",
          redirect_link: "/venue-and-accomodation/accomodation-types/hotel-accomodation",
        },
      ],
      linkText: "Discover more",
    }
    ,
    {
      title: "Wedding Planning Tools",
      subtitle: "Essential tools to simplify your wedding planning !",
      items: [
        {
          title: "Bridal Kit",
          image:
            "https://i.pinimg.com/1200x/c3/3a/57/c33a57ce37cb68496fc12bc0de788df0.jpg",
          description: "All essentials for the bride’s big day",
          redirect_link: "/wedding-planning-tools/emergency-bridal-groom-kit",
        },
        {
          title: "Wedding Cards",
          image:
            "https://i.pinimg.com/1200x/0f/36/d0/0f36d0b53e2460ba08dbc1847422c6d7.jpg",
          description: "Beautiful invitations for every ceremony",
          redirect_link: "/wedding-vendors/invitation-and-printing-vendors",
        },
        {
          title: "Drone Camera",
          image:
            "https://i.pinimg.com/1200x/90/44/a2/9044a20f7678b7adeb70b96213ceb867.jpg",
          description: "Capture stunning aerial wedding moments",
          redirect_link: "/wedding-vendors/videographer",
        },
        {
          title: "Perfume",
          image:
            "https://i.pinimg.com/1200x/a7/c7/a9/a7c7a91a273e7d14033e4873f66fa524.jpg",
          description: "Premium fragrances for lasting impressions",
          redirect_link: "/groom/all-services?category=groom-services&subCategory=groom-makeup",
        },
      ],
      linkText: "Shop tools",
    },

  ];

  return (
    <div className="bg-white p-6">
      <div className="text-center pb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-medium capitalize mb-4">
          <span className="text-gray-900">Featured</span>{" "}
          <span className="text-orange-600">Categories</span>
        </h1>
        <p className="text-lg text-gray-600">
          What everyone's loving right now !
        </p>
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 bg-linear-to-r from-gray-900 to-gray-800">
                <h2 className="text-xl font-medium text-white mb-1">
                  {category.title}
                </h2>
                <p className="text-gray-300 text-sm">{category.subtitle}</p>
              </div>

              {/* Items Grid */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <Link href={item.redirect_link} key={itemIndex}>
                      <div
                        className="relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                      >
                        {/* Image-based cards */}
                        {item.image ? (
                          <div className="aspect-square relative group/item">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-white font-medium text-sm mb-1">
                                  {item.title}
                                </h3>
                                <p className="text-white/90 text-xs">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* linear-based cards */
                          <div
                            className={`aspect-square bg-linear-to-br ${item.linear} flex flex-col items-center justify-center p-4 text-white`}
                          >
                            {item.icon && (
                              <span className="text-4xl mb-2">{item.icon}</span>
                            )}
                            <h3 className="font-bold text-center text-sm mb-1">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="bg-white/25 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
