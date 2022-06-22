import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../../src/hooks/constants";
import { useNavigate } from "react-router-dom";
import { goToAdminHome, goToHomePage } from "../Routes/Coordinater";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitLogin = () => {
    const url = `${baseURL}/login`;
    const body = {
      email,
      password,
    };

    axios
      .post(url, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdminHome(navigate);
      })
      .catch((err) => {
        alert("Usuario não encontrado");
        goToHomePage(navigate);
      });
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <input
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="Usuario"
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Senha"
        />
      </div>
      <div>
        <button onClick={submitLogin}>Login</button>
        <button onClick={() => goToHomePage(navigate)}>HomePage</button>
      </div>
    </div>
  );
}

export default Login;
