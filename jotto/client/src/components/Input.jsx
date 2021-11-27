import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // TODO: update guessedWords global state, check against secretWord and optionally update success global state

    setCurrentGuess(''); // clear current guess
  }, []);

  return (
    <div data-test="component-input">
      <form className="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="mb-4">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="currentGuess">
              Guess
            </label>
            <input
              data-test="input-field"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              name="currentGuess"
              type="text"
              placeholder="Guess"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
            />
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              data-test="submit-button"
              onClick={handleSubmit}
              class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};