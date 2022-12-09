import React from "react";
import "../assets/mousescroll.css";

function Hero() {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen font-mainText text-white relative overflow-hidden text-center">
      <img
        src="./blue-ball-bg.png"
        className="absolute left-[-20%] top-0 sm:top-[-30%] z-1"
      />
      <img src="./orange-ball-bg.png" className="absolute top-0 right-0 z-1" />
      <p className="italic font-semibold w-[80vw] sm:w-100vw text-[clamp(18px,2vw,18px)] mb-3 z-10">
        They're talking about you, Don't you wanna talk back to them?
      </p>
      <div className="relative">
        <h2 className="font-bold text-[clamp(32px,5vw,3em)] sm:w-[40vw] text-center z-10">
          Every brand has a{" "}
          <span className="underline decoration-[#FFD900]">story.</span>
        </h2>
        <h2 className="font-bold text-[clamp(32px,5vw,3em)] sm:w-[40vw] text-center z-10">
          Let us help tell yours.
        </h2>
      </div>
      <p className="italic font-semibold w-[60vw] sm:w-[35vw] text-[clamp(16px,1vw,24px)] text-center mt-10 mb-14 z-10">
        A personalized platform specifically built for start-up to help you to
        support your 🚀 growth & expand your 🏘️ neighborhood.
      </p>
      <button className="bg-gradient-to-r from-[#25829F] to-[#C7862A] rounded-lg px-3 py-2 z-10">
        <p className="font-semibold text-[clamp(16px,3vw,36px)] z-10">
          Let's Tell Your Story Here!
        </p>
      </button>
      <div className="scrolldown z-10 absolute bottom-2">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
