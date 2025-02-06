import React from "react";
import AboutImage from "../../assets/about/about_hero.png";

const AboutStoryElement = () => {
  return (
    <div className="flex flex-wrap pb-12">
      {/* our story */}
      <div className="lg:w-[55%] w-full px-2">
        <h1 className="text-3xl font-semibold mb-6">Our Story</h1>
        <p className="text-justify">
        Founded in 2025, BTUMARKET is Georgia’s premier online shopping destination, dedicated to redefining the digital retail experience. With a commitment to quality, convenience, and customer satisfaction, we connect shoppers with thousands of trusted local and international brands, offering a seamless and secure online marketplace.
        </p>
        <br />
        <p className="text-justify">
        At BTUMARKET, we provide a diverse selection of products, ranging from electronics and fashion to home essentials and groceries. Our advanced logistics network ensures fast and reliable delivery across Georgia, while our user-friendly platform makes shopping effortless.
        </p>
      </div>
      {/* images */}
      <div className="hidden lg:flex w-[45%] px-2">
        <img className="h-full" src={AboutImage} alt="" />
      </div>
    </div>
  );
};

export default AboutStoryElement;
