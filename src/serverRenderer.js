/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
const URL = require('url');
const path = require('path');

const buildPath = process.env.NODE_ENV === 'development' ? './dev' : './prod';
const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const { StaticRouter, matchPath } = require('react-router-dom');
const { ChunkExtractor } = require('@loadable/server');
require('regenerator-runtime/runtime');

const App = require('./Components').default;
const configureStore = require('./Store').default;
const { default: Routes } = require('./Routes');

function renderHTML(html, styles, chunkExtractor, preloadedState = {}) {
  const scriptTags = chunkExtractor.getScriptTags();
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset=utf-8>
            <title>Netflix</title>
            ${process.env.NODE_ENV === 'development' ? '' : '<link href="/main.css" rel="stylesheet" type="text/css">'}
            ${styles}
          </head>
          <body>
            <div id="root">${html}</div>
            <script>
              window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            ${scriptTags}
            <script src="/main.js"></script>
          </body>
        </html>
    `;
}

function renderApp(location, context, res, store) {
  const sheet = new ServerStyleSheet();
  try {
    const root = () => (
      <StaticRouter
        location={location}
        context={context}
      >
        <App store={store} />
      </StaticRouter>
    );

    if (context.url
      && !context.url.endsWith('.js')
      && !context.url.endsWith('.css')) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const statsFile = path.resolve(`${buildPath}/loadable-stats.json`);
    const chunkExtractor = new ChunkExtractor({ statsFile });
    const htmlString = renderToString(sheet.collectStyles(root()));
    const styles = sheet.getStyleTags();
    const preloadedState = store.getState();

    if (location.includes('.css')) {
      console.log(path.join(__dirname, location));
      res.sendFile(path.join(__dirname, location));
    } else if (location.includes('.ico')) {
      res.end();
    } else {
      res.status(context.statusCode || 200).send(renderHTML(htmlString, styles, chunkExtractor, preloadedState));
    }
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }
}

function fillDataRequirements(dataRequirements, route, location, store) {
  const { fetchData } = route;
  const match = matchPath(location, route);

  if (match && fetchData) {
    dataRequirements.push(
      fetchData({
        store,
        match,
      }),
    );
  }

  return match;
}

const serverRenderer = (options) => async (request, response) => {
  const store = configureStore();
  const location = request.url;
  const context = {};

  const dataRequirements = [];
  Routes.headerRoutes.some((route) => Boolean(fillDataRequirements(dataRequirements, route, location, store)));

  Routes.mainRoutes.some((route) => Boolean(fillDataRequirements(dataRequirements, route, location, store)));

  await Promise.all(dataRequirements)
    .then(() => renderApp(location, context, response, store))
    .catch((error) => {
      throw error;
    });
};

module.exports = serverRenderer;
