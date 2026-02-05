"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, Loader2, CheckCircle, Heart, Sparkles, Shield } from "lucide-react";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid reset link. Please request a new password reset.");
    }
  }, [token]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/auth");
        }, 3000);
      } else {
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error("Reset password error:", err);
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

        .linear-text {
          background: linear-linear(135deg, #F04393 0%, #2A0B8B 100%);
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
          background: linear-linear(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .button-hover-effect:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-linear-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        
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
            <div className="w-full lg:w-1/2 relative bg-linear-to-br from-[#E8A4BC] via-[#F04393] to-[#2A0B8B] min-h-[400px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none">
              <div className="absolute inset-0 rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761373340/wedding-image_z4ig55.jpg"
                  alt="Wedding"
                  className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2A0B8B]/80 via-[#2A0B8B]/40 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-lg animate-slide-in-left">
                {/* Decorative Elements */}
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-[#F9C449] animate-pulse-slow" fill="#F9C449" />
                  <div className="h-1 w-20 bg-linear-to-r from-[#F9C449] to-transparent"></div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-white mb-6 leading-tight">
                  Create a
                  <br />
                  <span className="text-[#F9C449]">New Secure</span>
                  <br />
                  Password
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Choose a strong password to keep your account secure. Your new password must be different from previously used passwords.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Secure & Protected
                  </div>
                  <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    <Lock className="w-4 h-4 inline mr-2" />
                    Encrypted
                  </div>
                </div>

                {/* Floating Decorative Icons */}
                <div className="absolute top-0 right-10 opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="text-6xl">🔐</div>
                </div>
                <div className="absolute bottom-10 left-5 opacity-30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-5xl">🛡️</div>
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
                      <span className="linear-text"> Baazar</span>
                    </h2>
                    <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-[#F04393] to-[#2A0B8B] transition-all duration-300 mx-auto mt-1"></div>
                  </Link>

                  <h3 className="text-2xl sm:text-5xl font-medium text-gray-800 mb-3">
                    Create New Password
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-lg">
                    Your new password must be different from previously used passwords.
                  </p>
                </div>

                {success ? (
                  <div className="bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-fade-in-up shadow-xl">
                    <div className="w-20 h-20 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-800 mb-3">
                      Password Reset Successful!
                    </h4>
                    <p className="text-green-700 mb-6 text-lg">
                      Your password has been reset successfully. Redirecting you to login...
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="w-6 h-6 animate-spin text-green-500" />
                      <span className="text-green-600 font-medium">Please wait...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Alert Messages */}
                    {error && (
                      <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-xl animate-fade-in-up shadow-sm">
                        <div className="flex items-start">
                          <svg className="w-5 h-5 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm">{error}</span>
                        </div>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="input-focus-effect block w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                            required
                            disabled={loading || !token}
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
                        <p className="mt-2 text-xs text-gray-500">
                          Must be at least 6 characters long
                        </p>
                      </div>

                      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
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
                            placeholder="Confirm new password"
                            className="input-focus-effect block w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all text-gray-700 placeholder-gray-400"
                            required
                            disabled={loading || !token}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading || !token}
                        className="button-hover-effect w-full bg-linear-to-r from-[#F04393] to-[#2A0B8B] text-white py-4 rounded-xl font-medium hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 mt-6 text-base sm:text-lg"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Resetting Password...</span>
                          </>
                        ) : (
                          <>
                            <Shield className="w-5 h-5" />
                            <span>Reset Password</span>
                          </>
                        )}
                      </button>
                    </form>

                    {/* Back to Login */}
                    <div className="mt-6 text-center">
                      <Link
                        href="/auth"
                        className="text-[#F04393] hover:text-[#2A0B8B] font-medium transition-colors text-sm sm:text-base"
                      >
                        ← Back to Login
                      </Link>
                    </div>

                    {/* Security Note */}
                    <div className="mt-8 p-4 bg-linear-to-r from-[#F04393]/10 to-[#2A0B8B]/10 rounded-xl border border-[#F04393]/20">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#F04393] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            <strong className="text-gray-800">Security Tip:</strong> Create a strong password with a mix of letters, numbers, and special characters for better protection.
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-white mx-auto mb-4" />
          <p className="text-white font-semibold">Loading...</p>
        </div>
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
