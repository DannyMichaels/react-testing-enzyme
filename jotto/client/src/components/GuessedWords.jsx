import { useMemo } from 'react';
import PropTypes from 'prop-types';

const TABLE_CELL_CLASS =
  'px-8 py-4 text-base text-bold text-gray-500 text-left border border-grey-500';

export default function GuessedWords({ guessedWords, gaveUp }) {
  const contentsJSX = useMemo(() => {
    if (!guessedWords.length) {
      return (
        !gaveUp && (
          <span data-test="guess-instructions">
            Try to guess the secret word!
          </span>
        )
      );
    } else {
      const guessedWordsRows = guessedWords.map(
        ({ guessedWord, letterMatchCount }, idx) => (
          <tr data-test="guessed-word" key={idx}>
            <td className={TABLE_CELL_CLASS + ' w-1/6'}>{idx}</td>
            <td className={TABLE_CELL_CLASS}>{guessedWord}</td>
            <td className={TABLE_CELL_CLASS}>{letterMatchCount}</td>
          </tr>
        )
      );

      return (
        <div data-test="guessed-words">
          <h3 className="text-3xl mx-2 mt-4 mb-2 text-black">Guessed Words</h3>
          <table className="table-fixed border-b border-t border-gray-200 shadow w-full">
            <thead className="bg-gray-50">
              <tr className="whitespace-nowrap">
                <th scope="col" className={TABLE_CELL_CLASS + ' w-1/6'}>
                  #
                </th>
                <th scope="col" className={TABLE_CELL_CLASS}>
                  Guess
                </th>
                <th scope="col" className={TABLE_CELL_CLASS}>
                  Matching Letters
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">{guessedWordsRows}</tbody>
          </table>
        </div>
      );
    }
  }, [guessedWords, gaveUp]);

  return (
    <div data-test="component-guessed-words" className="mt-4">
      {contentsJSX}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,

  gaveUp: PropTypes.bool.isRequired,
};
