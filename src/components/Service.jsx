import React from "react";

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

function ServiceDisplay({ index }) {
  const display = services[index];
  return (
    <div>
      <h3>{display.service}</h3>
      <p>{display.description}</p>
    </div>
  );
}

function Service() {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div>
        <h3 className="text-xl px-56">
          We help start-up brands in connecting with the right users in order to
          <span>establish</span> brand loyalty and growth by designing elegant,
          user-centered, and purpose-built <span>experiences</span>.
        </h3>
      </div>
      <div>
        <ServiceDisplay index={0} />
        <ServiceDisplay index={1} />
      </div>
      <div>
        <ServiceDisplay index={2} />
        <ServiceDisplay index={3} />
      </div>
      <div>DIVIDER</div>
    </div>
  );
}

export default Service;
