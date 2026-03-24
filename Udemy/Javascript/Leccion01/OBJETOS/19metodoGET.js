let persona = {
    nombre: "luis",
    apellido:"carrero",
    email: "lc@mail.com",
    edad: 34,
    idiona: "es",
// lang es un metodo
    get lang(){
        return this.idiona.toUpperCase();
    },
// el metodo set lo vamos a utilizar para modificar los valores de nuestros atributos get
// tambien en parametros se pone el leng
set lang(lang){
    this.idiona = lang.toUpperCase()
    },

    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto);

console.log(persona.lang);



// get significa obtener en ingles seria para acceder a los valores de mis propiedades sin utilizar una funcion ya que ella me regresa los valores q tengo

// tambien el uso de set

persona.lang = "en";
console.log(persona.lang);

console.log(persona.idiona);

console.log(persona.nombreCompleto);

let coches = {
    nombre : "BMW",
    color : "azul",
    age : "2025",

    get nombreCarros(){
        return this.nombre + " " + this.color; 
    }
}

console.log(coches.nombreCarros)
console.log(coches.nombre);

coches.pais = "alemania";
coches.tel = "1234532";
coches.correo = "l@gmail.com"



console.log(coches);

delete coches.age;

console.log(coches)

// get significa obtener en ingles seria para acceder a los valores de mis propiedades



