import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
export default combineReducers({
  success, // state name: reducer name.
  guessedWords,
});
