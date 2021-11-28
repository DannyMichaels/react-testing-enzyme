import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import gaveUp from './giveUpReducer';
import error from './errorReducer';

export default combineReducers({
  success, // state name: reducer name.
  guessedWords,
  secretWord,
  gaveUp,
  error,
});
