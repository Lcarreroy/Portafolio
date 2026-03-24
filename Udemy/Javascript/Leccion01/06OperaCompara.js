// operadores de comparacion

let a = 3, b = 2, c = "3" ;

// si es igual 

let z = (a == b); // se revisa el valor sin importar el tipo

console.log(z);

// === comparacion tripe iguial

z = a ===c;// revisa los valores pero tambien los tipos
console.log(z);

// si son distintos

z = a != b;
console.log(z);
// este operador es mas estricto

z = a !== c;
console.log(z);

//operdadores de comparacion 

let n1 = 2, n2 = 7, n3 = 2;
// operador mayor que

let j = n1 > n2;
console.log(j)

// operador menor que 
j = n1 < n2;
console.log(j)

// operador menor o igual que
j = n1 <= n2;
console.log(j);

// operador mayor igual que
j = n1 >= n3;
console.log(j)


let y = 10;
// (condicion)
if (y % 2 == 0){
    console.log("Es un numero par")
}
else{
    console.log("es un numero impar")
};


// ejercicio decir si es mayor o no


let edad = 11;

if(edad >= 18){
    console.log("es mayor de edad")
}
else{
    console.log("es menor de edad")
};