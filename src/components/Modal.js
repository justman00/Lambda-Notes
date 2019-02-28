import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDiv = styled.div`
  min-height: 200px;
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 2rem;
    color: black;
    line-height: 1.25;
  }

  strong {
    color: black;
    font-weight: 700;
  }

  button {
    margin-top: 30px;
    padding: 15px 20px;
    font-size: 2rem;
    background: red;
    color: white;
    border-radius: 10px;
    cursor: pointer;

    &:last-child {
      background: aqua;
    }
  }
`;

const ButtonsSpace = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Modal = props => {
  return ReactDOM.createPortal(
    <ModalStyled onClick={props.onDismiss}>
      <ModalDiv>
        <h3>
          Are you sure you want to delete the note with the title:{" "}
          <strong>{props.title}</strong>
        </h3>
        <ButtonsSpace>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onDismiss}>Cancel</button>
        </ButtonsSpace>
      </ModalDiv>
    </ModalStyled>,
    document.querySelector("#modal")
  );
};

export default Modal;
