import React, { useEffect, useState } from "react";
import HeaderAdmin from "../Components/HeaderAdmin";
import { goToTripDetails, goToLoginPage } from "../Routes/Coordinator";
import { baseURL, axiosConfig } from "../Components/constants";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  GlobalStyle,
  PageContainer,
  TextAlignDeco,
} from "../styled/styledPage";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

function AdminHome() {
  const [viagens, setViagens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useProtectedPage();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    setIsLoading(true);
    const url = `${baseURL}/trips`;

    axios
      .get(url)
      .then((response) => {
        setViagens(response.data.trips);
        setIsLoading(false);
      })
      .catch((erro) => {
        console.log(erro.response);
        goToLoginPage(navigate);
        setIsLoading(false);
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
    <PageContainer>
      <GlobalStyle />
      {isLoading && <p>Carregando..</p>}
      <HeaderAdmin />
      {viagens.map((viagem) => {
        return (
          <div key={viagem.id}>
            <TextAlignDeco>{viagem.name}</TextAlignDeco>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => deleteTrip(viagem.id)}>APAGAR</Button>
                <Button onClick={() => goToTripDetails(navigate, viagem.id)}>
                  DETALHES
                </Button>
              </ButtonGroup>
            </Box>
          </div>
        );
      })}
    </PageContainer>
  );
}

export default AdminHome;
