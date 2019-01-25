import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import './Modal.css';

const modal = props => {

  // shouldComponentUpdateUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== this.props.show ||
  //     nextProps.children !== this.props.children
  //   );
  // }
  console.log(props.show)
  return (
    <div>
      <Backdrop show={props.show} />
      <div
        className="modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
        <button className="button button-success" onClick={props.clicked}>Ok</button>
      </div>
    </div>
  );
};

export default modal;
