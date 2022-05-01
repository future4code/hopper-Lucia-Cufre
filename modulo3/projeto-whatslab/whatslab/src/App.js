import React from "react";
import styled from "styled-components";
import EnviaMensagem from "./Components/EnviaMensagem/EnviaMensagem.js";



const MainContainer= styled.div`

*{
  padding: 0;
  margin: 0;
}

`

const CuadroDialogo = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-end;
border-style: solid;
border-width: 1px;
padding: 20px;
margin: 0 25vw;
height: 90vh;


`
const Input = styled.div`

display: flex;
justify-content: flex-start;
align-items: flex-start;
border-style: solid;
border-width: 0px 1px 1px 1px;
margin: 0 25vw;
`

const Span = styled.span`

font-weight: bold;

`


const InputConteudo = styled.input`

padding-right:  20em;


`
const Enviar = styled.button`

padding:  0 1em;

`
const Mensagen = styled.p`

margin: 8px 0;

`

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
        
        <Mensagen key={index}>
          <Span>{mensagem.usuario}</Span>: {mensagem.conteudo}
        </Mensagen>
        
      );
    });


    return (
      <MainContainer>

        <CuadroDialogo>{listaDeMensagens}</CuadroDialogo>
        

        <Input>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
            placeholder={"Usuario"}
          />
          <InputConteudo
            value={this.state.valorInputConteudo}
            onChange={this.onChangeConteudo}
            placeholder={"Mensagem"}
          />

          <Enviar type="submit" onClick={this.enviaMensagem}>Enviar</Enviar>
        </Input>
      </MainContainer>
    );
  }
}

export default App;
