import { createStore, compse, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { rootReducer } from './reducers/index';

const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(routerMiddleware(browserHistory), thunk, logger));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
