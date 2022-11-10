import React from "react";
import axios from "axios";
import { baseURL } from "../Components/constants";
import { useNavigate } from "react-router-dom";
import { goToAdminHome, goToHomePage } from "../Routes/Coordinator";
import { useForm } from "../hooks/useForm";
import { GlobalStyle, PageContainer } from "../styled/styledPage";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";

function Login() {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useUnprotectedPage();

  const submitLogin = () => {
    const url = `${baseURL}/login`;
    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(url, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdminHome(navigate);
      })
      .catch((err) => {
        goToHomePage(navigate);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <PageContainer>
      <GlobalStyle />
      <h1>LOGIN</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={submit}>
          <TextField
            type="email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="Usuário"
            required
            id="outlined-required"
          />
          <TextField
            type="password"
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Senha"
            required
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={submitLogin}>LOGIN</Button>
              <Button onClick={() => goToHomePage(navigate)}>HOME</Button>
            </ButtonGroup>
          </Box>
        </form>
      </Box>
    </PageContainer>
  );
}

export default Login;
