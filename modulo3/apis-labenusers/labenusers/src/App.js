import React from "react";
import axios from "axios";
import CadastroUsuarios from "../src/Components/CadastroUsuarios.js";
import ListaUsuarios from "../src/Components/ListaUsuarios.js";

class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputNome: "",
    inputEmail: "",
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ listaUsuarios: response.data });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  criarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
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
        this.setState({ inputNome: "", inputEmail: "" });
      })
      .catch((error) => {
        alert("Nao foi possivel realizar o cadastro");
        this.setState({ inputNome: "", inputEmail: "" });
      });
  };

  onClickDeleta = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      )
      .then((response) => {
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    const list = this.state.listaUsuarios.map((cadaUsuario, index) => {
      return (
        <div key={index}>
          <h4>{cadaUsuario.name}</h4>
          <button onClick={() => this.onClickDeleta(cadaUsuario.id)}>
            Deleta
          </button>
        </div>
      );
    });

    return (
      <div>
        <CadastroUsuarios
          valuNome={this.state.inputNome}
          changeNome={this.onChangeNome}
          valueEmail={this.state.inputEmail}
          changeEmail={this.onChangeEmail}
          onClickCad={this.criarUsuario}
        />

        <ListaUsuarios usuario={list} />
      </div>
    );
  }
}

export default App;
