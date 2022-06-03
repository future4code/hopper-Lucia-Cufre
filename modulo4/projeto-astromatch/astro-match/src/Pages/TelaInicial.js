import React, { useState, useEffect } from "react";
import axios from "axios";
import Clear from "../Component/ButtonClear.js";

function Home(props) {
  const [profiles, setProfiles] = useState([]);
  const [identity, setIdentity] = useState("");
  const [choices, setChoices] = useState(false);

  const getProfiles = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/person`
      )
      .then((response) => {
        console.log(response.data.profile);
        setProfiles(response.data.profile);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getProfiles();
  }, []);

  const choosePerson = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/choose-person";
    const body = {
      id: identity,
      choice: choices,
    };

    axios
      .post(url, body, {
        header: "Content-Type: application/json",
      })
      .then((response) => {
        setIdentity(profiles.id)
        setChoices(!choices)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if(identity === profiles.id){
      getProfiles()
    }
  }, [identity]);

 

  return (
    <div>
      <button onClick={props.onClick}>MATCHES</button>
      <div>
        <img src={profiles.photo} alt={profiles.photo_alt} />
        <p>{profiles.name}</p>
        <p>{profiles.age}</p>
        <p>{profiles.bio}</p>
      </div>
      <button onClick={choosePerson}>NAO</button>
      <button onClick={choosePerson}>SIM</button>
      <Clear/>
    </div>
  );
}

export default Home;
