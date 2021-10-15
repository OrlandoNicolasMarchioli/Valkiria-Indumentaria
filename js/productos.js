/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/image2.jpeg","Top cocó","850")
const producto2 = new Productos("../img/productos/index/image11.jpeg","Blusa Chloe","2100")
const producto3 = new Productos("../img/productos/index/image8.jpeg","Pantalon Leg clásico","2600")
const producto4 = new Productos("../img/productos/index/image15.jpeg","Jean mom clásico","2500")
const producto5 = new Productos("../img/productos/index/image10.jpeg","Blazer Moscú","3100")
const producto6 = new Productos("../img/productos/index/image13.jpeg","Jacket Atenas","2500")
const producto7 = new Productos("../img/productos/billeteras.jpg","Billeteras","1200")
const producto8 = new Productos("../img/productos/jeanRotoNegro.jpg","Jean break black","2200")
const producto9 = new Productos("../img/productos/jeanRoto2.jpg","Jean blue","2300")
const producto10 = new Productos("../img/productos/index/image20.jpeg","Body Barcelona","900")
const producto11 = new Productos("../img/productos/sweater.jpg","Sweater Sweet pink","1700")
const producto12 = new Productos("../img/productos/sweater2.jpg","Sweater Grey","1700")
const producto13 = new Productos("../img/productos/index/image7.jpeg","Top Sweet Green","850")
const producto14 = new Productos("../img/productos/carteraYGorra.jpg","Riñonera classic","1500")
const producto15 = new Productos("../img/productos/buzo.jpg","Buzo Harvard","1700")
const producto16 = new Productos("../img/productos/index/1.jpeg","Sweater Wolf","1700")
const producto17 = new Productos("../img/productos/cinturon.jpg","Cinturon flower","1400")
const producto18 = new Productos("../img/productos/jeanRoto.jpg","Jean blue","2300")




/* Lista de productos */
let listaProductos = [producto1, producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11, producto12,producto13,producto14,producto15,producto16,producto17,producto18]


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
const contenedor = document.getElementById("containerProductos")
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