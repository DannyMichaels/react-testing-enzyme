import axios from 'axios';

export const ACTION_TYPES = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export const correctGuess = () => {
  return { type: ACTION_TYPES.CORRECT_GUESS };
};

export const getSecretWord = async () => {
  // TODO: write actual action in redux
  const { data } = await axios.get('http://localhost:3030');

  return data;
};
