import React from "react";
import axios from "axios";
import AdicionarTrack from "../Components/AdicionarTrack.js";

class ListaTracks extends React.Component {
  state = {
    listaTracks: [],
    addTrack: false,
    /*  tocar: false,
    playNaMusica:{} */
  };

  componentDidMount() {
    this.getPlaylistTracks(this.props.id);
  }

  componentDidUpdate() {
    this.getPlaylistTracks(this.props.id);
  }

  getPlaylistTracks = async (playlistId) => {
    try {
      const response = await axios.get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );
      console.log(response.data);
      this.setState({ listaTracks: response.data.result.tracks });
    } catch (error) {
      console.log(error.response);
    }
  };

  removeTrackFromPlaylist = async (playlistId, trackId) => {
    try {
      await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`,
        {
          headers: {
            Authorization: "lucia-cufre-aman-hopper",
          },
        }
      );
      alert(`Track apagada`);
    } catch (error) {
      console.log(error.message);
      alert("Nao foi possivel apagar a música. Tente novamente.");
    }
  };

  /* playAndPause = () => {
    const isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };  */

  /* tocarMusicas = track => {
    this.setState({
      playNaMusica: track,
      tocar: !this.state.tocar
    })
  }; */

  addMusic = () => {
    this.setState({ addTrack: !this.state.addTrack });
  };

  render() {
    return (
      <div>
        <p>Musicas</p>
        <div>
          <div>
            <button onClick={this.addMusic}>Adicionar Música</button>
            {this.state.addTrack && <AdicionarTrack onClick={this.props.id} />}
          </div>

          {this.state.listaTracks.map((track) => {
            return (
              <li key={track.id}>
                <ul>{track.name}</ul>
                
                {/* <ul><button onClick={()=>this.tocarMusicas(track.url)}>{track.url}</button></ul> */}
                {/* <button onClick={() => this.tocarMusicas(track)}></button>  */}

                <button
                  onClick={() =>
                    this.removeTrackFromPlaylist(this.props.id, track.id)
                  }
                >
                  x
                </button>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListaTracks;
