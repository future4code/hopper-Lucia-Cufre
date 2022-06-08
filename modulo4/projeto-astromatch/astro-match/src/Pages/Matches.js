import React, { useState, useEffect } from "react";
import axios from "axios";


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
      {matches.map((crush) => {
        return (
          <ul>
            <p>{crush.name}</p>
            <img src={crush.photo} alt={crush.photo_alt} />
          </ul>
        );
      })}
      <button onClick={props.limpar}>Limpar</button>
      <button onClick={props.onClick}>Inicio</button>
    </div>
  );
}

export default Matches;
