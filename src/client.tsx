import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from './Components';
import configureStore from './Store';

const store = configureStore(window.PRELOADED_STATE);

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    rootElement,
  );
});
