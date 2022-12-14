import React from "react";

const digitalPresence = [
  {
    icon: "discover.png",
    description: "Brand Discovery",
  },
  {
    icon: "map.png",
    description: "Wireframing",
  },
  {
    icon: "Edit.png",
    description: "Mockup",
  },
  {
    icon: "laptop.png",
    description: "Development",
  },
  {
    icon: "laptop-phone.png",
    description: "Testing",
  },
  {
    icon: "time.png",
    description: "Optimization",
  },
];

function DisplayCard({ sliceStart, sliceEnd }) {
  return digitalPresence.slice(sliceStart, sliceEnd).map((e) => {
    return (
      <div className="flex flex-col flex-wrap justify-center items-start gap-5 w-[170px] h-[200px]">
        <img src={`./${e.icon}`} alt={e.description} />
        <p className="text-xl">{e.description}</p>
      </div>
    );
  });
}

function Presence() {
  return (
    <div className="text-white mt-32">
      <h3 className="font-bold text-3xl text-center">
        How we'll make your Digital Presence Better
      </h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <DisplayCard sliceStart={0} sliceEnd={3} />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <DisplayCard sliceStart={3} sliceEnd={digitalPresence.length} />
        </div>
      </div>
    </div>
  );
}

export default Presence;
