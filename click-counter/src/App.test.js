import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the app component.
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

/**
 * @method findByTestAttr
 * @desc find a element by data-test attribute
 * @param {ShallowWrapper} wrapper the wrapper
 * @param {String} val the data-test attribute string.
 * @returns {DOMElement}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe('<App/>', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });

  it('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  it('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });

  // test is the same as it.
  test('counter display starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('clicking increment button increments counter display', () => {
    const wrapper = setup();

    // find button
    const button = findByTestAttr(wrapper, 'increment-button');

    // click button
    button.simulate('click');

    // find the display, and test that the number has been incremented
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });

  describe('decrement button', () => {
    test('renders decrement button', () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, 'decrement-button');
      expect(button.length).toBe(1);
    });

    test('clicking decrement button decrements counter display when state is greater than 0', () => {
      const wrapper = setup();

      // click the increment button so that the counter is greater than 0
      const incrementBtn = findByTestAttr(wrapper, 'increment-button');
      incrementBtn.simulate('click');

      const incrementedCount = findByTestAttr(wrapper, 'count').text();
      expect(incrementedCount).toBe('1');

      // find decrement button and click
      const decButton = findByTestAttr(wrapper, 'decrement-button');
      decButton.simulate('click');

      // find display and test value
      const decrementedCount = findByTestAttr(wrapper, 'count').text();
      expect(decrementedCount).toBe('0');
    });
  });

  describe('error when counter goes below 0', () => {
    test('error does not show when not needed', () => {
      const wrapper = setup();
      const errorDiv = findByTestAttr(wrapper, 'error-message');

      expect(errorDiv.length).toBe(0);
    });

    describe('counter is 0 and decrement is clicked', () => {
      let wrapper;
      beforeEach(() => {
        // no need to set counter value here; default value of 0 is good
        wrapper = setup();

        // find button and click
        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');
      });

      test('error shows', () => {
        const errorDiv = findByTestAttr(wrapper, 'error-message');
        expect(errorDiv.length).toBe(1);
        expect(errorDiv.text()).toBe("counter can't go below zero!");
      });

      test('counter still displays 0 because decrement was clicked when counter was 0', () => {
        const count = findByTestAttr(wrapper, 'count').text();
        expect(count).toBe('0');
      });

      test('clicking increment clears the error', () => {
        const beforeIncrementError = findByTestAttr(wrapper, 'error-message');
        expect(beforeIncrementError.length).toBe(1);

        // find and click the increment button
        const incrementBtn = findByTestAttr(wrapper, 'increment-button');
        incrementBtn.simulate('click');

        const afterIncrementError = findByTestAttr(wrapper, 'error-message');
        expect(afterIncrementError.length).toBe(0);
      });
    });
  });
});
