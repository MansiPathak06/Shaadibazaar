"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Always sync with localStorage
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (token && user) {
        setUserRole(user.role); // 'user', 'admin', or 'vendor'
        setUserName(user.name || user.email);
      } else {
        setUserRole(null);
        setUserName("");
      }
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section - INCREASED HEIGHT FOR MOBILE */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 md:h-16 gap-2">
            {/* Logo - BIGGER ON MOBILE */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761844101/logo_sxozan.jpg"
                  alt="Logo"
                  className="h-16 w-16 sm:h-14 sm:w-16 object-contain"
                />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Canvas Prints"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-rose-500">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons - BIGGER ON MOBILE */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Sign In/Account Button */}
              {userRole ? (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (userRole === "user") router.push("/user-dashboard");
                      else if (userRole === "admin")
                        router.push("/admin-dashboard");
                      else if (userRole === "vendor")
                        router.push("/vendor-dashboard");
                    }}
                    className="hidden sm:flex items-center gap-2 px-3 py-2 font-medium text-rose-500 hover:text-rose-700 text-sm"
                  >
                    <User size={18} />
                    <span className="hidden lg:inline">My Account</span>
                  </button>
                  {/* Mobile Account Icon - BIGGER */}
                  <button
                    onClick={() => {
                      if (userRole === "user") router.push("/user-dashboard");
                      else if (userRole === "admin")
                        router.push("/admin-dashboard");
                      else if (userRole === "vendor")
                        router.push("/vendor-dashboard");
                    }}
                    className="sm:hidden text-rose-500 hover:text-rose-700"
                  >
                    <User size={26} />
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      setUserRole(null);
                      setUserName("");
                      router.push("/auth");
                    }}
                    className="hidden sm:block text-gray-500 hover:text-red-600 text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => router.push("/auth")}
                  className="flex items-center gap-1 text-gray-700 hover:text-rose-500 text-sm font-medium"
                >
                  <User size={26} className="sm:hidden" />
                  <User size={18} className="hidden sm:block" />
                  <span className="hidden sm:inline">Sign in</span>
                </button>
              )}

              {/* Cart - BIGGER ON MOBILE */}
              <Link href="/cart" className="relative flex items-center gap-1">
                <ShoppingCart className="w-7 h-7 sm:w-6 sm:h-6 text-gray-700 hover:text-rose-500" />
                <span className="hidden sm:inline text-sm font-medium text-gray-700">
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Wedding Website Button - Hidden on smaller screens */}
              <Link href="/wedding-website" className="hidden lg:block">
                <button className="bg-rose-500 text-white rounded-full py-2 px-5 text-sm font-semibold hover:bg-rose-600 transition-colors duration-200 whitespace-nowrap">
                  Wedding Website
                </button>
              </Link>

              {/* Mobile Menu Button - BIGGER */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-rose-500 p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - BIGGER HEIGHT */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 text-base"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="bg-gradient-to-b from-rose-50 to-white border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center justify-center h-12 gap-1 overflow-x-auto">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setOpenDropdown(index)}
                onMouseLeave={() => link.hasMegaMenu && setOpenDropdown(null)}
              >
                {link.hasMegaMenu ? (
                  <button className="px-2 xl:px-3 py-3 text-sm xl:text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap">
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.link}
                    className="px-2 xl:px-3 py-3 text-sm xl:text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 block whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Slide-in Navigation Menu */}
          <div
            className={`mobile-menu-container lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Mobile Menu Header - BIGGER HEIGHT */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-5 flex items-center justify-between">
              <h2 className="text-white font-bold text-xl">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Menu Content - Scrollable */}
            <div className="overflow-y-auto h-[calc(100vh-88px)] pb-6">
              {/* Wedding Website Button - Mobile - BIGGER */}
              <div className="lg:hidden p-4 border-b border-gray-200">
                <Link href="/wedding-website" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-rose-500 text-white rounded-lg py-4 px-4 text-base font-semibold hover:bg-rose-600 transition-colors duration-200">
                    Wedding Website
                  </button>
                </Link>
              </div>

              {/* User Account Section - Mobile - BIGGER */}
              {userRole && (
                <div className="sm:hidden p-4 border-b border-gray-200 bg-rose-50">
                  <button
                    onClick={() => {
                      if (userRole === "user") router.push("/user-dashboard");
                      else if (userRole === "admin") router.push("/admin-dashboard");
                      else if (userRole === "vendor") router.push("/vendor-dashboard");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-4 bg-white rounded-lg text-rose-500 font-semibold hover:bg-rose-100 transition-colors text-base"
                  >
                    <User size={24} />
                    <span>My Account</span>
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      setUserRole(null);
                      setUserName("");
                      router.push("/auth");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium text-base"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Mobile Navigation Links - BIGGER */}
              <div className="p-4">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="mb-3">
                    {link.hasMegaMenu ? (
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === index ? null : index)
                          }
                          className="w-full flex items-center justify-between px-5 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-semibold transition-colors duration-200 bg-gray-50 text-base"
                        >
                          <div className="flex items-center gap-3">
                            <link.icon size={24} className="text-rose-500" />
                            <span>{link.name}</span>
                          </div>
                          <ChevronDown
                            size={22}
                            className={`transition-transform duration-300 ${
                              openDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Animated Dropdown */}
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            openDropdown === index
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          <div className="bg-white">
                            {link.dropdowns.map((item, idx) => {
                              const ItemIcon = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-5 py-4 text-base text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                                >
                                  <ItemIcon size={22} className="text-gray-400" />
                                  <span>{item.name}</span>
                                  <ChevronRight size={18} className="ml-auto text-gray-400" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.link}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-semibold rounded-lg transition-colors duration-200 border border-gray-200 text-base"
                      >
                        <link.icon size={24} className="text-rose-500" />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay for mobile menu */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </div>

        {/* Desktop Mega Dropdown - Unchanged */}
        {openDropdown !== null && navigationLinks[openDropdown].hasMegaMenu && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
            onMouseEnter={() => setOpenDropdown(openDropdown)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Heading */}
              <h3 className="text-xl font-medium text-gray-900 mb-6 uppercase">
                {navigationLinks[openDropdown].heading}
              </h3>

              {/* Grid of Links with Icons */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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

              {/* Destination Weddings Card */}
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
