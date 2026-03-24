class cliente extends persona{

    static contadorCliente = 0;
    
    constructor(fechaRegistro){
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