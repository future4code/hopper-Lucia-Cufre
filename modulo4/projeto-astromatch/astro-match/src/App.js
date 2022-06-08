import React, { useState } from "react";
import Home from "../src/Pages/TelaInicial.js";
import Matches from "../src/Pages/Matches.js";
import axios from "axios";

function App() {
  const [tela, setTela] = useState("inicio");

  const trocarDeTela = () => {
    setTela(tela === "inicio" ? "lista" : "inicio");
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/clear"
      )
      .then((response) => {
        alert("foram apagados os matches");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {tela === "inicio" ? (
        <Home onClick={trocarDeTela} limpar={clear} />
      ) : (
        <Matches onClick={trocarDeTela} limpar={clear} />
      )}
    </div>
  );
}

export default App;
