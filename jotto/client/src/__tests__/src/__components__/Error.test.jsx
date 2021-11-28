import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test-utils';
import Error from './../../../components/Error';

const defaultProps = {
  error: false,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Error {...setupProps} />);
};

describe('<Error />', () => {
  it('does not show if error is false', () => {
    const wrapper = setup({ error: false });
    const errorComponent = findByTestAttr(wrapper, 'component-error');

    expect(errorComponent.exists()).toBe(false);
  });

  it('shows if error is true', () => {
    const wrapper = setup({ error: true });
    const errorComponent = findByTestAttr(wrapper, 'component-error');

    expect(errorComponent.text()).toBe(
      'There was an error retrieving the secret word. Please try again later.'
    );
  });
});
