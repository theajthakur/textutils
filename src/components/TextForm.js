import React, { useState } from "react";

export default function TextForm(props) {
  const countWords = (text) => {
    // METHOD 1
    //
    // let countn = 0;
    // text.split(" ").forEach((d) => {
    //   if (d) {
    //     countn++;
    //   }
    // });
    // return countn;

    // METHOD 2
    //
    // return text.split(/\s+/).filter(Boolean).length;

    // METHOD 3
    //
    return text.trim().split(" ").length;
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleDecodeClick = () => {
    try {
      setText(decodeURI(text));
      props.showAlert("Text decoded!", "success");
    } catch (error) {
      props.showAlert("text can't be decoded!", "danger");
    }
  };
  const handleEncodeClick = () => {
    setText(encodeURI(text));
    props.showAlert("Text Encoded!", "success");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleTrimClick = () => {
    setText(text.trim());
    props.showAlert("Text Trimmed!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleTrimClick}>
          Trim
        </button>
        <button className="btn btn-primary" onClick={handleDecodeClick}>
          Decode
        </button>
        <button className="btn btn-primary" onClick={handleEncodeClick}>
          Encode
        </button>
      </div>
      <div className={text === "" ? "container my-3 d-none" : "container my-3"}>
        <h1>Your Text Summary</h1>
        <p>
          {countWords(text)} words and {text.length} Characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
        <h3>Preview</h3>
        <p className={text === "" ? "alert alert-danger" : ""}>
          {text === "" ? "Enter Text to Preview" : text}
        </p>
      </div>
    </>
  );
}
