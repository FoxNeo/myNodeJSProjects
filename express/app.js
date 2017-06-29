// Sample App server with the framework express
var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("Server time: " + new Date().toString());
});

app.listen(8080);