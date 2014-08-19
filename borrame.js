var fs = require('fs');
console.log("Stariting");
var contents = fs.readFileSync("./eventos.json");
console.log("Contents " + contents +"\n\n");

console.log("SEPARADOR\n\n");

var config = JSON.parse(contents);
console.log(config);

console.log("\n\nSEPARADOR\n\n");

console.log(config.fecha);