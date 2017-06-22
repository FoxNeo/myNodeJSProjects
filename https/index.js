var https = require('https');
var fs = require('fs');

var hskey = fs.readFileSync('ssl/server-key.pem');
var hscert = fs.readFileSync('ssl/server-cert.pem')

var options = {
    key: hskey,
    cert: hscert
};

console.log('starting server...');
https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hi from HTTPS");
}).listen(8000);