var fs = require('fs');
var moment = require('moment');

console.log("RUNNING!!!\n\n")
console.log ("Comienzo");

//fs.readFile("./eventos.json", function(error, data) {
	//console.log("Eventos: " + data);
//});


var contenido = fs.readFileSync("eventos.json");
var evento = JSON.parse(contenido);

console.log(evento);

console.log("Funciona");


//var hoy = moment().startOf('days');
//var eventoFecha = moment([2014, 09, 02]);

//console.log(eventoFecha.diff(hoy, 'days'));


