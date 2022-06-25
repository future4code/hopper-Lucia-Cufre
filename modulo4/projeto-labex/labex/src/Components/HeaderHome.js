import { useNavigate } from "react-router-dom";
import { goToListTrips, goToLoginPage } from "../Routes/Coordinator";

function HeaderHome() {
  const navigate = useNavigate();
  

  return (
    <header>
      <button onClick={() => goToListTrips(navigate)}>ListTrips</button>
      <button onClick={()=>goToLoginPage(navigate)}>LoginPage</button>
    </header>
  );
}

export default HeaderHome;
