import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-left: 50px;
  margin-top: 15px;
  padding: 10px;
  font-size: 2rem;
  outline: none;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid darkturquoise;
  border-top: 2px solid darkturquoise;
  width: 400px;

  &::placeholder {
    opacity: 0.4;
  }
`;

export default function SearchBar(props) {
  return (
    <div>
      <Input
        type="text"
        onChange={props.handleChange}
        placeholder="Search for keywords"
        value={props.value}
      />
    </div>
  );
}
