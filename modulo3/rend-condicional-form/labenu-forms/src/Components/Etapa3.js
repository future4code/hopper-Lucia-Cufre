import React from "react";
import Fechada from "../Components/PerguntaFechada.js";
import Aberta from "../Components/PerguntaAberta.js";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Etapa 3 - Informacoes gerais de ensino</h1>
        <Aberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />

        <Fechada
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de ingles"]}
        />
      </div>
    );
  }
}
