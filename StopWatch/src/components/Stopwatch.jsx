import { useState, useEffect } from "react";
const Stopwatch = () => {
    const [count, setCount] = useState(0);
    const [current, setCurrent] = useState(false);

    useEffect(() => {
        let value = null;

        if (current) {
            value = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        } else {
            clearInterval(value);
        }

        return (
            () => clearInterval(value)
        );

    }, [current]);

    const start = () => {
        setCurrent(true)
    };
    const stop = () => {
        setCurrent(false)
    };
    const reset = () => {
        setCurrent(false);
        setCount(0);
    };

    return (
        <>
            <h2>Stopwatch</h2>
            <h3>{count}</h3>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
            <button onClick={reset}>RESET</button>
        </>
    );
};

export default Stopwatch;
