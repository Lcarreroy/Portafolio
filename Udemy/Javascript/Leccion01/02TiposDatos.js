// los tipos de datos que tenemos 
// en js las variables son dinamicas pueden cambiarse 
// tipo  de dato string

var nombre = "luis";
var apellido = "carrero";

// con typeof nos regresa el tipo de dato ( para saber si nesecitamos en algun momento)
console.log(typeof nombre);

console.log(nombre + " " + apellido);

// tipo de dato numerico

var numer = 123;
console.log (typeof numer);
console.log(numer);

// tipo de dato objet (objeto)

var objeto = {
    nombre1 : "luis",
    apellido1 : "yanez",
    telefono : "12345"
};

console.log(objeto);

// tipo de dato boolean (true or false)
var bandera = true;

console.log(bandera);
console.log(typeof bandera);


//tipo de dato function

function miFuncion(){}
    console.log(typeof miFuncion);

// tipo de dato symbol(funciona para crear un valor unico de una variable)
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo)


// tipo clases en una function

class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof persona);

//typo de dato undefine

var x;

console.log(typeof x);

x = undefined;

console.log(typeof x);


// tipo de dato null
//null = ausencia de valor  6
var y = null;
console.log(typeof y);


// array
var autos = [ "bmw","audi","volvo"];
console.log(autos);
console.log(typeof autos);

// Cuando una variable esta vacia
var z = "";
console.log(z);
console.log(typeof z);

// concatenacion de valores

var nombre2 = "alba";
var apellido2 = "Yanez";

var nombreCompleto = nombre2 + " " + apellido2;
console.log(nombreCompleto);


var nombreCompleto2 = "Jose" + " " + "Carrero";
console.log(nombreCompleto2)