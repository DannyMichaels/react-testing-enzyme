import axios from 'axios';
import { getLetterMatchCount } from '../utils';

export const ACTION_TYPES = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
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
  // this is a redux thunk
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

/**
 * Returns Redux Thunk function that initiates an axios request
 *    and dispatches the response as a 'SET_SECRET_WORD' action
 * @returns {function} - Redux Thunk function.
 */
export const getSecretWord = () => {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3030');

    dispatch({
      type: ACTION_TYPES.SET_SECRET_WORD,
      payload: response.data,
    });
  };

  // return function (dispatch) {
  //   return axios.get('http://localhost:3030').then((response) => {
  //     dispatch({
  //       type: ACTION_TYPES.SET_SECRET_WORD,
  //       payload: response.data,
  //     });
  //   });
  // };
};
