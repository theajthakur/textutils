import React from "react";

function About(props) {
  return (
    <div>
      <h1>Hello I am {props.author}</h1>
    </div>
  );
}

About.propTypes = {};

export default About;
