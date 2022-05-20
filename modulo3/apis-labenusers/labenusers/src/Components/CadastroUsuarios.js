import React from "react";

class CadastroUsuarios extends React.Component {
  render(){
  return (
    <div>
        <h3>Nome:</h3>
      <input value={this.props.valuNome} onChange={this.props.changeNome}/>
      <h3>Email:</h3>
      <input value={this.props.valueEmail} onChange={this.props.changeEmail}/>
      <button onClick={this.props.onClickCad}>Cadastrar</button>
    </div>
  );
  }
}

export default CadastroUsuarios;