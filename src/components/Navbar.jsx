import React from "react";
import "../assets/burgerbutton.css";

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between px-[10vw] py-8 items-center text-white bg-transparent z-10">
      <h1 className="font-title text-sm sm:text-xl font-bold">Project Avenue</h1>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
    </nav>
  );
}

export default Navbar;
