import React, {useState, useEffect} from "react"
import axios from "axios"
import { Box } from "@mui/material"

const Felicitation = () => {

    const [confirmations, setConfirmation] = useState([])

    useEffect(() => {
        getConfirmationData()
    }, [])

    const getConfirmationData = async () => {
        const {data} = await axios.get('https://mocki.io/v1/93cf1e97-9c11-4c6b-8146-721e0688aac7')
        setConfirmation(data)
    }

    return(
        <div className="mx-auto">
            <div className="text-center">
                <h1 className="uppercase md:text-4xl sm:text-2xl text-xl font-bold text-[#00df9a]" id="confirmation-title">Felicitation</h1> <br />
            </div>
            <div className="mx-auto text-white ">
                {confirmations.map(confirmation => (
                    <div className="mx-auto px-5 text-white mt-10">
                        <Box className="text-center" sx={
                            {
                                backgroundColor: "#00df9a",
                                border: '3px dashed yellow',
                                '&:hover': {
                                    backgroundColor: "primary.light",
                                }
                            }
                        }>
                            <br/> <p className="md:text-xl sm:text-xl text-xl">{confirmation.greetings}</p> <br/>
                            <p className="md:text4xl sm:text-xl text-xl font-bold">-- {confirmation.name} --</p> <br/>
                        </Box>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Felicitation;