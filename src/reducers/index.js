import { combineReducers } from 'redux';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  appInfo: AppReducer
});

export default rootReducer;
