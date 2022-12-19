const cors = require("cors");
const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 8055;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(port, function () {
  console.log(`Running in ${port}`);
});

app.get("/test", function (req, res) {
  res.send({ message: "running" });
});
