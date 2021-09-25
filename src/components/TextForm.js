import React from 'react'
import { useState } from 'react';



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        console.log("Lower button clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClear = () => {
        console.log("clear button clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Clearede", "success");
    }
    const handleCopy = () => {
        console.log("I am copy0");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Spaces", "success");
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
        <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#326693' }}>
        <h1>{props.heading}</h1>    
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="5" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#326693' }}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Handle Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#326693' }}>
        <h1>HI</h1>
        <p>{text.split(" ").length} word & {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} min to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}
