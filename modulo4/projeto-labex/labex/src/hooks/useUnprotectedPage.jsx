import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome } from "../Routes/Coordinator";

export const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToAdminHome(navigate);
    }
  }, [navigate]);
};
