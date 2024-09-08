import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} fade show`}
          role="alert"
        >
          <b>{capitalize(props.alert.type)}: </b>
          {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
