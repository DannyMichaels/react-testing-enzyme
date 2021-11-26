import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const increment = useCallback(() => {
    // clear error if exists
    if (error !== '') {
      setError('');
    }

    setCount((prevState) => prevState + 1);
  }, [setCount, error]);

  const decrement = useCallback(() => {
    if (count === 0) {
      setError("counter can't go below zero!");
      return;
    }

    setCount((prevState) => prevState - 1);
  }, [count, setCount]);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {error !== '' && (
        <div
          style={{ color: 'red', fontSize: '1.5rem', padding: '10px' }}
          data-test="error-message">
          {error}
        </div>
      )}
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
