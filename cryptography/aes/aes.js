var forge = require("node-forge");
var convertHex = require('convert-hex');

// generate a random IV 
var iv = forge.random.getBytesSync(8);
var key = "98fdvv09uev038fdu09ihvohasfasd54";

console.log("Original: "+ new Buffer("123","binary").toString());
console.log("Hex: "+ "313233");

console.log("Key:" + key);
//var cipher = forge.rc2.createEncryptionCipher(key);
var cipher = forge.cipher.createCipher('AES-CBC', key);
cipher.start({iv: iv});
cipher.update(forge.util.createBuffer(new Buffer("123","binary")));
cipher.finish();
var encrypted = cipher.output;
// outputs encrypted hex 
console.log("encrypted with AES");
console.log(encrypted.toHex());
 
console.log('\n'+ "decrypted AES: "); 
// decrypt some bytes 
var decipher = forge.cipher.createDecipher('AES-CBC', key);
decipher.start({iv: iv});
decipher.update(encrypted);
decipher.finish();
// outputs decrypted hex 
console.log("Hex: " + decipher.output.toHex().toString());
// output decrypted ASCII
console.log("ASCII: "+ hex2a(decipher.output.toHex()));


// standard function to convert Hex to ASCII
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
