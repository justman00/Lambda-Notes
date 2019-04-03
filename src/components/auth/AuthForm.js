import React, { useState, useContext } from "react";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.authAction(email, password);
    props.history.push("/");
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
