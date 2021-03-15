import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components';
import ErrorBoundary from './Components/ErrorBoundary';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement,
);
