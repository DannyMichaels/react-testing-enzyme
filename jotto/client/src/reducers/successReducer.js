import { ACTION_TYPES as TYPES } from './../actions/index';

const { CORRECT_GUESS } = TYPES;

/**
 * @method successReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */
export default function successReducer(state = false, action) {
  const { type } = action;

  switch (type) {
    case CORRECT_GUESS: {
      return true;
    }

    default:
      return state;
  }
}
