import React, { useState } from "react";




function Toggle() {

    // create a state 
    const [isOn, setISOn] = useState(false)

    function handleOn() {
        setISOn((isOn) => !isOn)
    }

    const color = isOn ? 'green' : 'white'

    // call hanleOn function and send the currnt value isOn
    return <button id = "btn"
    onClick = { handleOn }
    style = {
        { background: color }
    } > { isOn ? "ON" : "OFF" } < /button>;
}



export default Toggle;