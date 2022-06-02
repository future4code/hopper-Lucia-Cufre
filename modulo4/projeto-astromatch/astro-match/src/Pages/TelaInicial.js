import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person`
        )
        .then((response) => {
          console.log(response.data.profile);
          setProfiles(response.data.profile);
        })
        .catch((err) => {
          console.log(err.message);
        });
    
    
  }, []);

 

  return (
    <div>
      
            <img src={profiles.photo} alt={profiles.photo_alt}/>
            <p>{profiles.name}</p>
            <p>{profiles.age}</p>
            <p>{profiles.bio}</p>
          
      <button></button>
      <button></button>
    </div>
  );
}

export default Home;
