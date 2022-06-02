import React from "react";
import CriarPlaylist from "../src/Pages/Home.js";
import ListaPlaylists from "../src/Pages/ListaPlaylists.js";

class App extends React.Component {
  state = {
    tela: "inicio",
  };

  trocarDeTela = () => {
    this.setState({
      tela: this.state.tela === "inicio" ? "lista" : "inicio",
    });
  };

  render() {
    return (
      <div>
        {this.state.tela === "inicio" ? (
          <CriarPlaylist telaA={this.trocarDeTela} />
        ) : (
          <ListaPlaylists telaB={this.trocarDeTela} />
        )}
      </div>
    );
  }
}

export default App;
