import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useApiCall = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      setIsMounted(true)
      try {
        const response = await axios.get(URL);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => setIsMounted(false)
  }, []);

  return { data, loading, error };
};

export default useApiCall;
