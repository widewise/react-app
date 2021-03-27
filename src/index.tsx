import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components';
import ErrorBoundary from './Components/ErrorBoundary';
import store from './Store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement,
);
