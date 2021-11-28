import moxios from 'moxios';
import {
  getSecretWord,
  correctGuess,
  ACTION_TYPES as TYPES,
} from '../../../actions';

describe('correctGuess', () => {
  it('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: TYPES.CORRECT_GUESS });
  });
});

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('returns fetched secret word', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    const secretWord = await getSecretWord();
    expect(secretWord).toBe('party');

    return;
  });
});
