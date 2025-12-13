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
import TrendingProducts from "@/components/TrendingProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
import CircleCategorySelection from "@/components/CircleCategory";
import BannerCollection from "@/components/BannerCollection";
import ShowCase2 from "@/components/ShowCase2";
import ShowCase3 from "@/components/ShowCase3";
import ShowCase4 from "@/components/ShowCase4";
import MiddleBar from "@/components/Middlebar";
import Collection1 from "@/components/Collection1";
import Footer from "@/components/Footer";
import BrandCardSlider from "@/components/BrandCardSlider";


const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <TopSlider />    
      <MiddleSlider />
      <TrendingProducts />
      <MiddleBar />
      <FeaturedProducts />
      <CircleCategorySelection />
      
      <ShowCase3 />
      <ShowCase4 />
      <Collection1 />
      {/* <BrandCardSlider /> */}


      {/* <BannerCollection /> */}
      <Footer/>

    </div>
  );
};

export default page;
