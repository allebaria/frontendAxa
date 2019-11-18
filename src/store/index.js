import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configStore = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

export default configStore;
