import App from '../../../App';
import { mount } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test-utils';
import { Provider } from 'react-redux';

jest.mock('../../../actions');

/**
 *
 * @method setup
 *
 * @desc Create wrapper with specified initial conditions,
 *       then submit a guessed word of 'train'
 *
 * @param {object} state
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // add value to input box
  const inputField = findByTestAttr(wrapper, 'input-field');
  inputField.simulate('change', { target: { value: 'train' } });

  // simulate click on submit button
  const submitBtn = findByTestAttr(wrapper, 'submit-button');
  submitBtn.simulate('click', { preventDefault: () => {} });

  return wrapper;
};

// right thing happens if no words have been guessed.
describe('no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  it('creates GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe('some words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });
  });

  it('creates GuessedWords table with multiple rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2); // 2 because  additional 1 is being entered by setup function
  });
});

describe('guess secret word', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });

    // add value to inputfield
    const inputField = findByTestAttr(wrapper, 'input-field');
    const mockEvent = { target: { value: 'party' } };
    inputField.simulate('change', mockEvent);

    // simulate click on submit button
    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    submitBtn.simulate('click', { preventDefault: () => {} });
  });

  it('adds row to guessedWords table', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes).toHaveLength(3);
  });

  it('displays congrats component', () => {
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  it('does not display input component contents', () => {
    const inputField = findByTestAttr(wrapper, 'input-field');
    expect(inputField.exists()).toBe(false);

    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    expect(submitBtn.exists()).toBe(false);
  });
});