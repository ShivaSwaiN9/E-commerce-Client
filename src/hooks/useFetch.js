import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect( () => {
    makeApiCAll();
  }, [endpoint]);

  const makeApiCAll = async () => {
    const res = await fetchDataFromApi(endpoint);
    setData(res);
  };

  return {data};
};

export default useFetch;
