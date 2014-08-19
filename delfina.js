var fs = require('fs');
var moment = require('moment');


console.log("RUNNING!!!\n\n")
console.log ("Comienzo\n\n");

//fs.readFile("./eventos.json", function(error, data) {
	//console.log("Eventos: " + data);
//});


var contenido = fs.readFileSync("eventos.json");
var lista = JSON.parse(contenido);

console.log(lista.acontecimientos[0].fecha);

console.log("\n\nFunciona\n\n");



// Lo que esta a continuacion funciona, solo resta ver como formateo
// las fechas para que me queden los dias de diferencia correctos.
moment().format("L");

var hoy = moment().startOf('days');
var eventoFecha = moment([lista.acontecimientos[2].fecha]);

console.log(eventoFecha.diff(hoy, 'days'));


