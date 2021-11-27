import axios from 'axios';

export const getSecretWord = async () => {
  // TODO: write actual action in redux
  const { data } = await axios.get('http://localhost:3030');

  return data;
};
