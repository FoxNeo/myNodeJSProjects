var forge = require("node-forge");
var readline = require('readline');

var prompts = readline.createInterface(process.stdin, process.stdout);

console.log("Type the text to generate a sha256 hash: ");

prompts.question("",function(inputValue){

var md = forge.md.sha256.create();
md.update(inputValue);
console.log("Hash: " + '\n'+md.digest().toHex());


prompts.close();
});


