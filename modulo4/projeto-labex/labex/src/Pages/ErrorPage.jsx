import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinator";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Pagina no encontrada</h1>
    <button onClick={() => goToHomePage(navigate)}> Voltar a Home </button>
    </div>
  );
}

export default Error;
