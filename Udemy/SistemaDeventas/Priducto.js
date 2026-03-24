class Producto {

    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._producto = [];
    }

    get idOrder() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._producto.length < Orden.MAX_PRODUCTOS) {
            this._producto.push(producto);
        } else {
            console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._producto) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productoOrden = "";
        for (let producto of this._producto) {
            productoOrden += producto.toString() + " ";
        }

        console.log(`Orden: ${this.idOrder}, Total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 150);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();

let producto3 = new Producto("cinturon",20);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();

let orden3 = new Orden();
let producto4 = new Producto("correa",30);
orden3.agregarProducto(producto4);
orden3.mostrarOrden();