import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIspending] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(' http://localhost:8000/blogs');
      const data = await res.json();
      setBlogs(data);
      setIspending(false);
    };

    try {
      fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
