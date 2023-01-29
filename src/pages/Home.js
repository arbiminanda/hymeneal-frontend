import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Confirmation from "./components/Confirmation";
import Felicitation from "./components/Felicitation";

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Confirmation />
      <Felicitation />
    </div>
  );
}

export default Home;
