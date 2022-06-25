import axios from "axios";
import React, { useEffect,useState } from "react";
import { baseURL } from "../Components/constants";
import HeaderUsuario from "../Components/HeaderUsuario";

function ListTrips() {
  const [trips, setTrips] = useState([])

  useEffect(()=>{
    getTrips()
  }, [])

const getTrips = () => {
const url = `${baseURL}/trips`

axios.get(url).then((res)=> {
  setTrips(res.data.trips)
}).catch((err)=>{
  console.log(err.message)
})
}

  return (
    <div >
      <HeaderUsuario/>
      {
        trips.map((viagem) => {
          return(
            <div key={viagem.id}>
              <p>Nome: {viagem.name}</p>
              <p>Descrição: {viagem.description}</p>
              <p>Planeta: {viagem.planet}</p>
              <p>Duração: {viagem.durationInDays}</p>
              <p>Data: {viagem.date}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default ListTrips;