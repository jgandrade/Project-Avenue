import React from "react";
import "../styles/services.css";

const services = [
  {
    service: "Branding & Design",
    description:
      "We treat branding and design as the pillar and foundation of the business. Where we envision and align our path to achieve that vision, mission and promise that we made to your user.",
  },
  {
    service: "Website Developers",
    description:
      "We provide in-house, end-to-end support across the entire digital product development. Our developers will implement and enhance your digital presence, user experience, and latest technologies for your industry.",
  },
  {
    service: "Lorem Ipsum Dolor",
    description:
      "We lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi. Our epudiandae consequuntur voluptatum laborum numquam.",
  },
  {
    service: "Mockups and Prototypes",
    description:
      "We deliver designs for your product and cater out different layout and design options that would greatly fit your taste. Our designers creativity will significantly attract more clients.",
  },
];

function ServiceDisplay(props) {
  const display = services[props.index];

  const description1 = display.description.slice(
    0,
    display.description.indexOf(props.break)
  );

  const description2 = display.description.slice(
    display.description.indexOf(props.break)
  );

  return (
    <div className="flex flex-col justify-start">
      <h3 className="font-extrabold text-2xl font-headings">
        {display.service}
      </h3>
      <p className="text-lg desc-rect">{description1}</p>
      <p className="text-lg">{description2}</p>
    </div>
  );
}

function Service() {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-start">
        <div>
          <h3 className="uppercase text-center z-10 font-semibold text-[#FFD900] text-[clamp(30px,6vw,60px)]">
            Let's Lit Up Your Spark
          </h3>
          <h3 className="text-[clamp(16px,1.5vw,20px)] z-10 text-center font-semibold md:px-[28%]">
            We help start-up brands in connecting with the right users in order
            to
            <span className="italic text-bold text-[#FFD900]"> establish </span>
            brand loyalty and growth by designing elegant, user-centered, and
            purpose-built
            <span className="italic text-bold text-[#FFD900]">
              {" "}
              experiences
            </span>
            .
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <ServiceDisplay index={0} break="Where" />
        <ServiceDisplay index={1} break="Our" />
      </div>
      <div className="flex justify-start items-start relative">
        <ServiceDisplay index={2} break="Our" />
        <ServiceDisplay index={3} break="Our" />
      </div>
    </div>
  );
}

export default Service;
