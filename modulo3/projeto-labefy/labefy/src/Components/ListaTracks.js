import React from "react";
import axios from "axios";
import AdicionarTrack from "../Components/AdicionarTrack.js";
import styled ,  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding: 0;
}

`

const Container = styled.div`

display: flex;
  justify-content: space-around;
  
`

class ListaTracks extends React.Component {
  state = {
    listaTracks: [],
    addTrack: false,
    
    
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

  addMusic = () => {
    this.setState({ addTrack: !this.state.addTrack });
  };

  render() {
    return (
      <Container>
        <GlobalStyle/>
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
                <ul>{track.artist}</ul>
                <audio controls autoplay name="media">
                  <source src={track.url} type="audio/mp3" />
                </audio>

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
      </Container>
    );
  }
}

export default ListaTracks;
