import React from "react";

function Hero() {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen font-mainText text-white relative overflow-hidden">
      <img
        src="./blue-ball-bg.png"
        className="absolute left-[-20%] top-0 sm:top-[-30%] sm:left-0 z-1"
      />
      <img src="./orange-ball-bg.png" className="absolute top-0 right-0 z-1" />
      <p className="italic font-semibold text-md mb-3 z-10">
        They're talking about you, Don't you wanna talk back to them?
      </p>
      <h2 className="font-bold text-5xl w-[630px] text-center z-10 relative ">
        Every brand has a{" "}
        <span className="underline decoration-[#FFD900]">story.</span> Let us
        help tell yours.
      </h2>
      <p className="italic font-semibold w-[550px] text-center mt-10 mb-14 z-10">
        A personalized platform specifically built for start-up to help you to
        support your 🚀 growth & expand your 🏘️ neighborhood.
      </p>
      <button className="bg-gradient-to-r from-[#25829F] to-[#C7862A] rounded-lg px-3 py-2 z-10">
        <p className="font-semibold text-2xl z-10">
          Let's Tell Your Story Here!
        </p>
      </button>
      <div className="chevron z-10">"go down"</div>
    </div>
  );
}

export default Hero;
