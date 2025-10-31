"use client";

import React, { useState } from "react";
import { X, Phone } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { GiCrystalBall } from "react-icons/gi";

const FloatingAstrologer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const astrologerPhone = "919876543210";
  const astrologerWhatsApp = "919876543210";

  const handleCall = () => {
    window.location.href = `tel:${astrologerPhone}`;
  };

  const handleWhatsApp = () => {
    const message = "Hello! I would like to talk to an astrologer.";
    const whatsappUrl = `https://wa.me/${astrologerWhatsApp}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div
        className="fixed bottom-28 right-6 z-50"
        style={{
          width: "64px",
          height: "64px",
          touchAction: "none",
        }}
      >
        {/* Popup message */}
        {showPopup && !isOpen && (
          <div
            className="fixed -translate-y-1/2 bg-gradient-to-r from-rose-500 to-rose-400 text-white px-4 py-3 rounded-xl shadow-2xl animate-bounce-slow w-60"
            style={{
              bottom: "calc(7rem + 32px)",
              right: "calc(1.5rem + 64px + 8px)",
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white text-rose-500 rounded-full flex items-center justify-center transition-colors shadow-lg touch-manipulation active:scale-95 cursor-pointer"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-2">
              <GiCrystalBall size={24} className="animate-pulse" />
              <p className="text-sm font-semibold">
                Do you want to talk to an astrologer?
              </p>
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-rose-500 transform rotate-45"
              style={{ right: "-8px" }}
            ></div>
          </div>
        )}

        {/* Chat popup */}
        {isOpen && (
          <div
            className="fixed w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-up"
            style={{
              bottom: "calc(7rem + 72px)",
              right: "1.5rem",
              pointerEvents: "auto",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-600 to-rose-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative">
                  <GiCrystalBall className="text-rose-600" size={28} />
                  <div className="absolute -top-1 -right-1">
                    <FaStar
                      className="text-yellow-400 animate-pulse"
                      size={12}
                    />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Talk to Astrologer</h3>
                  <p className="text-xs text-rose-100">
                    Get guidance from experts
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white rounded-full p-1 transition-colors touch-manipulation active:scale-95 active:bg-white/20 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-gradient-to-b from-rose-50 to-white">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border-l-4 border-rose-500">
                <p className="text-sm text-gray-700 mb-2 font-medium">
                  🔮 Connect with our expert astrologers
                </p>
                <p className="text-xs text-gray-600">
                  Get answers to your life's questions through ancient wisdom
                  and cosmic insights.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-2 mb-4">
                {["Birth Chart Analysis", "Future Predictions", "Relationship Guidance"].map(
                  (service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <FaStar className="text-yellow-500" size={12} />
                      <span>{service}</span>
                    </div>
                  )
                )}
              </div>

              {/* Contact Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-rose-600 to-rose-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg touch-manipulation active:scale-95 active:shadow-md cursor-pointer"
                >
                  <Phone size={18} />
                  Call Now
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center shadow-lg touch-manipulation active:scale-95 active:shadow-md cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Main Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPopup(false);
          }}
          className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-400 rounded-full flex items-center justify-center shadow-2xl group cursor-pointer"
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <span
            className="absolute inset-0 rounded-full bg-rose-400 animate-ping opacity-75"
            style={{ pointerEvents: "none" }}
          ></span>
          <div className="relative z-10">
            <GiCrystalBall className="text-white" size={32} />
            <FaStar
              className="absolute -top-1 -right-1 text-yellow-300 animate-pulse"
              size={12}
            />
          </div>
        </button>
      </div>

      {/* Animations */}
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
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(-5%);
          }
          50% {
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </>
  );
};

export default FloatingAstrologer;
