import React, { useEffect, useState } from "react";
import { goToAdminHome } from "../Routes/Coordinator";
import axios from "axios";
import { baseURL, axiosConfig } from "../../src/Components/constants";
import { useNavigate, useParams } from "react-router-dom";
import useRequestedData from "../hooks/useResquestedData";
import { useProtectedPage } from "../hooks/useProtectedPage";

function TripDetails() {
  const [approved, setApprove] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, getDetails] = useRequestedData(`/trip/${id}`);
  useProtectedPage();

  const decideCandidate = (tripId, candidateId, value) => {
    const url = `${baseURL}/trips/${tripId}/candidates/${candidateId}/decide`;
    const body = {
      approved,
    };
    axios
      .put(url, body, axiosConfig)
      .then((response) => {
        setApprove(value);
        getDetails();
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {details && details.trip && <h1>{details.trip.name}</h1>}
      {details && details.trip && (
        <div>
          <p>
            <b>Nome:</b>
            {details.trip.name}
          </p>
          <p>
            <b>Planeta:</b>
            {details.trip.planet}
          </p>
          <p>
            <b>Descrição:</b>
            {details.trip.description}
          </p>
          <p>
            <b>Duração:</b>
            {details.trip.durationInDays}
          </p>
          <p>
            <b>Data:</b>
            {details.trip.date}
          </p>
        </div>
      )}
      <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
      {details &&
        details.trip &&
        details.trip.candidates.map((can) => {
          return (
            <div key={can.id}>
              <p>{can.name}</p>
              <p>{can.applicationText}</p>
              <p>{can.profession}</p>
              <p>{can.age}</p>
              <p>{can.country}</p>
              <button
                onClick={() => decideCandidate(details.trip.id, can.id, true)}
              >
                Aprovar
              </button>
              <button
                onClick={() => decideCandidate(details.trip.id, can.id, false)}
              >
                Reprovar
              </button>
            </div>
          );
        })}
        {details && details.trip && details.trip.approved.map((can)=> {
          return <li key={can.id}>{can.name}</li>
        })}
    </div>
  );
}

export default TripDetails;
