import React from "react";
import axios from "axios";

class CriarPlaylist extends React.Component {
  state = {
    nome: "",
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.nome,
    };
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    try {
      await axios.post(url, body, {
        headers: {
          Authorization: "lucia-cufre-aman-hopper",
        },
      });
      alert("Sua playlist foi criada!");
      this.setState({ nome: "" });
    } catch (error) {
      alert("Já existe uma playlist com esse nome");
      this.setState({ nome: "" });
    }
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Nome da Playlist:</h2>
        <input value={this.state.nome} onChange={this.onChangeNome} />
        <button onClick={this.createPlaylist}>Criar</button>
        <button onClick={this.props.telaA}>Lista de Playlists</button>
      </div>
    );
  }
}

export default CriarPlaylist;
