import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { secondsToTime } from "../utils/secondToTime";

interface Props{
    defaultPomodoroTime:number
}

export function PomodoroTimer(props:Props){
const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)

useInterval(() => {
    setMainTime(mainTime - 1)
}, 1000)

    return <div>Olá mundo {secondsToTime (mainTime)}</div>
}