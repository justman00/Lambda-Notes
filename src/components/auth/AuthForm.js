import React, { useState } from "react";

function AuthForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.authAction({ username, password });
  }

  function handleChange(e, action) {
    action(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        onChange={e => handleChange(e, setUsername)}
        value={username}
      />
      <input
        type="text"
        name="password"
        onChange={e => handleChange(e, setPassword)}
        value={password}
      />
    </form>
  );
}

export default AuthForm;
