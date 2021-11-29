import { PropTypes } from 'prop-types';

export default function NewWordButton({ display, resetAction }) {
  if (!display) {
    return <div data-test="component-new-word-button" />;
  }

  return (
    <div data-test="component-new-word-button">
      <button
        onClick={resetAction}
        data-test="new-word-button"
        className="my-4 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        New Word
      </button>
    </div>
  );
}

NewWordButton.propTypes = {
  display: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
};
