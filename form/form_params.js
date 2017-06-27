var http = require("http"),
	fs = require("fs");

// Create the http server
http.createServer(function(req, res){
console.log("Server status ...ok!");
	
	if(req.url.indexOf("favicon.ico") > 0){ return;}
	fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		var array_param = [], params = {};
		//My own template engine to find the regualr expresion {x} inside HTML
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var lenguage = "NodeJS";

		if(req.url.indexOf("?") > 0){
			// /?name=Miguel
			var url_data = req.url.split("?");
			var array_param = url_data[1].split("&");
		}

		for (var i = array_param.length - 1; i >= 0; i--) {
			var param = array_param[i];
			//name=Miguel

			var param_data = param.split("=");
			//[name,value]
			params[param_data[0]] = param_data[1];
			//{name: value} <------- inside HTML
		};
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