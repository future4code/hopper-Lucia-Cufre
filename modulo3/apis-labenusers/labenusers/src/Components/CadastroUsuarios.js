import React from "react";
import styled from "styled-components";

const Div = styled.div`
  h2 {
    text-decoration: underline;
  }
  button {
    display: block;
    margin-top: 3vh
  }

`;

class CadastroUsuarios extends React.Component {
  render() {
    return (
      <Div>
        <h2>Cadastro de Usuario</h2>
        <h3>Nome:</h3>
        <input value={this.props.valuNome} onChange={this.props.changeNome} />
        <h3>Email:</h3>
        <input
          value={this.props.valueEmail}
          onChange={this.props.changeEmail}
        />
        <button onClick={this.props.onClickCad}>Cadastrar</button>
        <button onClick={this.props.telalista}>Lista de Usuarios</button>
      </Div>
    );
  }
}

export default CadastroUsuarios;
