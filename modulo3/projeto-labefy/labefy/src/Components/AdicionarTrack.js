import React from "react";
import axios from "axios";
import styled  from "styled-components";

const Container = styled.div`
display:flex;

  input{padding: 0 1vw;
  border-radius:16px;
  background: #fff;
  box-shadow:none;
  border: 1px solid #dfe1e5;
  }
`


export default class AdicionarTrack extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  addTrackToPlaylist = async (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    try {
      await axios.post(url, body, {
        headers: {
          Authorization: "lucia-cufre-aman-hopper",
        },
      });
      alert("Sua música foi adicionada!");
      this.setState({ name: "", artist: "", url: "" });
    } catch (error) {
      console.log(error.message);
      alert("Sua música nao foi adicionada!");
      this.setState({ name: "", artist: "", url: "" });
    }
  };

  onChangeNome = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  render() {
    return (
      <Container>
        <input
          value={this.state.name}
          onChange={this.onChangeNome}
          placeholder={"Nome"}
        />
        <input
          value={this.state.artist}
          onChange={this.onChangeArtist}
          placeholder={"Artista"}
        />
        <input
          value={this.state.url}
          onChange={this.onChangeUrl}
          placeholder={"Url"}
        />
        <button onClick={() => this.addTrackToPlaylist(this.props.onClick)}>
          Adicionar
        </button>
      </Container>
    );
  }
}
