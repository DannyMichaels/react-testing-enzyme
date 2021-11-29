import PropTypes from 'prop-types';

export default function RevealWord({ gaveUp, secretWord }) {
  if (!gaveUp) return <div data-test="component-reveal" />;

  return (
    <div data-test="component-reveal">
      <div
        data-test="give-up-message"
        className="bg-red-500 border-2 border-red-600 rounded px-4 py-2">
        the secret word was "{secretWord}", better luck next time!
      </div>
    </div>
  );
}

RevealWord.propTypes = {
  gaveUp: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
};
