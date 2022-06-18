import React from "react";
import HeaderAdmin from "../Components/HeaderAdmin";
import { goToTripDetails } from "../Routes/Coordinater";
import { useParams } from "react-router-dom";

function AdminHome() {
  const { id } = useParams();
  return (
    <div>
      <HeaderAdmin />
      <button onClick={() => goToTripDetails(id)}>details</button>
    </div>
  );
}

export default AdminHome;
