import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import piano from './piano';

export default combineReducers({
  form: reduxFormReducer,
  piano,
});
