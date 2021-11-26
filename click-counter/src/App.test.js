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

  describe('decrement-button', () => {
    test('clicking it when counter is 0 will not decrement and will throw an error', () => {
      const wrapper = setup();

      const decrementBtn = findByTestAttr(wrapper, 'decrement-button');
      decrementBtn.simulate('click');

      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');

      const error = findByTestAttr(wrapper, 'error').text();
      expect(error).toBe("counter can't go below zero!");
    });

    test('clicking it when counter is above 0 decrements counter display', () => {
      // the order if when we find things actually matters

      const wrapper = setup();
      const incrementBtn = findByTestAttr(wrapper, 'increment-button');

      incrementBtn.simulate('click');
      const incrementedCount = findByTestAttr(wrapper, 'count').text();
      expect(incrementedCount).toBe('1');

      const decrementBtn = findByTestAttr(wrapper, 'decrement-button');
      decrementBtn.simulate('click');

      const decrementedCount = findByTestAttr(wrapper, 'count').text();
      expect(decrementedCount).toBe('0');
    });
  });
});
