import React from "react";
import styled from "styled-components";
import Etapa1 from "../src/Components/Etapa1.js";
import Etapa2 from "../src/Components/Etapa2.js";
import Etapa3 from "../src/Components/Etapa3.js";
import Etapa4 from "../src/Components/Etapa4.js";
import Fechada from "../src/Components/PerguntaFechada.js";


const MainContainer = styled.div`

text-align:center;

button{
  margin-top: 30px;
}

`


export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  onClickProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1 });

    /* if(this.props.opcoes == "Ensino superior completo" || this.props.opcoes == "Ensino superior incompleto"){
      this.setState({etapa: this.state.etapa = 1})
    }else{
      this.setState({etapa: this.state.etapa = 2})
    } */

  };

  renderizaEtapa = () => {


    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
         return <Etapa2/>;
        break;
      case 3:
        return <Etapa3 />;
        break;
        case 4:
        return <Etapa4 />;
        break;
      default: ;
        break;
    }
  };
  render() {
    



    return (
      <MainContainer>
        <div>{this.renderizaEtapa()}</div>
        {this.state.etapa < 4 ? (<button onClick={this.onClickProximaEtapa}>Próxima Etapa</button>) : ("Ate mais!")}

      </MainContainer>
    );
  }
}
