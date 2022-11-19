import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { secondsToTime } from "../utils/secondToTime";
import { Button } from "./button";

interface Props{
    defaultPomodoroTime:number;
}

export function PomodoroTimer(props:Props){
const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)

useInterval(() => {
    setMainTime(mainTime - 1)
}, 1000)

    return (
        <div className="pomodoro">
            <h2>YOU are: working</h2>
            <Button text="texte"></Button>
        </div>
    )