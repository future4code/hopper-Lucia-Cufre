import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonClear from "./ButtonClear";
import styled, { createGlobalStyle } from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import MatchIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";

const GlobalStyle = createGlobalStyle`
  
 *{
box-sizing:border-box;
 }
 `;

const Container = styled.body`
  display: flex;
  justify-content: center;
  background-image: url("https://images.vexels.com/media/users/3/284258/raw/6e75e069dc7976d15d92fb1e24b2a774-desenho-de-padr-o-de-flores-roxas-selvagens.jpg");
`;
const Card = styled.div`
  text-align: center;
  width: 400px;
  height: 610px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgb(5 5 5 / 10%) 0px 2px 10px 0px;
  background-color: #f3e5f5;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Inside = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #808080;

  h2 {
    margin-left: 5.5rem;
    color: #db7093;
  }
`;

const Foto = styled.div`
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 450px;
  animation: 0.5s ease 0s 1 normal forwards running none;
  display: flex;
  box-align: center;
  align-items: center;
  margin-top: 30px;
`;
const Efecto = styled.div`
  background-image: url("https://img.freepik.com/fotos-gratis/resumo-luxo-creme-bege-bege-claro-como-fundo-de-textura-de-algodao-e-seda_1258-54560.jpg?w=2000");
  filter: blur(10px);
  height: 100%;
  width: 100%;
  position: absolute;
`;
const Img = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`;

const Legenda = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  display: flex;
  flex-direction: column;
  box-pack: end;
  justify-content: flex-end;
  padding: 15px;
  z-index: 2;
  font-family: Roboto, sans-serif;

  div {
    display: flex;
    box-align: baseline;
    align-items: baseline;
  }

  p {
    margin-top: 2px;
    display: flex;
    text-align: start;
    margin-right: 50px;
  }
`;
const P1 = styled.div`
  font-weight: bold;
  font-size: 24px;
`;
const P2 = styled.div`
  margin-left: -30px;
  font-size: 20px;
`;

const Choice = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
const Erro = styled.div`
  text-align: center;
  width: 400px;
  height: 610px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgb(5 5 5 / 10%) 0px 2px 10px 0px;
  background-color: #f3e5f5;
  margin-top: 10px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home(props) {
  const [profiles, setProfiles] = useState({});
  const [identity, setIdentity] = useState("");
  const [choices, setChoices] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    setLoad(true);
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/person`
      )
      .then((response) => {
        setProfiles(response.data.profile);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setLoad(false);
  };

  const choosePerson = (value) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/choose-person";
    const body = {
      id: identity,
      choice: choices,
    };

    axios
      .post(url, body, {
        header: "Content-Type: application/json",
      })
      .then((response) => {
        setIdentity(profiles.id);
        setChoices(value);
        getProfiles();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {load ? (
          <p>Carregando..</p>
        ) : profiles && profiles ? (
          <Card>
            <Inside>
              <Top>
                <h2>astromatch</h2>
                <IconButton
                   color="secondary"
                   aria-label="add an alarm"
                   size="large"
                   onClick={props.onClick}
                  >
                    <MatchIcon fontSize="large" />
                  </IconButton>
              </Top>
              <div>
                <Foto>
                  <Efecto></Efecto>
                  <Img src={profiles.photo} alt={profiles.photo_alt} />
                  <Legenda>
                    <div>
                      <P1>
                        <p>{profiles.name} ,</p>
                      </P1>
                      <P2>{profiles.age}</P2>
                    </div>
                    <p>{profiles.bio}</p>
                  </Legenda>
                </Foto>
                <Choice>
                  <IconButton
                    color="secondary"
                    aria-label="add an alarm"
                    size="large"
                    onClick={() => choosePerson(false)}
                  >
                    <CloseIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="add an alarm"
                    size="large"
                    onClick={() => choosePerson(true)}
                  >
                    <FavoriteIcon fontSize="large" />
                  </IconButton>
                </Choice>
              </div>
            </Inside>
          </Card>
        ) : (
          <Erro>
            <p>Nao existem mais opcoes</p>
            <ButtonClear main={getProfiles} />
          </Erro>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Home;
