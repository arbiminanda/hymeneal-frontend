import React, { useEffect, useRef, useState } from "react"

const Ceremonial = () => {
    
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    
    let interval = useRef()

    const startTimer = () => {
        const countDate = new Date('Feb 9, 2024 00:00:00').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
            const seconds = Math.floor((distance % (1000 * 60) / (1000)))

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

    return(
        <section className="bg-cover flex max-h-[600px] text-white mx-auto ceremonial" id="ceremonial">
            <section className="timer">
                <div>
                    <span className="">
                        <h2 className="uppercase md:text-4xl sm:text-2xl text-xl font-bold nd:py-6">Reckon Up to The Ceremonial</h2>
                        <p>Compute to a really ceremonial that would never be forgotten</p>
                    </span>
                </div>
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Ceremonial;