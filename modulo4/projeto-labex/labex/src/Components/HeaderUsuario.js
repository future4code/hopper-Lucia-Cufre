import { useNavigate } from "react-router-dom";
import { goToHomePage, goToAppFrom } from "../Routes/Coordinator";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import * as React from "react";

function HeaderUsuario() {
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
        <Button onClick={() => goToAppFrom(navigate)}>INSCRIÇÃO</Button>
        <Button onClick={() => goToHomePage(navigate)}>HOME</Button>
      </ButtonGroup>
    </Box>
  );
}

export default HeaderUsuario;
