import React from 'react'
import { useState } from 'react';



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text = "new text";// wrong way
    // correct setText
    // setText("new text");
    return (
    <div>
    <h1>{props.heading}</h1>    
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    )
}