var http = require("http"),
	fs = require("fs"),
	parser = require('./params_parser.js');

var p = parser.parse;
console.log("Server status ...ok!");
// Create the http server
http.createServer(function(req, res){

	if(req.url.indexOf("favicon.ico") > 0){ return;}
	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		//My own template engine to find the regualr expresion {x} inside HTML
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var lenguage = "NodeJS";

		var params = p(req);

			// Render the new HTML output
		for(var i = variables.length -1; i>= 0; i--){
			var variable = variables[i];

			// Replace the regular expresion with the new value 
			html_string = html_string.replace("{"+variables[i]+"}", params[variable]);
		};

		res.writeHead(200,{"Contet-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);	