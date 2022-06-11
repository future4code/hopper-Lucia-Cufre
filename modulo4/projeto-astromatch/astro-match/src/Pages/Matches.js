import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonClear from "./ButtonClear";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styled , {createGlobalStyle} from "styled-components";
import Avatar from '@mui/material/Avatar';

const GlobalStyle = createGlobalStyle`

body{
  padding:0%;
  margin:0%;
}
`



const Botones = styled.div`
display: flex;
justify-content:center;
margin-top: 10vh;
`

const Lista = styled.div`

display:flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin-left: 35%;
margin-top: 5vh;

ul{
  display: flex;
}
img{
  width:25vw;
}
p{
  margin-left: 30px;
}

`

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
      console.log(response.data.matches);
      setMatches(response.data.matches);
    } catch (erro) {
      alert("Nao foi possível carregar a página.");
    }
  };

  return (
    <div>
      <GlobalStyle/>
      <Botones>
      <Stack direction="row" spacing={10}>
      <Button variant="contained" color="success" onClick={props.onClick}>
      Inicio
      </Button>
      <ButtonClear main={getMatches}/>
      </Stack>
      </Botones>
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
    </div>
  );
}

export default Matches;
