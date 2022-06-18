import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCreateTrip } from "../Routes/Coordinater";

function HeaderAdmin() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToCreateTrip(navigate)}>CreateTrip</button>
      <button onClick={() => goToHomePage(navigate)}>Home Page</button>
    </header>
  );
}

export default HeaderAdmin;
