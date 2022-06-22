import React, { useEffect } from "react";
import { goToAdminHome } from "../Routes/Coordinater";
import axios from "axios";
import { baseURL, axiosConfig } from "../../src/hooks/constants";
import { useNavigate } from "react-router-dom";

function TripDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = (id) => {
    const url = `${baseURL}/trip/${id}`;

    axios
      .get(url, axiosConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
      <button>Aprovar</button>
      <button>Reprovar</button>
    </div>
  );
}

export default TripDetails;
