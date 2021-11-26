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
  test('counter display starts at 0', () => {});

  test('clicking button increments counter display', () => {});
});
