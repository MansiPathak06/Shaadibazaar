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
      service.vendor_category
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (service.sub_category || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const [pricingFields, setPricingFields] = useState([
    { pricing_type: "", pricing_value: "" },
  ]);

// const serviceCategories = [
//   { value: "hindu-bridal-services", label: "Hindu Bridal Services" },
//   { value: "muslim-bridal-services", label: "Muslim Bridal Services" },
//   { value: "sikh-bridal-services", label: "Sikh Bridal Services" },
//   { value: "christian-bridal-services", label: "Christian Bridal Services" },
//   { value: "hindu-groom-services", label: "Hindu Groom Services" },
//   { value: "muslim-groom-services", label: "Muslim Groom Services" },
//   { value: "sikh-groom-services", label: "Sikh Groom Services" },
  
//   // 👇 ADD ALL THESE WEDDING VENDOR CATEGORIES
//   { value: "planner", label: "Wedding Planner" },
//   { value: "event", label: "Event Manager" },
//   { value: "venue", label: "Venue Manager" },
//   { value: "decorator", label: "Decorator" },
//   { value: "caterer", label: "Caterer" },
//   { value: "photographer", label: "Photographer" },
//   { value: "videographer", label: "Videographer" },
//   { value: "light", label: "Light & Sound" },
//   { value: "dj", label: "DJ Setup" },
//   { value: "band", label: "Band Baja" },
//   { value: "ghodi", label: "Wedding Horse (Ghodi)" },
//   { value: "dhol", label: "Dhol Team" },
//   { value: "fireworks", label: "Fireworks" },
//   { value: "tent", label: "Tent House" },
  
//   // 👇 BEAUTY & MAKEUP SERVICES
//   { value: "bridal-makeup", label: "Bridal Makeup Artist" },
//   { value: "groom-makeup", label: "Groom Makeup Artist" },
//   { value: "hair-stylist", label: "Hair Stylist" },
//   { value: "saree-draper", label: "Saree Draper / Lehenga Pinning" },
//   { value: "mehendi", label: "Mehendi Artist" },
//   { value: "nail-tech", label: "Nail Technician" },
//   { value: "spa-salon", label: "Spa & Salon Services" },
//   { value: "pre-bridal", label: "Pre-bridal Package" },
//   { value: "hijab-stylist", label: "Hijab/Headgear Stylist" },
  
//   // 👇 DECORATION SPECIALISTS
//   { value: "stage-decorators", label: "Stage Decorators" },
//   { value: "mandap-decorators", label: "Mandap/Vedi Decorators" },
//   { value: "haldi-decor", label: "Haldi Decor Setup" },
//   { value: "mehendi-decor", label: "Mehendi Decor" },
//   { value: "floral-decor", label: "Floral Decor" },
//   { value: "balloon-decor", label: "Balloon Decor" },
//   { value: "lighting-decor", label: "Lighting Decor" },
//   { value: "entrance-decor", label: "Entrance Gate Decor" },
//   { value: "photobooth-decor", label: "Photobooth Decor" },
//   { value: "centerpiece-decor", label: "Table Centerpiece" },
//   { value: "props-provider", label: "Props Provider" },
  
//   // 👇 ENTERTAINMENT
//   { value: "live-singer", label: "Live Singer" },
//   { value: "sufi-band", label: "Sufi Band" },
//   { value: "qawwali-group", label: "Qawwali Group" },
//   { value: "folk-dance", label: "Folk Dance Groups" },
//   { value: "instrumental-band", label: "Instrumental Band" },
//   { value: "anchor-emcee", label: "Anchor / Emcee" },
//   { value: "choreographer", label: "Choreographer" },
//   { value: "dj-dance-floor", label: "DJ & Dance Floor" },
//   { value: "led-wall", label: "LED Wall Provider" },
//   { value: "sound-system", label: "Sound System Vendor" },
//   { value: "celebrity-performer", label: "Celebrity Performer" },
//   { value: "fire-act", label: "Fire Act / Jugglers" },
//   { value: "kids-entertainment", label: "Kids Entertainment" },
  
//   // 👇 INVITATION & PRINTING
//   { value: "card-printing", label: "Card Printing Shop" },
//   { value: "digital-invitation", label: "Digital Invitation Designer" },
//   { value: "ecard-video", label: "E-card Video Maker" },
//   { value: "whatsapp-invitation", label: "WhatsApp Invitation Designer" },
//   { value: "box-invitation", label: "Box Invitation Vendor" },
//   { value: "gift-hamper", label: "Gift Hamper Packaging" },
//   { value: "welcome-board", label: "Welcome Board Designer" },
//   { value: "flex-printing", label: "Flex/Vinyl Printing" },
  
//   // 👇 GIFTS & PACKAGING
//   { value: "return-gift", label: "Return Gift Vendor" },
//   { value: "mehendi-favors", label: "Mehendi Favors Vendor" },
//   { value: "haldi-token", label: "Haldi Token Gift" },
//   { value: "shagun-envelope", label: "Shagun Envelope Designer" },
//   { value: "gift-packaging", label: "Bride & Groom Gift Packaging" },
//   { value: "trousseau-packing", label: "Trousseau Packing" },
//   { value: "basket-tray", label: "Basket & Tray Decor" },
//   { value: "dry-fruit-box", label: "Dry Fruit Box Vendor" },
  
//   // 👇 RELIGIOUS SERVICES
//   { value: "hindu-priest", label: "Hindu Priest (Pandit Ji)" },
//   { value: "mandap-setup", label: "Mandap Setup Experts" },
//   { value: "varmala-stage", label: "Varmala Stage Designers" },
//   { value: "qazi-nikah", label: "Qazi for Nikah" },
//   { value: "doli-arrangement", label: "Doli Arrangement" },
//   { value: "walima-setup", label: "Walima Dinner Specialists" },
//   { value: "granthi-ji", label: "Granthi Ji Services" },
//   { value: "gurudwara-team", label: "Gurudwara Coordination" },
//   { value: "pastor-father", label: "Pastor / Father Services" },
//   { value: "church-choir", label: "Church Choir Groups" },
  
//   // 👇 HOSPITALITY
//   { value: "welcome", label: "Welcome Team Services" },
//   { value: "hostess", label: "Hostess Staff" },
//   { value: "guest-management", label: "Guest Management Team" },
//   { value: "luggage-handling-staff", label: "Luggage Handling Staff" },
//   { value: "concierge-desk", label: "Concierge Desk" },
//   { value: "room-allocation", label: "Room Allocation Team" },
//   { value: "travel-desk", label: "Travel Desk" },
//   { value: "security-personnel", label: "Security Personnel" },
//   { value: "valet-parking-team", label: "Valet Parking Team" },
//   { value: "uniformed-guards", label: "Uniformed Guards" },
  
//   // 👇 TRANSPORT & LOGISTICS
//   { value: "luxury-car", label: "Luxury Car Rental" },
//   { value: "vintage-car", label: "Vintage Car Vendor" },
//   { value: "bus-traveller", label: "Bus/Traveller for Guests" },
//   { value: "cab", label: "Cab Arrangements" },
//   { value: "parking", label: "Parking Vendor" },
//   { value: "logistics", label: "Logistics Delivery" },
//   { value: "luggage-transport", label: "Luggage Transport" },
  
//   // 👇 EVENT SETUP & INFRASTRUCTURE
//   { value: "tent-house", label: "Tent House Vendor" },
//   { value: "stage-setup", label: "Stage Setup Vendor" },
//   { value: "truss-rigging", label: "Truss & Rigging" },
//   { value: "led-screen", label: "LED Screen Supplier" },
//   { value: "generator-power", label: "Generator & Power Backup" },
//   { value: "portable-ac", label: "Portable AC/Cooler" },
//   { value: "seating-arrangement", label: "Seating Arrangement" },
//   { value: "table-linen", label: "Table Linen Provider" },
//   { value: "carpeting", label: "Carpeting Vendor" },
  
//   // 👇 SHOPPING & COSTUME
//   { value: "bridal-wear", label: "Bridal Wear Store" },
//   { value: "groom-wear", label: "Groom Wear Store" },
//   { value: "jewellery-rental", label: "Jewellery Rental" },
//   { value: "artificial-jewellery", label: "Artificial Jewellery" },
//   { value: "footwear", label: "Footwear Vendor" },
//   { value: "pagdi-artist", label: "Pagdi/Safa Tying Artist" },
//   { value: "turban-veil", label: "Turban/Veil Vendors" },
//   { value: "costume-rental", label: "Costume Rental for Sangeet" },
  
//   // 👇 MISCELLANEOUS
//   { value: "balloon-dropping", label: "Balloon Dropping Setup" },
//   { value: "cold-pyro", label: "Cold Pyro & Special Effects" },
//   { value: "co2-jet", label: "CO2 Jet Vendor" },
//   { value: "confetti-cannon", label: "Confetti Cannon" },
//   { value: "fog-machine", label: "Fog Machine" },
//   { value: "bubble-machine", label: "Bubble Machine" },
//   { value: "snow-machine", label: "Snow Machine" },
//   { value: "puppet-show", label: "Puppet Show" },
//   { value: "car-decoration", label: "Car Decoration" },
//   { value: "flower-shower", label: "Flower Shower Machine" },
  
//   // 👇 ACCOMMODATION
//   { value: "hotel", label: "Hotel Booking Agents" },
//   { value: "guesthouse", label: "Guest House Provider" },
//   { value: "resort", label: "Resort Booking" },
//   { value: "villa", label: "Villa / Farmhouse" },
//   { value: "homestay", label: "Homestay Vendor" },
  
//   // 👇 PHOTOGRAPHY & VIDEOGRAPHY SPECIALISTS
//   { value: "traditional-photography", label: "Traditional Photography" },
//   { value: "candid-photography", label: "Candid Photography" },
//   { value: "drone-camera-operator", label: "Drone Camera Operator" },
//   { value: "cinematic-videography", label: "Cinematic Videography" },
//   { value: "livestream-stream", label: "LED Live Streaming" },
//   { value: "reel-creator", label: "Wedding Reel Creator" },
//   { value: "editing-vendor", label: "Photo Editing & Album" },
//   { value: "360camera", label: "360° Camera Booth" },
//   { value: "photobooth", label: "Photobooth with Props" },
//   { value: "polaroid", label: "Instant Print Polaroid" },
  
//   // 👇 SAFETY & COMPLIANCE
//   { value: "insurance", label: "Event Insurance" },
//   { value: "fire-safety", label: "Fire Safety Team" },
//   { value: "crowd", label: "Crowd Management" },
//   { value: "drone", label: "Drone Permission" },
//   { value: "license", label: "License Coordinator" },
//   { value: "cleaning", label: "Cleaning Team" },
//   { value: "sanitization", label: "Sanitization Team" },
//   { value: "medical", label: "Medical Emergency" },
// ];
const serviceCategories = [
  { value: "anchor-emcee", label: "Anchor / Emcee" },
  { value: "artificial-jewellery", label: "Artificial Jewellery" },
  { value: "balloon-decor", label: "Balloon Decor" },
  { value: "balloon-dropping", label: "Balloon Dropping Setup" },
  { value: "band", label: "Band Baja" },
  { value: "basket-tray", label: "Basket & Tray Decor" },
  { value: "bridal-makeup", label: "Bridal Makeup Artist" },
  { value: "bridal-wear", label: "Bridal Wear Store" },
  { value: "bubble-machine", label: "Bubble Machine" },
  { value: "bus-traveller", label: "Bus/Traveller for Guests" },
  { value: "cab", label: "Cab Arrangements" },
  { value: "candid-photography", label: "Candid Photography" },
  { value: "car-decoration", label: "Car Decoration" },
  { value: "carpeting", label: "Carpeting Vendor" },
  { value: "card-printing", label: "Card Printing Shop" },
  { value: "caterer", label: "Caterer" },
  { value: "celebrity-performer", label: "Celebrity Performer" },
  { value: "centerpiece-decor", label: "Table Centerpiece" },
  { value: "choreographer", label: "Choreographer" },
  { value: "church-choir", label: "Church Choir Groups" },
  { value: "cinematic-videography", label: "Cinematic Videography" },
  { value: "cleaning", label: "Cleaning Team" },
  { value: "co2-jet", label: "CO2 Jet Vendor" },
  { value: "cold-pyro", label: "Cold Pyro & Special Effects" },
  { value: "concierge-desk", label: "Concierge Desk" },
  { value: "confetti-cannon", label: "Confetti Cannon" },
  { value: "costume-rental", label: "Costume Rental for Sangeet" },
  { value: "crowd", label: "Crowd Management" },
  { value: "decorator", label: "Decorator" },
  { value: "digital-invitation", label: "Digital Invitation Designer" },
  { value: "dj", label: "DJ Setup" },
  { value: "dj-dance-floor", label: "DJ & Dance Floor" },
  { value: "dhol", label: "Dhol Team" },
  { value: "doli-arrangement", label: "Doli Arrangement" },
  { value: "drone", label: "Drone Permission" },
  { value: "drone-camera-operator", label: "Drone Camera Operator" },
  { value: "dry-fruit-box", label: "Dry Fruit Box Vendor" },
  { value: "editing-vendor", label: "Photo Editing & Album" },
  { value: "ecard-video", label: "E-card Video Maker" },
  { value: "entrance-decor", label: "Entrance Gate Decor" },
  { value: "event", label: "Event Manager" },
  { value: "fire-act", label: "Fire Act / Jugglers" },
  { value: "fire-safety", label: "Fire Safety Team" },
  { value: "fireworks", label: "Fireworks" },
  { value: "flex-printing", label: "Flex/Vinyl Printing" },
  { value: "floral-decor", label: "Floral Decor" },
  { value: "fog-machine", label: "Fog Machine" },
  { value: "folk-dance", label: "Folk Dance Groups" },
  { value: "footwear", label: "Footwear Vendor" },
  { value: "flower-shower", label: "Flower Shower Machine" },
  { value: "generator-power", label: "Generator & Power Backup" },
  { value: "ghodi", label: "Wedding Horse (Ghodi)" },
  { value: "gift-hamper", label: "Gift Hamper Packaging" },
  { value: "gift-packaging", label: "Bride & Groom Gift Packaging" },
  { value: "granthi-ji", label: "Granthi Ji Services" },
  { value: "guest-management", label: "Guest Management Team" },
  { value: "guesthouse", label: "Guest House Provider" },
  { value: "gurudwara-team", label: "Gurudwara Coordination" },
  { value: "hair-stylist", label: "Hair Stylist" },
  { value: "haldi-decor", label: "Haldi Decor Setup" },
  { value: "haldi-token", label: "Haldi Token Gift" },
  { value: "hijab-stylist", label: "Hijab/Headgear Stylist" },
  { value: "homestay", label: "Homestay Vendor" },
  { value: "hostess", label: "Hostess Staff" },
  { value: "hotel", label: "Hotel Booking Agents" },

  { value: "hindu-bridal-services", label: "Hindu Bridal Services" },
  { value: "hindu-groom-services", label: "Hindu Groom Services" },
  { value: "hindu-priest", label: "Hindu Priest (Pandit Ji)" },

  { value: "insurance", label: "Event Insurance" },
  { value: "instrumental-band", label: "Instrumental Band" },
  { value: "jewellery-rental", label: "Jewellery Rental" },
  { value: "kids-entertainment", label: "Kids Entertainment" },
  { value: "led-screen", label: "LED Screen Supplier" },
  { value: "led-wall", label: "LED Wall Provider" },
  { value: "license", label: "License Coordinator" },
  { value: "light", label: "Light & Sound" },
  { value: "lighting-decor", label: "Lighting Decor" },
  { value: "livestream-stream", label: "LED Live Streaming" },
  { value: "logistics", label: "Logistics Delivery" },
  { value: "luggage-handling-staff", label: "Luggage Handling Staff" },
  { value: "luggage-transport", label: "Luggage Transport" },
  { value: "luxury-car", label: "Luxury Car Rental" },
  { value: "mandap-decorators", label: "Mandap/Vedi Decorators" },
  { value: "mandap-setup", label: "Mandap Setup Experts" },
  { value: "medical", label: "Medical Emergency" },
  { value: "mehendi", label: "Mehendi Artist" },
  { value: "mehendi-decor", label: "Mehendi Decor" },
  { value: "mehendi-favors", label: "Mehendi Favors Vendor" },

  { value: "muslim-bridal-services", label: "Muslim Bridal Services" },
  { value: "muslim-groom-services", label: "Muslim Groom Services" },

  { value: "nail-tech", label: "Nail Technician" },
  { value: "pagdi-artist", label: "Pagdi/Safa Tying Artist" },
  { value: "parking", label: "Parking Vendor" },
  { value: "pastor-father", label: "Pastor / Father Services" },
  { value: "photobooth", label: "Photobooth with Props" },
  { value: "photobooth-decor", label: "Photobooth Decor" },
  { value: "photographer", label: "Photographer" },
  { value: "planner", label: "Wedding Planner" },
  { value: "polaroid", label: "Instant Print Polaroid" },
  { value: "portable-ac", label: "Portable AC/Cooler" },
  { value: "pre-bridal", label: "Pre-bridal Package" },
  { value: "props-provider", label: "Props Provider" },
  { value: "puppet-show", label: "Puppet Show" },
  { value: "qawwali-group", label: "Qawwali Group" },
  { value: "qazi-nikah", label: "Qazi for Nikah" },
  { value: "reel-creator", label: "Wedding Reel Creator" },
  { value: "resort", label: "Resort Booking" },
  { value: "return-gift", label: "Return Gift Vendor" },
  { value: "room-allocation", label: "Room Allocation Team" },
  { value: "safety", label: "Sanitization Team" },
  { value: "saree-draper", label: "Saree Draper / Lehenga Pinning" },
  { value: "security-personnel", label: "Security Personnel" },
  { value: "seating-arrangement", label: "Seating Arrangement" },

  { value: "sikh-bridal-services", label: "Sikh Bridal Services" },
  { value: "sikh-groom-services", label: "Sikh Groom Services" },

  { value: "snow-machine", label: "Snow Machine" },
  { value: "sound-system", label: "Sound System Vendor" },
  { value: "spa-salon", label: "Spa & Salon Services" },
  { value: "stage-decorators", label: "Stage Decorators" },
  { value: "stage-setup", label: "Stage Setup Vendor" },
  { value: "sufi-band", label: "Sufi Band" },
  { value: "table-linen", label: "Table Linen Provider" },
  { value: "tent", label: "Tent House" },
  { value: "tent-house", label: "Tent House Vendor" },
  { value: "traditional-photography", label: "Traditional Photography" },
  { value: "travel-desk", label: "Travel Desk" },
  { value: "trousseau-packing", label: "Trousseau Packing" },
  { value: "truss-rigging", label: "Truss & Rigging" },
  { value: "turban-veil", label: "Turban/Veil Vendors" },
  { value: "uniformed-guards", label: "Uniformed Guards" },
  { value: "valet-parking-team", label: "Valet Parking Team" },
  { value: "varmala-stage", label: "Varmala Stage Designers" },
  { value: "venue", label: "Venue Manager" },
  { value: "videographer", label: "Videographer" },
  { value: "villa", label: "Villa / Farmhouse" },
  { value: "vintage-car", label: "Vintage Car Vendor" },
  { value: "walima-setup", label: "Walima Dinner Specialists" },
  { value: "welcome", label: "Welcome Team Services" },
  { value: "welcome-board", label: "Welcome Board Designer" },
  { value: "whatsapp-invitation", label: "WhatsApp Invitation Designer" },

  { value: "banquet-venues", label: "Banquet Venues" },
{ value: "outdoor-venues", label: "Outdoor Venues" },
{ value: "mixed-venues", label: "Mixed Venues" },
{ value: "destination-wedding-venues", label: "Destination Wedding Venues" },
{ value: "religious-venues", label: "Religious Venues" },
{ value: "cultural-traditional-venues", label: "Cultural / Traditional Venues" },
{ value: "modern-unique-venues", label: "Modern & Unique Venues" },


  { value: "guest-houses", label: "Guest Houses" },
  { value: "homestays-and-rentals", label: "Homestays & Rentals" },
  { value: "hotel-accommodation", label: "Hotel Accommodation" },
  { value: "resort-accommodation", label: "Resort Accommodation" },
  { value: "wedding-accommodation", label: "Wedding Accommodation" },
  
  // WEDDING VENUE TYPES
  { value: "main-wedding-venues", label: "Main Wedding Venues" },
  { value: "pre-wedding-venues", label: "Pre-Wedding Venues" },
  { value: "post-wedding-venues", label: "Post-Wedding Venues" },
];


  const serviceSubCategories = {
    "hindu-bridal-services": [
      { value: "bridal-makeup", label: "Bridal Makeup (HD/Airbrush)" },
      { value: "bridal-hairstyle", label: "Bridal Hairstyle" },
      { value: "mehendi-artist", label: "Mehendi Artist" },
      { value: "pre-bridal-package", label: "Pre-Bridal Package" },
      { value: "spa-facial", label: "Spa & Facial" },
      { value: "ubtan-ceremony", label: "Ubtan Ceremony Setup" },
      { value: "bridal-photoshoot", label: "Bridal Photoshoot" },
      { value: "saree-draping", label: "Saree Draping Artist" },
      { value: "lehenga-pinning", label: "Lehenga Pinning Expert" },
    ],
    "muslim-bridal-services": [
      { value: "bridal-makeup", label: "Bridal Makeup" },
      { value: "hijab-styling", label: "Hijab Styling" },
      { value: "mehendi-artist", label: "Henna Artist (Arabic/Indo-Arabic)" },

      { value: "spa-and-facial", label: "Spa & Facial" },
      { value: "bridal-photoshoot", label: "Bridal Photoshoot" },
      { value: "car-decoration", label: "Car Decoration" },
      { value: "stage-decoration", label: "Stage Decoration" },
    ],
    "sikh-bridal-services": [
      { value: "sikh-bridal-makeup", label: "Sikh Bridal Makeup" },
      { value: "choora-ceremony-expert", label: "Choora Ceremony Expert" },
      { value: "kaleera-photoshoot", label: "Kaleera Photoshoot" },
      { value: "mehendi-artist", label: "Mehendi Artist" },
      { value: "hair-accessories", label: "Hair Accessories" },
      { value: "doli-arrangement", label: "Doli Arrangement" },
      { value: "bhangra-team", label: "Bhangra Team" },
    ],
    "christian-bridal-services": [
      { value: "bridal-makeup-hair", label: "Bridal Makeup & Hair" },
      { value: "gown-tailoring", label: "Gown Tailoring" },
      { value: "manicure-pedicure", label: "Manicure & Nails" },
      { value: "bridal-photoshoot", label: "Bridal Photoshoot" },
      { value: "church-choir", label: "Church Choir" },
      { value: "wedding-planner", label: "Wedding Planner" },
    ],

    "hindu-groom-services": [
      { value: "groom-makeup", label: "Groom Makeup" },
      { value: "hairstyling", label: "Hairstyling" },
      { value: "beard-trim-shave", label: "Beard Trim/Shave" },
      { value: "ubtan-session", label: "Ubtan Session" },
      { value: "groom-photoshoot", label: "Groom Photoshoot" },
      { value: "turban-tying-expert", label: "Turban Tying Expert" },
      { value: "sehra-tying-expert", label: "Sehra Tying Expert" },
      { value: "ghodi-decoration", label: "Ghodi Decoration" },
      { value: "band-baja", label: "Band-Baja" },
      { value: "dj-for-baraat", label: "DJ for Baraat" },
    ],

    "muslim-groom-services": [
      { value: "groom-makeover", label: "Groom Makeover" },
      { value: "beard-styling", label: "Beard Styling" },
      { value: "arabic-henna", label: "Arabic Henna" },
      { value: "groom-photoshoot", label: "Groom Photoshoot" },
      { value: "car-decoration", label: "Car Decoration" },
      { value: "baraat-management", label: "Baraat Management" },
    ],

    "sikh-groom-services": [
      { value: "turban-expert", label: "Turban Expert" },
      { value: "beard-setting", label: "Beard Setting" },
      { value: "groom-photoshoot", label: "Groom Photoshoot" },
      { value: "dhol-nagara", label: "Dhol/Nagara" },
      { value: "bhangra-group", label: "Bhangra Group" },
    ],
    "christian-groom-services": [
      { value: "groom-styling", label: "Groom Styling" },
      { value: "suit-fitting", label: "Suit Fitting" },
      { value: "groom-portrait-shoot", label: "Groom Portrait Shoot" },
      { value: "choir-band", label: "Choir / Band" },
    ],

   // 👇 ALL THESE HAVE NO SUBCATEGORIES (empty arrays)
  planner: [],
  event: [],
  venue: [],
  decorator: [],
  caterer: [],
  photographer: [],
  videographer: [],
  light: [],
  dj: [],
  band: [],
  ghodi: [],
  dhol: [],
  fireworks: [],
  tent: [],
  "bridal-makeup": [],
  "groom-makeup": [],
  "hair-stylist": [],
  "saree-draper": [],
  mehendi: [],
  "nail-tech": [],
  "spa-salon": [],
  "pre-bridal": [],
  "hijab-stylist": [],
  "stage-decorators": [],
  "mandap-decorators": [],
  "haldi-decor": [],
  "mehendi-decor": [],
  "floral-decor": [],
  "balloon-decor": [],
  "lighting-decor": [],
  "entrance-decor": [],
  "photobooth-decor": [],
  "centerpiece-decor": [],
  "props-provider": [],
  "live-singer": [],
  "sufi-band": [],
  "qawwali-group": [],
  "folk-dance": [],
  "instrumental-band": [],
  "anchor-emcee": [],
  choreographer: [],
  "dj-dance-floor": [],
  "led-wall": [],
  "sound-system": [],
  "celebrity-performer": [],
  "fire-act": [],
  "kids-entertainment": [],
  "card-printing": [],
  "digital-invitation": [],
  "ecard-video": [],
  "whatsapp-invitation": [],
  "box-invitation": [],
  "gift-hamper": [],
  "welcome-board": [],
  "flex-printing": [],
  "return-gift": [],
  "mehendi-favors": [],
  "haldi-token": [],
  "shagun-envelope": [],
  "gift-packaging": [],
  "trousseau-packing": [],
  "basket-tray": [],
  "dry-fruit-box": [],
  "hindu-priest": [],
  "mandap-setup": [],
  "varmala-stage": [],
  "qazi-nikah": [],
  "doli-arrangement": [],
  "walima-setup": [],
  "granthi-ji": [],
  "gurudwara-team": [],
  "pastor-father": [],
  "church-choir": [],
  welcome: [],
  hostess: [],
  "guest-management": [],
  "luggage-handling-staff": [],
  "concierge-desk": [],
  "room-allocation": [],
  "travel-desk": [],
  "security-personnel": [],
  "valet-parking-team": [],
  "uniformed-guards": [],
  "luxury-car": [],
  "vintage-car": [],
  "bus-traveller": [],
  cab: [],
  parking: [],
  logistics: [],
  "luggage-transport": [],
  "tent-house": [],
  "stage-setup": [],
  "truss-rigging": [],
  "led-screen": [],
  "generator-power": [],
  "portable-ac": [],
  "seating-arrangement": [],
  "table-linen": [],
  carpeting: [],
  "bridal-wear": [],
  "groom-wear": [],
  "jewellery-rental": [],
  "artificial-jewellery": [],
  footwear: [],
  "pagdi-artist": [],
  "turban-veil": [],
  "costume-rental": [],
  "balloon-dropping": [],
  "cold-pyro": [],
  "co2-jet": [],
  "confetti-cannon": [],
  "fog-machine": [],
  "bubble-machine": [],
  "snow-machine": [],
  "puppet-show": [],
  "car-decoration": [],
  "flower-shower": [],
  hotel: [],
  guesthouse: [],
  resort: [],
  villa: [],
  homestay: [],
  "traditional-photography": [],
  "candid-photography": [],
  "drone-camera-operator": [],
  "cinematic-videography": [],
  "livestream-stream": [],
  "reel-creator": [],
  "editing-vendor": [],
  "360camera": [],
  photobooth: [],
  polaroid: [],
  insurance: [],
  "fire-safety": [],
  crowd: [],
  drone: [],
  license: [],
  cleaning: [],
  sanitization: [],
  medical: [],

  // BANQUET VENUES
"banquet-venues": [
  { value: "indoor-banquet-halls", label: "Indoor Banquet Halls" },
  { value: "luxury-banquets", label: "Luxury Banquets" },
  { value: "budget-banquet-halls", label: "Budget Banquet Halls" },
  { value: "ac-non-ac-banquets", label: "AC / Non-AC Banquets" },
  { value: "hotel-banquet-halls", label: "Hotel Banquet Halls" },
  { value: "community-center-banquets", label: "Community Center Banquets" },
  { value: "government-banquet-halls", label: "Government Banquet Halls" },
],


// OUTDOOR VENUES
"outdoor-venues": [
  { value: "open-lawns", label: "Open Lawns" },
  { value: "wedding-gardens", label: "Wedding Gardens" },
  { value: "farmhouses", label: "Farmhouses" },
  { value: "resort-lawns", label: "Resort Lawns" },
  { value: "club-lawns", label: "Club Lawns" },
  { value: "poolside-lawns", label: "Poolside Lawns" },
],


// MIXED VENUES
"mixed-venues": [
  { value: "lawn-banquet-combination", label: "Lawn + Banquet Combination" },
  { value: "hall-terrace-venue", label: "Hall + Terrace Venue" },
  { value: "hall-poolside-venue", label: "Hall + Poolside Venue" },
  { value: "lawn-pool-area", label: "Lawn + Pool Area" },
  { value: "tent-lawn-setup", label: "Tent + Lawn Setup" },
],


// DESTINATION WEDDING VENUES
"destination-wedding-venues": [
  { value: "beach-resorts", label: "Beach Resorts (Goa, Kerala)" },
  { value: "palace-hotels", label: "Palace Hotels (Rajasthan)" },
  { value: "hill-resorts", label: "Hill Resorts (Nainital, Manali, Mussoorie)" },
  { value: "desert-camps", label: "Desert Camps (Jaisalmer)" },
  { value: "international-luxury-resorts", label: "Luxury International Resorts (Dubai, Bali, Thailand)" },
],


// RELIGIOUS VENUES
"religious-venues": [
  { value: "temple-mandapam-halls", label: "Temples (Mandapam Wedding Halls)" },
  { value: "gurudwaras-anand-karaj", label: "Gurudwaras (Anand Karaj)" },
  { value: "churches", label: "Churches" },
  { value: "mosques-nikah-halls", label: "Mosques (Nikah Halls)" },
],


// CULTURAL / TRADITIONAL VENUES
"cultural-traditional-venues": [
  { value: "haveli-style-venues", label: "Haveli-style Wedding Venues" },
  { value: "royal-palace-venues", label: "Royal Palace Venues" },
  { value: "heritage-properties", label: "Heritage Properties" },
  { value: "rajasthani-dharamshalas", label: "Rajasthani Dharamshalas" },
  { value: "kalyana-mandapam", label: "Kalyana Mandapam (South India)" },
],


// MODERN & UNIQUE VENUES
"modern-unique-venues": [
  { value: "rooftop-venues", label: "Rooftop Venues" },
  { value: "private-villas", label: "Private Villas" },
  { value: "glass-house-venues", label: "Glass House Venues" },
  { value: "riverfront-venues", label: "Riverfront Venues" },
  { value: "lakeside-venues", label: "Lakeside Venues" },
  { value: "boathouse-wedding-spaces", label: "Boathouse Wedding Spaces" },
  { value: "cruise-wedding-venues", label: "Cruise Wedding Venues" },
  { value: "barn-style-venues", label: "Barn-style Venues" },
  { value: "factory-warehouse-venues", label: "Factory / Warehouse Converted Venues" },
  { value: "art-galleries", label: "Art Galleries" },
  { value: "sports-clubs-gymkhana", label: "Sports Clubs / Gymkhana" },
],


   // GUEST HOUSES
  "guest-houses": [
    { value: "family-guest-houses", label: "Family Guest Houses" },
    { value: "government-guest-houses", label: "Government Guest Houses" },
    { value: "private-guest-houses", label: "Private Guest Houses" },
    { value: "dharamshalas", label: "Dharamshalas" },
    { value: "budget-guest-houses", label: "Budget Guest Houses" },
    { value: "luxury-guest-houses", label: "Luxury Guest Houses" },
  ],
  
  // HOMESTAYS & RENTALS
  "homestays-and-rentals": [
    { value: "airbnb-style-apartments", label: "Airbnb-style Apartments" },
    { value: "homestay-private-rooms", label: "Homestay Private Rooms" },
    { value: "farmhouse-stay", label: "Farmhouse Stay" },
    { value: "villas-on-rent", label: "Villas on Rent" },
    { value: "studio-apartments", label: "Studio Apartments" },
    { value: "hostels", label: "Hostels" },
  ],
  
  // HOTEL ACCOMMODATION
  "hotel-accommodation": [
    { value: "5-star-hotels", label: "5-Star Hotels" },
    { value: "4-star-hotels", label: "4-Star Hotels" },
    { value: "3-star-hotels", label: "3-Star Hotels" },
    { value: "boutique-hotels", label: "Boutique Hotels" },
    { value: "budget-hotels", label: "Budget Hotels" },
    { value: "serviced-apartments", label: "Serviced Apartments" },
    { value: "executive-rooms-vip", label: "Executive Rooms for VIP Guests" },
  ],
  
  // RESORT ACCOMMODATION
  "resort-accommodation": [
    { value: "luxury-resorts", label: "Luxury Resorts" },
    { value: "eco-resorts", label: "Eco Resorts" },
    { value: "cottage-stays", label: "Cottage Stays" },
    { value: "villa-resorts", label: "Villa Resorts" },
    { value: "forest-resorts", label: "Forest Resorts" },
    { value: "beach-resorts", label: "Beach Resorts" },
    { value: "hill-station-resorts", label: "Hill Station Resorts" },
  ],
  
  // WEDDING ACCOMMODATION
  "wedding-accommodation": [
    { value: "baraat-accommodation-block", label: "Baraat Accommodation Block" },
    { value: "brides-family-accommodation-block", label: "Bride's Family Accommodation Block" },
    { value: "grooms-suite", label: "Groom's Suite" },
    { value: "bridal-makeup-room", label: "Bridal Makeup Room" },
    { value: "grooms-dressing-room", label: "Groom's Dressing Room" },
    { value: "vip-guest-rooms", label: "VIP Guest Rooms" },
    { value: "hospitality-lounge", label: "Hospitality Lounge" },
    { value: "command-center-room", label: "Command Center Room" },
    { value: "changing-rooms", label: "Changing Rooms" },
    { value: "haldi-mehendi-venue-rooms", label: "Haldi/Mehendi Venue Rooms" },
  ],
  
  // MAIN WEDDING VENUES
  "main-wedding-venues": [
    { value: "mandap-venues", label: "Mandap Venues" },
    { value: "vedi-stage-area", label: "Vedi Stage Area" },
    { value: "nikah-halls", label: "Nikah Halls" },
    { value: "anand-karaj-gurudwara", label: "Anand Karaj Gurudwara" },
    { value: "church-wedding-halls", label: "Church Wedding Halls" },
    { value: "reception-venues", label: "Reception Venues" },
    { value: "baraat-assembly-area", label: "Baraat Assembly Area" },
    { value: "parking-grounds", label: "Parking Grounds" },
  ],
  
  // PRE-WEDDING VENUES
  "pre-wedding-venues": [
    { value: "roka-venue", label: "Roka Venue" },
    { value: "engagement-hall", label: "Engagement Hall" },
    { value: "haldi-venue", label: "Haldi Venue" },
    { value: "mehendi-venue", label: "Mehendi Venue" },
    { value: "sangeet-banquet", label: "Sangeet Banquet" },
    { value: "cocktail-party-venues", label: "Cocktail Party Venues" },
    { value: "bachelor-bachelorette-venues", label: "Bachelor/Bachelorette Venues" },
  ],
  
  // POST-WEDDING VENUES
  "post-wedding-venues": [
    { value: "reception-banquets", label: "Reception Banquets" },
    { value: "walima-venues", label: "Walima Venues" },
    { value: "pagphera-ceremony-venues", label: "Pagphera Ceremony Venues" },
    { value: "home-lawn-venues", label: "Home Lawn Venues" },
    { value: "dining-halls", label: "Dining Halls" },
  ],
  };

  // Get available subcategories based on selected category
  const availableSubCategories =
    serviceSubCategories[serviceForm.vendor_category] || [];

  const addPricingField = () => {
    setPricingFields([
      ...pricingFields,
      { pricing_type: "", pricing_value: "" },
    ]);
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
          className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
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

          <form
            onSubmit={(e) => handleServiceSubmit(e, pricingFields)}
            className="space-y-8"
          >
            {/* 1️⃣ BASIC INFORMATION */}
            <div className="border-b pb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-linear-to-r from-[#F04393] to-[#2A0B8B] bg-clip-text text-transparent pb-2">
                Basic Information
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ✅ CATEGORY SELECT */}
                {/* ✅ CATEGORY SELECT */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Vendor Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={serviceForm.vendor_category}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        vendor_category: e.target.value,
                        sub_category: "", // Reset subcategory when category changes
                      })
                    }
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                  >
                    <option value="">🎯 Select Vendor Category</option>
                    {serviceCategories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
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
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        service_name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="e.g., Premium Groom Makeup"
                  />
                </div>

                {/* ✅ SERVICE NAME */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={serviceForm.service_name}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        service_name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="e.g., Premium Groom Makeup"
                  />
                </div>
              </div>

              {/* ✅ SUBCATEGORY - Only show if category has subcategories */}
              {availableSubCategories.length > 0 && (
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Sub Category
                  </label>
                  <select
                    value={serviceForm.sub_category}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        sub_category: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                  >
                    <option value="">Select Subcategory</option>
                    {availableSubCategories.map((subCat) => (
                      <option key={subCat.value} value={subCat.value}>
                        {subCat.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Price + Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Starting Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    value={serviceForm.starting_price}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        starting_price: e.target.value,
                      })
                    }
                    required
                    min="0"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="5000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Working Since
                  </label>
                  <input
                    type="number"
                    value={serviceForm.working_since}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        working_since: e.target.value,
                      })
                    }
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
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      description: e.target.value,
                    })
                  }
                  required
                  rows="4"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                  placeholder="Describe your service in detail..."
                />
              </div>
            </div>

            {/* 2️⃣ SERVICE DETAILS - NOW FULLY WORKING */}
            <div className="border-b pb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                Service Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ✅ Area of Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Area of Service
                  </label>
                  <input
                    type="text"
                    value={serviceForm.area_of_service}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        area_of_service: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Pan India, Moradabad, Delhi NCR..."
                  />
                </div>

                {/* ✅ Service For */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service For
                  </label>
                  <select
                    value={serviceForm.male_female_unisex}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        male_female_unisex: e.target.value,
                      })
                    }
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
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Staff Status
                  </label>
                  <input
                    type="text"
                    value={serviceForm.staff_status}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        staff_status: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Full Time / On Demand / 5+ Staff"
                  />
                </div>

                {/* ✅ Onsite Facility */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Onsite Facility
                  </label>
                  <input
                    type="text"
                    value={serviceForm.onsite_facility}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        onsite_facility: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Available / Not Available / At Venue"
                  />
                </div>

                {/* ✅ Payment Mode */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Mode
                  </label>
                  <input
                    type="text"
                    value={serviceForm.payment_mode}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        payment_mode: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Cash, UPI, Card, Bank Transfer"
                  />
                </div>

                {/* ✅ Website */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Website
                  </label>
                  <input
                    type="url"
                    value={serviceForm.website}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        website: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              {/* Facilities + Other Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Facilities
                  </label>
                  <textarea
                    value={serviceForm.facilities}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        facilities: e.target.value,
                      })
                    }
                    rows="3"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                    placeholder="AC Room, Parking, Changing Room, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Other Services
                  </label>
                  <textarea
                    value={serviceForm.other_services}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        other_services: e.target.value,
                      })
                    }
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
                <h4 className="text-xl font-semibold text-gray-800 bg-linear-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent pb-2">
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
                        onChange={(e) =>
                          updatePricingField(
                            index,
                            "pricing_type",
                            e.target.value,
                          )
                        }
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                        placeholder="Video Editing"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={field.pricing_value}
                        onChange={(e) =>
                          updatePricingField(
                            index,
                            "pricing_value",
                            e.target.value,
                          )
                        }
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
              <h4 className="text-xl font-semibold text-gray-800 mb-6 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
                Contact Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={serviceForm.contact_person}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        contact_person: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={serviceForm.contact_email}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        contact_email: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="contact@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={serviceForm.contact_phone}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        contact_phone: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Address
                  </label>
                  <input
                    type="text"
                    value={serviceForm.address}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        address: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 text-sm"
                    placeholder="Shop No. 12, Civil Lines, Moradabad"
                  />
                </div>
              </div>
            </div>

            {/* 5️⃣ IMAGES + FEATURED */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Image URLs (comma-separated)
                </label>
                <textarea
                  value={serviceForm.images}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, images: e.target.value })
                  }
                  rows="3"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#F04393]/20 focus:border-[#F04393] transition-all duration-300 resize-vertical text-sm"
                  placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
                />
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <label className="flex items-center gap-3 p-4 bg-linear-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 w-full md:w-auto">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={serviceForm.featured}
                    onChange={(e) =>
                      setServiceForm({
                        ...serviceForm,
                        featured: e.target.checked,
                      })
                    }
                    className="w-6 h-6 text-[#F04393] border-2 border-gray-300 rounded-xl focus:ring-[#F04393] accent-[#F04393]"
                  />
                  <span className="text-lg font-semibold text-gray-900">
                    ⭐ Mark as Featured Service
                  </span>
                </label>
              </div>
            </div>

            {/* ✅ SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-linear-to-r from-[#F04393] via-pink-500 to-[#2A0B8B] text-white rounded-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none shadow-xl"
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
            <thead className="bg-linear-to-r from-[#F04393] via-pink-500 to-[#2A0B8B] text-white">
              <tr>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Service
                </th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Category
                </th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Price
                </th>
                <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                  Area
                </th>
                <th className="px-8 py-5 text-center text-sm font-bold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredServices.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-8 py-16 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Search className="w-12 h-12 text-gray-300" />
                      <p className="text-xl font-medium">No services found</p>
                      <p className="text-sm">Try adjusting your search terms</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-linear-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-200">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        {service.images && service.images.length > 0 && (
                          <div className="relative">
                            <img
                              src={
                                Array.isArray(service.images)
                                  ? service.images[0]
                                  : service.images
                              }
                              alt={service.service_name}
                              className="w-14 h-14 rounded-2xl object-cover shadow-lg border-4 border-white"
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/56x56/6B7280/FFFFFF?text=??";
                              }}
                            />
                            {service.featured && (
                              <div className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                                ⭐
                              </div>
                            )}
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-lg text-gray-900 leading-tight">
                            {service.service_name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {service.contact_person || "N/A"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900 capitalize text-sm">
                          {service.vendor_category}
                        </div>
                        {service.sub_category && (
                          <div className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                            → {service.sub_category}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-2xl font-black text-gray-900">
                        ₹{service.starting_price}
                      </p>
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
