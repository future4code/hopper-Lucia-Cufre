import React from "react";
import styled from "styled-components";

const Titulo = styled.h2`
  text-decoration: underline;
`;

class ListaUsuarios extends React.Component {
  render() {
    return (
      <div>
        <Titulo>Lista de Usuarios</Titulo>
        <li>
          <ul>{this.props.usuario}</ul>
        </li>
        <button onClick={this.props.volta}>Voltar</button>
      </div>
    );
  }
}

export default ListaUsuarios;
