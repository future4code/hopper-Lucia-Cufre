import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';

export default function ButtonClear (props){



const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucia/clear"
      )
      .then((response) => {
        alert("foram apagados os matches");
       props.main()
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return(
    <Button variant="contained" color="success" onClick={clear}>
        Limpar Matches
      </Button>


  )

}