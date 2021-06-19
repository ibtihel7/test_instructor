const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRouter = require("./Routes/postRouter");
const assert = require("assert");
const app = express();

// Connecting to the database
mongoose.connect("mongodb://localhost:27017/gomycodetest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});
// setting body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use("/", postRouter);

// Running the server
app.listen(5656, (err) => {
  assert.equal(null, err, "server not running");
  console.log("the server is running on port 5656");
});
