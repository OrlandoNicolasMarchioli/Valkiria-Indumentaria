

function Productos(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    console.log("ejecuta")
}


const producto1 = new Productos("Sweater Wolf","$3500",10)
const producto2 = new Productos("Jean1","$3500",10)
const producto3 = new Productos("Jean2 Wolf","$3500",10)
const producto4 = new Productos("Sweater2 Wolf","$3500",10)
const producto5 = new Productos("Sweater3 Wolf","$3500",10)
const producto6 = new Productos("Sweater4 Wolf","$3500",10)

let listaProductos = [producto1, producto2,producto3,producto4,producto5,producto6]
let acumulador = ""
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
            <p class="card-text">Precio: ${producto.stock}</p>
            <button class = "btn btn-primary"
                onclick = "agregarAlCarrito('$(producto.nombre)')">Agregar al carrito
            </button>
        </div>
    </div> 
`
})
const contenedor = document.getElementsByClassName("CarritoDeCompras__ul")
contenedor.innerHTML = acumulador 

