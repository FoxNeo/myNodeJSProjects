function parse(req) {

	var array_param = [], params = {};

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
	return params;
}

module.exports.parse = parse;