import { useState, useEffect } from 'react';

// Custom hooks need to start with the prefix 'use'
const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) throw Error("Coudn't fetch the data for that resource");

        const data = await res.json();
        setData(data);
        setIspending(false);
        setError(null);
      } catch (err) {
        // If the server returns an object (could be an error obj)
        // then it isn't a error for the catcher
        // because it's still reaching the server
        // in those cases we need to check the status of the response obj
        setIspending(false);
        setError(err.message);
      }
    };

    fetchBlogs();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
