import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "luli",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160",
      },
      {
        nomeUsuario: "lorena",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: `https://picsum.photos/200/170`,
      },
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPrincipal: "",
  };

  adicionaPost = () => {
    const postNovo = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPrincipal,
    };

    const novaPubli = [...this.state.post, postNovo];

    this.setState({ post: novaPubli });
    this.setState({
      inputNomeUsuario: "",
      inputFotoUsuario: "",
      inputFotoPrincipal: "",
    });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };
  onChangeFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value });
  };
  onChangeFotoPrincipal = (event) => {
    this.setState({ inputFotoPrincipal: event.target.value });
  };

  render() {
    const listaComponentes = this.state.post.map((posts, index) => {
      return (
        <Post
          nomeUsuario={posts.nomeUsuario}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
          key={index}
        />
      );
    });

    return (
      <MainContainer>
        <div>
          <input
            type="nome"
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Nome de Usuario"}
          />
          <input
            type="url"
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto de Usuario"}
          />
          <input
            type="url"
            value={this.state.inputFotoPrincipal}
            onChange={this.onChangeFotoPrincipal}
            placeholder={"Foto de publicacao"}
          />
          <button onClick={this.adicionaPost}>Publicar</button>
        </div>
        <div>{listaComponentes}</div>
      </MainContainer>
    );
  }
}

export default App;
