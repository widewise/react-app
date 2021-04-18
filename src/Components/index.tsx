import React, { FunctionComponent } from 'react';
import { AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import {
  Switch, Route,
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import NotFound from './NotFound';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './styles.css';

interface AppProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store: Store<any, AnyAction>
}

const App: FunctionComponent<AppProps> = ({ store }: AppProps) => (
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route
            path="/film/:movieId"
            render={({ match }) => (
              <>
                <Header movieId={Number(match.params.movieId)} />
                <Main />
              </>
            )}
          />
          <Route
            path="/search/:search"
            render={({ match }) => (
              <>
                <Header search={match.params.search} />
                <Main search={match.params.search} />
              </>
            )}
          />
          <Route path="/search">
            <Header />
            <Main />
          </Route>
          <Route path="/film">
            <Header />
            <Main />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

export default App;
