import React from "react";
import { useNavigate } from "react-router-dom";
import {goToAdminHome, goToHomePage} from "../Routes/Coordinater"

function Login() {
  const navigate = useNavigate()
  return (
    <div >
      <button onClick={()=> goToAdminHome(navigate)}>Login</button>
      <button onClick={()=> goToHomePage(navigate)}>HomePage</button>
    </div>
  );
}

export default Login;