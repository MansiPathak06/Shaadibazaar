"use client";
import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Gift,
  Sparkles,
  MapPin,
  Clipboard,
  ChevronDown,
  ChevronRight,
  Flame,
  Moon,
  Star,
  Cross,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);
  const [desktopCategoryDropdown, setDesktopCategoryDropdown] = useState({});
  const totalItems = 0; // Replace with useCart hook

  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");

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
      heading: "Add A Little Spark To Your Style !!",
      hasMegaMenu: true,
      hasCategories: true,
      categories: [
        {
          name: "Hindu Wedding",
          icon: Flame,
          pages: [
            { name: "Bridal Wear & Accessories", link: "/bride/hindu/bridal-wear" },
            { name: "Bridal Jewellery", link: "/bride/hindu/jewellery" },
            { name: "Makeup, Hair & Accessories", link: "/bride/hindu/makeup-hair" },
            { name: "Ritual Items", link: "/bride/hindu/ritual-items" },
            { name: "Bridal Services", link: "/bride/hindu/bridal-services" },
          ],
        },
        {
          name: "Muslim Wedding",
          icon: Moon,
          pages: [
            { name: "Bridal Wear", link: "/bride/muslim/bridal-wear" },
            { name: "Bridal Jewellery", link: "/bride/muslim/jewellery" },
            { name: "Ritual Items", link: "/bride/muslim/makeup-hair" },
            { name: "Bridal Services", link: "/bride/muslim/bridal-services" },
          ],
        },
        {
          name: "Sikh Wedding",
          icon: Star,
          pages: [
            { name: "Bridal Wear", link: "/bride/sikh/bridal-wear" },
            { name: "Bridal Jewellery", link: "/bride/sikh/jewellery" },
            { name: "Ritual Items", link: "/bride/sikh/ritual-items" },
            { name: "Bridal Services", link: "/bride/sikh/bridal-services" },
          ],
        },
        {
          name: "Christian Wedding",
          icon: Cross,
          pages: [
            { name: "Bridal Wear", link: "/bride/christian/bridal-wear" },
            { name: "Bridal Jewellery", link: "/bride/christian/jewellery" },
            { name: "Ritual Items", link: "/bride/christian/ritual-items" },
          ],
        },
      ],
    },
    {
      name: "Groom",
      icon: Sparkles,
      heading: "Dressed to Impress, Designed to Express !!",
      hasMegaMenu: true,
      hasCategories: true,
      categories: [
        {
          name: "Hindu Wedding",
          icon: Flame,
          pages: [
            { name: "Groom Wear & Accessories", link: "/groom/hindu/groom-wear" },
            { name: "Ritual Items", link: "/groom/hindu/ritual-items" },
            { name: "Services", link: "/groom/hindu/services" },
          ],
        },
        {
          name: "Muslim Wedding",
          icon: Moon,
          pages: [
            { name: "Groom Wear", link: "/groom/muslim/groom-wear" },
            { name: "Nikah Ritual Items", link: "/groom/muslim/ritual-items" },
            { name: "Grooming Services", link: "/groom/muslim/services" },
          ],
        },
        {
          name: "Sikh Wedding",
          icon: Star,
          pages: [
            { name: "Groom Wear", link: "/groom/sikh/groom-wear" },
            { name: "Ritual Items", link: "/groom/sikh/ritual-items" },
            { name: "Services", link: "/groom/sikh/services" },
          ],
        },
        {
          name: "Christian Wedding",
          icon: Cross,
          pages: [
            { name: "Groom Wear", link: "/groom/christian/groom-wear" },
            { name: "Ritual Items", link: "/groom/christian/ritual-items" },
            { name: "Services", link: "/groom/christian/services" },
            { name: "Universal Groom Items", link: "/groom/christian/groom-items" },
            { name: "Gifts", link: "/groom/christian/gifts" },
          ],
        },
      ],
    },
    {
      name: "Vendors & Services",
      icon: MapPin,
      heading: "The Perfect Place for Your Perfect Day !!",
      hasMegaMenu: true,
      hasCategories: false,
      pages: [
        { name: "Core Wedding Vendors", link: "/vendors/core" },
        { name: "Bride & Groom Beauty Vendors", link: "/vendors/beauty" },
        { name: "Decoration & Styling Vendors", link: "/vendors/decoration" },
        { name: "Entertainment Vendors", link: "/vendors/entertainment" },
        { name: "Invitation & Printing Vendors", link: "/vendors/printing" },
      ],
    },
    {
      name: "Venue & Accommodation",
      icon: Sparkles,
      heading: "Beautiful wedding venues with comfortable guest accommodation.",
      hasMegaMenu: true,
      hasCategories: true,
      categories: [
        {
          name: "Wedding Venues (By Category)",
          icon: Sparkles,
          pages: [
            { name: "Banquet Venues", link: "/venues/banquet" },
            { name: "Outdoor Venues", link: "/venues/outdoor" },
            { name: "Mixed Venues", link: "/venues/mixed" },
            { name: "Destination Wedding Venues", link: "/venues/destination" },
            { name: "Religious Venues", link: "/venues/religious" },
          ],
        },
        {
          name: "Accommodation Types",
          icon: Moon,
          pages: [
            { name: "Hotel Accommodation", link: "/accommodation/hotel" },
            { name: "Guest Houses", link: "/accommodation/guest-houses" },
            { name: "Resort Accommodation", link: "/accommodation/resorts" },
          ],
        },
      ],
    },
    {
      name: "Wedding Planning Tools",
      icon: Sparkles,
      heading: "Essential tools to plan your perfect wedding day.",
      hasMegaMenu: true,
      hasCategories: true,
      categories: [
        {
          name: "Digital/Software Wedding Planning Tools",
          icon: Sparkles,
          pages: [
            { name: "Planning & Management Tools", link: "/tools/planning" },
            { name: "Design & Creativity Tools", link: "/tools/design" },
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
  ];

  const toggleDesktopCategoryDropdown = (mainIndex, categoryIndex) => {
    const key = `${mainIndex}-${categoryIndex}`;
    setDesktopCategoryDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categoryHasPages = (category) => {
    return category.pages && category.pages.length > 0;
  };

  const LinkIcon = ({ icon: IconComponent, ...props }) => <IconComponent {...props} />;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761844101/logo_sxozan.jpg"
                  alt="Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Wedding Services"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent text-base"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-rose-500">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {userRole ? (
                <div className="flex items-center gap-3">
                  <button className="hidden sm:flex items-center gap-2 px-3 py-2 font-medium text-rose-500 hover:text-rose-700 text-base">
                    <User size={20} />
                    <span className="hidden lg:inline">My Account</span>
                  </button>
                  <button className="sm:hidden text-rose-500 hover:text-rose-700">
                    <User size={26} />
                  </button>
                  <button className="hidden sm:block text-gray-500 hover:text-red-600 text-base font-medium">
                    Logout
                  </button>
                </div>
              ) : (
                <button className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-rose-500 text-base font-medium">
                  <User size={26} className="sm:hidden" />
                  <User size={20} className="hidden sm:block" />
                  <span className="hidden sm:inline">Sign in</span>
                </button>
              )}

              {/* Cart */}
              <Link href="/cart" className="relative flex items-center gap-1">
                <ShoppingCart className="w-7 h-7 sm:w-6 sm:h-6 text-gray-700 hover:text-rose-500" />
                <span className="hidden sm:inline text-base font-medium text-gray-700">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Wedding Website Button */}
              <Link href="/wedding-website" className="hidden lg:block">
                <button className="bg-rose-500 text-white rounded-full py-2 px-5 text-base font-medium hover:bg-rose-600 transition-colors duration-200 whitespace-nowrap">
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
          <div className="md:hidden pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-400 text-base"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="bg-gradient-to-b from-rose-50 to-white border-b border-gray-200 relative z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center h-14 gap-1 overflow-x-auto">
            {navigationLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setOpenDropdown(index)}
                onMouseLeave={() => link.hasMegaMenu && setOpenDropdown(null)}
              >
                {link.hasMegaMenu ? (
                  <button className="px-3 xl:px-4 py-3 text-base xl:text-lg font-semibold text-gray-800 hover:text-rose-600 hover:bg-rose-100 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm">
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.link}
                    className="px-3 xl:px-4 py-3 text-base xl:text-lg font-semibold text-gray-800 hover:text-rose-600 hover:bg-rose-100 rounded-lg transition-all duration-200 block whitespace-nowrap shadow-sm"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu-container lg:hidden fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-5 flex items-center justify-between">
              <h2 className="text-white font-bold text-2xl">Menu</h2>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubMenu(null);
                }}
                className="text-white hover:bg-white/20 cursor-pointer rounded-full p-2 transition-colors"
              >
                <X size={26} />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-88px)] pb-6 p-4">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.link || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-rose-50 hover:text-rose-500 font-semibold text-lg rounded-xl transition-all duration-200 border border-gray-200 mb-3 block shadow-sm"
                >
                  <LinkIcon icon={link.icon} size={26} className="text-rose-500 flex-shrink-0" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </div>

        {/* Desktop Mega Dropdown */}
        {openDropdown !== null && navigationLinks[openDropdown]?.hasMegaMenu && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl z-[60]"
            onMouseEnter={() => setOpenDropdown(openDropdown)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                {navigationLinks[openDropdown].heading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {navigationLinks[openDropdown].hasCategories && navigationLinks[openDropdown].categories ? (
                  navigationLinks[openDropdown].categories.map((category, cIdx) => (
                    <div key={cIdx} className="space-y-4">
                      <div className="flex items-center gap-3 font-bold text-rose-600 text-lg mb-3">
                        <LinkIcon icon={category.icon} size={22} className="text-rose-500" />
                        <span>{category.name}</span>
                      </div>
                      <div className="space-y-2">
                        {category.pages?.map((page, pIdx) => (
                          <Link
                            key={pIdx}
                            href={page.link}
                            className="block py-2 px-3 text-base text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 font-medium"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {navigationLinks[openDropdown].pages?.map((page, pIdx) => (
                        <Link
                          key={pIdx}
                          href={page.link}
                          className="block py-3 px-4 text-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200 font-semibold border-l-4 border-rose-500 bg-rose-50 shadow-sm"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
