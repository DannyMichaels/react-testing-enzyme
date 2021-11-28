import axios from 'axios';
import { getLetterMatchCount } from '../utils';

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
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: ACTION_TYPES.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord.toLowerCase() === secretWord.toLowerCase()) {
      dispatch({ type: ACTION_TYPES.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = async () => {
  // TODO: write actual action in redux
  const { data } = await axios.get('http://localhost:3030');

  return data;
};
