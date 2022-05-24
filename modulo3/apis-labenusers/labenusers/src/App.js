import React from "react";
import CadastroUsuarios from "../src/Components/CadastroUsuarios.js";
import ListaUsuarios from "../src/Components/ListaUsuarios.js";

class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  trocarDeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual === "cadastro" ? "lista" : "cadastro",
    });
  };

  render() {
    return (
      <div>
        {this.state.telaAtual === "cadastro" ? 
          <CadastroUsuarios telaLista={this.trocarDeTela} />
        : 
          <ListaUsuarios volta={this.trocarDeTela} />
        }
      </div>
    );
  }
}

export default App;
