import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { axiosConfig, baseURL } from "../Components/constants";

const useRequestedData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${baseURL}${endpoint}`, axiosConfig)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return {data, getData, isLoading, error};
};

export default useRequestedData;
