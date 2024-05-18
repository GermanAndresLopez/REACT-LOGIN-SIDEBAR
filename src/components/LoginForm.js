
import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setMessage("Inicio de sesión exitoso");
      onLogin(true);
    } else {
      setMessage("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLoginSubmit}>
      <span className="login-form-title">INICIAR SESIÓN</span>
    
      <div className="wrap-input">
        <input
          className={username !== "" ? "has-val input" : "input"}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Usuario"></span>
      </div>

      <div className="wrap-input">
        <input
          className={password !== "" ? "has-val input" : "input"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="focus-input"
          data-placeholder="Contraseña"
        ></span>
      </div>

      <div className="container-login-form-btn">
        <button className="login-form-btn" type="submit">
          Iniciar
        </button>
      </div>
      {message && <div className="message">{message}</div>}
    </form>
  );
}

export default LoginForm;
