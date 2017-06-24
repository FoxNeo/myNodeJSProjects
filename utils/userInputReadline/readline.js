var readline = require('readline');

var prompts = readline.createInterface(process.stdin, process.stdout);

console.log('What is yor name?');
prompts.question("",function(inputValue){

var message = "Hello "+ inputValue;
console.log(message);

prompts.close();

});
