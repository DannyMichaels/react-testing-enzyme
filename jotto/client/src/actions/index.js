import axios from 'axios';

export const ACTION_TYPES = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
// export const correctGuess = () => {
//   return { type: ACTION_TYPES.CORRECT_GUESS };
// };

/**
 * @function guessWord
 * @desc Returns Redux Thunk function that dispatches the GUESS_WORD action and (conditionally) CORRECT_GUESS action.
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {};
};

export const getSecretWord = async () => {
  // TODO: write actual action in redux
  const { data } = await axios.get('http://localhost:3030');

  return data;
};
