import React from "react";

function Presence() {
  return (
    <div className="text-white mt-32">
      <h3 className="font-bold text-3xl text-center">
        How we'll make your Digital Presence Better
      </h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Brand Discovery</p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Wireframing</p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Mockup</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Development</p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Testing</p>
          </div>
          <div className="flex flex-col justify-start items-center gap-2">
            <p>ICON</p>
            <p>Optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presence;
