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
      if (mobileMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navigationLinks = [
    {
      name: "Home",
      icon: Clipboard,
      hasMegaMenu: false,
      link: "/",
    },
    {
      name: "Bride",
      icon: Gift,
      heading: "Add A Little Spark To Your Style!",
      hasMegaMenu: true,
      sections: [
        {
          title: "Products",
          items: [
            {
              name: "Bridal Attire",
              icon: Sparkles,
              link: "/bride/bridalattire",
            },
            {
              name: "Bridal Jewellery",
              icon: ShoppingBag,
              link: "/bride/bridaljewellery",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              name: "Makeup & Hair",
              icon: Scissors,
              link: "/bride/makeupandhair",
            },
            {
              name: "Bridal Mehendi",
              icon: Footprints,
              link: "/bride/bridalmehndi",
            },
            {
              name: "Pre-Wedding Prep",
              icon: Watch,
              link: "/bride/preweddingprep",
            },
          ],
        },
      ],
    },
    {
      name: "Groom",
      icon: Sparkles,
      heading: "Dressed to Impress, Designed to Express",
      hasMegaMenu: true,
      sections: [
        {
          title: "Products",
          items: [
            {
              name: "Groom Wear",
              icon: Sparkles,
              link: "/groom/groomwear",
            },
            {
              name: "Groom Accessories",
              icon: Gift,
              link: "/groom/groomaccessories",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              name: "Groom Services",
              icon: Gift,
              link: "/groom/groomservices",
            },
          ],
        },
      ],
    },
    {
      name: "Vendors and Services",
      icon: Utensils,
      heading: "Crafting Moments. Serving Memories",
      hasMegaMenu: true,

      sections: [
        {
          title: "Products",
          items: [
            {
              name: "Ritual Items and Materials",
              icon: Flower,
              link: "/vendorsandservices/ritualitems",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              name: "Phhotography and Videography",
              icon: Utensils,
              link: "/vendorsandservices/photoandvideo",
            },
            {
              name: "Decoration",
              icon: Flower,
              link: "/vendorsandservices/decoration",
            },
            {
              name: "Entertainment",
              icon: Flower,
              link: "/vendorsandservices/entertainment",
            },
            {
              name: "Wedding Essentials",
              icon: Sparkles,
              link: "/vendorsandservices/weddingessentials",
            },
          ],
        },
      ],
    },
    {
      name: "Planning Tools",
      icon: Plane,
      heading: "Stay in Style, Sleep in Serenity",
      hasMegaMenu: true,
      simpleLayout: true,
      sections: [
        {
          title: "Products",
          items: [],
        },
        {
          title: "Services",
          items: [
            {
              name: "Checklists",
              icon: Plane,
              link: "/planningtools/checklists",
            },
            {
              name: "Digital Tools",
              icon: Plane,
              link: "/planningtools/digitaltools",
            },
            {
              name: "Coordination Services",
              icon: Plane,
              link: "/planningtools/coordinationservices",
            },
            {
              name: "Technology",
              icon: MapPin,
              link: "/planningtools/techhnology",
            },
          ],
        },
      ],
    },
    {
      name: "Venue & Location",
      icon: MapPin,
      heading: "The Perfect Place for Your Perfect Day",
      hasMegaMenu: true,
      simpleLayout: true,
      showDestinationCard: true,
      sections: [
        {
          title: "Products",
          items: [],
        },
        {
          title: "Services",
          items: [
            {
              name: "Venue Type",
              icon: MapPin,
              link: "/venueandlocation/outdoorvenues",
            },
            {
              name: "Venue Add-Ons",
              icon: MapPin,
              link: "/venueandlocation/indoorvenues",
            },
            {
              name: "Guest Accommodation",
              icon: MapPin,
              link: "/venueandlocation/lounges",
            },
          ],
        },
      ],
    },
    {
      name: "Pre-Wedding",
      icon: Sparkles,
      heading: "Timeless Beauty, Effortlessly You",
      hasMegaMenu: true,
      simpleLayout: true,
      sections: [
        {
          title: "Products",
          items: [],
        },
        {
          title: "Services",
          items: [
            {
              name: "Pre-Wedding Shoots",
              icon: Sparkles,
              link: "/prewedding/preweddingshoots",
            },
            {
              name: "Pre-Wedding Events",
              icon: Sparkles,
              link: "/prewedding/preweddingevents",
            },
            {
              name: "Lifestyle",
              icon: Sparkles,
              link: "/prewedding/lifestyle",
            },
          ],
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
      name: "More Services...",
      icon: Clipboard,
      heading: "Timeless Beauty, Effortlessly You",
      hasMegaMenu: true,
      simpleLayout: true,
      sections: [
        {
          title: "Products",
          items: [],
        },
        {
          title: "Services",
          items: [
            {
              name: "Logistics",
              icon: Sparkles,
              link: "/moreservices/logistics",
            },
            {
              name: "Hospitality",
              icon: Sparkles,
              link: "/moreservices/hospitality",
            },
            {
              name: "Luxury Add-Ons",
              icon: Sparkles,
              link: "/moreservices/luxuryaddons",
            },
            {
              name: "Post Wedding",
              icon: Sparkles,
              link: "/moreservices/postwedding",
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 md:h-16 gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761844101/logo_sxozan.jpg"
                  alt="Logo"
                  className="h-16 w-16 sm:h-14 sm:w-16 object-contain"
                />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile */}
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

            {/* Right Icons */}
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
                  {/* Mobile Account Icon */}
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
                  className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-rose-500 text-sm font-medium"
                >
                  <User size={26} className="sm:hidden" />
                  <User size={18} className="hidden sm:block" />
                  <span className="hidden sm:inline">Sign in</span>
                </button>
              )}

              {/* Cart */}
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

              {/* Wedding Website Button */}
              <Link href="/wedding-website" className="hidden lg:block">
                <button className="bg-rose-500 text-white rounded-full py-2 px-5 text-sm font-medium hover:bg-rose-600 transition-colors duration-200 whitespace-nowrap">
                  Wedding Website
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-gray-700 hover:text-rose-500 p-1 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
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
      <div className="bg-gradient-to-b from-rose-50 to-white border-b border-gray-200 relative z-9000">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center h-15 gap-1 overflow-x-auto">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setOpenDropdown(index)}
                onMouseLeave={() => link.hasMegaMenu && setOpenDropdown(null)}
              >
                {link.hasMegaMenu ? (
                  <button
                    className="px-2 xl:px-3 py-3 text-base xl:text-lg
 font-mediu text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
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

          {/* Mobile/Tablet Navigation Menu */}
          <div
            className={`mobile-menu-container lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-5 flex items-center justify-between">
              <h2 className="text-white font-bold text-xl">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:bg-white/20 cursor-pointer rounded-full p-2 transition-colors"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="overflow-y-auto h-[calc(100vh-88px)] pb-6">
              {/* Wedding Website Button */}
              <div className="lg:hidden p-4 border-b border-gray-200">
                <Link
                  href="/wedding-website"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="w-full bg-rose-500 text-white rounded-lg py-4 px-4 text-lg font-medium hover:bg-rose-600 transition-colors duration-200">
                    Wedding Website
                  </button>
                </Link>
              </div>

              {/* User Account Section */}
              {userRole && (
                <div className="sm:hidden p-4 border-b border-gray-200 bg-rose-50">
                  <button
                    onClick={() => {
                      if (userRole === "user") router.push("/user-dashboard");
                      else if (userRole === "admin")
                        router.push("/admin-dashboard");
                      else if (userRole === "vendor")
                        router.push("/vendor-dashboard");
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

              {/* Mobile Navigation Links */}
              <div className="p-4">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="mb-3">
                    {link.hasMegaMenu ? (
                      <div className="border border-gray-200 cursor-pointer rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index
                            )
                          }
                          className="w-full flex items-center cursor-pointer justify-between px-5 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-semibold transition-colors duration-200 bg-gray-50 text-base"
                        >
                          <div className="flex items-center gap-3">
                            <link.icon size={24} className="text-rose-500" />
                            <span className="font-medium">{link.name}</span>
                          </div>
                          <ChevronDown
                            size={22}
                            className={`transition-transform duration-300 ${
                              openDropdown === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {/* Mobile Dropdown with Flexible Sections */}
                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            openDropdown === index
                              ? "max-h-[600px] opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          <div className="bg-white">
                            {link.simpleLayout
                              ? /* SIMPLE LAYOUT - No section titles */
                                link.sections
                                  ?.flatMap((section) => section.items)
                                  .map((item, idx) => {
                                    const ItemIcon = item.icon;
                                    return (
                                      <Link
                                        key={idx}
                                        href={item.link}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-5 py-3 text-base text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                                      >
                                        <ItemIcon
                                          size={22}
                                          className="text-gray-400"
                                        />
                                        <span>{item.name}</span>
                                        <ChevronRight
                                          size={18}
                                          className="ml-auto text-gray-400"
                                        />
                                      </Link>
                                    );
                                  })
                              : /* NORMAL LAYOUT - Show section titles */
                                link.sections?.map((section, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="border-b border-gray-100 last:border-b-0"
                                  >
                                    <p className="px-5 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                                      {section.title}
                                    </p>
                                    {section.items.map((item, idx) => {
                                      const ItemIcon = item.icon;
                                      return (
                                        <Link
                                          key={idx}
                                          href={item.link}
                                          onClick={() =>
                                            setMobileMenuOpen(false)
                                          }
                                          className="flex items-center gap-3 px-5 py-3 text-base text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors duration-150"
                                        >
                                          <ItemIcon
                                            size={22}
                                            className="text-gray-400"
                                          />
                                          <span>{item.name}</span>
                                          <ChevronRight
                                            size={18}
                                            className="ml-auto text-gray-400"
                                          />
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ))}
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
                        <span className="font-medium">{link.name}</span>
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

        {/* Desktop Mega Dropdown */}
        {openDropdown !== null &&
          navigationLinks[openDropdown]?.hasMegaMenu && (
            <div
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
              onMouseEnter={() => setOpenDropdown(openDropdown)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-6 uppercase">
                  {navigationLinks[openDropdown].heading}
                </h3>

                {/* FLEXIBLE LAYOUT: Check for simpleLayout */}
                {navigationLinks[openDropdown].simpleLayout ? (
                  /* SIMPLE LAYOUT - No section titles, just flat grid */
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                    {navigationLinks[openDropdown].sections
                      ?.flatMap((section) => section.items)
                      .map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.link}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-all duration-200 group border border-gray-100 hover:border-rose-200 hover:shadow-md"
                          >
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-rose-100 group-hover:to-pink-100 transition-all duration-200 shadow-sm">
                              <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-rose-500 transition-colors duration-200" />
                            </div>
                            <span className="text-base font-medium text-gray-700 group-hover:text-rose-600">
                              {item.name}
                            </span>
                          </Link>
                        );
                      })}
                  </div>
                ) : (
                  /* NORMAL LAYOUT - Products/Services titles */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {navigationLinks[openDropdown].sections?.map(
                      (section, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-rose-200">
                            {section.title}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.items.map((item, idx) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  href={item.link}
                                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-all duration-200 group border border-gray-100 hover:border-rose-200 hover:shadow-md"
                                >
                                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-rose-100 group-hover:to-pink-100 transition-all duration-200 shadow-sm">
                                    <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-rose-500 transition-colors duration-200" />
                                  </div>
                                  <span className="text-base font-medium text-gray-700 group-hover:text-rose-600">
                                    {item.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Destination Weddings Card */}
                {navigationLinks[openDropdown].showDestinationCard && (
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 flex items-center justify-between shadow-lg border border-rose-100">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Destination weddings
                      </h4>
                      <p className="text-gray-600 text-base leading-relaxed">
                        Easily plan your international wedding.
                      </p>
                    </div>
                    <Plane className="w-16 h-16 text-rose-500" />
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
