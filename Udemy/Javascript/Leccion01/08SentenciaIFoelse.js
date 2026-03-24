// la condicion if o else no indica el camino que va a tomar nuestra exprecion, si es verdadera se va por un lado y si es falsa por el otro

let condicion = false;

if(condicion){
    console.log("Condicion Verdadera")
}

else{
    console.log("nuestra condicion es falsa")
}
// aqui empezamos a utilizar nuestros operadores logicos para trabajar con las condciciones
// else if podemos preguntar mas condiciones a nuestro codigo
// usando else if
//ejercicio

let numero = "hola";

if(numero == 1){
    console.log("Numero 1")
}
else if(numero == 2){
    console.log("Numero = 2")
}
else if(numero == 3){
    console.log("Numero 3")
}
else{
    console.log("no es un numero")
}



// ejercicio de calcular la estaciones del año

let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "invierno";
}

else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}

else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}

else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "otoño"
}

else{
    estacion = "no valida"
}

console.log(estacion)

// ejercicio de la hora del dia
let hora = 30;
let saludo;

if(hora >= 6 && hora <=11){
saludo ="Buenos dias";
}

else if( hora >=12 && hora <= 18){
saludo ="Buenas Tardes";
}

else if(hora >=19 && hora <=24){
saludo = "buenas noches"
}

else if(hora >= 0 && hora <= 6){
saludo = "dormido"
}

else{
    saludo ="no valido";
}

console.log(saludo)