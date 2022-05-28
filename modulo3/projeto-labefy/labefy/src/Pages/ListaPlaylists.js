import React from "react";
import axios from "axios";
import ListaTracks from "../Components/ListaTracks.js";

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

  showTracks = () => {
    this.setState({ tracks: !this.state.tracks });
  };

  render() {
    return (
      <div>
        <h2>Suas playlists!</h2>
        <div>
          {this.state.listaPlaylist.map((playlist) => {
            return (
              <ul key={playlist.id}>
                <li>{playlist.name}</li>

                <button onClick={() => this.deletePlaylist(playlist.id)}>
                  Eliminar Playlist
                </button>
                <button onClick={() => this.showTracks(playlist.id)}>
                  Ver Músicas
                </button>
                {this.state.tracks && <ListaTracks id={playlist.id} />}
                {/*  <button onClick={() => this.showTracks(playlist.id)}>
                  Ver Músicas
                </button> */}
              </ul>
            );
          })}
        </div>
        <button onClick={this.props.telaB}>Inicio</button>
      </div>
    );
  }
}

export default ListaPlaylists;
