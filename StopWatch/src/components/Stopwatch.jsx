import { useState } from "react";
import React from 'react'

const Stopwatch = () => {
    let [count, setCount] = useState(0)

    const Increment = setInterval(() => {
        // return setCount(count++);   
    },1000)
    const Stop = () => {

    }
    const Reset = () => {

    }
    return (
        <>
            <h2>Stopwatch</h2>

            <h3>{count}</h3>
            <button onClick={Increment}>START</button>
            <button>STOP</button>
            <button>RESET</button>
        </>
    )
}

export default Stopwatch
