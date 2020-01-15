const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const db = require("./config/mongo.json");
const app = express();


//Server Connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));