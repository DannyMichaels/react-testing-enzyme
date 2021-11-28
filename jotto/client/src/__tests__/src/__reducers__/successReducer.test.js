import { ACTION_TYPES as TYPES } from '../../../actions';
import successReducer from '../../../reducers/successReducer';

describe('successReducer', () => {
  test('when previous state is undefined, return false', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  it('returns previous state when unknown action type', () => {
    const newState = successReducer(false, { type: 'UNKNOWN_TYPE' });
    expect(newState).toBe(false);
  });

  it('returns "true" for action type `CORRECT_GUESS`', () => {
    const newState = successReducer(false, { type: TYPES.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
