const express = require('express');
const cors = require('cors');
const app = express(), bodyParser = require("body-parser");
const MyController = require('./node-controllers/MyController');
const rootController = require('./node-controllers/rootController');
const dashboard = require("./node-controllers/dashboard-controller");

app.use(cors());
app.use(bodyParser.json());

app.use("/",dashboard);

app.use("/geojson",MyController);

app.use("/racine",rootController);

module.exports = app;