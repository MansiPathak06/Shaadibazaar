"use client";

import React from "react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,

} from "lucide-react";

const Footer = () => {
    const footerSections = [
        {
            title: "Services",
            links: [
                { name: "Accessories", href: "#" },
                { name: "Outfits", href: "#" },
                { name: "Catering & Decor", href: "#" },
                { name: "Accommodation", href: "#" },
                { name: "Venue & Location", href: "#" },
                { name: "Beauty & Styling", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Event Planning", href: "#" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Cancellation Policy", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "#" },
                { name: "Customer Support", href: "#" },
                { name: "FAQs", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "Affiliates", href: "#" },
                { name: "Sitemap", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex-shrink-0 mb-4">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-20 w-40"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Create seamlessly connects your members with the community,
                            resources, and opportunities they need to thrive.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-3">
                            <div className="flex items-center text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-rose-500 mr-2" />
                                +91 98765 43210
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-rose-500 mr-2" />
                                info@yourcompany.com
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="w-4 h-4 text-rose-500 mr-2" />
                                123 Business Street, City, State 12345
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            

            {/* Bottom Footer */}
            <div className="bg-rose-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Copyright */}
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-white">
                                © 2025 Zentrix InfoTech. All rights reserved.
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="#"
                                className="text-white hover:text-white transition-colors duration-200"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-white transition-colors duration-200"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-white transition-colors duration-200"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-white transition-colors duration-200"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
