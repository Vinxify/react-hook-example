import { useState, useEffect } from "react";

function useFetch(url, option) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, option);
        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch (err) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
