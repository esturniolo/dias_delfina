var fs = require("fs");
console.log("Starting:");
var content = fs.readFileSync('/home/eas/Escritorio/test.txt');
console.log("Contents: \n" + content);
console.log("Sigue funcionando!");