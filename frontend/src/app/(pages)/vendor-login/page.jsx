"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  Phone, 
  MapPin, 
  Building2, 
  Loader2,
  Store,
  Briefcase,
  Camera,
  Music,
  Utensils,
  Sparkles,
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const VendorAuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    business_name: "",
    owner_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    business_type: "photographer",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const businessTypes = [
    { value: "photographer", label: "Photographer", icon: Camera },
    { value: "venue", label: "Venue", icon: Building2 },
    { value: "caterer", label: "Caterer", icon: Utensils },
    { value: "decorator", label: "Decorator", icon: Sparkles },
    { value: "makeup", label: "Makeup Artist", icon: Sparkles },
    { value: "mehendi", label: "Mehendi Artist", icon: Sparkles },
    { value: "music", label: "Music/DJ", icon: Music },
    { value: "other", label: "Other", icon: Briefcase }
  ];

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
      const endpoint = isSignIn ? "/api/vendor/signin" : "/api/vendor/signup";
      
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setFormData({
          business_name: "",
          owner_name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          business_type: "photographer",
          address: "",
          city: "",
          state: "",
          pincode: ""
        });

        setTimeout(() => {
          window.location.href = "/vendor-dashboard";
        }, 2000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Vendor auth error:", err);
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({
      business_name: "",
      owner_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      business_type: "photographer",
      address: "",
      city: "",
      state: "",
      pincode: ""
    });
    setError("");
    setSuccess("");
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .input-focus-effect {
          transition: all 0.3s ease;
        }

        .input-focus-effect:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(202, 31, 61, 0.15);
        }

        .gradient-text {
          background: linear-gradient(135deg, #CA1F3D 0%, #FFBE00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#25182E] via-[#CA1F3D] to-[#25182E] relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFBE00]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-[#CA1F3D]/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-[#FFBE00]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[700px]">
              
              {/* Left Side - Branding */}
              <div className="w-full lg:w-2/5 bg-gradient-to-br from-[#CA1F3D] to-[#25182E] p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoMnYtOGgyVjhoLTJ2LTJoLTJ2Mmgtdi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
                
                <div className="relative z-10 text-center lg:text-left max-w-md animate-fade-in">
                  {/* Logo */}
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto lg:mx-0 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <Store className="w-10 h-10 text-[#FFBE00]" />
                    </div>
                    <h1 className="text-4xl lg:text-8xl font-medium text-white mb-3">
                      Vendor Portal
                    </h1>
                    <div className="h-1 w-24 bg-[#FFBE00] rounded-full mx-auto lg:mx-0"></div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 text-white/90">
                      <div className="w-8 h-8 bg-[#FFBE00]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-[#FFBE00]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-xl text-white mb-1">Grow Your Business</h3>
                        <p className="text-md text-white/80">Reach thousands of couples planning their special day</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-white/90">
                      <div className="w-8 h-8 bg-[#FFBE00]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-[#FFBE00]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-xl text-white mb-1">Easy Management</h3>
                        <p className="text-md text-white/80">Manage bookings and showcase your services effortlessly</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-white/90">
                      <div className="w-8 h-8 bg-[#FFBE00]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-[#FFBE00]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-xl text-white mb-1">Verified Platform</h3>
                        <p className="text-md text-white/80">Join our trusted network of wedding vendors</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFBE00]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 bg-white">
                <div className="max-w-xl mx-auto animate-slide-in-up">
                  
                  {/* Back Button */}
                  <Link 
                    href="/auth" 
                    className="inline-flex items-center gap-2 text-[#CA1F3D] hover:text-[#25182E] transition-colors mb-8 text-lg font-medium group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to User Login
                  </Link>

                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-6xl font-medium text-gray-900 mb-3">
                      {isSignIn ? "Welcome Back!" : "Join as Vendor"}
                    </h2>
                    <p className="text-gray-600">
                      {isSignIn ? "Don't have an account? " : "Already registered? "}
                      <button
                        onClick={toggleAuthMode}
                        className="text-[#CA1F3D] text-lg font-medium cursor-pointer hover:text-[#25182E] transition-colors ml-1"
                        disabled={loading}
                      >
                        {isSignIn ? "Register now" : "Sign in here"}
                      </button>
                    </p>
                  </div>

                  {/* Alert Messages */}
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-xl animate-slide-in-up">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 font-medium text-sm">{error}</p>
                      </div>
                    </div>
                  )}

                  {success && (
                    <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-xl animate-slide-in-up">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-green-700 font-medium text-sm">{success}</p>
                      </div>
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Business Name */}
                    {!isSignIn && (
                      <div className="animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Business Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="business_name"
                            value={formData.business_name}
                            onChange={handleInputChange}
                            placeholder="Enter your business name"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            required={!isSignIn}
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    {/* Owner Name */}
                    {!isSignIn && (
                      <div className="animate-slide-in-up" style={{ animationDelay: '0.15s' }}>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Owner Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="owner_name"
                            value={formData.owner_name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            required={!isSignIn}
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    {/* Email */}
                    <div className="animate-slide-in-up" style={{ animationDelay: isSignIn ? '0.1s' : '0.2s' }}>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="input-focus-effect block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    {!isSignIn && (
                      <div className="animate-slide-in-up" style={{ animationDelay: '0.25s' }}>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter phone number"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    {/* Business Type */}
                    {!isSignIn && (
                      <div className="animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                        <label className="text-lg font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#CA1F3D]" />
                          Business Type *
                        </label>
                        <div className="relative group">
                          <select
                            name="business_type"
                            value={formData.business_type}
                            onChange={handleInputChange}
                            className="input-focus-effect block w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all cursor-pointer appearance-none text-gray-700 font-medium"
                            required={!isSignIn}
                            disabled={loading}
                          >
                            {businessTypes.map(type => (
                              <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <svg className="w-5 h-5 text-[#CA1F3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* City & State */}
                    {!isSignIn && (
                      <div className="grid grid-cols-2 gap-4 animate-slide-in-up" style={{ animationDelay: '0.35s' }}>
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            className="input-focus-effect block w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            disabled={loading}
                          />
                        </div>
                        <div>
                          <label className="block text-lg font-medium text-gray-700 mb-2">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="State"
                            className="input-focus-effect block w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    {/* Password */}
                    <div className="animate-slide-in-up" style={{ animationDelay: isSignIn ? '0.2s' : '0.4s' }}>
                      <label className="block text-lg font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          className="input-focus-effect block w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                          required
                          disabled={loading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform"
                          disabled={loading}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-[#CA1F3D]" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400 hover:text-[#CA1F3D]" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    {!isSignIn && (
                      <div className="animate-slide-in-up" style={{ animationDelay: '0.45s' }}>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Confirm Password *
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type={showPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent focus:bg-white transition-all text-gray-700"
                            required={!isSignIn}
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white py-4 rounded-xl font-medium cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-base sm:text-lg mt-8 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFBE00] to-[#CA1F3D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2 font-medium text-xl cursor-pointer">
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Store className="w-5 h-5" />
                            {isSignIn ? "Sign In to Dashboard" : "Register as Vendor"}
                          </>
                        )}
                      </span>
                    </button>
                  </form>

                  {/* Additional Info */}
                  {!isSignIn && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#FFBE00]/10 to-[#CA1F3D]/10 rounded-xl border border-[#FFBE00]/20">
                      <p className="text-xs text-gray-600 text-center leading-relaxed">
                        By registering, you agree to our Terms of Service and Privacy Policy. Your account will be reviewed by our team within 24-48 hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorAuthPage;
