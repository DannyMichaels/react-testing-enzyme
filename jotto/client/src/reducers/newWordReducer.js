import { ACTION_TYPES as TYPES } from './../actions/index';

export default function isNewWordShowingReducer(state = false, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SET_NEW_WORD_BUTTON_SHOWING:
      return payload;

    case TYPES.CORRECT_GUESS:
      return true;

    default:
      return state;
  }
}
