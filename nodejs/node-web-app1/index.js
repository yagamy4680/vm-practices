'use strict';

const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world: ' + os.hostname() + ' => \n' + JSON.stringify(os.networkInterfaces()) + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
