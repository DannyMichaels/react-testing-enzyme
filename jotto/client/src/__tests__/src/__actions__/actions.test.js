import moxios from 'moxios';
import {
  getSecretWord,
  // correctGuess,
  // ACTION_TYPES as TYPES,
} from '../../../actions';
import { storeFactory } from '../../../test-utils';

// describe('correctGuess', () => {
//   it('returns an action with type `CORRECT_GUESS`', () => {
//     const action = correctGuess();
//     expect(action).toStrictEqual({ type: TYPES.CORRECT_GUESS });
//   });
// });
describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  // it('returns fetched secret word', async () => {
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 200,
  //       response: 'party',
  //     });
  //   });

  //   const secretWord = await getSecretWord();
  //   expect(secretWord).toBe('party');

  //   return;
  // });

  test('secretWord is returned', async () => {
    const store = storeFactory();

    // axios fetch secretWord
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    // return store.dispatch(getSecretWord()).then(() => {
    //   const secretWord = store.getState().secretWord;
    //   expect(secretWord).toBe('party');
    // });

    await store.dispatch(getSecretWord());

    // make sure it's in the state
    const { secretWord } = store.getState();
    expect(secretWord).toBe('party');

    return;
  });

  test('error caught on http request and sets error to true on state', async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: '',
      });
    });

    await store.dispatch(getSecretWord());

    const { error } = store.getState();
    expect(error).toBe(true);

    return;
  });
});
