// Sample App server with the framework express
var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index", {greetings: "Hello user"});
});

// HTTP ---> GET / POST / PUT / PATCH / OPTIONS / HEADERS / DELETE request
app.get("/", function(req,res){
	res.render("index");
});

// regular expresion /:name => something text of the URL
// For example http://localhost:8080/etwas
app.get("/:name", function(req,res){
	//console.log(req.params.name);
	res.render("form", {name: req.params.name});
});


// Post Method when user send form
app.post("/", function(req,res){
	res.render("form");
});

app.listen(8080);