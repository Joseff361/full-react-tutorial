import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(' http://localhost:8000/blogs');

        if (!res.ok) throw Error("Coudn't fetch the data for that resource");

        const data = await res.json();
        setBlogs(data);
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
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
