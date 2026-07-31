import { useEffect, useState } from "react"
import "./StopWatch.css";

const StopWatch = () => {

    const [milliseconds, setMilliseconds] = useState<number>(0);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

    const toggleTimerStart = () => {
        setIsTimerRunning(prevState => !prevState);
    }

    const resetTimer = () => {
        setMilliseconds(0);
        setIsTimerRunning(false);
    }
    useEffect(() => {

        if (!isTimerRunning) return

        const id = setInterval(() => {
            setMilliseconds(prev => prev + 1)
        }, 10)

        return () => clearInterval(id);
    },[isTimerRunning])

    
    const millisecondsElapsed = milliseconds % 100;
    const secondsElapsed = Math.floor(milliseconds / 100) % 60;
    const minutesElapsed = Math.floor(milliseconds / 100 / 60);

    return (
        <div>
            <div className="flex">
                <p>{minutesElapsed}<span>m</span></p>
                <p>{secondsElapsed}<span>s</span></p>
                <p>{millisecondsElapsed}<span>ms</span></p>
            </div>
            <div>
                <button onClick={() => toggleTimerStart()}>{isTimerRunning ? "Stop" : "Start"}</button>
                <button onClick={() => resetTimer()}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;