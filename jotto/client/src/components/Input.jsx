import { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { giveUp, guessWord } from '../actions';

export default function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = useState('');
  const { success, gaveUp, guessedWords } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // TODO: update guessedWords global state, check against secretWord and optionally update success global state
      dispatch(guessWord(currentGuess));

      setCurrentGuess(''); // clear current guess
    },
    [currentGuess, dispatch]
  );

  const handleGiveUp = useCallback(() => {
    dispatch(giveUp());
  }, [dispatch]);

  const showGiveUpBtn = useMemo(() => {
    return !success && guessedWords.length > 0;
  }, [success, guessedWords]);

  if (success || gaveUp) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="currentGuess">
              Guess
            </label>
            <input
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
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

        <div className="xs:flex md:items-center">
          <div className="md:w-1/4 mr-2">
            <button
              data-test="submit-button"
              onClick={handleSubmit}
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button">
              Guess
            </button>
          </div>

          <div className="md:w-1/3">
            {showGiveUpBtn && (
              <button
                data-test="give-up-button"
                onClick={handleGiveUp}
                className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button">
                Give Up
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
