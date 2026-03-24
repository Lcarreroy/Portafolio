//la condicion switch nos indica hacer una comparacion de entre varias sentencias

let numero = 1;

let numeroTexto = "Valore desconocido";

switch(numero){
    case 1:
        numeroTexto = "Numero uno";
        break
    case 2 :
        numeroTexto = "Numero dos";
        break
    case 3:
        numeroTexto = "Numero tres";
        break
    case 4:
        numeroTexto = "numero cuatro";
        break
    default:
        numeroTexto = "Caso no encontrado";
        break
}

// para imprimir tenemos que estar fuera de nuestro switch

console.log(numeroTexto);


// ejercicio con las estaciones del año

let mes = 2;
let estacion = "estacion desconocida";

switch(mes){
    case 1: case 2: case 12:
        estacion = "Invierno";
        break
    case 3: case 4: case 5:
        estacion = "Primavera";
        break
    case 6,7,8:
        estacion = "Verano";
        break
    case 9,10,11:
        estacion = "otoño";
        break
    default:
        estacion = "no encontrada";
        break
}

console.log(estacion);

