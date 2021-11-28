import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import isNewWordShowing from './newWordReducer';
import gaveUp from './giveUpReducer';

export default combineReducers({
  success, // state name: reducer name.
  guessedWords,
  secretWord,
  isNewWordShowing,
  gaveUp,
});
