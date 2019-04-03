import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          onChange={e => handleChange(e, setEmail)}
          value={email}
        />
        {props.register && (
          <input
            type="text"
            name="name"
            onChange={e => handleChange(e, setName)}
            value={name}
          />
        )}
        <input
          type="text"
          name="password"
          onChange={e => handleChange(e, setPassword)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to={`${props.to}`}>{props.to.toUpperCase()}</Link>
    </>
  );
}

export default AuthForm;
