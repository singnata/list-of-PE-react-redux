// let's go!
import React from 'react';
import { render } from 'react-dom';
//css
import css from './styles/style.styl';

//import App from './components/App';
import List from './components/List';
import Details from './components/Details';
import Edit from './components/Edit';
import New from './components/New';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={List} />
      <Route path="/detail/:id" component={Details} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/new" component={New} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
