// persona es un objeto y los atributos son las caracteriticas de el como nombre, pellido m email
let persona = {
    nombre : "Luis",
    apellido : "Carrero",
    email : "lc@email.com",
    edad  : 34,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }

}

console.log(persona.nombre);

// otra forma para acceder a los atributos o propiedades de nuestro texto tambien por la forma de los arreglos

console.log(persona["apellido"]);

// forma para recorrer nuestras propiedades con el ciclo for (for in)

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);

}
    