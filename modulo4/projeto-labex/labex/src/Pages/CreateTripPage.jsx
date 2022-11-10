import React from "react";
import { useNavigate } from "react-router-dom";
import { baseURL, axiosConfig } from "../Components/constants";
import { goToAdminHome } from "../Routes/Coordinator";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { useForm } from "../hooks/useForm";
import { GlobalStyle, PageContainer } from "../styled/styledPage";

function CreateTrip() {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const navigate = useNavigate();
  useProtectedPage();

  const createTrip = () => {
    const url = `${baseURL}/trips`;
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(url, body, axiosConfig)
      .then((res) => {
        alert("Viagem criada com sucesso.");
      })
      .catch((err) => {
        alert("Nao foi possível criar a viagem.");
        goToAdminHome(navigate);
      });
  };

  const submit = (event) => {
    event.preventDefault();
    cleanFields();
  };

  return (
    <PageContainer>
      <GlobalStyle />
      <form onSubmit={submit}>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        <select
          name={"planet"}
          value={form.planet}
          onChange={onChange}
          placeholder="Planeta"
          required
        >
          <option value="mercurio">Mercúrio</option>
          <option value="venus">Vênus</option>
          <option value="terra">Terra</option>
          <option value="marte">Marte</option>
          <option value="jupiter">Júpiter</option>
          <option value="saturno">Saturno</option>
          <option value="urano">Urano</option>
          <option value="netuno">Netuno</option>
        </select>
        <input
          type="date"
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Data"
          required
          min="2022-06-23"
        />
        <input
          name={"description"}
          value={form.description}
          onChange={onChange}
          placeholder="Detalhes"
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo 30 letras"}
        />
        <input
          type="number"
          name={"durationInDays"}
          value={form.durationInDays}
          onChange={onChange}
          placeholder="Quantos dias?"
          required
          min="50"
        />
        <button onClick={createTrip}>Criar</button>
      </form>
      <div>
        <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
      </div>
    </PageContainer>
  );
}

export default CreateTrip;
