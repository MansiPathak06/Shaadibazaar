import React from "react";

import FootwearCollection from "../components/FootwearCollection";
import Accessories from "../components/Accessories";
import Testimonials from "../components/TestimonialsPage";
import OutfitsCollection from "../components/OutfitsCollection";
import Hero from "../components/Hero";
import RitualsAndPuja from "../components/RitualsAndPuja";
import WeddingVenuesComponent from "../components/WeddingVenuesComponent";
import WeddingServices from "../components/WeddingServices";
import BeautyServices from "../components/BeautyServices";
import AccessoriesCollection from "../components/AccessoriesCollection";
import CateringCollection from "../components/CateringCollection";
import ModernWeddingGate from "../components/Herosection";
import WeddingNavigation from '../components/Hero2'
import Navbar from "@/components/Navbar";


const page = () => {
  return (
    <div className="bg-linear-to-b from-rose-100 to-white">
      <Navbar/>
      <ModernWeddingGate />
      {/* <WeddingNavigation /> */}
    </div>
  );
};

export default page;
