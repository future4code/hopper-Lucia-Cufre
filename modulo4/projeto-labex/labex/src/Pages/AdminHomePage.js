import React, { useEffect, useState } from "react";
import HeaderAdmin from "../Components/HeaderAdmin";
import { goToTripDetails, goToLoginPage } from "../Routes/Coordinater";
import { useParams } from "react-router-dom";
import { baseURL, axiosConfig } from "../hooks/constants";
import { useProtectedPage } from "../../src/hooks/useProtectedPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const [viagens, setViagens] = useState([]);
  const { id } = useParams();
  useProtectedPage();
  const navigate = useNavigate();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const url = `${baseURL}/trips`;

    axios
      .get(url)
      .then((response) => {
        setViagens(response.data.trips);
      })
      .catch((erro) => {
        console.log(erro.response);
        goToLoginPage(navigate);
      });
  };

  const deleteTrip = (id) => {
    const url = `${baseURL}/trips/${id}`;

    axios
      .delete(url, axiosConfig)
      .then((res) => {
        alert("Viagem apagada.");
        getTrips();
      })
      .catch((err) => {
        alert("Nao foi possível apagar a viagem");
      });
  };

  return (
    <div>
      <HeaderAdmin />
      <button onClick={() => goToTripDetails(id)}>details</button>
      <button onClick={deleteTrip}>Apagar</button>
    </div>
  );
}

export default AdminHome;
