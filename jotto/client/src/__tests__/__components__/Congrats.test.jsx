import { shallow } from 'enzyme';
import Congrats from '../../components/Congrats';
import { checkProps, findByTestAttr } from '../../utils/testUtils';

const defaultProps = {
  success: false,
};

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the Congrats component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
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

  // prop types testing: this is not needed with typescript
  it('does not throw warning with expected prop types', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
  });
});
