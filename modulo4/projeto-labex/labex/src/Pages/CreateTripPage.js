import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, axiosConfig } from "../../src/hooks/constants";
import { goToAdminHome, goToLoginPage } from "../Routes/Coordinater";
import axios from "axios";
import { useProtectedPage } from "../../src/hooks/useProtectedPage";

function CreateTrip() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  useProtectedPage();

  const CreateTrip = () => {
    const url = `${baseURL}/trips`;
    const body = {
      name,
      planet,
      date,
      description,
      durationInDays: duration,
    };
    

    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        alert("Viagem criada com sucesso.");
      })
      .catch((err) => {
        alert("Nao foi possivel criar a viagem.");
        goToLoginPage(navigate);
      })
      .finally(() => {
        setName("");
        setPlanet("");
        setDate("");
        setDescription("");
        setDuration("");
      });
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePlanet = (event) => {
    setPlanet(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="Nome"
        />
        <input
          type="text"
          value={planet}
          onChange={onChangePlanet}
          placeholder="Planeta"
        />
        <input
          type="date"
          value={date}
          onChange={onChangeDate}
          placeholder="Data"
        />
        <input
          type="text"
          value={description}
          onChange={onChangeDescription}
          placeholder="Detalhes"
        />
        <input
          type="number"
          value={duration}
          onChange={onChangeDuration}
          placeholder="Quantos dias?"
        />
      </div>
      <div>
        <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
        <button onClick={CreateTrip}>Criar</button>
      </div>
    </div>
  );
}

export default CreateTrip;
