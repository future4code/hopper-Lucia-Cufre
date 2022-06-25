import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import HeaderHome from "../Components/HeaderHome"

function HomePage() {
  useProtectedPage();
  return (
    <div >
      <h1>LABEX</h1>
      <p>As melhores viagens espaciais</p>
      <HeaderHome/>
    </div>
  );
}

export default HomePage;