import React, {useState} from "react"

const Confirmation = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        greetings: "",
        presences: "",
        amount: ""
    })
    const onChangeHandler = (event) => {
        setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmitHandler = (event) => {
        console.log(formData)
        event.preventDefault()
        event.target.reset()
    }

    return(
        <div className="mx-auto px-10">
            <div className="text-center h-20 mt-20">
                <h1 className="uppercase md:text-4xl sm:text-2xl text-xl font-bold nd:py-6 text-[#00df9a]" id="confirmation-title">Confirmation</h1>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group h-10">
                    <label htmlFor="name" className="float-left text-white form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Name:</label>
                </div>
                <div className="form-group h-10">
                    <input className="p-2 form-control w-[100%] float-right" onChange={onChangeHandler} name="name" placeholder="Your Name"/>
                </div>
                <div className="form-group h-10 mt-5">
                    <label htmlFor="greetings" className="text-white form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Greetings:</label>
                </div>
                <div className="form-group h-10">
                    <input className="p-6 form-control w-[100%] float-right" onChange={onChangeHandler} name="greetings" placeholder="Your Greetings"/>
                </div>
                <div className="form-group h-10 mt-10">
                    <label htmlFor="presences" className="text-white form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Presences:</label>
                </div>
                <div className="form-group h-10">
                    <input type="radio" name="presences" value="yes" onChange={onChangeHandler}/>
                    <label className="p-4 text-white" htmlFor="yes">Yes</label>
                    <input type="radio" name="presences" value="no" onChange={onChangeHandler}/>
                    <label className="p-4 text-white" htmlFor="no">No</label>
                </div>
                <div className="form-group h-10">
                    <label htmlFor="amount" className="text-white form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Amount:</label>
                </div>
                <div className="form-group h-10">
                    <input type="radio" name="amount" value="1" onChange={onChangeHandler}/>
                    <label className="text-white p-4" htmlFor="1">1</label>
                    <input type="radio" name="amount" value="2" onChange={onChangeHandler}/>
                    <label className="text-white p-4" htmlFor="2">2</label>
                </div>
                <div className="h-10 mb-10">
                    <button className="rounded-xl p-2 btn bg-[#00df9a]" type="submit">
                        <p className="md:text-2xl sm:text-2xl text-xl">Submit</p>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Confirmation;