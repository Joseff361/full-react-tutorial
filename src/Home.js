import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  // This hook will run every single time when the components re-render
  useEffect(() => {
    console.log('useEffect');
  }, [name]); // If you add a empty array, this fun only runs once

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName(name === 'mario' ? 'luigi' : 'mario')}>
        Change name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
