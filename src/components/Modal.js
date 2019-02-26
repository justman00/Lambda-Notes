import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div>
      {props.title} <button onClick={props.onDelete}>delete</button>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
