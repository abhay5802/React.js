import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Convert to UpperCase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleOnChange = (event) => {
    // console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const handleDownClick = (event) => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case", "success");
  };

  const removeSpaces = (event) =>{
    let reducedText= text.replace(/\s+/g,' ');
    setText(reducedText);
    props.showAlert("Extra Spaces Removed","success");
  }

  // const extraSpace = ()=>{
  //   let reducedText= text.replace(/\s+/g,' ');
  //   return reducedText;
  // }

  const clearText = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };
  const [text, setText] = useState("Enter text");
  const wordCount = () => {
    let count = -1;
    let trimmedText= text.trim();
    if (trimmedText === " ") {
      count = 0;
    } else if (trimmedText === "") {
      count = 0;
    } else {
      count = trimmedText.split(" ").length;
    }
    return count;
  };
  return (
    <>
      <div
        className="container my-3 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-center ">{props.heading}</h1>
        <textarea
          onChange={handleOnChange}
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={removeSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="summary border my-3">
        <h1
          className={`my-3 container text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Your Text Summary
        </h1>
        <p className={`text-${props.mode === "dark" ? "white" : "black"}`}>
          It contains {wordCount()} words and {text.length} characters
        </p>
        <p className={`text-${props.mode === "dark" ? "white" : "black"}`}>
          You will need {wordCount() * 0.005} mins to read the above text{" "}
        </p>
      </div>
      <div
        className={`my-3 border text-${
          props.mode === "dark" ? "white" : "dark"
        }`}
      >
        <h1 className="text-center">Preview</h1>
        <p className="container my-3">{text}</p>
      </div>
    </>
  );
}
