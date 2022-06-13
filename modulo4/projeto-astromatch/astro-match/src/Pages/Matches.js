import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonClear from "./ButtonClear";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled, { createGlobalStyle } from "styled-components";
import Avatar from "@mui/material/Avatar";
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
  background-image: url("https://img.freepik.com/vetores-gratis/padrao-perfeito-de-coracoes-no-fundo-branco_586862-114.jpg");
`;

const Card = styled.div`
  width: 400px;
  height: 610px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
  background-color: #f3e5f5;
  margin-top: 10px;
  margin-bottom: 5px;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #808080;
  color: #db7093;
`;

const Botones = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  left: 39%;
  margin-top: 15px;
`;

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  ul {
    display: flex;
  }
  img {
    width: 25vw;
  }
  p {
    margin-left: 30px;
    font-size: larger;
  }
`;

function Matches(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/matches"
      );
      setMatches(response.data.matches);
    } catch (erro) {
      alert("Nao foi possível carregar a página.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Card>
          <Top>
            <h2>astromatch</h2>
          </Top>
          <Lista>
            {matches.map((crush) => {
              return (
                <ul>
                  <Avatar
                    alt={crush.photo_alt}
                    src={crush.photo}
                    sx={{ width: 56, height: 56 }}
                  />
                  <p>{crush.name}</p>
                </ul>
              );
            })}
          </Lista>
          <Botones>
            <Stack direction="row" spacing={10}>
              <Button
                variant="contained"
                color="primary"
                onClick={props.onClick}
              >
                Inicio
              </Button>
              <ButtonClear main={getMatches} />
            </Stack>
          </Botones>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default Matches;
