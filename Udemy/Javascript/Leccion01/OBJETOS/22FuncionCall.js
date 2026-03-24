function Personas(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreConpleto = function(){
        return this.nombre + " " + this.apellido + " y su correo es " + this.email
    };
}
//metodo
Personas.prototype.tel = "041400000"
let padre = new Personas("eduardo","carrero","jc@gmail.com");

console.log(padre.nombreConpleto());

let madre = new Personas("alba","yanez","ay@gmail.com");

console.log(madre.nombreConpleto())

console.log(padre);

padre.tel = "12345312";

console.log(padre);

delete padre.tel;

console.log(padre)

// la funcion call podemos pasar argumentos
//El método call() en JavaScript sirve para invocar una función estableciendo explícitamente el valor de this para esa llamada y pasando argumentos uno por uno



// para el metodo call hacemos esto

let persona1 = {
    nombre: "Jose",
    apellido: "Carrero",
    nombreCompleto1 : function(titulo, tel){
        return titulo + " "+ this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre : "eduardo",
    apellido : "yanez"
}

// si quiero utilizar un elemento de un objeto distnto al q estoy usando
// ejemplo el metodo persona1.nombreCompleto con los datos de persona 2

console.log(persona1.nombreCompleto1("lic", "4433399"));

// ahora llamando con el metodo call

console.log(persona1.nombreCompleto1.call(persona2));
// nota otra funcion del metodo call podemos pasar argumentos
// por ejemplo
// llamando un metodo de un objeto

console.log(persona1.nombreCompleto1.call(persona2, "ing" , "041400000"))