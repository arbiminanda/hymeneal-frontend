import React from "react";
import Image from "./resources/welcome_image.png";
import Typed from "react-typed";

const Welcome = () => {
  return (
    <div
      className="h-screen bg-cover flex items-center text-center justify-center max-h-[800px] mx-auto hero"
      id="hero"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="mt-5 p-4">
        <p className="md:text-3xl font-bold p-2 uppercase mb-5">Hymeneal of</p>
        <Typed
          className="md:text-7xl sm:text-6xl text-4xl font-bold nd:py-6"
          strings={["John Doe", "Jane Doe"]}
          typeSpeed={120}
          backSpeed={20}
          loop
        />
        <p className="mt-5 md:text-3xl sm:text-2xl text-xl">
          SomeDay, DD Month YYYY
        </p>
        <p className="mt-20 md:text-3xl sm:text-2xl text-xl font-bold">
          Kindly Invite You
        </p>
        <p className="mt-5 md:text-4xl sm:text-3xl text-xl font-bold">Guest</p>
        <button className="mt-20 rounded-xl p-2 btn bg-[#000000]" type="submit">
          <p className="md:text-2xl sm:text-2xl text-xl text-white">
            Open Invitation
          </p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
