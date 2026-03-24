//  un constructor es una funcion que vamos a trabajar con objetos en js y para llamar se utiliza la palabra reservada (new)

// funcion construtor de objetos tipo persona y en los parametros ponemos nuestros parametros (nombre es un parametro) q vamos a utilizar en dicho constructor
function Persona(nombre, apellido, email){
    // this. nos permite trabajar con las propiedades del elemento que se estra trabajando
    // lado derecho nombre de la variable(parametro) y del lado izquiero es la propiedad de nuestro objeto
    // this. nos permite aceder a las propiedades de este elemento
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.infomacion = function(){
        return this.nombre + " " + this.apellido + " y su correo es  " + this.email
    };
}


// asi se crea nuetro metodo para llamar a nuestro construtor
// persona ya no es una variable sino un metodo que permite crear un objeto tipo persona

let padre = new Persona("jose","Carrero","Caryan@gmail.com");
// mandamos a emprimir el objeto padre
console.log(padre);



// creamos otro objeto

let madre = new Persona("Alba" , "Yanez", "albaYAnez@gmail.com")

console.log(madre);

console.log(padre.infomacion());
console.log(madre.infomacion());

// se usa la funcion del construtor para crear elementos con las mismas caracteristicas(propiedades)

// para hacer un cambio en un objeto

padre.nombre = "eduardo";

console.log(padre);
// solo cambia el nuevo valor de nuestro objeto padre


function coche(nombre,modelo,año){
    this.nombre = nombre;
    this.modelo = modelo;
    this.año = año;
    // definir nuestra funcion y se utliza mejor por que cada elemento que agregamos a nuetro constructor podremos resivir mas mismas caracteristicas cuando creemos nuestros objetos
    this.nombreCompleto = function(){
        return this.nombre + " " + this.modelo;
    }
}

let coche1 = new coche("bmw","citron","2002")

console.log(coche1);

let coche2 = new coche("mazda","mazda5","2007");

console.log(coche2);

// para llamar a nuestra funcion es
console.log(coche1.nombreCompleto());

console.log(coche2.nombreCompleto());