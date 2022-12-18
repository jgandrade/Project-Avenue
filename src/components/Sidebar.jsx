import React, { useState } from "react";

function Sidebar({ isOpen }) {
  const [image, setImage] = useState("");
  const [hover, setHover] = useState(false);

  function showImage(e) {
    if (e.target.textContent === "Works") setImage("./works.png");
    if (e.target.textContent === "About") setImage("./about.png");
    if (e.target.textContent === "Contacts") setImage("./contacts.png");
    setHover(true);
  }

  function unShowImage() {
    setImage("");
    setHover(false);
  }

  return (
    <div
      className={`sidebar flex justify-around items-center flex-wrap w-screen h-screen fixed top-0 left-0 backdrop-blur ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <ul className="links text-[clamp(50px,3vw,90px)] relative md:-top-24">
        <li
          className="uppercase font-bold select-none cursor-pointer"
          onMouseOver={showImage}
          onMouseLeave={unShowImage}
        >
          About
        </li>
        <li
          className="uppercase font-bold select-none cursor-pointer"
          onMouseOver={showImage}
          onMouseLeave={unShowImage}
        >
          Works
        </li>
        <li
          className="uppercase font-bold select-none cursor-pointer"
          onMouseOver={showImage}
          onMouseLeave={unShowImage}
        >
          Contacts
        </li>
      </ul>
      {hover === true ? (
        <img
          src={image}
          alt="sidebar-image"
          className="hidden lg:block max-w-[1000px] w-[50vw] justify-self-center"
        />
      ) : (
        <div className="hidden lg:block max-w-[1000px] w-[50vw]"></div>
      )}
    </div>
  );
}

export default Sidebar;
