import React, { useState, useContext } from "react";
import { Context } from "../context";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(Context);

  function onSubmit(e) {
    e.preventDefault();
    ctx.dispatch({ type: "login" });
    props.authAction(email, password);
  }

  function handleChange(e, action) {
    action(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="email"
        onChange={e => handleChange(e, setEmail)}
        value={email}
      />
      <input
        type="text"
        name="password"
        onChange={e => handleChange(e, setPassword)}
        value={password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthForm;
