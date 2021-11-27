import moxios from 'moxios';
import { getSecretWord } from '../../../actions';

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
