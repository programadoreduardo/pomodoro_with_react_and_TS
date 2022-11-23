import { secondsToTime } from "../utils/secondToTime";

interface Props {
    mainTime: number;
}


export function Timer(props: Props): JSX.Element {
    return (
        <div className="timer">{secondsToTime(props.mainTime)}</div>
    );
}