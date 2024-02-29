import React, { useState } from "react";
import style from "./XLogin.module.css";

function XLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="message">{message}</div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default XLogin;
