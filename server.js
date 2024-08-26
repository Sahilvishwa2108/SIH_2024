import express from "express";
import colors from "colors";
import { configDotenv } from "dotenv";

const app = express();

// env configuration
configDotenv

// port number
const PORT = process.env.PORT || 3000;

const DEV_MODE = process.env.DEV_MODE || "development";

app.listen(PORT, () => {
  console.log(`Server is running on ${DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});

app.get("/", (req, res) => {
  res.send("Welcome to Waste Reusability App");
});
