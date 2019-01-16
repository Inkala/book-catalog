import React from "react";

import "./Button.css";

const button = props => (
  <button
    onClick={props.onClick}
    className={`Button ${props.className}`}
    type="button"
  >
    {props.children}
  </button>
);

export default button;
