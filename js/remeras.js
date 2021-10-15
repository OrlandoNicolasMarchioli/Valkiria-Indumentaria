/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/image2.jpeg","Top cocó","850")
const producto2 = new Productos("../img/productos/index/image11.jpeg","Blusa Chloe","2100")
const producto3 = new Productos("../img/productos/index/image20.jpeg","Body Barcelona","900")
const producto4 = new Productos("../img/productos/index/image7.jpeg","Top Sweet Green","850")



/* Lista de productos */
let listaProductos = [producto1, producto2,producto3,producto4]


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
            <h5><b>$ ${producto.precio}</b></h5>            
            <button class="botonCarrito boton__compras"
                onclick = "agregarCarrito('${producto.nombre}')">Comprar
            </button>
        </div>
    </div>     
`   

})
const contenedor = document.getElementById("containerRemeras")
contenedor.innerHTML = acumulador 

let precioTotal = 0;
/* Botones y funciones */

/* Boton que agrega al carrito de */
function agregarCarrito(seleccion){
    let encontrado = listaProductos.find(producto => producto.nombre == seleccion);
    const card = `
    <div class= "carritoContainer">
        <img class="imagenProductoComprado" src="${encontrado.img}">
        <h5 class="productoComprado">${encontrado.nombre}</h5>
        <h6 class="productoPrecio">${encontrado.precio}</h6>
    </div>`   

    let carro = document.getElementById('botonCarrito')
    carro.innerHTML += card
}


/* Nav bar */

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", ()=> {
    navbarLinks.classList.toggle("active")
}) 

/* acciones carrito de compra */
let contador = 0;

$("#botonCarrito").on('click', function(){    
    contador +=1
    if(contador == 2){
        contador -=2
        $(".carritoContainer").css({"display":"none"})        
    }
    if (contador == 1){
        $(".carritoContainer").css({"display":"flex"})
        $
    }
})
/* Fin acciones boton carrito */

/* Titulo carrito */
let contador2 = 0;
$("#botonCarrito").on('click', function(){
    
    contador2 +=1
    if(contador2 == 2){
        contador2 -=2
        
        $(".tituloBoton").css({"display":"none"})
    }
    if (contador2 == 1){
        
        $(".tituloBoton").css({"display":"flex"})
    }
})

/* Fin acciones boton carrito */

/* efectos enlaces */
$(".tituloPrincipal").slideUp(1);
$(".tituloPrincipal").slideDown(1000);