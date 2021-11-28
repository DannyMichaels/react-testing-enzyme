import { combineReducers } from 'redux';
import success from './successReducer';

export default combineReducers({
  success, // state name: reducer name.
});
