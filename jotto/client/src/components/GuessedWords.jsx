import PropTypes from 'prop-types';

export default function GuessedWords({ guessedWords }) {
  let contentsJSX = null;
  if (!guessedWords.length) {
    contentsJSX = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  }

  return <div data-test="component-guessed-words">{contentsJSX}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
