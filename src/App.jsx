import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import "./styles/global.css";

function App() {
  return (
    <div className="App bg-mainBackground font-mainText">
      <Navbar />
      <Hero />
      <Service />
    </div>
  );
}

export default App;
