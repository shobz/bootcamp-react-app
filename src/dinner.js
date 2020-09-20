import React from "react";

function Dinner(props)
{
    return (
        <div>
            <h1>Serving {props.dishName}</h1>
            <h1>Serving {props.sweetDish}</h1>
        </div>
    )

}

export default Dinner;