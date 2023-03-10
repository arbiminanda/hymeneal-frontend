import React from "react";
import Image from "./resources/welcome_image.png";
import Typed from "react-typed";
import { useNavigate, useParams } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const { guest } = useParams();

  const handleGoToHome = () => {
    navigate(`/home`);
  };

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
          Kindly Invite You,
        </p>
        <p className="mt-5 md:text-4xl sm:text-3xl text-xl font-bold">
          {guest}
        </p>
        <button
          className="mt-20 rounded-xl p-2 btn bg-[#000000]"
          type="submit"
          onClick={() => handleGoToHome()}
        >
          <p className="md:text-2xl sm:text-2xl text-xl text-white">
            Open Invitation
          </p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
