import React from "react";
import HeaderHome from "../Components/HeaderHome";
import { GlobalStyle, PageContainer } from "../styled/styledPage";

function HomePage() {
  return (
    <PageContainer>
      <GlobalStyle />
      <h1>LABEX</h1>
      <p>As melhores viagens espaciais</p>
      <HeaderHome />
    </PageContainer>
  );
}

export default HomePage;
