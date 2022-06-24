import { useNavigate } from "react-router-dom";
import { goToAdminHome, goToListTrips } from "../Routes/Coordinator";

function HeaderHome() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToListTrips(navigate)}>ListTrips</button>
      <button onClick={() => goToAdminHome(navigate)}>LoginPage</button>
    </header>
  );
}

export default HeaderHome;
