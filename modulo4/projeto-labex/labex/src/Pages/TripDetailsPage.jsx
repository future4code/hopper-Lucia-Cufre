import React, { useState } from "react";
import { goToAdminHome } from "../Routes/Coordinator";
import axios from "axios";
import { baseURL, axiosConfig } from "../Components/constants";
import { useNavigate, useParams } from "react-router-dom";
import useRequestedData from "../hooks/useResquestedData";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { GlobalStyle, PageContainer, TextAlign } from "../styled/styledPage";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

function TripDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, getDetails] = useRequestedData(`/trip/${id}`);

  useProtectedPage();

  const decideCandidate = (candidateId, value) => {
    const url = `${baseURL}/trips/${id}/candidates/${candidateId}/decide`;
    const body = {
      approve: value,
    };
    axios
      .put(url, body, axiosConfig)
      .then((response) => {
        getDetails();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const approvedCandidates =
    details &&
    details.trip &&
    details.trip.approved.map((can) => {
      return (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "grey" }}
          aria-label="contacts"
          key={can.id}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={can.name} />
            </ListItemButton>
          </ListItem>
        </List>
      );
    });

  return (
    <PageContainer>
      <GlobalStyle />
      {details && details.trip && <h1>{details.trip.name}</h1>}
      {details && details.trip && (
        <div>
          <TextAlign>
            <b>Nome: </b>
            {details.trip.name}
          </TextAlign>
          <TextAlign>
            <b>Planeta: </b>
            {details.trip.planet}
          </TextAlign>
          <TextAlign>
            <b>Descrição: </b>
            {details.trip.description}
          </TextAlign>
          <TextAlign>
            <b>Duração: </b>
            {details.trip.durationInDays}
          </TextAlign>
          <TextAlign>
            <b>Data: </b>
            {details.trip.date}
          </TextAlign>
        </div>
      )}
      <Button onClick={() => goToAdminHome(navigate)} variant="contained">
        Voltar
      </Button>

      {details &&
        details.trip &&
        details.trip.candidates.map((can, trip) => {
          return (
            <div key={can.id}>
              <TextAlign>{can.name}</TextAlign>
              <TextAlign>{can.applicationText}</TextAlign>
              <TextAlign>{can.profession}</TextAlign>
              <TextAlign>{can.age}</TextAlign>
              <TextAlign>{can.country}</TextAlign>
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
                  <Button onClick={() => decideCandidate(can.id, true)}>
                    Aprovar
                  </Button>
                  <Button onClick={() => decideCandidate(can.id, false)}>
                    Reprovar
                  </Button>
                </ButtonGroup>
              </Box>
            </div>
          );
        })}
      <h3>Candidatos Aprovados</h3>
      {approvedCandidates}
    </PageContainer>
  );
}

export default TripDetails;
