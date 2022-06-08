import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
  * {
    box-sizing: boder-box;
  }
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  text-align: center;
  width: 400px;
  height: 620px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`;
const Inside = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  border-bottom: 1px solid #d3d3d3;
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
  background-image: url("https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80");
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

function Home(props) {
  const [profiles, setProfiles] = useState({});
  const [identity, setIdentity] = useState("");
  const [choices, setChoices] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    setLoad(true)
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/person`
      )
      .then((response) => {
        console.log(response.data.profile);
        setProfiles(response.data.profile);
        setLoad(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
      setLoad(false)
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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };



  return (
    <Container>
      {load ? (<p>Carregando..</p>) : profiles && profiles ? (
      <Card>
        <Inside>
          <Top>
            <h2>astromatch</h2>
            <button onClick={props.onClick}>MATCHES</button>
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
            <div>
              <button onClick={() => choosePerson(false)}>NAO</button>
              <button onClick={() => choosePerson(true)}>SIM</button>
            </div>
          </div>
        </Inside>
      </Card>)
      : (<div>
        <p>Nao existem mais opcoes</p>
        <button onClick={props.limpar}>Limpar</button>
      </div>)
}
      
    </Container>
  );
}

export default Home;
