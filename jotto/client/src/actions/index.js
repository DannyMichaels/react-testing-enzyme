import axios from 'axios';
import { getLetterMatchCount } from '../utils';

export const ACTION_TYPES = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GUESSES: 'RESET_GUESSES',
  SET_SUCCESS: 'SET_SUCCESS',
  GIVE_UP: 'GIVE_UP',
  RESET_GIVE_UP: 'RESET_GIVE_UP',
  SET_ERROR: 'SET_ERROR',
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
    try {
      const response = await axios.get('http://localhost:3030');

      dispatch({
        type: ACTION_TYPES.SET_SECRET_WORD,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ACTION_TYPES.SET_ERROR, payload: true });
    }
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

export const resetApp = () => {
  return async function (dispatch) {
    dispatch(getSecretWord());

    dispatch({ type: ACTION_TYPES.RESET_GIVE_UP });

    dispatch({ type: ACTION_TYPES.RESET_GUESSES });

    dispatch({ type: ACTION_TYPES.SET_SUCCESS, payload: false });
  };
};

export const giveUp = () => {
  return function (dispatch) {
    dispatch({ type: ACTION_TYPES.GIVE_UP });
  };
};
