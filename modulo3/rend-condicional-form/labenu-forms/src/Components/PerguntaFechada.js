import React from "react";

export default class PerguntaFechada extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>
            {this.props.opcoes.map((opcao) => {
                return (
                    <option key="opcoes">{opcao}</option>
                )
            })}
        </select>
      </div>
    );
  }
}
