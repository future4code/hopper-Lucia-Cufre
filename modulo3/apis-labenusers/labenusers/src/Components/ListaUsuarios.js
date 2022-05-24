import React from "react";
import axios from "axios";
import styled from "styled-components";

const Titulo = styled.h2`
  text-decoration: underline;
`;

class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );
      this.setState({ listaUsuarios: response.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  onClickDeleta = async (id) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );
     
      if(window.confirm("Tem certeza que deseja deletar este usuario?") === false){
         return "error";
      };
    } catch (error) {
      alert("Nao foi possivel deletar usuario");
    }
  };

  render() {
    return (
      <div>
        <Titulo>Lista de Usuarios</Titulo>
        {this.state.listaUsuarios.map((cadaUsuario, index) => {
          return (
            <ul key={index}>
              <li>{cadaUsuario.name}</li>
              <button onClick={() => this.onClickDeleta(cadaUsuario.id)}>
                Deleta
              </button>
            </ul>
          );
        })}
        <button onClick={this.props.volta}>Voltar</button>
      </div>
    );
  }
}

export default ListaUsuarios;
