import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App"> 
    {/* <Dinner></Dinner> */}
    <Dinner dishName="nihari" sweetDish="Kheer" />
    </div>
  );
}

export default App;
