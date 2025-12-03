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
import TopSlider from "@/components/TopSlider";
import MiddleSlider from "@/components/MiddleSlider";
import HeroCollection from "@/components/HeroCollection";
import ShowCase1 from "@/components/ShowCase1";
import CircleCategorySelection from "@/components/CircleCategory";
import BannerCollection from "@/components/BannerCollection";
import ShowCase2 from "@/components/ShowCase2";
import ShowCase3 from "@/components/ShowCase3";
import ShowCase4 from "@/components/ShowCase4";
import MiddleBar from "@/components/Middlebar";
import Collection1 from "@/components/Collection1";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <TopSlider />    
      <MiddleSlider />
      <HeroCollection />
      <MiddleBar />
      <ShowCase1 />
      <CircleCategorySelection />
      <ShowCase2 />
      <ShowCase3 />
      <ShowCase4 />
      <Collection1 />


      <BannerCollection />
      <Footer/>

    </div>
  );
};

export default page;
