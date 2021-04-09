import express from 'express';
import cors from "cors";

const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');


// Declare Express App
const app = express();
app.use(cors());
const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
app.get('/help', (req, res) => res.send({ "Message": "HELLO" }));

app.use('/results', (req, res) => res.sendFile(path.join(__dirname, '/similarityResults.json')));

app.use('/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
