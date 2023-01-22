import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    return(
        <div className="flex justify-betwee items-center h-24 max-w-[1240px] mx-auto px-4 text-white" id="navbar">
            <h1 className="p-4 w-full text-3xl font-bold text-[#00df9a]" id="title">HYMENEAL</h1>
            <ul className="hidden md:flex">
                <li className="p-4" id="home">Home</li>
                <li className="p-4" id="narration">Narration</li>
                <li className="p-4" id="ceremonial">Ceremonial</li>
                <li className="p-4" id="moments">Moments</li>
                <li className="p-4" id="felicitation">Felicitation</li>
                <li className="p-4" id="confirmation">Confirmation</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="p-4 w-full text-3xl font-bold text-[#00df9a] m-4" id="title">HYMENEAL</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600" id="home">Home</li>
                    <li className="p-4 border-b border-gray-600" id="narration">Narration</li>
                    <li className="p-4 border-b border-gray-600" id="ceremonial">Ceremonial</li>
                    <li className="p-4 border-b border-gray-600" id="moments">Moments</li>
                    <li className="p-4 border-b border-gray-600" id="felicitation">Felicitation</li>
                    <li className="p-4 border-b border-gray-600" id="confirmation">Confirmation</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;