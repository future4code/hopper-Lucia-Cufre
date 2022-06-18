import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome } from "../Routes/Coordinater";

function CreateTrip() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => goToAdminHome(navigate)}>Voltar adminHome</button>
      <button onClick={() => goToAdminHome(navigate)}>Criar</button>
    </div>
  );
}

export default CreateTrip;
