"use client";
import Link from "next/link";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Gift,
  Flower,
  Utensils,
  Plane,
  MapPin,
  Sparkles,
  Calendar,
  Clipboard,
  Mail,
  Home,
  Scissors,
  ShoppingBag,
  Footprints,
  Watch,
  FlaskConical,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationLinks = [
    {
      name: "Home",
      icon: Clipboard,
      hasMegaMenu: false,
      link: "/",
    },
    {
      name: "Accessories",
      icon: Gift,
      heading: "Add A Little Spark To Your Style!",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Jewellery",
          icon: Sparkles,
          link: "/accessories/jewellery",
        },
        {
          name: "Bags & Purses",
          icon: ShoppingBag,
          link: "/accessories/bagsandpurses",
        },
        {
          name: "Hair Accessories",
          icon: Scissors,
          link: "/accessories/hair-accessories",
        },
        {
          name: "Shoes",
          icon: Footprints,
          link: "/accessories/shoes",
        },
        {
          name: "Watches",
          icon: Watch,
          link: "/accessories/watches",
        },
        {
          name: "Perfumes",
          icon: FlaskConical,
          link: "/accessories/perfumes",
        },
      ],
    },
    {
      name: "Outfits",
      icon: Sparkles,
      heading: "Dressed to Impress, Designed to Express",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Bridal Wear",
          icon: Sparkles,
          link: "/outfits/bridalwear",
        },
        {
          name: "Groom Wear",
          icon: Gift,
          link: "/outfits/groomwear",
        },
        {
          name: "Party Wear",
          icon: Sparkles,
          link: "/outfits/partywear",
        },
        {
          name: "Traditional Wear",
          icon: Gift,
          link: "/outfits/traditionalwear",
        },
        {
          name: "Western Wear",
          icon: Sparkles,
          link: "/outfits/westernwear",
        },
        {
          name: "Kids Outfits",
          icon: Gift,
          link: "/outfits/kidsoutfits",
        },
      ],
    },
    {
      name: "Catering & Decor",
      icon: Utensils,
      heading: "Crafting Moments. Serving Memories",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Wedding Catering",
          icon: Utensils,
          link: "/cateringanddecor/weddingcatering",
        },
        {
          name: "Floral Decor",
          icon: Flower,
          link: "/cateringanddecor/floraldecor",
        },
        {
          name: "Dance Groups",
          icon: Flower,
          link: "/cateringanddecor/dancegroups",
        },
        {
          name: "Lightning",
          icon: Sparkles,
          link: "/cateringanddecor/lightning",
        },
        {
          name: "Furniture Rental",
          icon: Gift,
          link: "/cateringanddecor/furniturerental",
        },
        {
          name: "Wedding Cards",
          icon: Flower,
          link: "/cateringanddecor/weddingcards",
        },
      ],
    },
    {
      name: "Accommodation",
      icon: Plane,
      heading: "Stay in Style, Sleep in Serenity",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Hotels",
          icon: Plane,
          link: "/accommodation/hotels",
        },

        {
          name: "Resorts",
          icon: Plane,
          link: "/accommodation/resorts",
        },
        {
          name: "Guest Houses",
          icon: Plane,
          link: "/accommodation/guesthouses",
        },
        {
          name: "Banquet Halls",
          icon: MapPin,
          link: "/accommodation/banquethalls",
        },
        {
          name: "Farmhouses",
          icon: MapPin,
          link: "/accommodation/farmhouses",
        },
        {
          name: "Conference Halls",
          icon: Plane,
          link: "/accommodation/conferencehalls",
        },
      ],
    },
    {
      name: "Venue & Location",
      icon: MapPin,
      heading: "The Perfect Place for Your Perfect Day",
      hasMegaMenu: true,
      showDestinationCard: true,
      dropdowns: [
        {
          name: "Outdoor Venues",
          icon: MapPin,
          link: "/venueandlocation/outdoorvenues",
        },
        {
          name: "Indoor Venues",
          icon: MapPin,
          link: "/venueandlocation/indoorvenues",
        },
        {
          name: "Destination Wedding",
          icon: Plane,
          link: "/eventplanning/destinationwedding",
        },
        {
          name: "Lounges",
          icon: MapPin,
          link: "/venueandlocation/lounges",
        },
        {
          name: "Gardens",
          icon: Flower,
          link: "/venueandlocation/gardens",
        },
        {
          name: "Beach Venues",
          icon: Plane,
          link: "/venueandlocation/beachvenues",
        },
      ],
    },
    {
      name: "Beauty & Styling",
      icon: Sparkles,
      heading: "Timeless Beauty, Effortlessly You",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Bridal Makeup",
          icon: Sparkles,
          link: "/beautyandstyling/bridalmakeup",
        },
        {
          name: "Hair Styling",
          icon: Sparkles,
          link: "/beautyandstyling/hairstyling",
        },
        {
          name: "Mehendi Artists",
          icon: Sparkles,
          link: "/beautyandstyling/mehendiartists",
        },
        {
          name: "Spa Services",
          icon: Sparkles,
          link: "/beautyandstyling/spaservices",
        },
        {
          name: "Grooming",
          icon: Sparkles,
          link: "/beautyandstyling/grooming",
        },
        {
          name: "Nail Art",
          icon: Sparkles,
          link: "/beautyandstyling/nailart",
        },
      ],
    },
    {
      name: "Event Planning",
      icon: Calendar,
      heading: "Stylish Events. Seamless Execution",
      hasMegaMenu: true,
      dropdowns: [
        {
          name: "Wedding Planning",
          icon: Calendar,
          link: "/eventplanning/weddingplanning",
        },
        {
          name: "Destination Wedding",
          icon: Plane,
          link: "/eventplanning/destinationwedding",
        },
        {
          name: "Engagement Planning",
          icon: Calendar,
          link: "/eventplanning/engagementplanning",
        },
        {
          name: "Cocktail Planning",
          icon: Calendar,
          link: "/eventplanning/cocktailplanning",
        },
      ],
    },
    {
      name: "Blogs",
      icon: Clipboard,
      hasMegaMenu: false,
      link: "/blogs",
    },
    {
      name: "More Services..",
      icon: Clipboard,
      hasMegaMenu: false,
      link: "/our-services",
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-100">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Shifted more to left on mobile */}
            <div className="flex-shrink-0 -ml-13 md:ml-0">
              <h1 className="text-2xl font-bold text-rose-500">
                <a href="/">
                  <img
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761844101/logo_sxozan.jpg"
                    alt="Logo"
                    className="h-14 w-16"
                  />
                </a>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Canvas Prints"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-rose-500">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              {/* Sign In Button - Updated with Link */}
              <Link href="/auth">
                <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-rose-500">
                  <User size={20} />
                  <span className="text-sm font-medium">Sign in</span>
                </button>
              </Link>

              {/* Cart Button */}
              <button className="flex items-center space-x-1 text-gray-700 hover:text-rose-500">
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">Cart</span>
              </button>

              {/* Wedding Website Button */}
              <Link href="/wedding-website">
                <button className="items-center space-x-1 text-gray-700 hover:text-rose-500 bg-rose-500 rounded-4xl py-3 px-7 border-none cursor-pointer hidden lg:block">
                  <span className="text-md font-semibold text-white">
                    Wedding Website
                  </span>
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-rose-500"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="bg-gradient-to-b from-rose-50 to-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center h-12 space-x-1">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setOpenDropdown(index)}
                onMouseLeave={() => link.hasMegaMenu && setOpenDropdown(null)}
              >
                {link.hasMegaMenu ? (
                  <button className="px-3 py-3 text-md font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 cursor-pointer">
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.link}
                    className="px-3 py-3 text-md font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Mobile Links */}
              {navigationLinks.map((link, index) => (
                <div key={index} className="mb-2">
                  {link.hasMegaMenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-medium rounded transition-colors duration-200"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === index && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.dropdowns.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.link}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded transition-colors duration-150"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-medium rounded transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Full Width Mega Dropdown */}
        {openDropdown !== null && navigationLinks[openDropdown].hasMegaMenu && (
          <div
            className="hidden md:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
            onMouseEnter={() => setOpenDropdown(openDropdown)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Heading */}
              <h3 className="text-xl font-medium text-gray-900 mb-6 uppercase">
                {navigationLinks[openDropdown].heading}
              </h3>

              {/* Grid of Links with Icons */}
              <div className="grid grid-cols-3 gap-6">
                {navigationLinks[openDropdown].dropdowns.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.link}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-rose-50 transition-colors duration-200 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-rose-100 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-rose-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-rose-500">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Destination Weddings Card (for Venue & Location) */}
              {navigationLinks[openDropdown].showDestinationCard && (
                <div className="mt-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Destination weddings
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Easily plan your international wedding.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Plane className="w-12 h-12 text-rose-500" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
