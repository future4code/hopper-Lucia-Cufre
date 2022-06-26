import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinator";
import { GlobalStyle, PageContainer } from "../styled/styledPage";

function Error() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <GlobalStyle />
      <h1>Pagina no encontrada</h1>
      <button onClick={() => goToHomePage(navigate)}> Voltar a Home </button>
    </PageContainer>
  );
}

export default Error;
