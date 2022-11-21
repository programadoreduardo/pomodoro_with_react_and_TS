import React from 'react';
import { PomodoroTimer } from './components/Pomodoro-timer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        PomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900} 
        cycles={4}/>
    </div>
  );
}

export default App;
