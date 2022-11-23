import React from 'react';
import { PomodoroTimer } from './components/Pomodoro-timer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        PomodoroTime={10}
        shortRestTime={2}
        longRestTime={5} 
        cycles={4}/>
    </div>
  );
}

export default App;
