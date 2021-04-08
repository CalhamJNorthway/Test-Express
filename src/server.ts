import express from 'express';
import cors from "cors";

const fs = require('fs');
const serverless = require('serverless-http');

// Declare Express App
const app = express();

app.use(cors());

app.get("/results", (req, res) => {
  const rawData = fs.readFileSync("./similarityResults.json");
  res.send({ results: JSON.parse(rawData) });
  console.log("We did it bois");
});

module.exports = app;
module.exports.handler = serverless(app);
