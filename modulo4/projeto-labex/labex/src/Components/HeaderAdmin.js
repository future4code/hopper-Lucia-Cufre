import { useNavigate } from "react-router-dom";
import {
  goToHomePage,
  goToCreateTrip,
  goToLoginPage,
} from "../Routes/Coordinator";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import * as React from "react";

function HeaderAdmin() {
  const navigate = useNavigate();

  const logout = (navigate) => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  return (
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
        <Button onClick={() => goToCreateTrip(navigate)}>CRIAR VIAGEM</Button>
        <Button onClick={() => goToHomePage(navigate)}>VOLTAR</Button>
        <Button onClick={() => logout(navigate)}>LOGOUT</Button>
      </ButtonGroup>
    </Box>
  );
}

export default HeaderAdmin;
