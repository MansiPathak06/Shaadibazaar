// src/app/(pages)/wedding-vendors/[category]/[serviceId]/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Users,
  CheckCircle,
  ArrowLeft,
  Loader2,
  Send,
  Home,
  ChevronRight,
  Award,
  Sparkles,
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { category, serviceId } = params;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    eventDate: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Category names for breadcrumb
  const categoryNames = {
    planner: "Wedding Planner",
    event: "Event Manager",
    venue: "Venue Manager",
    decorator: "Decorator",
    caterer: "Caterer",
    photographer: "Photographer",
    videographer: "Videographer",
    light: "Light & Sound",
    dj: "DJ Setup",
    band: "Band Baja",
    ghodi: "Wedding Horse",
    dhol: "Dhol Team",
    fireworks: "Fireworks",
    tent: "Tent House",
  };

  useEffect(() => {
    fetchServiceDetails();
  }, [serviceId]);

  const fetchServiceDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/services/${serviceId}`
      );
      const data = await response.json();

      if (data.success) {
        setService(data.service);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Fetch service error:", error);
      setError("Failed to load service details");
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact-vendor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contactForm,
          serviceId: service.id,
          serviceName: service.service_name,
          vendorEmail: service.contact_email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setContactForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          eventDate: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Contact submit error:", error);
      setError("Failed to send message");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-40">
              <Loader2 className="w-16 h-16 animate-spin text-rose-500 mx-auto" />
            </div>
            <Loader2 className="w-16 h-16 animate-spin text-rose-600 mx-auto mb-4 relative" />
          </div>
          <p className="text-gray-700 font-semibold text-lg">Loading service details...</p>
          <p className="text-gray-500 text-sm mt-2">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-12 max-w-md">
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10 text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => router.back()}
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const firstImage = service.images && service.images.length > 0 
    ? (Array.isArray(service.images) ? service.images[0] : service.images)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-rose-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-1 text-gray-600 hover:text-rose-600 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-rose-300" />
            <button
              onClick={() => router.push('/wedding-vendors/core-wedding-vendors')}
              className="text-gray-600 hover:text-rose-600 transition-all font-medium hover:scale-105"
            >
              Wedding Vendors
            </button>
            <ChevronRight className="w-4 h-4 text-rose-300" />
            <button
              onClick={() => router.push(`/wedding-vendors/${category}`)}
              className="text-gray-600 hover:text-rose-600 transition-all font-medium hover:scale-105"
            >
              {categoryNames[category] || category}
            </button>
            <ChevronRight className="w-4 h-4 text-rose-300" />
            <span className="text-rose-600 font-semibold line-clamp-1">{service.service_name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Image and Title */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 mb-8 overflow-hidden border border-rose-100">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side - Image */}
            {firstImage && (
              <div className="w-full md:w-80 h-80 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-rose-100 group">
                <img
                  src={firstImage}
                  alt={service.service_name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Service";
                  }}
                />
              </div>
            )}

            {/* Right Side - Service Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
                    {service.service_name}
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                {service.featured && (
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 ml-4 shadow-lg hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </div>
                )}
              </div>

              {/* Rating */}
              {service.rating > 0 && (
                <div className="flex items-center gap-3 mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 transition-all ${
                          i < Math.floor(service.rating)
                            ? "fill-amber-400 text-amber-400 scale-110"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold text-gray-800">
                    {service.rating}
                  </span>
                  <span className="text-gray-600 font-medium">
                    ({service.total_reviews} reviews)
                  </span>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {service.working_since && (
                  <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 hover:shadow-lg transition-all hover:scale-105">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 font-semibold">Since</p>
                      <p className="font-bold text-gray-900">{service.working_since}</p>
                    </div>
                  </div>
                )}
                {service.area_of_service && (
                  <div className="flex items-center gap-3 bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-200 hover:shadow-lg transition-all hover:scale-105">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-600 font-semibold">Location</p>
                      <p className="font-bold text-gray-900 line-clamp-1">{service.area_of_service}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Badge */}
              <div className="inline-block bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-2xl px-8 py-5 transform hover:scale-105 transition-all">
                <p className="text-sm text-rose-100 font-semibold mb-1">Starting From</p>
                <p className="text-4xl font-bold text-white">
                  ₹{service.starting_price?.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                Service Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.male_female_unisex && (
                  <div className="flex items-center gap-3 p-5 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200 hover:shadow-md transition-all">
                    <div className="bg-violet-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-violet-600 font-semibold">Service For</p>
                      <p className="font-bold text-gray-900">{service.male_female_unisex}</p>
                    </div>
                  </div>
                )}

                {service.payment_mode && (
                  <div className="flex items-center gap-3 p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-green-600 font-semibold">Payment Mode</p>
                      <p className="font-bold text-gray-900">{service.payment_mode}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery */}
            {service.images && service.images.length > 1 && (
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-2 rounded-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {service.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all ring-2 ring-transparent hover:ring-rose-300"
                    >
                      <img
                        src={image}
                        alt={`${service.service_name} ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x300?text=Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Servicing & Pricing */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                Pricing Details
              </h2>

              <div className="overflow-hidden rounded-xl border-2 border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {service.pricing && service.pricing.length > 0 ? (
                      service.pricing.map((item, index) => (
                        <tr key={index} className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all">
                          <td className="py-4 px-6 text-gray-700 font-semibold">
                            {item.pricing_type}
                          </td>
                          <td className="py-4 px-6 text-gray-900 font-bold text-right">
                            {item.pricing_value}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <>
                        <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all">
                          <td className="py-4 px-6 text-gray-700 font-semibold">
                            Working Since
                          </td>
                          <td className="py-4 px-6 text-gray-900 text-right font-medium">
                            {service.working_since || "N/A"}
                          </td>
                        </tr>
                        <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all">
                          <td className="py-4 px-6 text-gray-700 font-semibold">
                            Area of Service
                          </td>
                          <td className="py-4 px-6 text-gray-900 text-right font-medium">
                            {service.area_of_service || "N/A"}
                          </td>
                        </tr>
                        {service.staff_status && (
                          <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all">
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                              Staff Status
                            </td>
                            <td className="py-4 px-6 text-gray-900 text-right font-medium">
                              {service.staff_status}
                            </td>
                          </tr>
                        )}
                        {service.onsite_facility && (
                          <tr className="hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all">
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                              Onsite Facility
                            </td>
                            <td className="py-4 px-6 text-gray-900 text-right font-medium">
                              {service.onsite_facility}
                            </td>
                          </tr>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Information */}
            {(service.facilities || service.other_services) && (
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-rose-100 hover:shadow-2xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  Additional Information
                </h2>

                {service.facilities && (
                  <div className="mb-6 p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Facilities
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.facilities}
                    </p>
                  </div>
                )}

                {service.other_services && (
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      Other Services
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.other_services}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Contact Form - Right Side (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sticky top-24 border-2 border-rose-200 hover:shadow-3xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                Contact Vendor
              </h2>

              {/* Contact Information */}
              {(service.contact_person ||
                service.contact_email ||
                service.contact_phone ||
                service.website) && (
                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-200">
                  {service.contact_person && (
                    <div className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 rounded-xl transition-all border border-transparent hover:border-rose-200">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Users className="w-5 h-5 text-rose-600" />
                      </div>
                      <span className="text-gray-700 font-semibold">{service.contact_person}</span>
                    </div>
                  )}

                  {service.contact_email && (
                    <div className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 rounded-xl transition-all border border-transparent hover:border-rose-200">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Mail className="w-5 h-5 text-rose-600" />
                      </div>
                      <a
                        href={`mailto:${service.contact_email}`}
                        className="text-gray-700 hover:text-rose-600 transition-colors font-semibold"
                      >
                        {service.contact_email}
                      </a>
                    </div>
                  )}

                  {service.contact_phone && (
                    <div className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 rounded-xl transition-all border border-transparent hover:border-rose-200">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Phone className="w-5 h-5 text-rose-600" />
                      </div>
                      <a
                        href={`tel:${service.contact_phone}`}
                        className="text-gray-700 hover:text-rose-600 transition-colors font-semibold"
                      >
                        {service.contact_phone}
                      </a>
                    </div>
                  )}

                  {service.website && (
                    <div className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 rounded-xl transition-all border border-transparent hover:border-rose-200">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <Globe className="w-5 h-5 text-rose-600" />
                      </div>
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-rose-600 transition-colors font-semibold"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Contact Form */}
              {submitSuccess && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-700 px-4 py-3 rounded-xl mb-4 flex items-center gap-2 shadow-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all hover:border-rose-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all hover:border-rose-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all hover:border-rose-300"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={contactForm.eventDate}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        eventDate: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all hover:border-rose-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, message: e.target.value })
                    }
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all hover:border-rose-300 resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}