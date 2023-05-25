
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import reducers
import callReducer from './reducers/callReducer';

// Combine reducers
const rootReducer = combineReducers({
  call: callReducer,
});

// Create the store
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
