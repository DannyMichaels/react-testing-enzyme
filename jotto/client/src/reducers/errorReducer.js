import { ACTION_TYPES as TYPES } from '../actions';

export default function errorReducer(state = false, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPES.SET_ERROR:
      return payload;

    default:
      return state;
  }
}
