import React, { useEffect } from "react";
import "../assets/mousescroll.css";
import Parallax from "parallax-js";

function Hero() {
  useEffect(() => {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
  }, []);

  return (
    <div className="hero flex flex-col items-center justify-center h-[900px] font-mainText text-white relative text-center pt-[32px] ">
      <div id="scene" className="absolute left-0 top-0 w-screen h-screen">
        <div
          data-depth="0.2"
          className="absolute left-[-20%!important] top-[0%!important] sm:top-[-30%!important] z-1"
        >
          <img
            src="./blue-ball-bg.png"
            width={"1500px"}
            alt="blue ball"
            className="ball"
          />
        </div>
        <div
          data-depth="0.1"
          className="absolute top-[20%!important] left-[40%!important] brightness-110 z-1"
        >
          <img src="./orange-ball-bg.png" alt="orange ball" className="ball" />
        </div>
      </div>
      <p className="italic font-semibold w-[80vw] sm:w-100vw text-[clamp(18px,2vw,18px)] mb-3 z-10">
        They're talking about you, Don't you wanna talk back to them?
      </p>
      <div className="relative">
        <h2 className="font-bold text-[clamp(32px,5vw,3em)] text-center z-10">
          Every brand has a{" "}
          <span className="underline decoration-[#FFD900]">story.</span>
        </h2>
        <h2 className="font-bold text-[clamp(32px,5vw,3em)] text-center z-10">
          Let us help tell yours.
        </h2>
      </div>
      <p className="italic font-semibold w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] text-[clamp(16px,1vw,24px)] text-center mt-10 mb-14 z-10">
        A personalized platform specifically built for start-up to help you to
        support your 🚀 growth & expand your 🏘️ neighborhood.
      </p>
      <button className="bg-gradient-to-r from-[#25829F] to-[#C7862A] rounded-lg px-3 py-2 z-10">
        <p className="font-semibold text-[clamp(16px,3vw,36px)] z-10">
          Let's Tell Your Story Here!
        </p>
      </button>
      <div className="scrolldown z-10 mt-10">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
