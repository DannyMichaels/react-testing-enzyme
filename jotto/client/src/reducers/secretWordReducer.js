import { ACTION_TYPES } from './../actions/index';

export default function secretWordReducer(state = '', action) {
  switch (action.type) {
    case ACTION_TYPES.SET_SECRET_WORD:
      return action.payload;

    default:
      return state;
  }
}
