import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<NodeJS.Timer | undefined>(undefined);

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
        return () => {
            stopTimer()
        }
    },[])
    return (
        <>
        <h1>Timer - {timer}</h1>
        <button onClick={stopTimer}>Stop Timer</button>
        </>
    )
}