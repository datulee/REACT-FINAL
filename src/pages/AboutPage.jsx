import React from "react";
import AboutStoryElement from "../elements/about/AboutStoryElement";
import AboutServicesElement from "../elements/about/AboutServicesElement";

const AboutPage = () => {
  return (
    <section>
      <div className="container mx-auto px-2">
        {/* 1. navigation path info */}
        <div className="py-10 text-sm ">
          <div>Home / About</div>
        </div>

        {/* 2. story  */}
        <AboutStoryElement />

        {/* 5. services */}
        <AboutServicesElement />
      </div>
    </section>
  );
};

export default AboutPage;
