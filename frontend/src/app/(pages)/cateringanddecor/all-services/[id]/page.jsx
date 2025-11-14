"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ServiceVendorDetail() {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event_date: "",
    details: "",
  });

  useEffect(() => {
    async function fetchVendor() {
      const res = await fetch(`http://localhost:5000/api/service-vendors/public/${id}`);
      const data = await res.json();

      // Gallery fix: convert comma string to array (or empty array)
      if (data.vendor) {
        data.vendor.galleryArray = [];
        if (typeof data.vendor.gallery === "string" && data.vendor.gallery.trim()) {
          data.vendor.galleryArray = data.vendor.gallery
            .split(",")
            .map((x) => x.trim())
            .filter((x) => !!x);
        }
      }

      setVendor(data.vendor || null);
      setLoading(false);
    }
    fetchVendor();
  }, [id]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`http://localhost:5000/api/service-vendors/public/${id}/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    
    if (data.success) {
      alert("Your booking request has been sent successfully! The vendor will contact you soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        event_date: "",
        details: "",
      });
    } else {
      alert("Failed to send booking request. Please try again.");
    }
  } catch (err) {
    alert("Error submitting request. Please try again.");
  }
};

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!vendor)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Vendor not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 md:px-0">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg">
        {/* Main/Card Section */}
        <div className="flex flex-col md:flex-row gap-7 p-7">
          <img
            src={vendor.coverImage}
            alt={vendor.vendorName}
            className="rounded-lg shadow w-full md:w-1/3 h-72 object-cover"
            onError={(e) => {
              e.target.src = "/placeholder.jpg";
            }}
          />
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {vendor.vendorName}
            </h1>
            <span className="text-green-700 font-semibold">
              {vendor.category &&
                vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1)}
            </span>
            <div>{vendor.shortDescription}</div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                {vendor.website}
              </a>
              <div className="bg-rose-100 text-rose-600 rounded px-3 py-1">
                {vendor.price || vendor.pricing || "Price on Request"}
              </div>
            </div>
          </div>

          {/* Contact/Booking Form */}
          <div className="w-full md:w-96 rounded-lg border p-4 bg-gray-50 shadow-lg">
            <h2 className="text-lg font-semibold mb-2">
              Contact {vendor.vendorName}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                name="phone"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="date"
                name="event_date"
                required
                value={form.event_date}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
              />
              <textarea
                name="details"
                placeholder="Details (optional)"
                value={form.details}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded w-full"
              />
              <button
                type="submit"
                className="w-full bg-rose-600 text-white rounded px-4 py-2 mt-1 font-semibold hover:bg-rose-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* About Section */}
        <div className="p-7 pt-3 border-t">
          <h3 className="text-2xl font-semibold mb-2">About Us</h3>
          <div className="text-gray-800">
            {vendor.longDescription || "Details coming soon."}
          </div>
        </div>

        {/* Servicing & Pricing Section */}
        <div className="p-7 pt-3 border-t">
          <h3 className="text-2xl font-semibold mb-2">Servicing & Pricing</h3>
          <div className="overflow-auto">
            <table className="min-w-full text-sm border bg-white">
              <tbody>
                <tr>
                  <td className="font-medium border px-3 py-2">Price</td>
                  <td className="border px-3 py-2">
                    {vendor.price || "On Demand"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium border px-3 py-2">
                    Working Since
                  </td>
                  <td className="border px-3 py-2">
                    {vendor.workingSince || ""}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium border px-3 py-2">
                    Area of Service
                  </td>
                  <td className="border px-3 py-2">
                    {vendor.areaOfService || ""}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium border px-3 py-2">
                    Type/Category
                  </td>
                  <td className="border px-3 py-2">
                    {vendor.category || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="font-medium border px-3 py-2">Website</td>
                  <td className="border px-3 py-2">
                    <a
                      href={vendor.website}
                      className="text-blue-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {vendor.website || "N/A"}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="p-7 pt-3 border-t">
          <h3 className="text-2xl font-semibold mb-2">Gallery</h3>
          {vendor.galleryArray && vendor.galleryArray.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {vendor.galleryArray.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="rounded-lg h-32 w-full object-cover"
                />
              ))}
            </div>
          ) : (
            <div className="text-gray-600">No images available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
