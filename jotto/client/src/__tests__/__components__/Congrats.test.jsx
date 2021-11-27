import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from '../../components/Congrats';
import { findByTestAttr } from '../../utils/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the congrats component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe('<Congrats />', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  it('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  it('renders congrats message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'component-congrats');
    expect(message.text().length).not.toBe(0);
  });
});
