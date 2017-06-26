// Code to encrypt with 3DES
var forge = require('node-forge');
var convertHex = require('convert-hex');


console.log("3DES Encrypt");

var key = "111111111111111111111111"; //24 length
var data = "I want to keep this message for you";
console.log("Original:  "+ data);
	
	// 3DES key and IV sizes 
var iv = forge.random.getBytesSync(8);

//#################Encrypt 3DES #########################
var cipher = forge.cipher.createCipher('3DES-CBC', key);
cipher.start({iv: iv});
cipher.update(forge.util.createBuffer(new Buffer(data, "binary")));
cipher.finish();
var encrypted = cipher.output;
// outputs encrypted hex 
console.log("encrypted with 3DES");
console.log(encrypted.toHex());

//#####################Decrypt 3DES######################
// standard function to convert Hex to ASCII
console.log('\n'+ "decrypted 3DES: "); 
var decipher = forge.cipher.createDecipher('3DES-CBC', key);
decipher.start({iv: iv});
decipher.update(encrypted);
decipher.finish();
// outputs decrypted hex
console.log("Hex: " + decipher.output.toHex().toString());
// output decrypted ASCII
console.log("ASCII: "+ hex2a(decipher.output.toHex()));

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
/**

3DES Encrypt
Original:  I want to keep this message for you
encrypted with 3DES
bf98fffd355312adb484ceb55c5b25e469a9272c6419b9cecc006c7eacd6d0c86749b308f2e96e77

decrypted 3DES:
Hex: 492077616e7420746f206b6565702074686973206d65737361676520666f7220796f75
ASCII: I want to keep this message for you

*/