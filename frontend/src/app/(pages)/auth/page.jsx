"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, Loader2, Heart, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

// --- Your AuthPage component code ---
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams && searchParams.get("login") === "success") {
      setSuccess("Logged in successfully!");
      setError("");
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!isSignIn && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const endpoint = isSignIn ? "/api/auth/signin" : "/api/auth/signup";
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // ========== ADMIN REDIRECT LOGIC ==========
        if (data.user.role === 'admin' && data.user.email === "team.zentrixinfotech@gmail.com") {
          setTimeout(() => {
            window.location.href = "/admin-dashboard";
          }, 1500);
        }
        // ========== VENDOR REDIRECT LOGIC ==========
        else if (data.user.role === 'vendor') {
          setTimeout(() => {
            window.location.href = "/vendor-dashboard";
          }, 1500);
        }
        // ========== REGULAR USER REDIRECT ==========
        else {
          setTimeout(() => {
            window.location.href = "/user-dashboard";
          }, 1500);
        }
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(
        "Unable to connect to server. Please ensure the backend is running on http://localhost:5000"
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    setSuccess("");
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/facebook";
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
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

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
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

        .social-button {
          transition: all 0.3s ease;
        }

        .social-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(240, 67, 147, 0.2);
        }

        @media (max-width: 1024px) {
          .lg\\:w-1\\/2 {
            width: 100%;
          }
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#F9C449]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-[#F04393]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-[#3C4CAD]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main Container with Rounded Corners */}
        <div className="w-full max-w-7xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
            
            {/* Left Side - Hero Section */}
            <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#E8A4BC] via-[#F04393] to-[#2A0B8B] min-h-[400px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none">
              <div className="absolute inset-0 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761373340/wedding-image_z4ig55.jpg"
                  alt="Wedding Couple"
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
                  <Heart className="w-8 h-8 text-[#F9C449] animate-pulse-slow" fill="#F9C449" />
                  <div className="h-1 w-20 bg-gradient-to-r from-[#F9C449] to-transparent"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-white mb-6 leading-tight">
                  Plan Your
                  <br />
                  <span className="text-[#F9C449]">Dream Wedding</span>
                  <br />
                  Hassle Free
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Join thousands of couples who planned their perfect celebration with us. From vendors to venues, we've got everything covered.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Sparkles className="w-4 h-4 inline mr-2" />
                    500+ Vendors
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Heart className="w-4 h-4 inline mr-2" />
                    10k+ Happy Couples
                  </div>
                </div>

                {/* Floating Decorative Icons */}
                <div className="absolute top-0 right-10 opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-6xl">💐</div>
                </div>
                <div className="absolute bottom-10 left-5 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-5xl">🌸</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white rounded-b-[40px] lg:rounded-r-[40px] lg:rounded-bl-none">
              <div className="w-full max-w-md animate-slide-in-right">

                {/* Logo & Header */}
                <div className="text-center mb-8">
                  <Link href="/" className="inline-block mb-6 group">
                    <h2 className="text-3xl sm:text-7xl font-medium">
                      <span className="text-gray-800">Shaadi</span>
                      <span className="gradient-text"> Baazar</span>
                    </h2>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#F04393] to-[#2A0B8B] transition-all duration-300 mx-auto mt-1"></div>
                  </Link>

                  <h3 className="text-2xl sm:text-5xl font-medium text-gray-800 mb-3">
                    {isSignIn ? "Welcome Back!" : "Join Us Today"}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-lg">
                    {isSignIn ? "Don't have an account? " : "Already have an account? "}
                    <button
                      onClick={toggleAuthMode}
                      className="text-[#F04393] font-medium cursor-pointer hover:text-[#2A0B8B] transition-colors ml-1"
                      disabled={loading}
                    >
                      {isSignIn ? "Create one now" : "Sign in here"}
                    </button>
                  </p>
                </div>

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

                {success && (
                  <div className="mb-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-xl animate-fade-in-up shadow-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium text-sm">{success}</span>
                    </div>
                  </div>
                )}

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={handleFacebookLogin}
                    className="w-full social-button flex items-center cursor-pointer justify-center gap-3 px-4 py-3.5 border-2 border-gray-200 rounded-xl hover:border-[#3C4CAD] hover:bg-[#3C4CAD]/5 transition-all duration-300 group"
                    disabled={loading}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#3C4CAD" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="font-medium text-gray-700 group-hover:text-[#3C4CAD] text-sm sm:text-base">
                      Continue with Facebook
                    </span>
                  </button>

                  <button
                    onClick={handleGoogleLogin}
                    className="w-full social-button cursor-pointer flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-gray-200 rounded-xl hover:border-[#F04393] hover:bg-[#F04393]/5 transition-all duration-300 group"
                    disabled={loading}
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="font-medium text-gray-700 group-hover:text-[#F04393] text-sm sm:text-base">
                      Continue with Google
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isSignIn && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="input-focus-effect block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                          required={!isSignIn}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}

                  <div className="animate-fade-in-up" style={{ animationDelay: isSignIn ? '0.1s' : '0.2s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="input-focus-effect block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: isSignIn ? '0.2s' : '0.3s' }}>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="input-focus-effect block w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform"
                        disabled={loading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#F04393]" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-[#F04393]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {!isSignIn && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          className="input-focus-effect block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                          required={!isSignIn}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}

                  {isSignIn && (
                    <div className="flex items-center justify-end">
                      <Link
                        href="/forgot-password"
                        className="text-sm text-[#F04393] hover:text-[#2A0B8B] font-medium transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="button-hover-effect w-full bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white py-4 rounded-xl font-medium cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-6 text-base sm:text-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>{isSignIn ? "Sign In" : "Create Account"}</span>
                    )}
                  </button>
                </form>

                {/* Vendor Login Button */}
                <Link
                  href="/vendor-login"
                  className="button-hover-effect block w-full bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white py-4 rounded-xl font-medium curpoi' hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] text-center mt-6"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Are you a Vendor?
                  </span>
                </Link>

                {/* Terms & Privacy */}
                {!isSignIn && (
                  <div className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="text-[#F04393] hover:text-[#2A0B8B] font-semibold">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#F04393] hover:text-[#2A0B8B] font-semibold">
                      Privacy Policy
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Page-level wrapper for Suspense as required by Next.js
export default function Page() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-white mx-auto mb-4" />
          <p className="text-white font-semibold">Loading...</p>
        </div>
      </div>
    }>
      <AuthPage />
    </Suspense>
  );
}
