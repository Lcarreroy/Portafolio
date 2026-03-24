// operador logico and (&&) este operador tienen que ser los dos verdare para quee ejecute el la codicion

let a = 9;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("dentro del rango");
}
else{
    console.log("Fuera del rango")
}

let n1 = 7;
let n2 = 8

if(n1 >= n2){
    console.log("es mayor que ");
}
else{
    console.log("es menor");
};
// opedaro logico or () devuelve verdadero si cumple almenos una de las condiciones

let vacaciones = true, diaDescanso = false;

if( vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo")
}
else{
    console.log("El padre estara ocupado")
}

//Operador Ternario uso del if y else pero se usa el signo ?
//ejemplo condition ? expre 1 : Expr 2 y nos imprime la expresion que la parte verdare de la parte ternaria

let resultado = (3>24) ? "verdadero" : "falso";

console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "numero par" : "numero imppar"
console.log(resultado);


let dia = "lunes";
let DiaSemana = "martes";
R = (dia == DiaSemana) ? "Hoy es lunes" : "no es lunes";
console.log(R);

// como cambiar el tipo de dato de numero a String, usando el atributo Number
// ejercicio

let miNumero = "19";

let edad = Number(miNumero);
numero = edad >= 18 ? "Puede Votar" : "Es muy joven para votar";
console.log(numero);

// la funcion NaN para verificar si es un numero o no(usamos en la validacion de usiaro)

let miNumero1 ="19";
console.log(edad); NaN

if(isNaN(miNumero1)){
    console.log("no es un numero")
}
else{
    let edad = Number(miNumero);
    numero = edad >= 18 ? "Puede Votar" : "Es muy joven para votar";
    console.log(numero)
}
// ++5 = 6 aumenta uno, Y-- =a 9 resta uno
let x = 5;
let y = 10;
let z = ++x + y --;
console.log(z)