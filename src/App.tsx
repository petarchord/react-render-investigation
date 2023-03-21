import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((p) => p + 1);
  };

  const handleDecrement = () => {
    setCounter((p) => p - 1);
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <label htmlFor="counter">Counter:</label>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
