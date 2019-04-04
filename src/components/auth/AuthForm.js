import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  margin: 5% 0 0 20%;
  width: 30%;

  button {
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 10px 15px;
    font-size: 1.7rem;
    text-align: center;
    background: darkturquoise;
    letter-spacing: 3px;
    font-weight: 600;
    font-family: sans-serif;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      transform: translate(-3px, -3px);
      transition: all 0.5s;
    }
  }

  a {
    display: block;
    margin-top: 25px;
    text-align: center;
    font-size: 1.8rem;
    letter-spacing: 3px;
    font-weight: 600;
    color: black;
    text-decoration: none;
  }
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    background: transparent;
    border-bottom: 3px solid darkturquoise;
    outline: none;
    border-left: 3px solid darkturquoise;
  }
`;

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.authAction(email, password, name);
  }

  function handleChange(e, action) {
    action(e.target.value);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <InputBox>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="email"
            onChange={e => handleChange(e, setEmail)}
            value={email}
            id="username"
          />
        </InputBox>
        {props.register && (
          <InputBox>
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="name"
              onChange={e => handleChange(e, setName)}
              value={name}
              id="department"
            />
          </InputBox>
        )}
        <InputBox>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={e => handleChange(e, setPassword)}
            value={password}
            id="password"
          />
        </InputBox>
        <button type="submit">Submit</button>
        <Link to={`${props.to}`}>{props.to.toUpperCase()}</Link>
      </Form>
    </>
  );
}

export default AuthForm;
