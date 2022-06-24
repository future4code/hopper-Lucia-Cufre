import React from "react";
import axios from "axios";
import { baseURL } from "../Components/constants";
import { useNavigate } from "react-router-dom";
import { goToAdminHome, goToHomePage } from "../Routes/Coordinator";
import {useForm} from "../hooks/useForm";

function Login() {
  const {form, onChange, cleanFields} = useForm({
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const submitLogin = () => {
    const url = `${baseURL}/login`;
    const body = {
    email: form.email,
    password: form.password
    };

    axios
      .post(url, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdminHome(navigate);
        console.log(response.data)
      })
      .catch((err) => {
        goToHomePage(navigate);
      })
  };

  const submit = (event) => {
    event.preventDefault()
    cleanFields()
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="Usuário"
          required
        />
        <input
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          required
        />
        <button onClick={submitLogin} >Login</button>
      </form>
      <div>
        <button onClick={() => goToHomePage(navigate)}>HomePage</button>
      </div>
    </div>
  );
}

export default Login;
