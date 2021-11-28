import { ACTION_TYPES as TYPES } from './../actions/index';

const { CORRECT_GUESS } = TYPES;

/**
 * @method successReducer
 * @param {boolean} state - state of success true or false
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
