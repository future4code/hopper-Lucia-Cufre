import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCreateTrip, goToLoginPage } from "../Routes/Coordinator";


function HeaderAdmin() {
  const navigate = useNavigate();
  
  return (
    <header>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      <button onClick={() => goToLoginPage(navigate)}>Logout</button>

    </header>
  );
}

export default HeaderAdmin;
