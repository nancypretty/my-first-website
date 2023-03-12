const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("home");
})

app.get("/project", function(req, res) {
    res.render("project");
})

app.get("/about", function(req, res) {
    res.render("about");
})




app.listen(100, function() {
    console.log("Server started on port 100!");
})