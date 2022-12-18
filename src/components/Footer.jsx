import React from "react";

function Footer() {
  return (
    <div className="flex flex-col text-white pb-10 mt-32">
      <div className="flex justify-between items-center px-28 mb-32">
        <h2 className="font-title font-bold text-4xl">Project Avenue</h2>
        <div className="w-[300px] text-xl">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Contract</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="text-center flex justify-center items-center gap-10">
        <a href="#">
          <p>Terms of Services</p>
        </a>
        <a href="#">
          <p>Privacy Policy</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
