/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const app = require('./app');

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
