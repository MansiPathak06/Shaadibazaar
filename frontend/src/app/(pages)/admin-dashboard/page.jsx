
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// Import Components
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Notifications from "./components/Notifications";
import DashboardTab from "./components/DashboardTab";
import ProductsTab from "./components/ProductsTab";
import UsersTab from "./components/UsersTab";
import VendorsTab from "./components/VendorsTab";
import ServicesTab from "./components/ServicesTab";

// Import Styles
import { dashboardStyles } from "./styles/animations";

export default function AdminDashboard() {
  const router = useRouter();

  // State Management
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [services, setServices] = useState([]);
const [showServiceForm, setShowServiceForm] = useState(false);
const [editingService, setEditingService] = useState(null);

const [serviceForm, setServiceForm] = useState({
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

  // Bulk Import States
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [excelFile, setExcelFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState(null);

  // Product Form State
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    mrp: "",
    discount: "",
    rating: "",
    category: "",
    subCategory: "",
    images: "",
    vendor_id: "",
    stock: "",
    featured: false,
  });

  // Check Authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!token || user.role !== "admin") {
      router.push("/auth");
      return;
    }

    fetchDashboardData();
  }, []);

  // Fetch Dashboard Data
  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const [statsRes, productsRes, usersRes, vendorsRes,servicesRes] = await Promise.all([
        fetch("http://localhost:5000/api/admin/stats", { headers }),
        fetch("http://localhost:5000/api/admin/products", { headers }),
        fetch("http://localhost:5000/api/admin/users", { headers }),
        fetch("http://localhost:5000/api/admin/vendors", { headers }),
         fetch("http://localhost:5000/api/services", { headers }),
      ]);

      const statsData = await statsRes.json();
      const productsData = await productsRes.json();
      const usersData = await usersRes.json();
      const vendorsData = await vendorsRes.json();
      const servicesData = await servicesRes.json();

      if (statsData.success) setStats(statsData.stats);
      if (productsData.success) setProducts(productsData.products);
      if (usersData.success) setUsers(usersData.users);
      if (vendorsData.success) setVendors(vendorsData.vendors);
      if (servicesData.success) setServices(servicesData.services); // Add this

    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  // Product Handlers
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const url = editingProduct
        ? `http://localhost:5000/api/admin/products/${editingProduct.id}`
        : "http://localhost:5000/api/admin/products";

      const method = editingProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...productForm,
          subCategory: productForm.subCategory,
          images: productForm.images.split(",").map((img) => img.trim()),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        setShowProductForm(false);
        setEditingProduct(null);
        setProductForm({
          name: "",
          description: "",
          price: "",
          mrp: "",
          discount: "",
          rating: "",
          category: "",
          subCategory: "",
          images: "",
          vendor_id: "",
          stock: "",
          featured: false,
        });
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Product submit error:", error);
      setError("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      mrp: product.mrp || product.price,
      discount: product.discount || "",
      rating: product.rating,
      category: product.category,
      subCategory: product.subCategory || "",
      images: Array.isArray(product.images)
        ? product.images.join(", ")
        : product.images,
      vendor_id: product.vendor_id || "",
      stock: product.stock || "",
      featured: product.featured || false,
    });
    setShowProductForm(true);
    setShowBulkImport(false);
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete product error:", error);
      setError("Failed to delete product");
    }
  };

  // Bulk Import Handlers
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" &&
        file.type !== "application/vnd.ms-excel" &&
        file.type !== "text/csv"
      ) {
        setError("Please upload a valid Excel (.xlsx, .xls) or CSV file");
        return;
      }
      setExcelFile(file);
      setError("");
      setImportResults(null);
    }
  };

  const handleBulkImport = async () => {
    if (!excelFile) {
      setError("Please select a file first");
      return;
    }

    setImporting(true);
    setError("");
    setSuccess("");

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const XLSX = await import("xlsx");
          const workbook = XLSX.read(data, { type: "array" });

          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          if (jsonData.length === 0) {
            setError("Excel file is empty");
            setImporting(false);
            return;
          }

          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:5000/api/admin/products/bulk-import",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ products: jsonData }),
            }
          );

          const result = await response.json();

          if (result.success) {
            setSuccess(`Successfully imported ${result.imported} products!`);
            setImportResults(result);
            setExcelFile(null);
            fetchDashboardData();
          } else {
            setError(result.message);
          }
        } catch (err) {
          console.error("Parse error:", err);
          setError("Failed to parse Excel file: " + err.message);
        } finally {
          setImporting(false);
        }
      };

      reader.readAsArrayBuffer(excelFile);
    } catch (error) {
      console.error("Bulk import error:", error);
      setError("Failed to import products");
      setImporting(false);
    }
  };

  const downloadTemplate = () => {
    const templateData = [
      {
        name: "Premium Diamond Necklace",
        description: "Exquisite diamond necklace with 18k gold",
        price: 250000,
        mrp: 300000,
        discount: 17,
        rating: 4.8,
        category: "jewellery",
        images:
          "https://res.cloudinary.com/image1.jpg, https://res.cloudinary.com/image2.jpg",
        stock: 50,
        featured: 1,
        vendor_id: "",
      },
      {
        name: "Gold Earrings",
        description: "Beautiful gold earrings with intricate design",
        price: 45000,
        mrp: 55000,
        discount: 18,
        rating: 4.9,
        category: "jewellery",
        images: "https://res.cloudinary.com/image3.jpg",
        stock: 100,
        featured: 0,
        vendor_id: "",
      },
    ];

    const headers = Object.keys(templateData[0]).join(",");
    const rows = templateData
      .map((row) =>
        Object.values(row)
          .map((v) => `"${v}"`)
          .join(",")
      )
      .join("\n");
    const csv = headers + "\n" + rows;

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products_template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // User Handlers
  const handleDeleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete user error:", error);
      setError("Failed to delete user");
    }
  };

  // Vendor Handlers
  const handleApproveVendor = async (id, isApproved) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/vendors/${id}/approve`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ is_approved: isApproved }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Approve vendor error:", error);
      setError("Failed to update vendor status");
    }
  };

  const handleDeleteVendor = async (id) => {
    if (!confirm("Are you sure you want to delete this vendor?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/vendors/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete vendor error:", error);
      setError("Failed to delete vendor");
    }
  };


  const handleServiceSubmit = async (e, pricingFields) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {
    const token = localStorage.getItem("token");
    const url = editingService
      ? `http://localhost:5000/api/admin/services/${editingService.id}`
      : "http://localhost:5000/api/admin/services";

    const method = editingService ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...serviceForm,
        images: serviceForm.images.split(",").map((img) => img.trim()),
        pricing: pricingFields.filter(p => p.pricing_type && p.pricing_value)
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSuccess(data.message);
      setShowServiceForm(false);
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
      fetchDashboardData();
    } else {
      setError(data.message);
    }
  } catch (error) {
    console.error("Service submit error:", error);
    setError("Failed to save service");
  } finally {
    setLoading(false);
  }
};

