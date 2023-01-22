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
        <div className="justify-around text-center items-center mx-auto px-10" id="confirmation-title">
            <div>
                <h1 className="uppercase md:text-4xl sm:text-2xl text-xl font-bold nd:py-6 text-[#00df9a]">Confirmation</h1>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name" className="text-white p-4 form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Name</label>
                    <input className="form-control" onChange={onChangeHandler} name="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="greetings" className="text-white p-4 form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Greetings</label>
                    <input className="form-control" onChange={onChangeHandler} name="greetings"/>
                </div>
                <div className="form-group">
                    <label htmlFor="presences" className="text-white p-4 form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Presences</label>
                    <input type="radio" name="presences" value="yes" onChange={onChangeHandler}/>
                    <label className="p-4 text-white" htmlFor="yes">Yes</label>
                    <input type="radio" name="presences" value="no" onChange={onChangeHandler}/>
                    <label className="p-4 text-white" htmlFor="no">No</label>
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="text-white p-4 form-label md:text-xl sm:text-xl text-xl font-bold nd:py-6">Amount</label>
                    <input type="radio" name="amount" value="1" onChange={onChangeHandler}/>
                    <label className="text-white p-4" htmlFor="1">1</label>
                    <input type="radio" name="amount" value="2" onChange={onChangeHandler}/>
                    <label className="text-white p-4" htmlFor="2">2</label>
                </div>
                <div>
                    <button className="rounded-xl p-4 btn bg-[#00df9a]" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Confirmation;