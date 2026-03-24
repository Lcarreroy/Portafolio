class Persona{
    // nuestra vairable estatica
    static contadorPersona = 0;

constructor (nombre,apellido,edad){
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    
}
    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;

    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    
    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }

}

class Empleado extends Persona {
    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    toString(){
        //usamos toda la informacion de la clase padre y concatenamos los valors de empelado y sueldo
        return `${super.toString} 
                ${this._idEmpleado} 
                ${this._sueldo}`
    }
}
    
class cliente extends Persona{

    static contadorCliente = 0;
    
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente = ++cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRliente;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`
    }
}

// prueba de la clase persona
let persona1 = new Persona("juan","perez",29);

console.log(persona1.toString());


// creando el objeto tipo empleado

let empleado1 = new Empleado("cala","gomez",25,5000);
console.log(empleado1);

let empleado2 = new Empleado("laura","pepita",24,4000);
console.log(empleado2.toString());

// creando objetos con la clase de clientes

let cliente1 = new cliente("eduardo","carrero",30,new Date())

console.log(cliente1.toString());