import React, { useState } from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent.js';

function App() {
let countState = useState(1);
// let [count, countState] = useState(30);

  return(
    <CounterContext.Provider value={countState} >
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

 
export default App;
