
/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/1.jpeg","Sweater Wolf","$2000")
const producto2 = new Productos("../img/productos/index/2.jpeg","Jean 80's Syle","$3500")
const producto3 = new Productos("../img/productos/index/3.jpeg","Jean light blue","$3200")
const producto4 = new Productos("../img/productos/jeanRoto2.jpg","Jean Dark blue","$3500")
const producto5 = new Productos("../img/productos/jeanRotoNegro.jpg","Sweater3 Wolf","$3500")
const producto6 = new Productos("../img/productos/sweater2.jpg","Sweater4 Wolf","$3500")
const producto7 = new Productos("../img/productos/combo1.jpg","Sweater4 Wolf","$3500")
const producto8 = new Productos("../img/productos/combo2.jpg","Sweater4 Wolf","$3500")


/* Lista de productos */
let listaProductos = [producto1, producto2,producto3,producto4,producto5,producto6,producto7,producto8]


/* Estructur que genera una card de producto para agregarlo al html */
let acumulador = ""
listaProductos.forEach(producto => {
    acumulador +=`
    <div id="producto" class="col_ropa">
        <img src="${producto.img}" alt="">
        </img>
        <h4 class ="card__title">
                ${producto.nombre}
        </h4>
        <div class= "col__bolsa">
            <h5><b>${producto.precio}</b></h5>            
            <button id="botonCarrito" class = "boton__compras"
                onclick = "enviarAlCarrito('$(producto.nombre)')">Agregar al carrito
            </button>
        </div>
    </div> 
`
})
const contenedor = document.getElementById("containerProductos")
contenedor.innerHTML = acumulador 

/* Guardo la lista de productos en formato JSON en local storage */
/* for(const producto of listaProductos){
    localStorage.setItem(JSON.stringify(producto), "producto")
} */

/* Aca comienza el carrito de compras */

/* let carrito = []
let total = 0
const DOMitems = document.getElementById("producto")
const DOMcarrito = document.getElementById("carritoDeCompras")
const DOMtotal = document.getElementById("total")
const DOMbotonVaciar = document.getElementsById("botonVaciar") */

/* Funcion que capta los click sobre el boton de agregar carrito */

let boton = document.getElementById('botonCarrito');

boton.onclick =function(){
    let carritoDeCompras = document.getElementById("carritoDeCompras");
    carritoDeCompras.innerHTML = boton
}