const handleEditService = (service) => {
  setEditingService(service);
  setServiceForm({
    vendor_category: service.vendor_category,
    service_name: service.service_name,
    description: service.description,
    starting_price: service.starting_price,
    working_since: service.working_since,
    area_of_service: service.area_of_service,
    male_female_unisex: service.male_female_unisex,
    staff_status: service.staff_status,
    facilities: service.facilities,
    onsite_facility: service.onsite_facility,
    timing_requirements: service.timing_requirements,
    product_brand: service.product_brand,
    other_services: service.other_services,
    payment_mode: service.payment_mode,
    website: service.website,
    contact_person: service.contact_person,
    contact_email: service.contact_email,
    contact_phone: service.contact_phone,
    address: service.address,
    images: Array.isArray(service.images) ? service.images.join(", ") : service.images,
    featured: service.featured || false,
  });
  setShowServiceForm(true);
};

const handleDeleteService = async (id) => {
  if (!confirm("Are you sure you want to delete this service?")) return;

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:5000/api/admin/services/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (data.success) {
      setSuccess(data.message);
      fetchDashboardData();
    } else {
      setError(data.message);
    }
  } catch (error) {
    console.error("Delete service error:", error);
    setError("Failed to delete service");
  }
};

  // Loading State
  if (loading && !stats.totalProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-white mx-auto mb-4" />
          <p className="text-white font-semibold text-lg">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{dashboardStyles}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#E8A4BC]/10 to-[#F9C449]/10">
        {/* Header */}
        <AdminHeader 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />

        {/* Notifications */}
        <Notifications error={error} success={success} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">
            {/* Sidebar */}
            <AdminSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              products={products}
              services={services}
              users={users}
              vendors={vendors}
            />

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              {/* Dashboard Tab */}
              {activeTab === "dashboard" && (
                <DashboardTab stats={stats} setActiveTab={setActiveTab} />
              )}

              {/* Products Tab */}
              {activeTab === "products" && (
                <ProductsTab
                  products={products}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  showProductForm={showProductForm}
                  setShowProductForm={setShowProductForm}
                  showBulkImport={showBulkImport}
                  setShowBulkImport={setShowBulkImport}
                  editingProduct={editingProduct}
                  setEditingProduct={setEditingProduct}
                  productForm={productForm}
                  setProductForm={setProductForm}
                  handleProductSubmit={handleProductSubmit}
                  handleEditProduct={handleEditProduct}
                  handleDeleteProduct={handleDeleteProduct}
                  excelFile={excelFile}
                  setExcelFile={setExcelFile}
                  importing={importing}
                  importResults={importResults}
                  handleExcelUpload={handleExcelUpload}
                  handleBulkImport={handleBulkImport}
                  downloadTemplate={downloadTemplate}
                  loading={loading}
                  setError={setError}
                />
              )}

              {/* Services Tab */}
{activeTab === "services" && (
  <ServicesTab
    services={services}
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    showServiceForm={showServiceForm}
    setShowServiceForm={setShowServiceForm}
    editingService={editingService}
    setEditingService={setEditingService}
    serviceForm={serviceForm}
    setServiceForm={setServiceForm}
    handleServiceSubmit={handleServiceSubmit}
    handleEditService={handleEditService}
    handleDeleteService={handleDeleteService}
    loading={loading}
  />
)}


              {/* Users Tab */}
              {activeTab === "users" && (
                <UsersTab
                  users={users}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleDeleteUser={handleDeleteUser}
                />
              )}


              {/* Vendors Tab */}
              {activeTab === "vendors" && (
                <VendorsTab
                  vendors={vendors}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleApproveVendor={handleApproveVendor}
                  handleDeleteVendor={handleDeleteVendor}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
