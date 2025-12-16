// src/app/(pages)/admin-dashboard/components/ServicesTab.jsx
"use client";

import { Plus, Upload, Search, Edit, Trash2, Star, X } from 'lucide-react';
import { useState } from 'react';

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
  loading
}) {
  const filteredServices = services.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.vendor_category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const vendorCategories = [
    'planner', 'event', 'venue', 'decorator', 'caterer',
    'photographer', 'videographer', 'light', 'dj', 'band',
    'ghodi', 'dhol', 'fireworks', 'tent'
  ];

  const [pricingFields, setPricingFields] = useState([{ pricing_type: '', pricing_value: '' }]);

  const addPricingField = () => {
    setPricingFields([...pricingFields, { pricing_type: '', pricing_value: '' }]);
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
          <h2 className="text-4xl font-medium text-gray-900 mb-2">
            Services Management
          </h2>
          <p className="text-gray-600">
            Manage wedding vendor services
          </p>
        </div>
        <button
          onClick={() => {
            setShowServiceForm(!showServiceForm);
            setEditingService(null);
            setServiceForm({
              vendor_category: '',
              service_name: '',
              description: '',
              starting_price: '',
              working_since: '',
              area_of_service: '',
              male_female_unisex: '',
              staff_status: '',
              facilities: '',
              onsite_facility: '',
              timing_requirements: '',
              product_brand: '',
              other_services: '',
              payment_mode: '',
              website: '',
              contact_person: '',
              contact_email: '',
              contact_phone: '',
              address: '',
              images: '',
              featured: false
            });
            setPricingFields([{ pricing_type: '', pricing_value: '' }]);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {/* Service Form */}
      {showServiceForm && (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h3>
            <button
              onClick={() => setShowServiceForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={(e) => handleServiceSubmit(e, pricingFields)} className="space-y-6">
            {/* Basic Information */}
            <div className="border-b pb-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vendor Category *
                  </label>
                  <select
                    value={serviceForm.vendor_category}
                    onChange={(e) => setServiceForm({...serviceForm, vendor_category: e.target.value})}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  >
                    <option value="">Select Category</option>
                    {vendorCategories.map(cat => (
                      <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name *
                  </label>
                  <input
                    type="text"
                    value={serviceForm.service_name}
                    onChange={(e) => setServiceForm({...serviceForm, service_name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Enter service name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={serviceForm.starting_price}
                    onChange={(e) => setServiceForm({...serviceForm, starting_price: e.target.value})}
                    required
                    min="0"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Working Since
                  </label>
                  <input
                    type="number"
                    value={serviceForm.working_since}
                    onChange={(e) => setServiceForm({...serviceForm, working_since: e.target.value})}
                    min="1900"
                    max="2025"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="2020"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({...serviceForm, description: e.target.value})}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="Enter service description"
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="border-b pb-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Service Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area of Service
                  </label>
                  <input
                    type="text"
                    value={serviceForm.area_of_service}
                    onChange={(e) => setServiceForm({...serviceForm, area_of_service: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Pan India"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service For
                  </label>
                  <select
                    value={serviceForm.male_female_unisex}
                    onChange={(e) => setServiceForm({...serviceForm, male_female_unisex: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Both">Both</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Staff Status
                  </label>
                  <input
                    type="text"
                    value={serviceForm.staff_status}
                    onChange={(e) => setServiceForm({...serviceForm, staff_status: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="On Demand / Full Time"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Onsite Facility
                  </label>
                  <input
                    type="text"
                    value={serviceForm.onsite_facility}
                    onChange={(e) => setServiceForm({...serviceForm, onsite_facility: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Available / Not Available"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Mode
                  </label>
                  <input
                    type="text"
                    value={serviceForm.payment_mode}
                    onChange={(e) => setServiceForm({...serviceForm, payment_mode: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Cash, Card, UPI"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={serviceForm.website}
                    onChange={(e) => setServiceForm({...serviceForm, website: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facilities
                  </label>
                  <textarea
                    value={serviceForm.facilities}
                    onChange={(e) => setServiceForm({...serviceForm, facilities: e.target.value})}
                    rows="2"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="List all facilities"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Other Services
                  </label>
                  <textarea
                    value={serviceForm.other_services}
                    onChange={(e) => setServiceForm({...serviceForm, other_services: e.target.value})}
                    rows="2"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Additional services offered"
                  />
                </div>
              </div>
            </div>

            {/* Pricing Details */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-medium text-gray-800">Pricing Details</h4>
                <button
                  type="button"
                  onClick={addPricingField}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Pricing
                </button>
              </div>

              <div className="space-y-4">
                {pricingFields.map((field, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.pricing_type}
                        onChange={(e) => updatePricingField(index, 'pricing_type', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                        placeholder="e.g., Video Charges, Album Charges"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.pricing_value}
                        onChange={(e) => updatePricingField(index, 'pricing_value', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                        placeholder="e.g., On Demand, ₹50,000"
                      />
                    </div>
                    {pricingFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePricingField(index)}
                        className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b pb-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={serviceForm.contact_person}
                    onChange={(e) => setServiceForm({...serviceForm, contact_person: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Enter contact person name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={serviceForm.contact_email}
                    onChange={(e) => setServiceForm({...serviceForm, contact_email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={serviceForm.contact_phone}
                    onChange={(e) => setServiceForm({...serviceForm, contact_phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={serviceForm.address}
                    onChange={(e) => setServiceForm({...serviceForm, address: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                    placeholder="Enter address"
                  />
                </div>
              </div>
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URLs (comma-separated)
              </label>
              <textarea
                value={serviceForm.images}
                onChange={(e) => setServiceForm({...serviceForm, images: e.target.value})}
                rows="2"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              />
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={serviceForm.featured}
                onChange={(e) => setServiceForm({...serviceForm, featured: e.target.checked})}
                className="w-5 h-5 text-[#F04393] border-gray-300 rounded focus:ring-[#F04393]"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700 cursor-pointer">
                Mark as Featured Service
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? 'Saving...' : (editingService ? 'Update Service' : 'Add Service')}
            </button>
          </form>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Starting Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Area</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredServices.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                    No services found
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr key={service.id} className="table-row hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {service.images && service.images.length > 0 && (
                          <img
                            src={Array.isArray(service.images) ? service.images[0] : service.images}
                            alt={service.service_name}
                            className="w-12 h-12 rounded-lg object-cover"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/48';
                            }}
                          />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{service.service_name}</p>
                          {service.featured && (
                            <span className="inline-flex items-center gap-1 text-xs text-yellow-600">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700 capitalize">
                      {service.vendor_category}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">₹{service.starting_price}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {service.area_of_service || 'N/A'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditService(service)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
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
