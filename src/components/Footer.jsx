import React from "react";

function Footer() {
  return (
    <div className="flex flex-col text-white pb-10 mt-32">
      <div className="flex justify-between items-center px-28 mb-32">
        <h2 className="font-title font-bold text-4xl">Project Avenue</h2>
        <div className="w-[300px] text-xl">
          <ul>
            <li>Home</li>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Contract</li>
          </ul>
        </div>
      </div>
      <div className="text-center flex justify-center items-center gap-10">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
