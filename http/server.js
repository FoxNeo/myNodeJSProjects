
var http = require("http");
var url = require("url");

function iniciar(route, handle) {
function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Peticion para " + pathname + " recibida.");

    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    var content = route(handle, pathname)
    response.write(content);    
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log("Start server....");
}
exports.iniciar = iniciar;

//function decir(palabra) {
//    console.log(palabra);
//}

//function ejecutar (algunaFuncion, valor) {
 //   algunaFuncion(valor);
//}
//ejecutar(decir, "Hola!");