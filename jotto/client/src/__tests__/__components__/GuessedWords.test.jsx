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

  describe('if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
      // set wrapper before each test in this scope
      wrapper = setup({ guessedWords: [] });
    });

    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(instructions.text().length).not.toBe(0);
    });
  });

  describe('if there are words guessed', () => {
    let wrapper;

    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
      // set wrapper before each test in this scope
      wrapper = setup({ guessedWords });
    });

    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it('renders `guessed words` section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
    });

    it('renders correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
  });
});
