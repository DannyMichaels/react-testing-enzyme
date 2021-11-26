import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [setCount]);

  const decrement = useCallback(() => {
    if (count === 0) {
      setError("counter can't go below zero!");
      return;
    }

    setCount((prevState) => prevState - 1);
  }, [count, setCount]);

  useEffect(() => {
    // clear the error msg
    if (count !== 0 && error !== '') {
      setError('');
    }
  }, [count, error]);

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

      {error && <div data-test="error">{error}</div>}
    </div>
  );
}

export default App;
