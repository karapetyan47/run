import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './user/reducer';
import jogsReducer from './jogs/reducer';

const createRootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    jogs: jogsReducer,
  });

export default createRootReducers;
