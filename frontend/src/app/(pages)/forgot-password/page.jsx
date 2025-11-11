"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Loader2, CheckCircle, Heart, Sparkles, Send } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(data.message || "Failed to send reset email");
      }
    } catch (err) {
      console.error("Forgot password error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #F04393 0%, #2A0B8B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .input-focus-effect {
          transition: all 0.3s ease;
        }

        .input-focus-effect:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(240, 67, 147, 0.15);
        }

        .button-hover-effect {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .button-hover-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .button-hover-effect:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F9C449]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-[#F04393]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-[#3C4CAD]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">

            {/* Left Side - Hero Section */}
            <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#E8A4BC] via-[#F04393] to-[#2A0B8B] min-h-[400px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none">
              <div className="absolute inset-0 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761373340/wedding-image_z4ig55.jpg"
                  alt="Wedding"
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A0B8B]/80 via-[#2A0B8B]/40 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-lg animate-slide-in-left">
                {/* Decorative Elements */}
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-[#F9C449] animate-pulse-slow" />
                  <div className="h-1 w-20 bg-gradient-to-r from-[#F9C449] to-transparent"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-white mb-6 leading-tight">
                  Forgot your
                  <br />
                  <span className="text-[#F9C449]">Password?</span>
                  <br />
                  No Worries!
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  We'll send you a secure link to reset it quickly. Just enter your email address and check your inbox.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Send className="w-4 h-4 inline mr-2" />
                    Quick & Easy
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Heart className="w-4 h-4 inline mr-2" />
                    Secure Reset
                  </div>
                </div>

                {/* Floating Decorative Icons */}
                <div className="absolute top-0 right-10 opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-6xl">📧</div>
                </div>
                <div className="absolute bottom-10 left-5 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-5xl">🔑</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white rounded-b-[40px] lg:rounded-r-[40px] lg:rounded-bl-none">
              <div className="w-full max-w-md animate-slide-in-right">

                {/* Back Button */}
                <Link
                  href="/auth"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-[#F04393] mb-8 transition-colors font-medium group text-lg"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to login</span>
                </Link>

                {/* Logo & Header */}
                <div className="text-center mb-8">
                  <Link href="/" className="inline-block mb-6 group">
                    <h2 className="text-3xl sm:text-7xl font-medium">
                      <span className="text-gray-800">Shaadi</span>
                      <span className="gradient-text"> Baazar</span>
                    </h2>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F04393] to-[#2A0B8B] transition-all duration-300 mx-auto mt-1"></div>
                  </Link>

                  <h3 className="text-2xl sm:text-4xl font-medium text-gray-800 mb-3">
                    Reset Your <span className="gradient-text">Password</span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-lg">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>
                </div>

                {success ? (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-fade-in-up shadow-xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-3">
                      Email Sent Successfully!
                    </h4>
                    <p className="text-green-700 mb-4 text-lg leading-relaxed">
                      We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
                    </p>
                    <div className="p-4 bg-green-100 rounded-xl mb-6">
                      <p className="text-sm text-green-700 font-medium">
                        💡 Don't see the email? Check your spam folder.
                      </p>
                    </div>
                    <Link
                      href="/auth"
                      className="inline-block px-8 py-3 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                    >
                      Return to Login
                    </Link>
                  </div>
                ) : (
                  <>
                    {/* Alert Messages */}
                    {error && (
                      <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl animate-fade-in-up shadow-sm">
                        <div className="flex items-start">
                          <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm">{error}</span>
                        </div>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 text-xl placeholder-gray-400"
                            required
                            disabled={loading}
                          />
                        </div>
                        <p className="mt-2 text-md text-gray-500">
                          We'll send a reset link to this email address
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="button-hover-effect w-full bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white cursor-pointer py-4 rounded-xl font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-6 text-base sm:text-lg"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Reset Link</span>
                          </>
                        )}
                      </button>
                    </form>

                    {/* Remember Password */}
                    <div className="mt-6 text-center">
                      <p className="text-lg text-gray-600">
                        Remember your password?{" "}
                        <Link
                          href="/auth"
                          className="text-[#F04393] hover:text-[#2A0B8B] font-medium transition-colors text-lg"
                        >
                          Sign in
                        </Link>
                      </p>
                    </div>

                    {/* Help Text */}
                    <div className="mt-8 p-4 bg-gradient-to-r from-[#F04393]/10 to-[#2A0B8B]/10 rounded-xl border border-[#F04393]/20">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-[#F04393] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-md text-gray-600 leading-relaxed">
                            <span className="text-gray-800 font-medium">Need help?</span> If you don't receive an email within a few minutes, please check your spam folder or contact our support team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
