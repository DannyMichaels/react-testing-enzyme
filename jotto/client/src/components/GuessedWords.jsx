import { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function GuessedWords({ guessedWords }) {
  const contentsJSX = useMemo(() => {
    if (!guessedWords.length) {
      return (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      );
    } else {
      const guessedWordsRows = guessedWords.map(
        ({ guessedWord, letterMatchCount }, idx) => (
          <tr data-test="guessed-word" key={idx}>
            <td>{guessedWord}</td>
            <td>{letterMatchCount}</td>
          </tr>
        )
      );

      return (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>

            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      );
    }
  }, [guessedWords]);

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
