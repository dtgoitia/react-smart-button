import React from 'react';
import { Subject } from 'rxjs';

import './App.css';
import SmartButton from './SmartButton';


function App() {
  const halt$ = new Subject();
  return (
    <div className="App">
      blah
      <button onClick={() => halt$.next(null)}>STOP</button>
      <div className="smart-button-container">
        <SmartButton
          label="I'm a smart button!"
          loadingLabel='LOADING'
          action={() => console.log('action!')}
          halt$={halt$}
        />
      </div>
    </div>
  );
}

export default App;
