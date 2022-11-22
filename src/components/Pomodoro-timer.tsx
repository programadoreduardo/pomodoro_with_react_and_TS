import React, { useEffect, useState } from "react";
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
    const [mainTime, setMainTime] = useState(props.PomodoroTime);
    const [timeCounting, setTimeCounting] = useState(false)
    const [working, setWorking] = useState(false)
    const [resting, setResting] = useState(false)

    useEffect(() => {
        if (working) document.body.classList.add('working')
        if (resting) document.body.classList.remove('working')
    }, [working])

    useInterval(
        () => {
            setMainTime(mainTime - 1)
        }, timeCounting ? 1000 : null);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true)
        setResting(false)
        setMainTime(props.PomodoroTime)
    }

    const configureRest = (long: boolean) => {
        setTimeCounting(true);
        setWorking(false)
        setResting(true)

        if (long) {
            setMainTime(props.longRestTime)
        } else {
            setMainTime(props.shortRestTime)
        }
    }

    return (
        <div className="pomodoro">
            <h2>YOU are: working</h2>
            <Timer mainTime={mainTime} />

            <div className="controls">
                <Button text="work" onClick={() => configureWork()}></Button>
                <Button text="Rest" onClick={() => configureRest(false)}></Button>
                <Button
                    className={!working && !resting ? 'hidden' : ''}
                    text={timeCounting ? 'Pause' : 'Play'}
                    onClick={() => setTimeCounting(!timeCounting)}
                ></Button>
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