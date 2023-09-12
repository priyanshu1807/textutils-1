import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleupclick=()=>{
        console.log("upper case was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "Success");
    }
    const handlelowclick=()=>{
        console.log("upper case was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase!", "Success");
    }
    const handleonchange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
        return (
            <>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>

        <div class="mb-3">

            <textarea className="form-control" value={text} style={ {backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'#042743'}}  onChange={handleonchange}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to Lowercase</button>
        </div>
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} minutes take to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
        </>

    )
}
