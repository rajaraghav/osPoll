const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 4000;
const app = express();

app.use(express.static(path.join(__dirname + "public")));

//body parser middleware

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

//cors middleware

app.use(cors());

//
app.listen(port, () => {
  console.log("server started");
});
