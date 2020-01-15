const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const dbUrl = require("./config/mongo.json").url;
const app = express();

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log(`Database Connected Successfully`);
});

//Server Connection
const port = process.env.PORT || 5000; //You can change the port by changing the static port number 5000 to any other port or you can define it in .env file
app.listen(port, () => console.log(`Server is running on port ${port}`));
