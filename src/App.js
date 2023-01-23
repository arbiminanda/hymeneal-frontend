import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Confirmation from "./components/Confirmation";
import Felicitation from "./components/Felicitation";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Confirmation />
      <Felicitation />
    </div>
  );
}

export default App;
