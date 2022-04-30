import React from "react";

class App extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "",
        conteudo: "",
      },
    ],

    valorInputUsuario: "",
    valorInputConteudo: "",
  };

  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      conteudo: this.state.valorInputConteudo,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
      valorInputUsuario: "",
      valorInputConteudo: "",
    });
  };

  onChangeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeConteudo = (event) => {
    this.setState({ valorInputConteudo: event.target.value });
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem, index) => {
      return (
        <p key={index}>
          {mensagem.usuario} : {mensagem.conteudo}
        </p>
      );
    });

    return (
      <div>
        <div>{listaDeMensagens}</div>

        <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Usuario"}
          />
          <input
            value={this.state.valorInputConteudo}
            onChange={this.onChangeConteudo}
            placeholder={"Mensagem"}
          />

          <button onClick={this.enviaMensagem}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default App;
