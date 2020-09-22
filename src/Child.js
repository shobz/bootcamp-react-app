import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {

    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
            <h2>Child Component</h2>
            <h4>The counter value is {counterValue[0]}</h4>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increase Counter</button>
        </div>

    )

}

export default Child;