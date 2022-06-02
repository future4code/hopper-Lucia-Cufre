import React from "react";
import axios from "axios";
import ListaTracks from "../Components/ListaTracks.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
}

`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  margin-top: 5vh;
  button {
    margin-left: 50px;
    padding: 2vh 2vw;
    border-radius: 16px;
    background: #fff;
    box-shadow: none;
    border: 1px solid #9932cc;
    color: #9932cc;
    font-weight: bold;
  }

  h2 {
    color: #9932cc;
    text-decoration-line: underline;
    margin-bottom: 5vh;
  }
`;

const Ul = styled.ul`
  display: flex;

  align-items: center;
  margin-left: 5vw;

  li {
    margin: 5vh 2vw;
    color: #da70d6;
    text-decoration-line: underline;
  }

  button {
    margin: 2vh 2vw;
    padding: 2vh 2vw;
    border-radius: 16px;
    background: #fff;
    box-shadow: none;
    border: 1px solid #9932cc;
    color: #9932cc;
    font-weight: bold;
  }
`;



class ListaPlaylists extends React.Component {
  state = {
    listaPlaylist: [],
    tracks: false,
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );

      this.setState({ listaPlaylist: response.data.result.list });
    } catch (error) {
      console.log(error.message);
    }
  };

  deletePlaylist = async (playlistId) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );
      alert(`A playlist foi apagada`);
    } catch (error) {
      console.log(error.message);
      alert("Nao foi possivel apagar a playlist. Tente novamente.");
    }
  };

  showTracks = (playlistId) => {
    this.setState({ tracks: !this.state.tracks, id: playlistId });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header>
          <h2>Suas playlists!</h2>
          <button onClick={this.props.telaB}>Inicio</button>
        </Header>
        <div>
          {this.state.listaPlaylist.map((playlist) => {
            return (
              <Ul key={playlist.id}>
                <li>{playlist.name}</li>

                <button onClick={() => this.deletePlaylist(playlist.id)}>
                  Eliminar Playlist
                </button>
                <button onClick={() => this.showTracks()}>Ver Músicas</button>
                {this.state.tracks ? <ListaTracks id={playlist.id} /> : null}
              </Ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListaPlaylists;
