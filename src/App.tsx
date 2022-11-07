import React from 'react';
import { PomodoroTimer } from './components/Pomodoro-timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={1500}/>
    </div>
  );
}

export default App;
