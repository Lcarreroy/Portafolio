
// para el metodo call hacemos esto

let persona1 = {
    nombre: "Jose",
    apellido: "Carrero",
    nombreCompleto1 : function(titulo,tel){
        return titulo + " "+ this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre : "eduardo",
    apellido : "yanez"
}

// si quiero utilizar un elemento de un objeto distnto al q estoy usando
// ejemplo el metodo persona1.nombreCompleto con los datos de persona 2

console.log(persona1.nombreCompleto1("lic","34123123"));

// ahora llamando con el metodo applay
// diferencia al call tengo que pasar la informacion median un arreglo cllamando nuesto metodo
let arreglo = ["ing","031231241"]

console.log(persona1.nombreCompleto1.apply(persona2,arreglo));

// tambien metodo call
console.log(persona1.nombreCompleto1.call(persona2,"ing","000343"))


