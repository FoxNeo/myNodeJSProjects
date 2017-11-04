function iniciar() {

    console.log("Manipulador de peticion 'Iniciar' fue llamado.");

    /* Stop server thread! Never use this!!!!!! 
    function sleep(milliseconds) {
        //Get the current time
        var startTime = new Date().getTime();
        // stop server thread
        while (new Date().getTime() < startTime + milliseconds);
    }
    // 10 seconds
    sleep(10000);
    */
    return "Hola iniciar";
}
    function subir() {
    console.log("Manipulador de petición 'subir' ha sido llamado.");
    return "Hola Subir";
    }
    
    exports.iniciar = iniciar;
    exports.subir = subir;
