import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Confirmation from "./components/Confirmation";
import Felicitation from "./components/Felicitation";
import Ceremonial from "./components/Ceremonial";

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Ceremonial />
      <Confirmation />
      <Felicitation />
    </div>
  );
}

export default Home;
