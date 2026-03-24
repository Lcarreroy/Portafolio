// creadndo mi objeto cons sus propiedades

let persona = {
    nombre: "luis",
    apellido:"carrero",
    email: "lc@mail.com",
    edad: 34
}

// forma para agregar nueva propiedad a nuestro elemento
// asi se agrega

persona.tel = "123435322";
persona.pais = "venezuela";

console.log(persona);

// para cambiar el valor de una propiedad solo creamos la misma propiedad pero con dierente valor ejemplo

persona.pais = "España"
console.log(persona);

// para eliminar una propiedad ya existente

delete persona.tel;

console.log(persona);

// forma para imprimir los objetos en javaScript
// concatenar cada valor de cada propiedad

console.log(persona.nombre + ", " + persona.apellido);

// otra forma es iterando con el for in
for( nombrePropiedad in persona){
    console.log (persona[nombrePropiedad]);
}

// este metodo nos regresa nuestro objeto pero como un arreglo

let personaArray = Object.values(persona);
console.log(personaArray);

// otro metodo para regresar nuestro objeto (el stringify combierte cada uno de nuestros elementos en una cadena)

let personaString = JSON.stringify(persona);
console.log(personaString)