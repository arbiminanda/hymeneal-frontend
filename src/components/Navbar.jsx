import React, {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white navbar" id="navbar">
            <span className="p-4" id="ring-icon">
                <svg className="h-12 w-12" fill="#FFFF00" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
                        <g>
                            <path d="M332.8,76.8c-8.747,0-17.271,0.845-25.685,2.057C276.966,61.38,242.082,51.2,204.8,51.2C91.87,51.2,0,143.07,0,256
                                s91.87,204.8,204.8,204.8c37.282,0,72.166-10.18,102.315-27.657c8.414,1.212,16.939,2.057,25.685,2.057
                                c98.807,0,179.2-80.393,179.2-179.2S431.607,76.8,332.8,76.8z M204.8,435.2c-98.97,0-179.2-80.23-179.2-179.2
                                S105.83,76.8,204.8,76.8c22.605,0,44.143,4.361,64.06,11.998C201.574,114.62,153.6,179.738,153.6,256
                                s47.974,141.38,115.26,167.202C248.943,430.839,227.405,435.2,204.8,435.2z M301.884,406.485
                                C231.868,392.175,179.2,330.24,179.2,256s52.668-136.175,122.684-150.485C351.249,137.429,384,192.845,384,256
                                S351.249,374.571,301.884,406.485z M340.224,409.225C382.66,371.678,409.6,316.988,409.6,256s-26.94-115.678-69.376-153.225
                                C421.581,106.675,486.4,173.679,486.4,256S421.581,405.325,340.224,409.225z"/>
                        </g>
                    </g>
                </svg>
            </span>
            <h1 className="p-4 w-full text-3xl font-bold text-[#00df9a]" id="title">HYMENEAL</h1>
            <ul className="p-4 hidden md:flex">
                <li className="p-4" id="home">
                    <Link to="navbar" spy={true} smooth={true} offset={0} duration={100}>Home</Link>
                </li>
                <li className="p-4" id="narration">Narration</li>
                <li className="p-4" id="ceremonial">Ceremonial</li>
                <li className="p-4" id="moments">Moments</li>
                <li className="p-4" id="confirmation">
                    <Link to="confirmation" spy={true} smooth={true} offset={600} duration={500}>Confirmation</Link>
                </li>
                <li className="p-4" id="felicitation">
                    <Link to="felicitation" spy={true} smooth={true} offset={800} duration={500}>Felicitation</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600" id="home">
                        <Link to="navbar" spy={true} smooth={true} offset={0} duration={100}>Home</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600" id="narration">Narration</li>
                    <li className="p-4 border-b border-gray-600" id="ceremonial">Ceremonial</li>
                    <li className="p-4 border-b border-gray-600" id="moments">Moments</li>
                    <li className="p-4 border-b border-gray-600" id="confirmation">
                        <Link to="confirmation" spy={true} smooth={true} offset={500} duration={500}>Confirmation</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600" id="felicitation">
                        <Link to="felicitation" spy={true} smooth={true} offset={800} duration={500}>Felicitation</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;