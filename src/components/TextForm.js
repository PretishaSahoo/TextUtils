import React, { useState } from 'react';
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert('   Converted to UpperCase', 'success')
  }
  const handleLowClick = () => {
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('   Converted to LowerCase', 'success')
  }
  const handleCapitalizeClick = () => {
    const capitalizeWords = (str) => {
      return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };
  
    const newText = capitalizeWords(text);
    setText(newText);
    props.showAlert('   Wohooo!!! Your text has been Capitalized', 'success')
  };
  
  const handleClearClick = () => {
    let newText="";
    setText(newText)
    props.showAlert('   Wohooo!!! Your text has been Cleared', 'success')
  }
  const handleCopyClick = (event) => {
    let textarea = document.getElementById("myBox");
    textarea.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    props.showAlert('   Wohooo!!! Your text has been Copied to clipboard', 'success')
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text,setText]=useState('')


  return (
    <>
    
    <div className="my-5 container">
    <h1 style={{color:props.mode==='light'? 'black' :'white' }}>{props.heading}</h1>
    <textarea className="form-control mt-3" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white' :'black' , color:props.mode==='light'? 'black' :'white' }} id="myBox" rows="12"></textarea>
    </div>
    <div className="container">
    <button disabled={text.length===0} className="btn btn-light mt-3 mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-light mt-3 mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-light mt-3 mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-light mt-3 mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-light mt-3 mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize Text</button>
    </div>
    <div className="container my-3">
      <h1 style={{color:props.mode==='light'? 'black' :'white' }}>Your Text Summary</h1>
      <p style={{color:props.mode==='light'? 'black' :'white' }}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} Characters</p>
      <p style={{color:props.mode==='light'? 'black' :'white' }}>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to Read the Text!</p>
    </div>
    </>
  )
}


