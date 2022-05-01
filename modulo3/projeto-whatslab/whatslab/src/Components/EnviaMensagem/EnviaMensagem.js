/* import React from "react";
import styled from "styled-components";


const Enviar = styled.button`
  padding: 0 1em;
`;

class EnviaMensagem extends React.Component {
  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      conteudo: this.state.valorInputConteudo,
    };

    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
      valorInputConteudo: "",
    });
  };

  render() {


    return (
    
    <Enviar onClick={this.enviaMensagem}>Enviar</Enviar>
    
    )
}
}

export default EnviaMensagem; */
