
// un objeto puede contener propiedades y metodos y asi se define un nuevo objeto
// crear nuestra variable y guardamos todos los elementos dentro de nuestro objeto
let persona = {
    // agregamos las propiedades de nuestros elementos
    nombre: "juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    nombreCompleto: function(){
        // operador especial para apuntar para el objeto que se esta ejecutando this.
        return this.nombre + " " + this.apellido;
    }
}
// con el punto tenemos apceso a atributos y podemos emprimir todo 
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto())
// y si quiero emprimir todo el objeto

console.log(persona);

let usuario = {
    nombre1 : "luis",
    apellido1: "carrero",
    email1: "luis@gmail.com",
    edad1: 34,
    miFuncion: function(){
        return this.apellido1 + " " + this.edad1;
        }
    }
// llamamos al atributo de nuestro objeto

console.log(usuario.apellido1);
console.log(usuario.edad1);
console.log(usuario.miFuncion())
// ahora emprimimos todo en pantalla

console.log(usuario);

// un metodo para agregar un nuevo metodo se concatena 

// para crear un oobjeto new y se utuliza la nueva sintaxys
// Esta es la forma de crear un nuevo objeto

let persona2 = new Object(); // asi se crea un nuevo objeto en js
persona2.nombre ="Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "553355535";

// no es la mas comun se utiliza la sintaxis que usamos principal y asi ibamos agregando los atributos
console.log(persona2.tel);