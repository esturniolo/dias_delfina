var fs = require("fs");
console.log("Starting:");
fs.readFile('/home/eas/Escritorio/test.txt', function(err, data) {
	if (err) throw err;
	console.log ("Contents: \n" + data);
});
console.log("Sigue funcionando!");