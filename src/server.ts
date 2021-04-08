import express from 'express';
import cors from "cors";

const fs = require('fs');

// Declare Express App
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/results", (req, res) => {
  const rawData = fs.readFileSync("./similarityResults.json");
  res.send({ results: JSON.parse(rawData) });
  console.log("We did it bois");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})

// module.exports.handler = serverless(app);
