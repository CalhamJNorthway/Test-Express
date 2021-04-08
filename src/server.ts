import express from 'express';
import cors from "cors";

const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

// Declare Express App
const app = express();
const router = express.Router();

router.get("/results", (req, res) => {
  const rawData = fs.readFileSync(`${__dirname}/similarityResults.json`);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write({ results: JSON.parse(rawData) });
  res.end();
  console.log("We did it bois");
});


app.use('/results', (req, res) => res.sendFile(path.join(__dirname, '/similarityResults.json')));

app.use(cors());

module.exports = app;
module.exports.handler = serverless(app);
