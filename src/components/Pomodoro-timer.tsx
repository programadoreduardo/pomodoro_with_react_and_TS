import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
    PomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = useState(props.PomodoroTime)

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 1000)

    return (
        <div className="pomodoro">
            <h2>YOU are: working</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text="texte"></Button>
                <Button text="texte"></Button>
                <Button text="texte"></Button>
            </div>
            
            <div className="details">
                <p>Testando: adasf asdkfjasdk adskjad</p>
                <p>Testando: adasf asdkfjasdk adskjad</p>
                <p>Testando: adasf asdkfjasdk adskjad</p>
                <p>Testando: adasf asdkfjasdk adskjad</p>
            </div>

        </div>
    )
}