import React from "react";
import "../assets/burgerbutton.css";

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between px-40 py-8 items-center text-white bg-transparent z-10">
      <h1 className="font-title text-xl font-bold">Project Avenue</h1>
      <div className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
    </nav>
  );
}

export default Navbar;
