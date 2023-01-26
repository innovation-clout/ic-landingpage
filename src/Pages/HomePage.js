import Banner from "../images/banner.svg";
import Advantages from "../components/homepage-components/utilities";
import PartnerShips from "../components/homepage-components/partnerships";
import FAQ from "../components/homepage-components/faq";
import CallToAction from "../components/homepage-components/callToAction";
import JoinCommunity from "../components/homepage-components/joinCommunity";

import "../components/homepage-components/homepage_css/homepage.css"
import React from "react";

function HomePage() {

  return (
    <div className="relative flex flex-col w-full h-full" id="join" >
      <div
        className="w-full h-screen bg-cover bg-no-repeat flex flex-col lg:flex-row py-20 px-10 md:px-20"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className="flex flex-col w-full lg:w-3/5 gap-4 md:gap-12">
          <h2 className="text-4xl text-center lg:text-left md:text-7xl font-bold text-white">
            Get discovered, share your story.
          </h2>
          <h2 className="text-sm text-center md:text-left md:text-xl font-base text-white font-light tracking-wider lg:w-4/5">
            “Creators first, Torpedo is a personalized and enterprise driven
            platform that empowers creativity, storytelling and innovation.”
          </h2>
        </div>

        <div className="flex flex-col items-center py-8 md:py-20 md:gap-5">
          <h2 className="text-xl md:text-3xl opacity-90 text-white font-bold uppercase z-0">
            accelerate your success
          </h2>
          <JoinCommunity />
        </div>
      </div>

      <div className="flex flex-col h-screen w-full gap-20 lg:mt-40 mb-64 md:mb-0">
        <h2 className="text-3xl font-extrabold text-purple text-center w-full">
          Drop your Projects and Portfolio
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 gap-20 ">
          <div className="md:w-1/2 lg:w-1/3 h-full">
            <Advantages
              title={"Curated Mentors and Advisors"}
              description={
                <h2>Start connecting with the right professionals in your field tailored to your personal <span className="font-bold">goals</span> and <span className="font-bold">aspirations</span></h2>}
              number="1"
            />
          </div>

          <div className="md:w-1/2 lg:w-1/3 h-full">
            <Advantages
              title={"Innovate and Connect"}
              description={
                <h2>Our platform is built to provide a seamless user experience powered by <span className="font-bold">AI</span> to make it easier for you to develop your own <span className="font-bold">serendipity</span> and share your <span className="font-bold">story.</span></h2>
              }
              number="2"
            />
          </div>
        </div>

        <div className="flex  flex-col md:flex-row self-center items-center px-10 md:px-40 justify-center">
          <div className="lg:w-1/3 h-full">
            <Advantages
              title={"Gain Opportunities"}
              description={
                <h2>Showcase your content and projects and take advantage of the <span className="font-bold">endless</span> <span className="font-bold">opportunities</span> personalized by our powerful algorithms for you to achieve your <span className="font-bold">true</span> <span className="font-bold">potential.</span></h2>
              }
              number="3"
            />
          </div>
        </div>
      </div>

      <PartnerShips />

      <FAQ />

      <CallToAction className="my-20" />

      <div className="flex flex-row items-center justify-center my-20">
        <h2 className="text-2xl md:text-3xl md:px-20 lg:px-0 lg:text-4xl font-extrabold text-indigo text-center ">
          A new way to help innovators achieve their dream.
        </h2>
      </div>
    </div>
  );
}

export default HomePage;
