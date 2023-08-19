import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const onUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!.", "success")
  };
  const onLowClick = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted to Lowecase!.", "success")
  };
  const onfirstCapitalClick = () => {
    const newText = text.replace(/\. (\w)/g, (match, char) => {
    props.showAlert("First letter capitalized.", "success")
        return `. ${char.toUpperCase()}`;
      });       
    setText(newText)
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="mb-3 mt-3">
          <h2>{props.heading}</h2>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="4"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === "dark"? "grey":"white", color: props.mode === "dark"? "white":"black"}}
          ></textarea>
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={onUpClick}
          >
            Click to UpperCase
          </button>
          <button
            className="btn btn-primary mt-3 mx-3"
            type="button"
            onClick={onLowClick}
          >
            Click to LowerCase
          </button>
          <button
            className="btn btn-primary mt-3"
            type="button"
            onClick={onfirstCapitalClick}
          >
           Capitalize first letter
          </button>
          <button
            className="btn btn-primary mt-3 mx-3"
            type="button"
            onClick={speak}
          >
           Click to listen
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          Total words {text.split(" ").filter((element)=>{ return element.length !== 0; }).length} and total characters{" "}
          {text.length}.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0; }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
