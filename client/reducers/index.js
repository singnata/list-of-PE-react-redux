import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import details from './reducerDetails';
import update from './reducerUpdate';
import list from './reducerList';
import newEntr from './reducerNew';

export const rootReducer = combineReducers({ 
  list, 
  details, 
  update, 
  newEntr, 
  routing: routerReducer, 
  form: formReducer 
});
