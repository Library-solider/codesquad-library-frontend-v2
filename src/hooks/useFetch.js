import { useState, useEffect } from "react";

function useFetch(url, option) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const res = await fetch(url, option);
        const initialData = await res.json();

        if (initialData.status !== true) {
          throw initialData;
        } else {
          setResponse(initialData);
        }
      } catch (errorData) {
        setError(errorData);
      }
    };

    initialFetch();
  }, [url, option]);

  return { response, error };
}

export default useFetch;
