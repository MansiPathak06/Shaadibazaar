"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Loader2,
  PhoneCall,
  Users,
  IndianRupee,
} from "lucide-react";

export default function AllVenuesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const category = searchParams.get("category"); // e.g., "guest-houses"
  const subCategory = searchParams.get("subCategory"); // e.g., "family-guest-houses"

  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Category display names mapping
  const categoryDisplayNames = {
    "banquet-venues": "Banquet Venues",
    "cultural-traditional-venues": "Cultural & Traditional Venues",
    
"destination-wedding-venues": "Destination Wedding Venues",
"modern-and-unique-venues": "Modern & Unique Venues",
"mixed-venues": "Mixed Venues",
"outdoor-venues": "Outdoor Venues",
"religious-venues": "Religious Venues",

    "guest-houses": "Guest Houses",
    "homestays-and-rentals": "Homestays & Rentals",
    "hotel-accommodation": "Hotel Accommodation",
    "wedding-specific": "Wedding Specific Venues",
     "wedding-accommodation": "Wedding Accommodation",
       "main-wedding-venues": "Main Wedding Venues",
       "pre-wedding-venues": "Pre-Wedding Venues", 
       "post-wedding-venues": "Post-Wedding Venues",

  };

  // Subcategory display names mapping
  const subCategoryDisplayNames = {
"indoor-banquet-halls": "Indoor Banquet Halls",
"luxury-banquets": "Luxury Banquets",
"budget-banquet-halls": "Budget Banquet Halls",
"ac-non-ac-banquets": "AC/Non-AC Banquets",
"hotel-banquet-halls": "Hotel Banquet Halls",
"community-center-banquets": "Community Center Banquets",
"government-banquet-halls": "Government Banquet Halls",

"haveli-style-venues": "Haveli-style Wedding Venues",
"royal-palace-venues": "Royal Palace Venues",
"heritage-properties": "Heritage Properties",
"rajasthani-dharamshalas": "Rajasthani Dharamshalas",
"kalyana-mandapam": "Kalyana Mandapam (South India)",
"traditional-courtyard-venues": "Traditional Courtyard Venues",
"cultural-wedding-halls": "Cultural Wedding Halls",

// Destination Wedding Venues subcategories
"beach-resorts": "Beach Resorts (Goa, Kerala)",
"palace-hotels": "Palace Hotels (Rajasthan)",
"hill-resorts": "Hill Resorts (Nainital, Manali, Mussoorie)",
"desert-camps": "Desert Camps (Jaisalmer)",
"luxury-international-resorts": "Luxury International Resorts (Dubai, Bali, Thailand)",

// Cultural & Traditional Venues subcategories
"haveli-style-venues": "Haveli-style Wedding Venues",
"royal-palace-venues": "Royal Palace Venues",
"heritage-properties": "Heritage Properties",
"rajasthani-dharamshalas": "Rajasthani Dharamshalas",
"kalyana-mandapam": "Kalyana Mandapam (South India)",
"traditional-courtyard-venues": "Traditional Courtyard Venues",
"cultural-wedding-halls": "Cultural Wedding Halls",

// Modern & Unique Venues subcategories
"rooftop-venues": "Rooftop Venues",
"private-villas": "Private Villas",
"glass-house-venues": "Glass House Venues",
"riverfront-venues": "Riverfront Venues",
"lakeside-venues": "Lakeside Venues",
"boathouse-wedding-spaces": "Boathouse Wedding Spaces",
"cruise-wedding-venue": "Cruise Wedding Venue",
"barn-style-venues": "Barn-Style Venues",
"factory-warehouse-venues": "Factory / Warehouse Converted Venues",
"art-galleries": "Art Galleries",
"sports-clubs-gymkhana": "Sports Clubs / Gymkhana",

// Mixed Venues subcategories
"lawn-banquet-combination": "Lawn + Banquet Combination",
"hall-terrace-venue": "Hall + Terrace Venue",
"hall-poolside-venue": "Hall + Poolside Venue",
"lawn-pool-area": "Lawn + Pool Area",
"tent-lawn-setup": "Tent + Lawn Setup",

"open-lawns": "Open Lawns",
"wedding-gardens": "Wedding Gardens",
"farmhouses": "Farmhouses",
"resort-lawns": "Resort Lawns",
"club-lawns": "Club Lawns",
"poolside-lawns": "Poolside Lawns",

// Religious Venues subcategories
"temple-mandapams": "Temples (Mandapam Wedding Halls)",
"gurudwaras": "Gurudwaras (Anand Karaj)",
"churches": "Churches",
"nikah-halls": "Mosques (Nikah Halls)",

    // Guest Houses
    "family-guest-houses": "Family Guest Houses",
    "government-guest-houses": "Government Guest Houses",
    "private-guest-houses": "Private Guest Houses",
    "dharamshalas": "Dharamshalas",
    "budget-guest-houses": "Budget Guest Houses",
    "luxury-guest-houses": "Luxury Guest Houses",
    
    // Homestays & Rentals
    "airbnb-style-apartments": "Airbnb-style Apartments",
    "homestay-private-rooms": "Homestay Private Rooms",
    "farmhouse-stay": "Farmhouse Stay",
    "villas-on-rent": "Villas on Rent",
    "studio-apartments": "Studio Apartments",
    "hostels": "Hostels",
    
    // Hotel Accommodation subcategories - ADD THESE:
  "5-star-hotels": "5-Star Hotels",
  "4-star-hotels": "4-Star Hotels",
  "3-star-hotels": "3-Star Hotels",
  "boutique-hotels": "Boutique Hotels",
  "budget-hotels": "Budget Hotels",
  "serviced-apartments": "Serviced Apartments",
  "executive-rooms-vip": "Executive Rooms for VIP Guests",

   // Resort Accommodation subcategories - ADD THESE:
  "luxury-resorts": "Luxury Resorts",
  "eco-resorts": "Eco Resorts",
  "cottage-stays": "Cottage Stays",
  "villa-resorts": "Villa Resorts",
  "forest-resorts": "Forest Resorts",
  "beach-resorts": "Beach Resorts",
  "hill-station-resorts": "Hill Station Resorts",

  // Wedding Accommodation subcategories - ADD THESE:
  "baraat-accommodation-block": "Baraat Accommodation Block",
  "brides-family-accommodation-block": "Bride's Family Accommodation Block",
  "grooms-suite": "Groom's Suite",
  "bridal-makeup-room": "Bridal Makeup Room",
  "grooms-dressing-room": "Groom's Dressing Room",
  "vip-guest-rooms": "VIP Guest Rooms",
  "hospitality-lounge": "Hospitality Lounge",
  "command-center-room": "Command Center Room",
  "changing-rooms": "Changing Rooms",
  "haldi-mehendi-venue-rooms": "Haldi/Mehendi Venue Rooms",

   // Main Wedding Venues subcategories - ADD THESE:
  "mandap-venues": "Mandap Venues",
  "vedi-stage-area": "Vedi Stage Area",
  "nikah-halls": "Nikah Halls",
  "anand-karaj-gurudwara": "Anand Karaj Gurudwara",
  "church-wedding-halls": "Church Wedding Halls",
  "reception-venues": "Reception Venues",
  "baraat-assembly-area": "Baraat Assembly Area",
  "parking-grounds": "Parking Grounds",

  // Pre-Wedding Venues subcategories - ADD THESE:
"roka-venue": "Roka Venue",
"engagement-hall": "Engagement Hall",
"haldi-venue": "Haldi Venue",
"mehendi-venue": "Mehendi Venue",
"sangeet-banquet": "Sangeet Banquet",
"cocktail-party-venues": "Cocktail Party Venues",
"bachelor-bachelorette-venues": "Bachelor/Bachelorette Venues",

// Post-Wedding Venues subcategories - ADD THESE:
"reception-banquets": "Reception Banquets",
"walima-venues": "Walima Venues",
"pagphera-ceremony-venues": "Pagphera Ceremony Venues",
"home-lawn-venues": "Home Lawn Venues",
"dining-halls": "Dining Halls",
  };

  const categoryImages = {
    "guest-houses": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
    "family-guest-houses": "https://i.pinimg.com/736x/7f/5e/74/7f5e749e86a77fa3fe9ebd7bb130d37d.jpg",
    "government-guest-houses": "https://i.pinimg.com/1200x/ac/00/61/ac0061d07dfd87b850264a2bc5d10566.jpg",
    "private-guest-houses": "https://i.pinimg.com/1200x/d3/c1/40/d3c1407f99da5fe4c5f0b771d70f210f.jpg",
    "dharamshalas": "https://i.pinimg.com/1200x/33/6a/f3/336af32ebc15345c997adfdf3932fb41.jpg",
    "budget-guest-houses": "https://i.pinimg.com/1200x/d2/91/63/d29163e94bf7966e319479ddb0eb9433.jpg",
    "luxury-guest-houses": "https://i.pinimg.com/736x/95/c3/d4/95c3d47c44f4c52f6528d6f9af552874.jpg",

    "cultural-traditional-venues": "https://i.pinimg.com/736x/50/d3/0f/50d30fce47714a9ba7f5a3ea4b893e3f.jpg",
"haveli-style-venues": "https://i.pinimg.com/1200x/43/30/34/43303435691d0b46485cb2a24fcf3af8.jpg",
"royal-palace-venues": "https://i.pinimg.com/1200x/f1/1a/76/f11a7623f97d7748e47da44483a0dd00.jpg",
"heritage-properties": "https://i.pinimg.com/736x/0c/89/00/0c89006e0ab83d3dbbea1ce919578cd4.jpg",
"rajasthani-dharamshalas": "https://i.pinimg.com/736x/a1/a5/18/a1a5187030beb080da79a8f069938149.jpg",
"kalyana-mandapam": "https://i.pinimg.com/1200x/15/34/60/153460b69b859ff62d91c941f4ba6074.jpg",
"traditional-courtyard-venues": "https://i.pinimg.com/1200x/be/7c/f3/be7cf33ee4176aaacc2d4ac114e4a3b2.jpg",
"cultural-wedding-halls": "https://i.pinimg.com/736x/b5/ba/30/b5ba30682346fed0ac1decf643aab118.jpg",
    


    // Homestays & Rentals
    "homestays-and-rentals": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
    "airbnb-style-apartments": "https://i.pinimg.com/1200x/ce/b6/fc/ceb6fc58f4cbf7ecd2fe0cadde9b6d37.jpg",
    "homestay-private-rooms": "https://i.pinimg.com/1200x/73/89/0e/73890e9e4ffa1c4b19de309c6524b406.jpg",
    "farmhouse-stay": "https://i.pinimg.com/1200x/07/be/75/07be75cb390b26318c746299f0f471b6.jpg",
    "villas-on-rent": "https://i.pinimg.com/736x/95/c3/d4/95c3d47c44f4c52f6528d6f9af552874.jpg",
    "studio-apartments": "https://i.pinimg.com/1200x/6d/60/de/6d60de76f916bcb276d2a033152f0362.jpg",
    "hostels": "https://i.pinimg.com/736x/9c/03/97/9c0397ad9f3000017ecbf3fd38ee6cbf.jpg",

    // Hotel Accommodation category images - OPTIONAL:
  "hotel-accommodation": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
  "5-star-hotels": "https://i.pinimg.com/736x/0d/9b/b2/0d9bb28273c611d58d422ae473454456.jpg",
  "4-star-hotels": "https://i.pinimg.com/1200x/33/68/f9/3368f983eeafd946d980c91f15c51c20.jpg",
  "3-star-hotels": "https://i.pinimg.com/1200x/9f/40/f2/9f40f2eb683ab08a3df20f82387e5cfd.jpg",
  "boutique-hotels": "https://i.pinimg.com/1200x/52/28/25/522825bf91e8e09c848c9e8d783c9873.jpg",
  "budget-hotels": "https://i.pinimg.com/736x/ed/be/25/edbe25b54256439d445e5a879930ce55.jpg",
  "serviced-apartments": "https://i.pinimg.com/736x/60/bd/39/60bd394c51249e65e1b1616e1a88ff79.jpg",
  "executive-rooms-vip": "https://i.pinimg.com/1200x/62/33/7c/62337c6fb4529bb0baec43238f70bdfc.jpg",

  // Resort Accommodation - OPTIONAL:
  "resort-accommodation": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
  "luxury-resorts": "https://i.pinimg.com/1200x/5c/c7/2a/5cc72a923b7e3a2200571bd5348a2c36.jpg",
  "eco-resorts": "https://i.pinimg.com/736x/7c/32/34/7c3234270d04f784b389c41994920429.jpg",
  "cottage-stays": "https://i.pinimg.com/1200x/e6/e6/33/e6e6331a6f048bc1f0f26b175ae65a94.jpg",
  "villa-resorts": "https://i.pinimg.com/736x/8a/ac/cf/8aaccf7dd3bbb14a8923b1a25c7a4658.jpg",
  "forest-resorts": "https://i.pinimg.com/1200x/58/dd/80/58dd80e47e79d1c9e09dec257a4f90e3.jpg",
  "beach-resorts": "https://i.pinimg.com/1200x/25/63/61/256361e4e5a74288716bae3b2fb46e99.jpg",
  "hill-station-resorts": "https://i.pinimg.com/1200x/67/7c/d7/677cd7addce9e1f577df0f307de6ebb0.jpg",

  "wedding-accommodation": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
  "baraat-accommodation-block": "https://i.pinimg.com/1200x/85/65/d6/8565d66c8dd90813b4e2a7f5f377032c.jpg",
  "brides-family-accommodation-block": "https://i.pinimg.com/1200x/e7/c8/42/e7c842ba90aa9a6533de8c0c5974601f.jpg",
  "grooms-suite": "https://i.pinimg.com/1200x/0f/6e/20/0f6e202acf9c613baabcb50cba0c44a7.jpg",
  "bridal-makeup-room": "https://i.pinimg.com/1200x/ae/dc/8e/aedc8eaa2ce619473916b184d23aff46.jpg",
  "grooms-dressing-room": "https://i.pinimg.com/736x/cb/9c/df/cb9cdfa45c963415585167b7e5adcb40.jpg",
  "vip-guest-rooms": "https://i.pinimg.com/736x/0e/ea/0c/0eea0cb05994e078b9783b79e9e0f879.jpg",
  "hospitality-lounge": "https://i.pinimg.com/1200x/d6/15/41/d6154123743431057f62ec5b63878747.jpg",
  "command-center-room": "https://i.pinimg.com/1200x/54/58/38/5458381e70a20a9b209bae3babfe09ea.jpg",
  "changing-rooms": "https://i.pinimg.com/736x/c2/d8/d6/c2d8d681807bb76f5084e4b6f3f96a57.jpg",
  "haldi-mehendi-venue-rooms": "https://i.pinimg.com/736x/29/a4/dc/29a4dc8e13b57e7d5803223f29eb0a1f.jpg",

// Main Wedding Venues - ADD THESE:
  "main-wedding-venues": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
  "mandap-venues": "https://i.pinimg.com/736x/4f/d1/2c/4fd12ccf0172a46ef835f6a5c855d28a.jpg",
  "vedi-stage-area": "https://i.pinimg.com/736x/dd/a3/a5/dda3a57566689c8bd4e2b508531c4480.jpg",
  "nikah-halls": "https://i.pinimg.com/736x/99/e7/40/99e7405621632e8f1b4ba1d2f4a27684.jpg",
  "anand-karaj-gurudwara": "https://i.pinimg.com/1200x/7e/2f/7e/7e2f7eeef61ba04b268d0334854e07df.jpg",
  "church-wedding-halls": "https://i.pinimg.com/736x/4d/88/4d/4d884d2998702c7545bb3c458a372140.jpg",
  "reception-venues": "https://i.pinimg.com/1200x/68/1d/a5/681da5f9ddfe3c27a23afc8e0748f049.jpg",
  "baraat-assembly-area": "https://i.pinimg.com/736x/06/73/27/0673271b1c4e41dcd91fb6174e77a51e.jpg",
  "parking-grounds": "https://i.pinimg.com/736x/99/ac/87/99ac87e2dc715fa9ab80639e303f3b5d.jpg",

  // Pre-Wedding Venues - ADD THESE:
"pre-wedding-venues": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
"roka-venue": "https://i.pinimg.com/736x/b8/2b/ef/b82bef9e2ef633c3a8f93a0d01c0b236.jpg",
"engagement-hall": "https://i.pinimg.com/736x/f9/10/ee/f910eefd37ac4b65ae695d5a2499778b.jpg",
"haldi-venue": "https://i.pinimg.com/1200x/db/17/f9/db17f9c69ab3e0acc0dbac3ada0262cd.jpg",
"mehendi-venue": "https://i.pinimg.com/736x/df/f6/0a/dff60a5173a75d5f2e464b2b62ffe54e.jpg",
"sangeet-banquet": "https://i.pinimg.com/736x/f9/d3/0f/f9d30f07fc9623c70940b78b1eb34112.jpg",
"cocktail-party-venues": "https://i.pinimg.com/1200x/08/d2/95/08d2955f0833205a81d1f672528693ee.jpg",
"bachelor-bachelorette-venues": "https://i.pinimg.com/1200x/b7/43/36/b74336b18b5745505e6c29955189f108.jpg",

// Post-Wedding Venues - ADD THESE:
"post-wedding-venues": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
"reception-banquets": "https://i.pinimg.com/1200x/49/d6/85/49d6859a8ede22c27ff6be4f8145cdb8.jpg",
"walima-venues": "https://i.pinimg.com/1200x/33/68/f9/3368f983eeafd946d980c91f15c51c20.jpg",
"pagphera-ceremony-venues": "https://i.pinimg.com/1200x/ed/20/f4/ed20f47675d71323e0eb59499e48c1d7.jpg",
"home-lawn-venues": "https://i.pinimg.com/736x/6a/a8/c4/6aa8c453890d963aafc60f1aa33a01bb.jpg",
"dining-halls": "https://i.pinimg.com/736x/da/b3/d7/dab3d7ab973170b6e1d5598a6a30012b.jpg",

"banquet-venues": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
"indoor-banquet-halls": "https://i.pinimg.com/736x/b1/fd/97/b1fd971d0d42a56c183b6e17077211f3.jpg",
"luxury-banquets": "https://i.pinimg.com/1200x/33/68/f9/3368f983eeafd946d980c91f15c51c20.jpg",
"budget-banquet-halls": "https://i.pinimg.com/1200x/9f/40/f2/9f40f2eb683ab08a3df20f82387e5cfd.jpg",
"ac-non-ac-banquets": "https://i.pinimg.com/1200x/52/28/25/522825bf91e8e09c848c9e8d783c9873.jpg",
"hotel-banquet-halls": "https://i.pinimg.com/736x/ed/be/25/edbe25b54256439d445e5a879930ce55.jpg",
"community-center-banquets": "https://i.pinimg.com/736x/60/bd/39/60bd394c51249e65e1b1616e1a88ff79.jpg",
"government-banquet-halls": "https://i.pinimg.com/1200x/4c/f1/2e/4cf12e29898c1646395e1cb4971f304e.jpg",

// Add to categoryImages object (around line 88):
// Destination Wedding Venues
"destination-wedding-venues": "https://i.pinimg.com/736x/59/47/75/59477586d4cd30d51871a454ab9db6b9.jpg",
"beach-resorts": "https://i.pinimg.com/1200x/6e/97/8f/6e978fabb958c5c4fa891f2b82c53f49.jpg",
"palace-hotels": "https://i.pinimg.com/736x/7a/e3/28/7ae3287d8c8e257abf52822e97ee46b2.jpg",
"hill-resorts": "https://i.pinimg.com/736x/8e/7f/68/8e7f689b109986c05ada50c75d259482.jpg",
"desert-camps": "https://i.pinimg.com/736x/35/c5/53/35c553dfa7441da5b7b837cf869b5a34.jpg",
"luxury-international-resorts": "https://i.pinimg.com/736x/33/4a/4c/334a4c9c6760f1efaea3cd114256f1f2.jpg",

// Modern & Unique Venues
"modern-and-unique-venues": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
"rooftop-venues": "https://i.pinimg.com/736x/e8/9c/e5/e89ce55c0ee2b9c4b22ffbefe4988187.jpg",
"private-villas": "https://i.pinimg.com/736x/04/cb/42/04cb4237b77bdd0a196be6133718d7db.jpg",
"glass-house-venues": "https://i.pinimg.com/736x/d9/54/27/d954277b1cbac2aaff149b04a3e596bf.jpg",
"riverfront-venues": "https://i.pinimg.com/736x/0f/47/65/0f4765daac5d011252b1dc37c56ecfae.jpg",
"lakeside-venues": "https://i.pinimg.com/1200x/d1/09/2b/d1092bdbb202db257c28a1cf5dcad628.jpg",
"boathouse-wedding-spaces": "https://i.pinimg.com/736x/43/49/6e/43496e95584979a98dd6efc02fae06d9.jpg",
"cruise-wedding-venue": "https://i.pinimg.com/1200x/6f/40/2d/6f402df5a1aae2d2c733de809caa5216.jpg",
"barn-style-venues": "https://i.pinimg.com/736x/d6/a5/cd/d6a5cdad2540482b748a7bd06f2eb437.jpg",
"factory-warehouse-venues": "https://i.pinimg.com/1200x/19/67/84/1967843497a6ff1110c53b90bf3198aa.jpg",
"art-galleries": "https://i.pinimg.com/736x/0a/20/63/0a20635d9e9054fd4a789ee28a1a6082.jpg",
"sports-clubs-gymkhana": "https://i.pinimg.com/736x/2a/c5/56/2ac5568540233b2dcc4f416577558299.jpg",

// Mixed Venues
"mixed-venues": "https://i.pinimg.com/736x/c5/90/b9/c590b97211860a2fb4fd973eacbf39e3.jpg",
"lawn-banquet-combination": "https://i.pinimg.com/1200x/be/27/92/be279238db5476f932c612d7eb691fc7.jpg",
"hall-terrace-venue": "https://i.pinimg.com/736x/c5/66/ef/c566ef7bfb27fb50a4eb35ec10a8c5bd.jpg",
"hall-poolside-venue": "https://i.pinimg.com/736x/88/2d/52/882d52d3b25d66060361b1ee5ed30101.jpg",
"lawn-pool-area": "https://i.pinimg.com/736x/9d/4d/11/9d4d119ef43ee1a73c1377c43d3c94bc.jpg",
"tent-lawn-setup": "https://i.pinimg.com/736x/07/0f/67/070f67c54156c47225a6c473271077a8.jpg",


// Add to categoryImages object (around line 88):
// Outdoor Venues
"outdoor-venues": "https://i.pinimg.com/1200x/bf/f3/4c/bff34c2085a150f82ded232ce33ccfb5.jpg",
"open-lawns": "https://i.pinimg.com/1200x/36/7d/31/367d31111a8156af8fea237881740158.jpg",
"wedding-gardens": "https://i.pinimg.com/1200x/4c/ca/aa/4ccaaae25d614c0e2a57c004b967ffdf.jpg",
"farmhouses": "https://i.pinimg.com/736x/ce/44/b1/ce44b12fd02c9d179454844b494c06dc.jpg",
"resort-lawns": "https://i.pinimg.com/1200x/ba/60/27/ba6027d1ddfa96036dbc5a403cfe5c82.jpg",
"club-lawns": "https://i.pinimg.com/1200x/1c/a6/48/1ca648f55bf4609fbe5e1eaa7cad3a5d.jpg",
"poolside-lawns": "https://i.pinimg.com/736x/b6/fe/db/b6fedbaa5fa68a79abb6f2c7dc61f1ad.jpg",

// Religious Venues
"religious-venues": "https://i.pinimg.com/736x/aa/ad/9c/aaad9c436f18f974a03924fa1d512b34.jpg",
"temple-mandapams": "https://i.pinimg.com/736x/15/90/0c/15900c0080433a719e0eda92f62d9709.jpg",
"gurudwaras": "https://i.pinimg.com/1200x/2f/e7/73/2fe77367a959fac7a53bd4adf1613faf.jpg",
"churches": "https://i.pinimg.com/1200x/5b/11/ed/5b11ed7811dc7c518686d5aa71e6a1e8.jpg",
"nikah-halls": "https://i.pinimg.com/1200x/4b/a1/ed/4ba1eda75452de467ccbec81d9e1549b.jpg",

  };

  const currentTitle = subCategory 
    ? (subCategoryDisplayNames[subCategory] || "Venues")
    : (categoryDisplayNames[category] || "All Venues");

  const currentImage = subCategory 
    ? (categoryImages[subCategory] || categoryImages["guest-houses"])
    : (categoryImages[category] || categoryImages["guest-houses"]);

  useEffect(() => {
    fetchVenues();
  }, [category, subCategory]);

  const fetchVenues = async () => {
    setLoading(true);
    try {
      // Construct API endpoint based on category and subcategory
      let apiUrl = `http://localhost:5000/api/venues`;
      const params = new URLSearchParams();
      
      if (category) params.append("category", category);
      if (subCategory) params.append("subCategory", subCategory);
      
      if (params.toString()) {
        apiUrl += `?${params.toString()}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.success) {
        setVenues(data.venues);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Fetch venues error:", error);
      setError("Failed to load venues");
    } finally {
      setLoading(false);
    }
  };

  const handleVenueClick = (venueId) => {
    router.push(`/venue-and-accommodation/venue-details/${venueId}`);
  };

  const handleCallClick = (e, phone) => {
    e.stopPropagation();
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

const handleBackClick = () => {
  if (subCategory) {
    // If viewing subcategory, go back to category page
    if (category === "main-wedding-venues") {
      router.push(`/wedding-venues/main-wedding-venues`);
    } else if (category === "pre-wedding-venues") {
      router.push(`/wedding-venues/pre-wedding-venues`);
    } else if (category === "post-wedding-venues") {
      router.push(`/wedding-venues/post-wedding-venues`);
    } else if (category === "banquet-venues") {
      router.push(`/wedding-venues/banquet-venues`);
    } else if (category === "cultural-traditional-venues") {
      router.push(`/wedding-venues/cultural-traditional-venues`);
    } else if (category === "destination-wedding-venues") {
      router.push(`/wedding-venues/destination-wedding-venues`);
    } else if (category === "mixed-venues") {
      router.push(`/wedding-venues/mixed-venues`);
    } else if (category === "modern-and-unique-venues") {
      router.push(`/wedding-venues/modern-and-unique-venues`);
    } else if (category === "outdoor-venues") {
      router.push(`/wedding-venues/outdoor-venues`);
    } else if (category === "religious-venues") {
      router.push(`/wedding-venues/religious-venues`);
    } else {
      router.push(`/venue-and-accommodation/accommodation-types/${category}`);
    }
  } else {
    // If viewing category, go back to main page
    if (
      category === "main-wedding-venues" || 
      category === "pre-wedding-venues" || 
      category === "post-wedding-venues" || 
      category === "banquet-venues" || 
      category === "cultural-traditional-venues" ||
      category === "destination-wedding-venues" ||
      category === "mixed-venues" ||
      category === "modern-and-unique-venues" ||
      category === "outdoor-venues" ||
      category === "religious-venues"
    ) {
      router.push("/wedding-venues");
    } else {
      router.push("/venue-and-accommodation");
    }
  }
};




  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-500 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading venues...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <button
            onClick={handleBackClick}
            className="flex cursor-pointer items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {currentTitle}
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Explore our curated collection of {currentTitle?.toLowerCase() || "venues"}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 py-4 px-4">
        <div className="max-w-7xl mx-auto">
         <nav className="flex items-center space-x-2 text-sm">


<button
  onClick={() => router.push(
    category === "main-wedding-venues" || 
    category === "pre-wedding-venues" || 
    category === "post-wedding-venues" || 
    category === "banquet-venues" || 
    category === "cultural-traditional-venues" ||
    category === "destination-wedding-venues" ||
    category === "mixed-venues" ||
    category === "modern-and-unique-venues" ||
    category === "outdoor-venues" ||
    category === "religious-venues"
      ? "/wedding-venues" 
      : "/venue-and-accommodation"
  )}
  className="text-gray-600 hover:text-purple-500 transition-colors cursor-pointer font-medium"
>
  {category === "main-wedding-venues" || 
   category === "pre-wedding-venues" || 
   category === "post-wedding-venues" || 
   category === "banquet-venues" || 
   category === "cultural-traditional-venues" ||
   category === "destination-wedding-venues" ||
   category === "mixed-venues" ||
   category === "modern-and-unique-venues" ||
   category === "outdoor-venues" ||
   category === "religious-venues"
    ? "Wedding Venues" 
    : "Venues & Accommodation"}
</button>


  {category && (
    <>
      <span className="text-gray-400">/</span>
      <span className="text-gray-600 font-medium">
        {categoryDisplayNames[category]}
      </span>
    </>
  )}
  {subCategory && (
    <>
      <span className="text-gray-400">/</span>
      <span className="text-purple-500 font-semibold text-base">
        {subCategoryDisplayNames[subCategory]}
      </span>
    </>
  )}
</nav>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {venues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No venues available in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                onClick={() => handleVenueClick(venue.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                {/* Image Section */}
                <div className="relative h-[220px] overflow-hidden">
                  {venue.images && venue.images.length > 0 && (
                    <img
                      src={
                        Array.isArray(venue.images)
                          ? venue.images[0]
                          : venue.images
                      }
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = currentImage;
                      }}
                    />
                  )}
                  {venue.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Featured
                    </div>
                  )}
                  {venue.rating > 0 && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-700 font-semibold text-sm">
                        {venue.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors">
                    {venue.name}
                  </h3>

                  {venue.location && (
                    <div className="flex items-start gap-1.5 text-gray-700 text-sm mb-2">
                      <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{venue.location}</span>
                    </div>
                  )}

                  {venue.capacity && (
                    <div className="flex items-center gap-1.5 text-gray-700 text-sm mb-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Capacity: {venue.capacity} guests</span>
                    </div>
                  )}

                  {venue.price && (
                    <div className="flex items-center gap-1.5 text-gray-700 text-sm mb-3">
                      <IndianRupee className="w-4 h-4 text-purple-500" />
                      <span className="font-bold text-purple-500">
                        ₹{venue.price?.toLocaleString("en-IN")}
                      </span>
                      <span className="text-gray-500 text-xs">/ night</span>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {venue.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleCallClick(e, venue.phone)}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call Now
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVenueClick(venue.id);
                      }}
                      className="flex-1 px-4 py-2.5 cursor-pointer bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}