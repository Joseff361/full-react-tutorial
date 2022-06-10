import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(' http://localhost:8000/blogs');
      const data = await res.json();
      setBlogs(data);
    };

    try {
      fetchBlogs();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
