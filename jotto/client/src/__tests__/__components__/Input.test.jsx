import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Input from '../../components/Input';

const defaultProps = {};

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the Input component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

describe('<Input />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });
});
