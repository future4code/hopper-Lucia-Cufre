import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLoginPage } from "../Routes/Coordinator";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import * as React from "react";

function HeaderHome() {
  const navigate = useNavigate();

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
        <Button onClick={() => goToListTrips(navigate)}>VIAGENS </Button>
        <Button onClick={() => goToLoginPage(navigate)}>LOGIN</Button>
      </ButtonGroup>
    </Box>
  );
}

export default HeaderHome;
