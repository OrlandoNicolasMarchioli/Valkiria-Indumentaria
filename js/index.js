
function enviarAlCarrito(){
    /* Funcion que recibe el click del usuario y envia el producto al carrito */
    
    let button = document.getElementsByClassName("boton__compras")
    button.addEventListener("click", enviarAlCarrito)
    let li = document.createElement("li")
    document.CarritoDeCompras__ul.appendChild("li")
    for(producto of productos){
        document.CarritoDeCompras__ul.appendChild("producto")
    }    
    
}



function Productos(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}


const producto1 = new Productos("Sweater Wolf","$3500",10)
const producto1 = new Productos("Jean1","$3500",10)
const producto1 = new Productos("Jean2 Wolf","$3500",10)
const producto1 = new Productos("Sweater2 Wolf","$3500",10)
const producto1 = new Productos("Sweater3 Wolf","$3500",10)
const producto1 = new Productos("Sweater4 Wolf","$3500",10)

