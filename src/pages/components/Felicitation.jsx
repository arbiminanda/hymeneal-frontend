import React, {useState, useEffect} from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Felicitation = () => {

    const [confirmations, setConfirmation] = useState([])

    useEffect(() => {
        getConfirmationData()
    }, [])

    const getConfirmationData = async () => {
        const {data} = await axios.get('https://hymeneal.000webhostapp.com/api/confirmation')
        setConfirmation(data)
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    }

    return(
        <div className="mx-auto felicitation mt-10" id="felicitation">
            <div className="text-center">
                <h1 className="uppercase md:text-4xl sm:text-2xl text-xl font-bold text-[#00df9a]" id="confirmation-title">Felicitation</h1> <br />
            </div>
            <Slider {...settings}>
                {confirmations.map(confirmation => (
                    <div className="card text-white text-center">
                        <br/> <p className="md:text-xl sm:text-xl text-xl">{confirmation.greetings}</p> <br/>
                        <p className="md:text4xl sm:text-xl text-xl font-bold">-- {confirmation.name} --</p> <br/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Felicitation;