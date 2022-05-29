import React from "react";
import axios from "axios";
import styled ,  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
}

`



const Header = styled.main`
margin-top:30vh;
display:flex;
justify-content:center;
align-items:center;
h1{
  margin-top:3vh;
  margin-right:3vh;
  color:#DA70D6;
}

p{
  color:#9932CC;
}

input,button{
  padding: 2vh 5vw;
  border-radius:16px;
  background: #fff;
  box-shadow:none;
  border: 1px solid #dfe1e5;
}

button{
  border: 1px solid #9932CC;
  color:#9932CC;
  font-weight: bold;
}

`




const Lista = styled.button`
display:flex;
justify-content:center;
align-items:center;
padding: 2vw 20vh;
margin-top:20vh;
margin-left:30rem;

border-radius:16px;
  background: #fff;
  box-shadow:none;
  border: 1px solid #9932CC;
  color:#9932CC;
  font-weight: bold;
`




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
        <GlobalStyle/>
        <Header>
        <h1>LABEFY!</h1>
        <div>
        <p>Adicionar Playlist</p>
        <input value={this.state.nome} onChange={this.onChangeNome} placeholder={"Nome da Playlist"}/>
       
        <button onClick={this.createPlaylist}>Criar</button>
        
        </div>
        </Header>
        <main>
        <Lista onClick={this.props.telaA}>Lista de Playlists</Lista>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

export default CriarPlaylist;
