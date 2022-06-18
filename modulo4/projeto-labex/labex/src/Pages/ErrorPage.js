import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinater";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 onClick={() => goToHomePage(navigate)}>Pagina no encontrada</h1>>
    </div>
  );
}

export default Error;
