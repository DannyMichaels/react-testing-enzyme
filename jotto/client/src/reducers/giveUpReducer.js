import { ACTION_TYPES as TYPES } from '../actions';

/**
 * @function giveUpReducer
 * @param {boolean} state .
 * @param {object} action - action to be reduced.
 * @returns {array} - new giveUp state.
 */
export default function giveUpReducer(state = false, action) {
  const { type } = action;

  switch (type) {
    case TYPES.GIVE_UP:
      return true;

    case TYPES.RESET_GIVE_UP:
      return false;

    default:
      return state;
  }
}
