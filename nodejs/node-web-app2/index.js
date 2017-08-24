'use strict';

const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/interfaces', (req, res) => {
	res.status(200).json(os.networkInterfaces());
});
app.get('/hostname', (req, res) => {
	res.send(os.hostname() + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
