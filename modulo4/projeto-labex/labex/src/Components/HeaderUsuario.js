import { useNavigate } from "react-router-dom";
import {goToHomePage, goToAppFrom } from "../Routes/Coordinator"

function HeaderUsuario() {

    const navigate = useNavigate()

  return (
    <header>
      <button onClick={()=> goToAppFrom(navigate)}>Application Form</button>
      <button onClick={()=> goToHomePage(navigate)}>Home Page</button>
    </header>
  );
}

export default HeaderUsuario;