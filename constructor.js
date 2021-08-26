

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
function agregarCarrito(producto){
    monto = []
    carritoFinal = []
    console.log(producto)
    if( producto != " ") {
        console.log(producto)
        prod = producto
        for(let prod of productos){
            console.log(producto)

            /* El problema lo tengo desde aca, entra en un bucle infinito */
            for(prod ;productos; prod + 1){
                console.log(producto)                
                cantidad = parseInt(prompt( "Ingrese la cantidad que desea comprar"))                
                
                cant = cantidad
                stock = producto.stock
                
                if (cant < 500){/* si aca le pongo producto.stock, entra en un bucle infinito */
                    console.log(cantidad)
                    total = cant * producto.precio
                    producto.stock = producto.stock - cant
                    producto = prompt("Ingrese el nombre del siguiente producto a comprar (en caso de no querer mas ingrese 0)")/* Hasta aca todo bien, pero ingreso el "0" para salir y me sigue preguntando por productos */
                    if(producto = "0"){
                        break
                    }
                    monto.push(total)
                    carritoFinal.push(Producto)
                        
                    
                }
                /* else{
                    console.log(cantidad)
                    alert("La cantidad ingresada es mayor al stock actual")
                    cantidad = parseInt(prompt( "Ingrese la cantidad que desea comprar"))
                    } */
                
                
            }
        
            /* else{
                alert("El producto no se encuenta en stock")
                producto = prompt("Ingrese otro producto que desee comprar")
                console.log()
            } */
            console.log(screen)
        }
        
    }
    else{
        alert("El nombre ingresado no es valido");
        producto =prompt("Ingrese otro producto que desee comprar")
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


producto = prompt("Ingrese un producto que desee comprar")
agregarCarrito(producto)
alert("El monto total con impuestos incluidos es: " + monto * 1.21)
alert("Los productos comprados son: " + carritoFinal)






