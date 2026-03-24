class Empleado extends persona {
    static contadorEmpleado = 0;

    constructor(sueldo){
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
    
