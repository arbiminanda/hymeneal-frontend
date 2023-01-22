import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Confirmation />
    </div>
  );
}

export default App;
