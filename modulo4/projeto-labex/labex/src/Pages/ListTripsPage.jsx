import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../Components/constants";
import HeaderUsuario from "../Components/HeaderUsuario";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GlobalStyle, PageContainer } from "../styled/styledPage";

function ListTrips() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    setIsLoading(true);
    const url = `${baseURL}/trips`;

    axios
      .get(url)
      .then((res) => {
        setTrips(res.data.trips);

        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Nao foi possível finalizar a ação");
      });
  };

  return (
    <PageContainer>
      <GlobalStyle />
      {isLoading && <p>Carregando..</p>}
      <HeaderUsuario />
      {trips.map((viagem) => {
        return (
          <div key={viagem.id}>
            <Card sx={{ minWidth: 275, padding: 5, margin: 2 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Nome: {viagem.name}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Planeta: {viagem.planet}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Duração: {viagem.durationInDays}
                </Typography>
                <Typography variant="body2">
                  Descrição: {viagem.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Data: {viagem.date}</Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </PageContainer>
  );
}

export default ListTrips;

/* <div key={viagem.id}>
              <p>Nome: {viagem.name}</p>
              <p>Descrição: {viagem.description}</p>
              <p>Planeta: {viagem.planet}</p>
              <p>Duração: {viagem.durationInDays}</p>
              <p>Data: {viagem.date}</p>
            </div> */
