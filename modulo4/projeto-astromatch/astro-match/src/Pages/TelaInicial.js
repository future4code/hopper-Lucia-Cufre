import React, { useState, useEffect } from "react";
import axios from "axios";
import Clear from "../Component/ButtonClear.js";
import styled from "styled-components";

const Container = styled.div`
*{
  box-sizing: boder-box;
}

`
const Card = styled.div`
width: 400px;
height: 600px;
top: 50%;
left: 50%;
border: 1px solid black;
border-radius: 5px;
background-color: white;
box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;

` 
const Inside = styled.div`
display: flex;
flex-direction:column;
height: 100%;

`
const Top = styled.div`
height: 50px;
border-bottom: 1px solid #d3d3d3;

`
const Img = styled.img`
width: 20vw;

`

function Home(props) {
  const [profiles, setProfiles] = useState([]);
  const [identity, setIdentity] = useState("");
  const [choices, setChoices] = useState(false);

  const getProfiles = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/person`
      )
      .then((response) => {
        console.log(response.data.profile);
        setProfiles(response.data.profile);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getProfiles();
  }, []);

  const choosePerson = () => {
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
        setIdentity(profiles.id)
        setChoices(!choices)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if(identity === profiles.id){
      getProfiles()
    }
  }, [identity]);

 

  return (
    <Container>
      <Card>
      <Inside>
        <Top>
          <h2>astromatch</h2>
      <button onClick={props.onClick}>MATCHES</button>
      </Top>
      <div>
        
        <Img src={profiles.photo} alt={profiles.photo_alt} />
        
        <div>
        <p>{profiles.name}</p>
        <p>{profiles.age}</p>
        <p>{profiles.bio}</p>
        </div>
        <div>
    <button onClick={choosePerson}>NAO</button>
      <button onClick={choosePerson}>SIM</button>
      </div>
      </div>
      </Inside>
      </Card>
      <footer>
      <Clear/>
      </footer>
    </Container>
  );
}

export default Home;
