
'use strict';

const app = require('./express/server');
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})