// tipo obje que perime almacenar vario valores, tenemos tipos de sintaxxys para declararlos
// sintaxys antigua que no se usa

//let autos = new Array("bmw","mercedes benz","volvo");

// la sintaxys que vamos a usar 
const autos = ["BMW","Mercedes Benz","volvo"];
console.log(autos);

// manera para acceder a nuestros arreglos inicia desde el indice 0 de derecha a izquierda

console.log (autos[0]);
console.log(autos[2]);

// como recorrer todos los elementos de nuestro arreglo

for(let i = 0; i < autos.length; i++ ){
    console.log(i + " : " + autos[i])
}

// tambien podemos concatenar para saber los indices 


// forma para modificar nuestro arreglos

autos[1] = "mercedesbenz"
console.log(autos[1])

// agregar nuevos valore a nuestros arreglos con el metodo .push y se agrega al final de nuestro arreglo

autos.push("Audi");
autos.push("toyota");
autos.push("chevrolet")

console.log(autos); 

console.log(autos[5]);

// formas para trabajar nuestros arrays
// con length nos regresa la cantidad de elementos (indices 6 y elementos son los strings (BMW,AUDI))

console.log(autos.length);

// agregar elementos  en los indices que otra forma tambien
autos[autos.length] = "Cadillac";
console.log(autos);
// autos[60] = "porche"-- guarda este elemento en ese indice y los anteriores estan vacios
autos[8]="viejo";
console.log(autos)

autos[7]="carcasa";
console.log(autos)

// asi puedo trabajar mis arreglos tambien guardando los elementos que deseo

// como saber si estoy trabajando con un arreglo

console.log(typeof autos); // no funciona no nos dice si es un arreglo

// esta forma donde nos indica que es verdadero usando el isArray

console.log(Array.isArray(autos));

// otra forma con una palabra reservada instanceaof

console.log(autos instanceof Array);


// ejemplo de array

const frutas= ["Manzanas","Peras","Uvas"];

console.log(frutas);

// como saber en indice del elemento pera

console.log(frutas[1])

// agregar una nuevo array

frutas.push("fresas");
console.log(frutas);

frutas[4] = "melon";
console.log(frutas);

console.log(frutas.length);

for(j = 0 ; j < frutas.length; j++){
    console.log(j + " " + frutas[j])
}

console.log(Array.isArray(frutas));