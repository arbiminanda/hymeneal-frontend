import React from "react";

const Navbar = () => {
    return(
        <div className="flex justify-betwee items-center h-24 max-w-[1240px] mx-auto px-4 text-white" id="navbar">
            <h1 className="p-4 w-full text-3xl font-bold text-[#00df9a]" id="title">HYMENEAL.</h1>
            <ul className="flex">
                <li className="p-4" id="home">Home</li>
                <li className="p-4" id="narration">Narration</li>
                <li className="p-4" id="ceremonial">Ceremonial</li>
                <li className="p-4" id="moments">Moments</li>
                <li className="p-4" id="felicitation">Felicitation</li>
                <li className="p-4" id="confirmation">Confirmation</li>
            </ul>
        </div>
    )
}

export default Navbar;