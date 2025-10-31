"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Your WhatsApp number (with country code, without + or spaces)
  const phoneNumber = "919876543210"; // Replace with your actual number
  const defaultMessage = "Hello! I'm interested in your services.";

  const handleSendMessage = () => {
    const textMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Popup */}
        {isOpen && (
          <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-green-600" size={28} />
                </div>
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Chat with us</h3>
                  <p className="text-xs text-green-100">
                    Typically replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gradient-to-b from-green-50 to-white">
              <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
                <p className="text-sm text-gray-700 mb-1">
                  👋 Hi there! How can we help you?
                </p>
                <p className="text-xs text-gray-500">
                  We're here to assist you with any questions.
                </p>
              </div>

              {/* Message Input */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none text-sm"
                rows="3"
              />

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="w-full mt-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp size={20} />
                Start Chat on WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative cursor-pointer"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>

          {/* WhatsApp Icon */}
          <FaWhatsapp
            className="text-white relative z-10 group-hover:rotate-12 transition-transform"
            size={32}
          />

          
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need help? Chat with us!
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes scale-up {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;
