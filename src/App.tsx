import React from 'react';
import { PomodoroTimer } from './components/Pomodoro-timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={3660}/>
    </div>
  );
}

export default App;
