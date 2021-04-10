import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './Components';
import ErrorBoundary from './Components/ErrorBoundary';
import NotFound from './Components/NotFound';
import store from './Store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route
              path="/search/:search"
              render={({ match }) => <App search={match.params.search} />}
            />
            <Route path="/search" component={App} />
            <Route path="/film" component={App} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Provider>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>,
  rootElement,
);
