import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import GuessedWords from '../../components/GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
  ],
};

/**
 * @method setup
 * @desc Factory function to create a ShallowWrapper for the GuessedWords component
 * @param {object} props - component props specific for this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('<GuessedWords />', () => {
  it('does not throw warning with expected prop types', () => {
    checkProps(GuessedWords, defaultProps);
  });
});
