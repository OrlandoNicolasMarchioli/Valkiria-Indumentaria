/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}


const producto1 = new Productos("../img/productos/billeteras.jpg","Billetera","1200")
const producto2 = new Productos("../img/productos/carteraYGorra.jpg","Riñonera classic","1500")
const producto3 = new Productos("../img/productos/cinturon.jpg","Cinturon flower","1400")



/* Lista de productos */
let listaProductos = [producto1, producto2,producto3]


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
const contenedor = document.getElementById("containerAccesorios")
contenedor.innerHTML = acumulador 

let precioTotal = 0;
/* Botones y funciones */
let boton = document.getElementsByClassName("botonCarrito");

let total = 0

/* Boton que agrega al carrito de */
function agregarCarrito(seleccion){
    let encontrado = listaProductos.find(producto => producto.nombre == seleccion);
    const card = `
    <div class= "carritoContainer">
        <h5 class="productoComprado">${encontrado.nombre}</h5>
        <h6 class="productoprecio">${encontrado.precio}</h6>
        <p>Precio total: ${total+= encontrado.precio}</p>
    </div>`
    console.log(encontrado)

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
let contadorCarrito = 0
$("#botonCarrito").click( ()=> {
    
    console.log(boton)
    if (contadorCarrito == 0){
        $("#carritoContainer").css({
            "display":"flex",
            "background-color": "white"
        })
        $("#carritoContainer").show("slow");
        contadorCarrito += 1
    }
    else if (contadorCarrito > 0){
        $("#carritoContainer").hide("slow");
        contadorCarrito -= 1
    }
})

/* Fin acciones boton carrito */