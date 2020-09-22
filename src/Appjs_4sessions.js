import React, { useState } from 'react';
import './App.css';
// import Dinner from './dinner';
import {Message} from './message';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  
  return (
    <div className={`App ${isMorning ? 'dayLight' : ''}`}> 
    <h3>Day Time = {isMorning ? 'Morning' : 'Night'}</h3>
    <Message counter={count} />
    {/* <h2>this is class 4. lets count {count} </h2> */}
    {/* <Dinner></Dinner> */}
    {/* <Dinner dishName="nihari" sweetDish="Kheer" /> */}
<hr />
    <button onClick={() => setCount(count + 1)}>
        Update Counter</button>

    <button onClick={() => setMorning(!isMorning)}>
      Update Day
    </button>

    </div>
  );
}

 
export default App;
