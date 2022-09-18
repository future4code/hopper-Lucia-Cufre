import React, { useState } from "react";
import Home from "../src/Pages/TelaInicial.js";
import Matches from "../src/Pages/Matches.js";

function App() {
  const [tela, setTela] = useState("inicio");

  const trocarDeTela = () => {
    setTela(tela === "inicio" ? "lista" : "inicio");
  };

  return (
    <div>
      {tela === "inicio" ? (
        <Home onClick={trocarDeTela} />
      ) : (
        <Matches onClick={trocarDeTela} />
      )}
    </div>
  );
}

export default App;
