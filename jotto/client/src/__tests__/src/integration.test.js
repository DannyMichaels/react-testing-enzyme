import { storeFactory } from '../../test-utils';
import { guessWord } from '../../actions';
import { resetApp } from './../../actions/index';

describe('guessWord action dispatcher', () => {
  const unsuccessfulGuess = 'train';
  const secretWord = 'party';

  describe('no guessed words', () => {
    let store;
    const initialState = {
      secretWord,
      gaveUp: false,
      error: false,
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
      };

      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = {
      guessedWords,
      secretWord,
    };

    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,

        error: false,
        gaveUp: false,

        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,

        error: false,
        gaveUp: false,

        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe('resetApp action dispatcher', () => {
  it('updates state correctly when resetting app', () => {
    const secretWord = 'party';

    const initialState = {
      success: true,
      guessedWords: [
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'party', letterMatchCount: 5 },
      ],
      secretWord,
    };

    const store = storeFactory(initialState);
    store.dispatch(resetApp());

    const newState = store.getState();
    const expectedState = {
      secretWord,

      error: false,
      gaveUp: false,

      success: false,
      guessedWords: [],
    };

    expect(newState).toEqual(expectedState);
  });
});
