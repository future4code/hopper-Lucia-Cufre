import React from "react";
import { useNavigate } from "react-router-dom";
import {goToListTrips} from "../Routes/Coordinater";


function ApplicationForm() {
  const navigate = useNavigate()

  return (
    <div >
      <button onClick={()=> goToListTrips(navigate)}>Voltar a Lista</button>
      <button onClick={()=> goToListTrips(navigate)}>Enviar</button>
    </div>
  );
}

export default ApplicationForm;