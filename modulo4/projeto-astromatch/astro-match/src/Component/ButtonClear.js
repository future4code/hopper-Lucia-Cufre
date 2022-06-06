import React from "react";
import axios from "axios";
import TelaInicial from "../Pages/TelaInicial.js"


function App() {

const clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/clear")
    .then(() => {
        <TelaInicial/>
    }).catch((error)=>{
        console.log(error.message)
    })
}
  

  return (
    <div >
      <button onClick={clear}>Limpar</button>
    </div>
  );
}

export default App;