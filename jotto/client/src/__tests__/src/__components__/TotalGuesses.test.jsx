import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test-utils';
import TotalGuesses from '../../../components/TotalGuesses';
import { checkProps } from '../../../test-utils';

const defaultProps = {
  totalGuesses: 0,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

describe('<TotalGuesses />', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
  });

  it('does not throw warning with expected prop types', () => {
    const expectedProps = { totalGuesses: 2 };
    checkProps(TotalGuesses, expectedProps);
  });

  it('renders text of how many total guesses there are when there are zero guesses', () => {
    const wrapper = setup();
    const text = findByTestAttr(wrapper, 'total-guesses').text();

    expect(text).toBe('Total Guesses: 0');
  });

  it('renders text of how many total guesses there are when there some guesses', () => {
    const wrapper = setup({ totalGuesses: 2 });
    const text = findByTestAttr(wrapper, 'total-guesses').text();

    expect(text).toBe('Total Guesses: 2');
  });
});
