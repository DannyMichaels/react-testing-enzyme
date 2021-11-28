import { PropTypes } from 'prop-types';

export default function Error({ error }) {
  if (!error) return null;

  return (
    <div data-test="component-error">
      There was an error retrieving the secret word. Please try again later.
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.bool.isRequired,
};
