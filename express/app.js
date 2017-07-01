// Sample App server with the framework express
var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index", {greetings: "Hello user"});
});

app.listen(8080);