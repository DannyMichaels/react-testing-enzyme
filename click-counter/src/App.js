import './App.css';
import { useState, useCallback } from 'react';
function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [setCount]);

  const decrement = useCallback(() => {
    setCount((prevState) => prevState - 1);
  }, [setCount]);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={increment}>
        Increment Counter
      </button>

      <button data-test="decrement-button" onClick={decrement}>
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
