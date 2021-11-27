import PropTypes from 'prop-types';

/**
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
export default function Congrats({ success }) {
  if (success) {
    return (
      <div
        data-test="component-congrats"
        className="bg-green-100 border-2 border-green-600 rounded text-green-900 px-4 py-2">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  }

  return <div data-test="component-congrats" />;
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
