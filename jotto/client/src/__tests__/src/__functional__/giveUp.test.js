import { Provider } from 'react-redux';
import App from './../../../App';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test-utils';

jest.mock('../../../actions');

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return wrapper;
};

describe('giveUp', () => {
  describe('when success is false and some or one word(s) have been guessed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({
        secretWord: 'randomWordYoullNeverGuess',
        success: false,
        guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
      });
    });

    test('give up is NOT clicked, a failure message does NOT appear', () => {
      const giveUpMessage = findByTestAttr(wrapper, 'give-up-message');
      expect(giveUpMessage.exists()).toBe(false);
    });

    test('give up is clicked, a failure message appears', () => {
      const giveUpBtn = findByTestAttr(wrapper, 'give-up-button');
      giveUpBtn.simulate('click');
      const giveUpMessage = findByTestAttr(wrapper, 'give-up-message');
      expect(giveUpMessage.text().length).toBeGreaterThan(0);
    });
  });

  describe('when success is true', () => {
    test('give up button does NOT exist.', () => {
      const wrapper = setup({
        secretWord: 'party',
        success: true,
        guessedWords: [{ guessedWord: 'party', letterMatchCount: 5 }],
      });

      const giveUpButton = findByTestAttr(wrapper, 'give-up-button');
      expect(giveUpButton.exists()).toBe(false);
    });
  });
});
