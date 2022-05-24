import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  h2 {
    text-decoration: underline;
  }
  button {
    display: block;
    margin-top: 3vh;
  }
`;

class CadastroUsuarios extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  criarUsuario = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    try {
      await axios.post(url, body, {
        headers: {
          Authorization: "lucia-cufre-aman-hopper",
        },
      });
      alert("Cadastro realizado com sucesso");
      this.setState({ nome: "", email: "" })
    } catch (error) {
      alert("Nao foi possivel realizar o cadastro");
      this.setState({ nome: "", email: "" })
    }

    /* axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      )
      .then((response) => {
        this.getAllUsers();
        alert("Cadastro realizado com sucesso");
      })
      .catch((error) => {
        alert("Nao foi possivel realizar o cadastro");
      })
      .finally(() => {
        this.setState({ inputNome: "", inputEmail: "" });
      }); */
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <Div>
        <h2>Cadastro de Usuario</h2>
        <div>
        <h3>Nome:</h3>
        <input value={this.state.nome} 
        onChange={this.onChangeNome} />
        </div>
        <div>
        <h3>Email:</h3>
        <input value={this.state.email} 
        onChange={this.onChangeEmail} />
        </div>
        <button onClick={this.criarUsuario}>Cadastrar</button>
        <button onClick={this.props.telaLista}>Lista de Usuarios</button>
      </Div>
    );
  }
}

export default CadastroUsuarios;
