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
  Calendar,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function GroomServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id;

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

  useEffect(() => {
    fetchServiceDetails();
  }, [serviceId]);

  const fetchServiceDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/services/${serviceId}`);
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
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-40">
              <Loader2 className="w-12 h-12 animate-spin text-orange-500 mx-auto" />
            </div>
            <Loader2 className="w-12 h-12 animate-spin text-orange-600 mx-auto mb-3 relative" />
          </div>
          <p className="text-gray-700 font-semibold text-sm">
            Loading service details...
          </p>
          <p className="text-gray-500 text-xs mt-1">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-8 max-w-md">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => router.push("/groom/hindu/services")}
            className="px-6 py-2.5 bg-linear-to-r from-orange-500 to-red-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-sm"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const firstImage =
    service.images && service.images.length > 0
      ? Array.isArray(service.images)
        ? service.images[0]
        : service.images
      : null;

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-3">
          <nav className="flex items-center space-x-1 text-xs sm:text-sm">
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-600 hover:text-orange-600 transition-all hover:scale-105"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="font-medium">Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-300" />
            <Link
              href="/groom/hindu/services"
              className="text-gray-600 hover:text-orange-600 transition-all font-medium hover:scale-105"
            >
              Groom Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-300" />
            <span className="text-orange-600 font-semibold line-clamp-1 max-w-[40vw] sm:max-w-none">
              {service.service_name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-8">
        {/* Hero Section with Image and Title */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-7 mb-6 sm:mb-8 overflow-hidden border border-orange-100">
          <div className="absolute top-0 right-0 w-52 h-52 bg-linear-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-linear-to-tr from-amber-200/30 to-orange-200/30 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Left Side - Image */}
            {firstImage && (
              <div className="w-full md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-100 group">
                <img
                  src={firstImage}
                  alt={service.service_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Service";
                  }}
                />
              </div>
            )}

            {/* Right Side - Service Info */}
            <div className="flex-1 w-full">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-linear-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-2 leading-snug">
                    {service.service_name}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-700 leading-snug line-clamp-3">
                    {service.description}
                  </p>
                </div>
                {service.featured && (
                  <div className="bg-linear-to-r from-amber-400 to-yellow-500 text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ml-2 shadow-lg hover:scale-105 transition-transform whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {service.working_since && (
                  <div className="flex items-center gap-2.5 bg-linear-to-br from-blue-50 to-indigo-50 px-3 py-3 rounded-xl border border-blue-200 hover:shadow-md transition-all hover:scale-[1.02]">
                    <div className="bg-blue-100 p-1.5 rounded-lg">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-600 font-semibold uppercase tracking-wide">
                        Since
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {service.working_since}
                      </p>
                    </div>
                  </div>
                )}
                {service.area_of_service && (
                  <div className="flex items-center gap-2.5 bg-linear-to-br from-emerald-50 to-teal-50 px-3 py-3 rounded-xl border border-emerald-200 hover:shadow-md transition-all hover:scale-[1.02]">
                    <div className="bg-emerald-100 p-1.5 rounded-lg">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {service.area_of_service}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Badge */}
              <div className="inline-block bg-linear-to-br from-orange-500 to-red-600 rounded-xl shadow-xl px-4 py-2.5 transform hover:scale-105 transition-all">
                <p className="text-[9px] text-orange-100 font-semibold mb-0.5 uppercase tracking-wider">
                  Starting From
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  ₹{service.starting_price?.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-5">
            {/* Service Details */}
            <div className="bg-white rounded-2xl shadow-xl p-5 border border-orange-100 hover:shadow-2xl transition-shadow">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="bg-linear-to-br from-orange-500 to-red-600 p-1.5 rounded-lg">
                  <CheckCircle className="w-4.5 h-4.5 text-white" />
                </div>
                Service Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.male_female_unisex && (
                  <div className="flex items-center gap-2.5 px-3 py-3 bg-linear-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200 hover:shadow-md transition-all">
                    <div className="bg-violet-100 p-1.5 rounded-lg">
                      <Users className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-violet-600 font-semibold uppercase tracking-wide">
                        Service For
                      </p>
                      <p className="text-sm font-semibold text-gray-900 capitalize">
                        {service.male_female_unisex}
                      </p>
                    </div>
                  </div>
                )}

                {service.payment_mode && (
                  <div className="flex items-center gap-2.5 px-3 py-3 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-all">
                    <div className="bg-green-100 p-1.5 rounded-lg">
                      <CreditCard className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-green-600 font-semibold uppercase tracking-wide">
                        Payment Mode
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        {service.payment_mode}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery */}
            {service.images && service.images.length > 1 && (
              <div className="bg-white rounded-2xl shadow-xl p-5 border border-orange-100 hover:shadow-2xl transition-shadow">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="bg-linear-to-br from-red-500 to-orange-600 p-1.5 rounded-lg">
                    <Sparkles className="w-4.5 h-4.5 text-white" />
                  </div>
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-36 sm:h-40 rounded-xl overflow-hidden group shadow-md hover:shadow-2xl transition-all ring-2 ring-transparent hover:ring-orange-300"
                    >
                      <img
                        src={image}
                        alt={`${service.service_name} ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x300?text=Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Details */}
