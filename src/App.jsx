import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Parallax from "parallax-js";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

import "./styles/global.css";
import Presence from "./components/Presence";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main
        className="App bg-mainBackground font-mainText"
        data-scroll-container
        ref={containerRef}
      >
        <Navbar />
        <Hero />
        <Service />
        <Presence />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
