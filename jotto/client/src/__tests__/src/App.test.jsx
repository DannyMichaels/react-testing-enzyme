import { mount } from 'enzyme';
import App from '../../App';
import { findByTestAttr, storeFactory } from '../../test-utils';
import { Provider } from 'react-redux';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('../../actions');

// eslint-disable-next-line
import { getSecretWord as mockGetSecretWord } from '../../actions';

/**
 * @method setup
 * @desc Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
}; // useEffect only happens with mount and not shallow with enzyme

describe('<App />', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
  });

  describe('get secret word', () => {
    beforeEach(() => {
      // clear the mock calls from previous tests
      mockGetSecretWord.mockClear();
    });

    test('getSecretWord runs on app mount', () => {
      setup();
      expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
    });

    test('getSecretWord does not run on app update', () => {
      const wrapper = setup();
      mockGetSecretWord.mockClear(); // clear previous mock so we can expect that after update it will be called 0 times

      // using setProps because wrapper.update() does not trigger useEffect
      // https://github.com/enzymejs/enzyme/issues/2254
      wrapper.setProps(); // forcing a rerender by updating props

      expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
    });
  });
});
