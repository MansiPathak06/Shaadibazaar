"use client";

import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Send,
    ArrowRight,
    Heart,
    Award,
    Users,
    Clock,
} from "lucide-react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

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

    const stats = [
        { icon: Heart, value: "500+", label: "Happy Couples" },
        { icon: Award, value: "50+", label: "Awards Won" },
        { icon: Users, value: "100+", label: "Team Members" },
        { icon: Clock, value: "24/7", label: "Support Available" },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-50 to-white">
            {/* Stats Section */}

            {/* Newsletter Section */}


            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex-shrink-0 mb-6">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-20 w-40 hover:opacity-80 transition-opacity duration-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Your trusted partner in creating unforgettable wedding experiences.
                            We bring dreams to life with exceptional service and attention to
                            every detail.
                        </p>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <a
                                href="tel:+919876543210"
                                className="flex items-start text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200 group"
                            >
                                <Phone className="w-4 h-4 text-rose-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span>+91 98765 43210</span>
                            </a>
                            <a
                                href="mailto:info@yourcompany.com"
                                className="flex items-start text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200 group"
                            >
                                <Mail className="w-4 h-4 text-rose-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span>info@yourcompany.com</span>
                            </a>
                            <div className="flex items-start text-sm text-gray-600 group">
                                <MapPin className="w-4 h-4 text-rose-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span>123 Business Street, City, State 12345</span>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 flex items-center gap-3">
                            <div className="px-3 py-1 bg-rose-50 rounded-full">
                                <span className="text-xs font-semibold text-rose-600">
                                    Verified Business
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 relative inline-block">
                                {section.title}
                                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-rose-500 -mb-2"></span>
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-600 hover:text-rose-500 transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                                                {link.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-white text-center md:text-left">
                                © 2025 Zentrix InfoTech. All rights reserved. Made with{" "}
                                <Heart className="w-3 h-3 inline-block fill-white" /> in India
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-rose-50 mr-2 hidden sm:block">
                                Follow us:
                            </span>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-rose-500 transition-all duration-200 backdrop-blur-sm group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-rose-500 transition-all duration-200 backdrop-blur-sm group"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-rose-500 transition-all duration-200 backdrop-blur-sm group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-rose-500 transition-all duration-200 backdrop-blur-sm group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
