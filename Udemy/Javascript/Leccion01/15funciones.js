//funciones es un bloque de codigo reutilizable que lo vamos a llamar las cantidad de veces que nesecitemos


// se declara asi y la sintaxis es asi y utilizando la notacions de camello
// funcion nombre de la funcion (argumentos o informacion de entrada obcional y si tiene mas de uno se separa por comas{Cuerpo de la funcion que son las lineas de codigo})

miFuncion(4,2);


function miFuncion(a,b){
    console.log ("Suma: " + (a + b));
}

// despues se manda a llamar dentro de nuestro arguenmento se pasan los valores que queremos para la funcion
miFuncion(2,2);

miFuncion(5,5)

// hositing podemos llamar esta funcion antes de definirla o despues de definirla

// vamos a utilizar la palabra return regresamos el valor con el valor

// declamarmos la funcion
function miFuncion2(a,b){
    console.log(arguments)
    return a + b; // de una vez hace el valor de la suma
}
// llamado de la funcion
let resultado = miFuncion2(2,3);
console.log(resultado)

// declaracion de tipo expresion sin tener que ponerle un nombre

let x = function (a,b){return a + b;};

resultado = x(1,2);
console.log(resultado);

// funciones que se llaman asi misma self invoquin

(function(a,b){
    console.log("ejecutando la funcion: " + ( a + b))
})(3,4);


console.log(typeof miFuncion);

// con este eslemento podemos saber cuantos argumentos tiene nuestra funcion

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)

// Funcion flecha
// uso de parametros y argunmentos
let sumar = function(a = 4,b = 5){
    console.log (arguments[0]);
    console.log (arguments[1]);
    console.log (arguments[2]);
    return a + b + arguments[2];

};

resultado = sumar(3, 4, 7);
console.log(resultado)
// sintaxys para la funcion flecha

//const sumarFunctionFlecha = (a,b) => a + b;
//resultado = sumarFunctionFlecha (2,2);

//console.log(resultado);

// ejerciico de funciones

let resultadoTotal = sumarTodo(5, 4, 13, 10, 9);
console.log(resultadoTotal);

function sumarTodo(){
    let sumaTotal = 0;
    for(let i = 0; i < arguments.length; i++){
        sumaTotal  += arguments[i]; // suma = suma + arguments[i]
    }
    return sumaTotal;
};

// paso por referencia como crear por un objeto

const persoma = {
    nombre: "luis",
    apellido: "carrero"
}

function cambiarValorObjeto(p1){
    p1.nombre = "eduardo";
    p1.apellido = "Yanez";
}
// paso por referencia
cambiarValorObjeto(persoma);
console.log(persoma);