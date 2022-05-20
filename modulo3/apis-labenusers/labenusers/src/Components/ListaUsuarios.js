import React from "react";

class ListaUsuarios extends React.Component  {
  render(){
  return (
    <div>
     <div>
         <h4>{this.props.usuario}</h4>
     </div>
     <button onClick={this.props.volta}>Voltar</button>
    </div>
  );
  }
}

export default ListaUsuarios;