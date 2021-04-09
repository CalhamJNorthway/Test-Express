import express from 'express';
import cors from "cors";

const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

// Declare Express App
const app = express();

app.get('/help', (req, res) => res.send({ "Message": "HELLO" }));

app.use('/results', (req, res) => res.sendFile(path.join(__dirname, '/similarityResults.json')));

app.use(cors());

module.exports = app;
module.exports.handler = serverless(app);
