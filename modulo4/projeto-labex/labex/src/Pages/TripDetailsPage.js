import React, { useEffect, useState } from "react";
import { goToAdminHome } from "../Routes/Coordinator";
import axios from "axios";
import { baseURL, axiosConfig } from "../../src/Components/constants";
import { useNavigate } from "react-router-dom";

function TripDetails() {
  const [approve, setApprove] = useState(false);
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

  const decideCandidate = (tripId, candidateId, value) => {
    const url = `${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`;
    const body = {
      approve,
    };
    axios
      .put(url, body, axiosConfig)
      .then((response) => {
        setApprove(value);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
      <button onClick={() => decideCandidate(true)}>Aprovar</button>
      <button onClick={() => decideCandidate(false)}>Reprovar</button>
    </div>
  );
}

export default TripDetails;
