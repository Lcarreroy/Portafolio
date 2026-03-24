function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre +  " " + this.apellido + " y su correo es " + this.email
    }
}

// creamos nuestros objetos

let padre = new Persona("Jose","Carrero","JC@gmail.com");
console.log(padre);

console.log(padre.nombreCompleto())

// creamos nuestro segundo objeto

let madre = new Persona ("Alba","Yanez","AY@gmail.com");
console.log(madre);

console.log(madre.nombreCompleto());

// protype es una forma para agregar valores nuevos a todos nuestos atributos nuestros objeto
// asi creamo nuevos elementos en nuetro objeto y lo crea en general pero si queremos modificar para cada objeto se usa el normal, siempre dejando el de prototype

Persona.prototype.tel = "1234213"; // nos ayuda a modificar tanto los atributos como los metodos

console.log(padre.tel);
// cuando modificamos el por defecto del elemeto el contructor en el objetio
padre.tel =" 1233333";

console.log(padre.tel);


console.log(madre.tel);

madre.tel = "014140000";
console.log(madre.tel);