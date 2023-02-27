const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");























app.listen(100, function() {
    console.log("Server started on port 100!");
})