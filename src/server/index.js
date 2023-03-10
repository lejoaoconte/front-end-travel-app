const cors = require("cors");
const express = require("express");
const axios = require("axios");

// Config .env
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8055;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

// To get home router
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Start server and function test server
app.listen(port, function () {
  console.log(`Running in ${port}`);
});

app.get("/test", function (req, res) {
  res.send({ message: "running" });
});

// Function to get infos from city
app.post("/getcity", (req, res) => {
  const url = process.env.GEONAME_BASE_URL;
  const username = process.env.GEONAME_USERNAME;
  const city = req.body.city;

  const uri = `${url}&name=${city}&username=${username}`;

  axios(uri)
    .then((result) => res.send(result.data))
    .catch((e) => {
      res.send("Error");
      console.log(e);
    });
});

// Function to get infos from weather
app.post("/getweather", (req, res) => {
  const url = process.env.WEATHERBIT_BASE_URL;
  const lat = req.body.lat;
  const lon = req.body.lon;
  const api_key = process.env.WEATHERBIT_API_KEY;

  const uri = `${url}lat=${lat}&lon=${lon}&key=${api_key}`;
  axios(uri)
    .then((result) => res.send(result.data))
    .catch((e) => {
      res.send("Error");
      console.log(e);
    });
});

// Function to get images from city
app.post("/images", (req, res) => {
  const url = process.env.PIXABAY_BASE_URL;
  const city_name = req.body.city;

  const uri = `${url}&q=${city_name}&image_type=photo`;
  axios(uri)
    .then((result) => res.send(result.data))
    .catch((e) => {
      res.send("Error");
      console.log(e);
    });
});
