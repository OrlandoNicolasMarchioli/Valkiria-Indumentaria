function enviarAlCarrito(){
    /* Funcion que recibe el click del usuario y envia el producto al carrito */

    let button = document.getElementsByClassName("boton__compras")
    button.addEventListener("click", enviarAlCarrito)
    let li = document.createElement("li")
    document.CarritoDeCompras__ul.appendChild("li")
    for(producto of Productos){
        document.CarritoDeCompras__ul.appendChild("producto")
    }    

}

/* Objeto productos */
function Productos(nombre,precio,stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    console.log("ejecuta")
}

const producto1 = new Productos(1,"Sweater Wolf","$3500",10)
const producto2 = new Productos(2,"Jean1","$3500",10)
const producto3 = new Productos(3,"Jean2 Wolf","$3500",10)
const producto4 = new Productos(4,"Sweater2 Wolf","$3500",10)
const producto5 = new Productos(5,"Sweater3 Wolf","$3500",10)
const producto6 = new Productos(6,"Sweater4 Wolf","$3500",10)

/* Lista de productos */
let listaProductos = [producto1, producto2,producto3,producto4,producto5,producto6]

let button = document.getElementsByClassName("boton__compras")

let lista = document.getElementById("carritoDeCompras__u")

button.addEventListener("click", agregarCarrito)

/* Quiero agregar los objetos en la linea 120 del html */
function agregarCarrito(){
    alert("Agregaste un producto al carrito!")
    for(const producto of listaProductos){
        if(producto.id == id){
            <div class="card">
                <div class="card__body">    
                    <h5 class="card__title">w
                        ${producto.nombre}
                    </h5>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <p class="card-text">stock: ${producto.stock}</p>
                    <button class = "btn btn-danger"
                    onclick = "enviarAlCarrito('$(producto.nombre)')">Eliminar
                    </button>   
                </div>                
            </div>
        }
    }
    lista.innerHTML(listaProductos.producto)
}

const contenedor = document.getElementById("CarritoDe Compras__ul")



/* Estructur que genera una card de producto para agregarlo al html */
/* let acumulador = ""
listaProductos.forEach(producto => {
    acumulador +=`
    <div class="card" style="width: 18rem;">
        <img src="../img/productos/index/1.jpeg" class="card__img__top">
        </img>
        <div class= "card__body">
            <h5 class ="card__title">
                ${producto.nombre}
            </h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <p class="card-text">stock: ${producto.stock}</p>
            <button class = "btn btn-primary"
                onclick = "enviarAlCarrito('$(producto.nombre)')">Agregar al carrito
            </button>
        </div>
    </div> 
`
})
const contenedor = document.getElementById("CarritoDeCompras__ul")
contenedor.innerHTML = acumulador 

/* Guardo la lista de productos en formato JSON en local storage */
/* for(const producto of listaProductos){
    localStorage.setItem(JSON.stringify(producto), "producto")
} */
