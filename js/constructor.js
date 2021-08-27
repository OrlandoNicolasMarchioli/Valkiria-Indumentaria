function Producto(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = stock; 
    this.cantidad = function(){
        alert(" El producto " + nombre + " tiene un precio de " + precio + " pesos  Y contamos con una cantidad de " + stock + " unidades ")
    }
    this.sumaIva = function() {
        this.precio = this.precio * 1.21;
    }
}
function agregarCarrito(prod){
    monto = 0
    carritoFinal = []
    cont = 0
    while (prod != 0){
        if(prod === ""){
            alert("Producto no válido, ingrese otro. Ingrese 0 para salir")
            prod = prompt("Ingrese otro producto")
        }else{
            for(const producto of productos){
                if (prod == producto.nombre){
                    let cantidad = parseInt(prompt("ingrese la cantidad de "+producto.nombre+" que desea comprar."))
                    if(cantidad < producto.stock){
                        producto.stock = producto.stock - cantidad
                        carritoFinal.push(producto.nombre)
                        monto += producto.precio*cantidad
                        prod = prompt("Desea ingresar otro producto? 0 para salir")
                    }
                    else{
                        alert("La cantidad ingresada es mayor al stock del producto")
                    }
                }
            }
        }
    }
}
/* Ingreso de productos */
const producto1 = new Producto("mandarinas", 20 , 300);
const producto2 = new Producto("peras", 40 , 350);
const producto3 = new Producto("manzanas", 30 , 150);
const producto4 = new Producto("uvas", 80 , 500);
const producto5 = new Producto("zandia", 50 , 225);
const producto6 = new Producto("pomelo", 45 , 375);
const producto7 = new Producto("naranja", 25 , 390);
const producto8 = new Producto("arroz", 20 , 100);
const producto9 = new Producto("pan", 20 , 300);
const producto10 = new Producto("fideos", 15 , 50);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

prod = prompt("Ingrese un producto que desee comprar, en caso de querer salir del programa, ingrese el numero 0")
prod = prod.toLowerCase();
agregarCarrito(prod)
alert("El monto total con impuestos incluidos es: " + monto * 1.21)
alert("Los productos comprados son: " + carritoFinal)

