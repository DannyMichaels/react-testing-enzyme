import { ACTION_TYPES as TYPES } from '../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {array} - new guessedWords state.
 */
export default function guessedWordsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.GUESS_WORD:
      return [...state, payload];

    case TYPES.RESET_GUESSES:
      return [];

    default:
      return state;
  }
}
