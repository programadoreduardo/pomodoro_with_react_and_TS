import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { secondsToTime } from "../utils/secondToTime";
import { Button } from "./button";
import { Timer } from "./timer";
const bellStart = require('../sounds/src_sounds_bell-start.mp3')
const bellFinish = require('../sounds/src_sounds_bell-finish.mp3')

const audioStartWorking = new Audio(bellStart)
const audioStoptWorking = new Audio(bellFinish)

interface Props {
    PomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = useState(props.PomodoroTime);
    const [timeCounting, setTimeCounting] = useState(false)
    const [working, setWorking] = useState(false)
    const [resting, setResting] = useState(false)
    const [cyclesQtdManager, setCyclesQtdManager] = useState(
        new Array(props.cycles).fill(true),
    )

    const [completedCycles, setcompletedCycles] = useState(0);
    const [fullWorkingTime, setfullWorkingTime] = useState(0);
    const [numberOfPomodoros, setnumberOfPomodoros] = useState(0);

    useInterval(
        () => {
            setMainTime(mainTime - 1)
        }, timeCounting ? 1000 : null);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true)
        setResting(false)
        setMainTime(props.PomodoroTime)
        audioStartWorking.play()
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

        audioStoptWorking.play()
    }

    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');

        if (mainTime > 0) return;

        if (working && cyclesQtdManager.length > 0) {
            configureRest(false);
            cyclesQtdManager.pop();
        } else if (working && cyclesQtdManager.length <= 0) {
            configureRest(true);
            setCyclesQtdManager(new Array(props.cycles).fill(true))
            setcompletedCycles(completedCycles + 1)
        }

        if (working) setnumberOfPomodoros(numberOfPomodoros + 1);
        if (resting) configureWork();
    }, [
        working,
        resting,
        mainTime,
        cyclesQtdManager,
        numberOfPomodoros,
        completedCycles,
        configureRest,
        setCyclesQtdManager,
        configureWork,
        props.cycles,
        ])

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
                <p>Ciclos concluídos: {completedCycles}</p>
                <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
                <p>Pomodoros concluídos: {numberOfPomodoros} </p>
            </div>

        </div>
    )
}