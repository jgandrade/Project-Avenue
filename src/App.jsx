import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Presence from "./components/Presence";
import WorkedWith from "./components/WorkedWith";
import Footer from "./components/Footer";
import StoryHere from "./components/StoryHere";

import "./styles/global.css";

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
      <Navbar />
      <main
        className="App bg-mainBackground font-mainText"
        data-scroll-container
        ref={containerRef}
      >
        <Hero />
        <Service />
        <WorkedWith />
        <Presence />
        <StoryHere />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
