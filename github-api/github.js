const https = require("https");

//github account
let username = 'foxneo';

// User agent to get the data
let FIREFOX_USER_AGENT = "Mozilla/5.0 (X11; Linux i686; rv:13.0) Gecko/13.0 Firefox/40.1"

// Url and http method
let options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: { 'user-agent': FIREFOX_USER_AGENT}
};

// Make the request
let request = https.request(options, (response) =>{
    let body = '';
    response.on('data', (out) => {
        body += out;
    });

    response.on('end', (out) =>{
        let json = JSON.parse(body);
        console.log(json);
    });
});

// server doesnt response
request.on('error', (e) =>{
    console.log(e);
});
// close the request
request.end();