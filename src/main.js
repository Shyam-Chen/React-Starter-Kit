import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import store from './root';
import App from './containers/App';

render(
  <Provider store={ store }>
    <Router history={ syncHistoryWithStore(createBrowserHistory(), store) }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
