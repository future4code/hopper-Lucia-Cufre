import React from "react";
import styled from "styled-components";
import Aberta from "../Components/PerguntaAberta.js";
import Fechada from "../Components/PerguntaFechada.js";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <Aberta pergunta={"1. Qual o seu nome?"} />
        <Aberta pergunta={"2. Qual sua idade?"} />
        <Aberta pergunta={"3. Qual seu email?"} />

        <Fechada
          pergunta={"4.Qual duas escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}

          
        />
      </div>
    );
  }
}
