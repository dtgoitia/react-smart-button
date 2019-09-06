import React from 'react';
import './App.css';
import SmartButton from './SmartButton';

import { timer } from 'rxjs';

function App() {
  const halt$ = timer(1000, 500);
  return (
    <div className="App">
      blah
      <div className="smart-button-container">
        <SmartButton
          label="I'm a smart button!"
          action={() => console.log('action!')}
          halt$={halt$}
        />
      </div>
    </div>
  );
}

export default App;
