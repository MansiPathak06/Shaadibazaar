
"use client";

import { Plus, Upload, Search, Edit, Trash2, Star, X } from "lucide-react";
import { useState } from "react";

export default function ServicesTab({
  services,
  searchTerm,
  setSearchTerm,
  showServiceForm,
  setShowServiceForm,
  editingService,
  setEditingService,
  serviceForm,
  setServiceForm,
  handleServiceSubmit,
  handleEditService,
  handleDeleteService,
  loading,
}) {
  const filteredServices = services.filter(
    (service) =>
      service.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.vendor_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (service.sub_category || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pricingFields, setPricingFields] = useState([
    { pricing_type: "", pricing_value: "" },
  ]);

  const addPricingField = () => {
    setPricingFields([...pricingFields, { pricing_type: "", pricing_value: "" }]);
  };

  const removePricingField = (index) => {
    setPricingFields(pricingFields.filter((_, i) => i !== index));
  };

  const updatePricingField = (index, field, value) => {
    const updated = [...pricingFields];
    updated[index][field] = value;
    setPricingFields(updated);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-4xl font-medium text-gray-900 mb-2">Services Management</h2>
          <p className="text-gray-600">Manage wedding vendor services</p>
        </div>
        <button
          onClick={() => {
            setShowServiceForm(!showServiceForm);
            setEditingService(null);
            setServiceForm({
              vendor_category: "",
              sub_category: "",
              service_name: "",
              description: "",
              starting_price: "",
              working_since: "",
              area_of_service: "",
              male_female_unisex: "",
              staff_status: "",
              facilities: "",
              onsite_facility: "",
              timing_requirements: "",
              product_brand: "",
              other_services: "",
              payment_mode: "",
              website: "",
              contact_person: "",
              contact_email: "",
              contact_phone: "",
              address: "",
              images: "",
              featured: false,
            });
            setPricingFields([{ pricing_type: "", pricing_value: "" }]);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {/* Service Form */}
      {showServiceForm && (
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-gray-100 animate-slide-in max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
              {editingService ? "Edit Service" : "Add New Service"}
            </h3>
            <button
              onClick={() => setShowServiceForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={(e) => handleServiceSubmit(e, pricingFields)} className="space-y-8">
            {/* 1️⃣ BASIC INFORMATION */}
            <div className="border-b pb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] bg-clip-text text-transparent pb-2">
                Basic Information
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ✅ CATEGORY SELECT */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Vendor Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={serviceForm.vendor_category}
                    onChange={(e) => {
                      const category = e.target.value;
                      const subCategory = e.target.selectedOptions[0]?.dataset.subcategory || "";
                      setServiceForm({
                        ...serviceForm,
                        vendor_category: category,
                        sub_category: subCategory
                      });
                    }}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                  >
                    <option value="">🎯 Select Main Category</option>
                    <optgroup label="👰‍♂️ Groom Services">
                      <option value="groom-services" data-subcategory="groom-makeup">Groom Makeup</option>
                      <option value="groom-services" data-subcategory="hairstyling">Hairstyling</option>
                      <option value="groom-services" data-subcategory="beard-trim-shave">Beard Trim/Shave</option>
                      <option value="groom-services" data-subcategory="ubtan-session">Ubtan Session</option>
                      <option value="groom-services" data-subcategory="groom-photoshoot">Groom Photoshoot</option>
                      <option value="groom-services" data-subcategory="turban-tying">Turban Tying</option>
                      <option value="groom-services" data-subcategory="dj-baraat">DJ Baraat</option>
                    </optgroup>
                    <optgroup label="👰‍♂️ Groom Services">
  <option value="groom-services" data-subcategory="groom-makeup">Groom Makeup</option>
  <option value="groom-services" data-subcategory="hairstyling">Hairstyling</option>
  <option value="groom-services" data-subcategory="beard-trim-shave">Beard Trim/Shave</option>
  <option value="groom-services" data-subcategory="ubtan-session">Ubtan Session</option>
  <option value="groom-services" data-subcategory="groom-photoshoot">Groom Photoshoot</option>
  <option value="groom-services" data-subcategory="turban-tying">Turban Tying</option>
  <option value="groom-services" data-subcategory="dj-baraat">DJ Baraat</option>
</optgroup>

{/* ✅ ADD THIS NEW SECTION */}
<optgroup label="🕌 Muslim Groom Services">
  <option value="muslim-groom-services" data-subcategory="groom-makeover">Groom Makeover</option>
  <option value="muslim-groom-services" data-subcategory="beard-styling">Beard Styling</option>
  <option value="muslim-groom-services" data-subcategory="arabic-henna">Arabic Henna</option>
  <option value="muslim-groom-services" data-subcategory="groom-photoshoot">Groom Photoshoot</option>
  <option value="muslim-groom-services" data-subcategory="car-decoration">Car Decoration</option>
  <option value="muslim-groom-services" data-subcategory="baraat-management">Baraat Management</option>
</optgroup>
{/* ✅ ADD THIS NEW SECTION AFTER Muslim Groom Services */}
<optgroup label="🪯 Sikh Groom Services">
  <option value="sikh-groom-services" data-subcategory="turban-expert">Turban Expert</option>
  <option value="sikh-groom-services" data-subcategory="beard-setting">Beard Setting</option>
  <option value="sikh-groom-services" data-subcategory="groom-photoshoot">Groom Photoshoot</option>
  <option value="sikh-groom-services" data-subcategory="dhol-nagara">Dhol/Nagara</option>
  <option value="sikh-groom-services" data-subcategory="bhangra-group">Bhangra Group</option>
  <option value="sikh-groom-services" data-subcategory="groom-makeup">Groom Makeup</option>
  <option value="sikh-groom-services" data-subcategory="hairstyling">Hairstyling</option>
  <option value="sikh-groom-services" data-subcategory="ghodi-decoration">Ghodi Decoration</option>
  <option value="sikh-groom-services" data-subcategory="band-baja">Band-Baja</option>
  <option value="sikh-groom-services" data-subcategory="dj-baraat">DJ for Baraat</option>
</optgroup>

<optgroup label="💍 Core Wedding Vendors">
  {/* ... rest stays same ... */}
</optgroup>
                    <optgroup label="💍 Core Wedding Vendors">
                      <option value="planner" data-subcategory="planner">Wedding Planner</option>
                      <option value="photographer" data-subcategory="photographer">Photographer</option>
                      <option value="caterer" data-subcategory="caterer">Caterer</option>
                      <option value="decorator" data-subcategory="decorator">Decorator</option>
                    </optgroup>
                  </select>
                </div>

                {/* ✅ SERVICE NAME */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={serviceForm.service_name}
                    onChange={(e) => setServiceForm({ ...serviceForm, service_name: e.target.value })}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="e.g., Premium Groom Makeup"
                  />
                </div>
              </div>

              {/* ✅ SUBCATEGORY DISPLAY */}
              <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                <label className="block text-sm font-semibold text-green-800 mb-3">
                  ✅ Sub Category (Auto-filled)
                </label>
                <div className="flex items-center gap-3 p-4 bg-white border-2 border-green-100 rounded-xl shadow-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {serviceForm.sub_category || "Select category above to auto-fill"}
                  </span>
                </div>
              </div>

              {/* Price + Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Starting Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={serviceForm.starting_price}
                    onChange={(e) => setServiceForm({ ...serviceForm, starting_price: e.target.value })}
                    required
                    min="0"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="5000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Working Since</label>
                  <input
                    type="number"
                    value={serviceForm.working_since}
                    onChange={(e) => setServiceForm({ ...serviceForm, working_since: e.target.value })}
                    min="1900"
                    max="2026"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="2020"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  required
                  rows="4"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                  placeholder="Describe your service in detail..."
                />
              </div>
            </div>

            {/* 2️⃣ SERVICE DETAILS - NOW FULLY WORKING */}
            <div className="border-b pb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                Service Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ✅ Area of Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Area of Service</label>
                  <input
                    type="text"
                    value={serviceForm.area_of_service}
                    onChange={(e) => setServiceForm({ ...serviceForm, area_of_service: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Pan India, Moradabad, Delhi NCR..."
                  />
                </div>

                {/* ✅ Service For */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Service For</label>
                  <select
                    value={serviceForm.male_female_unisex}
                    onChange={(e) => setServiceForm({ ...serviceForm, male_female_unisex: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                  >
                    <option value="">Select</option>
                    <option value="Male">👨 Male</option>
                    <option value="Female">👩 Female</option>
                    <option value="Both">👫 Both</option>
                    <option value="Unisex">🧑 Unisex</option>
                  </select>
                </div>

                {/* ✅ Staff Status */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Staff Status</label>
                  <input
                    type="text"
                    value={serviceForm.staff_status}
                    onChange={(e) => setServiceForm({ ...serviceForm, staff_status: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Full Time / On Demand / 5+ Staff"
                  />
                </div>

                {/* ✅ Onsite Facility */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Onsite Facility</label>
                  <input
                    type="text"
                    value={serviceForm.onsite_facility}
                    onChange={(e) => setServiceForm({ ...serviceForm, onsite_facility: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Available / Not Available / At Venue"
                  />
                </div>

                {/* ✅ Payment Mode */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Mode</label>
                  <input
                    type="text"
                    value={serviceForm.payment_mode}
                    onChange={(e) => setServiceForm({ ...serviceForm, payment_mode: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Cash, UPI, Card, Bank Transfer"
                  />
                </div>

                {/* ✅ Website */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Website</label>
                  <input
                    type="url"
                    value={serviceForm.website}
                    onChange={(e) => setServiceForm({ ...serviceForm, website: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              {/* Facilities + Other Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Facilities</label>
                  <textarea
                    value={serviceForm.facilities}
                    onChange={(e) => setServiceForm({ ...serviceForm, facilities: e.target.value })}
                    rows="3"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                    placeholder="AC Room, Parking, Changing Room, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Other Services</label>
                  <textarea
                    value={serviceForm.other_services}
                    onChange={(e) => setServiceForm({ ...serviceForm, other_services: e.target.value })}
                    rows="3"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                    placeholder="Additional services you offer..."
                  />
                </div>
              </div>
            </div>

            {/* 3️⃣ PRICING */}
            <div className="border-b pb-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent pb-2">
                  Pricing Details
                </h4>
                <button
                  type="button"
                  onClick={addPricingField}
                  className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-4 h-4" />
                  Add Pricing
                </button>
              </div>
              <div className="space-y-4">
                {pricingFields.map((field, index) => (
                  <div key={index} className="flex gap-4 items-end">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.pricing_type}
                        onChange={(e) => updatePricingField(index, "pricing_type", e.target.value)}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                        placeholder="Video Editing"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.pricing_value}
                        onChange={(e) => updatePricingField(index, "pricing_value", e.target.value)}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                        placeholder="₹25,000"
                      />
                    </div>
                    {pricingFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePricingField(index)}
                        className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-110"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4️⃣ CONTACT INFO */}
            <div className="pb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Contact Person</label>
                  <input
                    type="text"
                    value={serviceForm.contact_person}
                    onChange={(e) => setServiceForm({ ...serviceForm, contact_person: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Contact Email</label>
                  <input
                    type="email"
                    value={serviceForm.contact_email}
                    onChange={(e) => setServiceForm({ ...serviceForm, contact_email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="contact@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Contact Phone</label>
                  <input
                    type="tel"
                    value={serviceForm.contact_phone}
                    onChange={(e) => setServiceForm({ ...serviceForm, contact_phone: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Address</label>
                  <input
                    type="text"
                    value={serviceForm.address}
                    onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Shop No. 12, Civil Lines, Moradabad"
                  />
                </div>
              </div>
            </div>

            {/* 5️⃣ IMAGES + FEATURED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Image URLs (comma-separated)</label>
                <textarea
                  value={serviceForm.images}
                  onChange={(e) => setServiceForm({ ...serviceForm, images: e.target.value })}
                  rows="3"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                  placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
                />
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <label className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 w-full md:w-auto">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={serviceForm.featured}
                    onChange={(e) => setServiceForm({ ...serviceForm, featured: e.target.checked })}
                    className="w-6 h-6 text-[#F04393] border-2 border-gray-300 rounded-xl focus:ring-[#F04393] accent-[#F04393]"
                  />
                  <span className="text-lg font-semibold text-gray-900">⭐ Mark as Featured Service</span>
                </label>
              </div>
            </div>

            {/* ✅ SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#F04393] via-pink-500 to-[#2A0B8B] text-white rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none shadow-xl"
            >
              {loading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : editingService ? (
                "✨ Update Service"
              ) : (
                "🚀 Add Service"
              )}
            </button>
          </form>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="🔍 Search services by name, category, or subcategory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-5 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-lg"
          />
        </div>
      </div>

      {/* ✅ Services Table */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#F04393] via-pink-500 to-[#2A0B8B] text-white">
              <tr>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">Service</th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">Category</th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">Price</th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">Area</th>
                <th className="px-8 py-5 text-center text-sm font-bold uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredServices.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-8 py-16 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-3">
                      <Search className="w-12 h-12 text-gray-300" />
                      <p className="text-xl font-medium">No services found</p>
                      <p className="text-sm">Try adjusting your search terms</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        {service.images && service.images.length > 0 && (
                          <div className="relative">
                            <img
                              src={Array.isArray(service.images) ? service.images[0] : service.images}
                              alt={service.service_name}
                              className="w-14 h-14 rounded-2xl object-cover shadow-lg border-4 border-white"
                              onError={(e) => { e.target.src = "https://via.placeholder.com/56x56/6B7280/FFFFFF?text=??"; }}
                            />
                            {service.featured && (
                              <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                                ⭐
                              </div>
                            )}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-lg text-gray-900 leading-tight">{service.service_name}</p>
                          <p className="text-sm text-gray-500 mt-1">{service.contact_person || "N/A"}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900 capitalize text-sm">{service.vendor_category}</div>
                        {service.sub_category && (
                          <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                            → {service.sub_category}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-2xl font-black text-gray-900">₹{service.starting_price}</p>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        {service.area_of_service || "N/A"}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <button
                          onClick={() => handleEditService(service)}
                          className="p-3 hover:bg-blue-50 rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-105 bg-blue-50 border-2 border-blue-100"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5 text-blue-600" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="p-3 hover:bg-red-50 rounded-2xl transition-all duration-200 hover:shadow-lg hover:scale-105 bg-red-50 border-2 border-red-100"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
