/**
 * 19.11.2017 Miguel Caceres Bremen Germany
 * To test: node app.js --user=mac or user mac
 */
const _ = require('lodash');
const argv = require('yargs').argv;


//Get arg from the console input
//let command = process.argv[2];
if(argv.user === 'mac') {
        let x = { "nombre": "Miguel"}
        let y = { "nickname": "mac"}
        let z = [
            {nombre: "Miguel", appellido: "Caceres", edad: 23},
            {nombre: "Alejandro", appellido: "Nachname", edad:18}
        ]

        // concatenation for x and y
//let resultado = _.assign(x,y);
//console.log(resultado);


// Print 3 times follow me
//_.times(3, ()=> console.log('Follow me'));

let resultado = _.find(z, {nombre: "Miguel", appellido: "Caceres"});
console.log(resultado);

}else {
    console.log('User not valid');
}
