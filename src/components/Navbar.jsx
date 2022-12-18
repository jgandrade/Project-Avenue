import React, { useState, useRef } from "react";
import "../assets/burgerbutton.css";
import Sidebar from "./Sidebar";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  function toggleNav() {
    menuRef.current.classList.toggle("open");
    setMenu((prev) => !prev);
  }

  return (
    <nav className="fixed w-full flex justify-between px-[10vw] py-8 items-center text-white bg-transparent z-10">
      <h1 className="font-title text-sm sm:text-xl font-bold">
        Project Avenue
      </h1>
      <div className="menu-btn" ref={menuRef} onClick={toggleNav}>
        <div className="menu-btn__burger"></div>
      </div>
      <Sidebar isOpen={menu} />
    </nav>
  );
}

export default Navbar;
