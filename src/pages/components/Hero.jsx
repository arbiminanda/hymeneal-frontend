import React from "react"
import Image from "./resources/hero_image.png"
import Typed from "react-typed"

const Hero = () => {
    return(
        <div className="h-screen bg-cover flex items-center text-center justify-center max-h-[800px] mx-auto hero" id="hero" style={{
            backgroundImage: `url(${Image})`
        }}>
            <div className="p-4">
                <p className="md:text-3xl font-bold p-2 uppercase">Hello, you are invited to attend our hymeneal</p>
                <Typed 
                    className="md:text-7xl sm:text-6xl text-4xl font-bold nd:py-6"
                    strings={["John Doe", "and", "Jane Doe"]}
                    typeSpeed={120}
                    backSpeed={20}
                    loop
                />
                <p className="md:text-3xl sm:text-2xl text-xl">SomeDay, DD Month YYYY</p>
                <p className="md:text-4xl sm:text-3xl text-xl font-bold">SomeWhere</p>
            </div>
        </div>
    )
}

export default Hero;