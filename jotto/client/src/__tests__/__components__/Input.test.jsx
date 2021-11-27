import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import Input from '../../components/Input';

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the Input component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
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

  it('does not throw warning with expected prop types', () => {
    checkProps(Input, { secretWord: 'Hello' });
  });
});
