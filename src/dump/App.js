import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://google.com';
  const person = { name: 'Joshi', age: '30' };

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{[1, 2, 3, 4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
