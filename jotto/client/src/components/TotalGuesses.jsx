import { PropTypes } from 'prop-types';

export default function TotalGuesses({ totalGuesses }) {
  return (
    <div
      data-test="component-total-guesses"
      className="p-4 my-2 font-bold hover:scale-101 cursor-help transform transition-all duration-200">
      <span data-test="total-guesses">Total Guesses: {totalGuesses}</span>
    </div>
  );
}

TotalGuesses.propTypes = {
  totalGuesses: PropTypes.number.isRequired,
};
