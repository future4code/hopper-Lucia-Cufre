import React, { useEffect, useState } from "react";
import HeaderAdmin from "../Components/HeaderAdmin";
import { goToTripDetails, goToLoginPage } from "../Routes/Coordinator";
import { useParams } from "react-router-dom";
import { baseURL, axiosConfig } from "../Components/constants";
import { useProtectedPage } from "../hooks/useProtectedPage";
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
      {
        viagens.map((viagem) => {
          return(
            <div key={viagem.id}>
              <p>{viagem.name}</p>
              <button onClick={()=>deleteTrip(viagem.id)}>Apagar</button>
              <button onClick={() => goToTripDetails(navigate, viagem.id)}>details</button>
            </div>
          )
        
        })
      }
    </div>
  );
}

export default AdminHome;
