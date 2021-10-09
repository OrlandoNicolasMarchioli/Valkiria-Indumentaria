/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/image10.jpeg","Blazer Moscú","3100")
const producto2 = new Productos("../img/productos/index/image13.jpeg","Jacket Atenas","2500")
const producto3 = new Productos("../img/productos/sweater.jpg","Sweater Sweet pink","1700")
const producto4 = new Productos("../img/productos/sweater2.jpg","Sweater Grey","1700")
const producto5 = new Productos("../img/productos/buzo.jpg","Buzo Harvard","1700")


/* Lista de productos */
let listaProductos = [producto1, producto2,producto3,producto4,producto5]


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
const contenedor = document.getElementById("containerCamperas")
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