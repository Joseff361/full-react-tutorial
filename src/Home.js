const Home = () => {
  const handleClick = e => {
    console.log('Hello ninjas', e);
  };

  const handleClickMeAgain = (name, e) => {
    console.log('Hello, ' + name, e);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* Just a reference of the function. React will execute the function */}
      <button onClick={handleClick}>Click me</button>
      {/* Wrapping in anonymous function to pass paramenters */}
      <button onClick={e => handleClickMeAgain('Mario', e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
