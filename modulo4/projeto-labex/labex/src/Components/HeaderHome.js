import { useNavigate } from "react-router-dom";
import {goToLoginPage, goToListTrips } from "../Routes/Coordinater"

function HeaderHome() {

    const navigate = useNavigate()

  return (
    <header>
      <button onClick={()=> goToListTrips(navigate)}>ListTrips</button>
      <button onClick={()=> goToLoginPage(navigate)}>LoginPage</button>
    </header>
  );
}

export default HeaderHome;