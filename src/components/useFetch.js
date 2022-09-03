import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios(url)
        .then((res) => {
          setData(res.data);
          setIspending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIspending(false);
        });
    }, 2000);
  }, [url]);
  return { data, isPending, error };
}