<div className="bg-white rounded-2xl shadow-xl p-5 border border-orange-100 hover:shadow-2xl transition-shadow">
  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
    <div className="bg-linear-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
      <Award className="w-4.5 h-4.5 text-white" />
    </div>
    Pricing Details
  </h2>

  {/* 👇 ADD <table> wrapper here */}
  <div className="overflow-hidden rounded-xl border border-gray-200">
    <table className="w-full text-sm">  {/* ✅ ADDED */}
      <tbody className="divide-y divide-gray-200">
        {service.pricing && service.pricing.length > 0 ? (
          service.pricing.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 transition-all"
            >
              <td className="py-3 px-4 text-gray-700 font-semibold">
                {item.pricing_type}
              </td>
              <td className="py-3 px-4 text-gray-900 font-bold text-right">
                {item.pricing_value}
              </td>
            </tr>
          ))
        ) : (
          <>
            <tr className="hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 transition-all">
              <td className="py-3 px-4 text-gray-700 font-semibold">
                Working Since
              </td>
              <td className="py-3 px-4 text-gray-900 text-right font-medium">
                {service.working_since || "N/A"}
              </td>
            </tr>
            <tr className="hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 transition-all">
              <td className="py-3 px-4 text-gray-700 font-semibold">
                Area of Service
              </td>
              <td className="py-3 px-4 text-gray-900 text-right font-medium">
                {service.area_of_service || "N/A"}
              </td>
            </tr>
            {service.staff_status && (
              <tr className="hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 transition-all">
                <td className="py-3 px-4 text-gray-700 font-semibold">
                  Staff Status
                </td>
                <td className="py-3 px-4 text-gray-900 text-right font-medium">
                  {service.staff_status}
                </td>
              </tr>
            )}
            {service.onsite_facility && (
              <tr className="hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 transition-all">
                <td className="py-3 px-4 text-gray-700 font-semibold">
                  Onsite Facility
                </td>
                <td className="py-3 px-4 text-gray-900 text-right font-medium">
                  {service.onsite_facility}
                </td>
              </tr>
            )}
          </>
        )}
      </tbody>
    </table>  {/* ✅ ADDED */}
  </div>
</div>


            {/* Additional Information */}
            {(service.facilities || service.other_services) && (
              <div className="bg-white rounded-2xl shadow-xl p-5 border border-orange-100 hover:shadow-2xl transition-shadow">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="bg-linear-to-br from-cyan-500 to-blue-600 p-1.5 rounded-lg">
                    <CheckCircle className="w-4.5 h-4.5 text-white" />
                  </div>
                  Additional Information
                </h2>

                {service.facilities && (
                  <div className="mb-4 px-4 py-3.5 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <h3 className="text-sm sm:text-base font-bold text-blue-900 mb-2 flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Facilities
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      {service.facilities}
                    </p>
                  </div>
                )}

                {service.other_services && (
                  <div className="px-4 py-3.5 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <h3 className="text-sm sm:text-base font-bold text-purple-900 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      Other Services
                    </h3>
                    <p className="text-sm text-gray-700 leading-snug">
                      {service.other_services}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Contact Form - Right Side (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-5 sticky top-20 border-2 border-orange-200 hover:shadow-3xl transition-shadow">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="bg-linear-to-br from-orange-500 to-red-600 p-1.5 rounded-lg">
                  <Mail className="w-4.5 h-4.5 text-white" />
                </div>
                Contact Vendor
              </h2>

              {(service.contact_person ||
                service.contact_email ||
                service.contact_phone ||
                service.website) && (
                <div className="space-y-2.5 mb-5 pb-4 border-b border-gray-200">
                  {service.contact_person && (
                    <div className="flex items-center gap-2.5 p-2.5 hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all border border-transparent hover:border-orange-200">
                      <div className="bg-orange-100 p-1.5 rounded-lg">
                        <Users className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-semibold">
                        {service.contact_person}
                      </span>
                    </div>
                  )}

                  {service.contact_email && (
                    <div className="flex items-center gap-2.5 p-2.5 hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all border border-transparent hover:border-orange-200">
                      <div className="bg-orange-100 p-1.5 rounded-lg">
                        <Mail className="w-4 h-4 text-orange-600" />
                      </div>
                      <a
                        href={`mailto:${service.contact_email}`}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors font-semibold break-all"
                      >
                        {service.contact_email}
                      </a>
                    </div>
                  )}

                  {service.contact_phone && (
                    <div className="flex items-center gap-2.5 p-2.5 hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all border border-transparent hover:border-orange-200">
                      <div className="bg-orange-100 p-1.5 rounded-lg">
                        <Phone className="w-4 h-4 text-orange-600" />
                      </div>
                      <a
                        href={`tel:${service.contact_phone}`}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors font-semibold"
                      >
                        {service.contact_phone}
                      </a>
                    </div>
                  )}

                  {service.website && (
                    <div className="flex items-center gap-2.5 p-2.5 hover:bg-linear-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all border border-transparent hover:border-orange-200">
                      <div className="bg-orange-100 p-1.5 rounded-lg">
                        <Globe className="w-4 h-4 text-orange-600" />
                      </div>
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors font-semibold truncate"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              )}

              {submitSuccess && (
                <div className="bg-linear-to-r from-green-50 to-emerald-50 border border-green-300 text-green-700 px-3 py-2.5 rounded-xl mb-3 flex items-center gap-2 shadow-lg text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-300 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-300 text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-300 text-sm"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
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
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        message: e.target.value,
                      })
                    }
                    required
                    rows="4"
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-orange-300 resize-none text-sm"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-linear-to-r from-orange-500 via-red-500 to-amber-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
