
/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/1.jpeg","Sweater Wolf","2000")
const producto2 = new Productos("../img/productos/index/2.jpeg","Jean 80s Syle","3500")
const producto3 = new Productos("../img/productos/index/3.jpeg","Jean light blue","3200")
const producto4 = new Productos("../img/productos/jeanRoto2.jpg","Jean Dark blue","3500")
const producto5 = new Productos("../img/productos/jeanRotoNegro.jpg","Sweater3 Wolf","3500")
const producto6 = new Productos("../img/productos/sweater2.jpg","Sweater4 Wolf","3500")
const producto7 = new Productos("../img/productos/combo1.jpg","Sweater4 Wolf","3500")
const producto8 = new Productos("../img/productos/combo2.jpg","Sweater4 Wolf","3500")


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

/* Carrousel */

$(function (){
    let contador = 1;

    $("#before").click(function(){
        $("#buttonBefore").animate({right: '20px'})
        contador -= 1
        console.log(contador)
        if (contador == 1){
            console.log(contador)
            $("#containerImg").css({
                "grid-template-areas":"before img1 after"
            })
            $("#img1").fadeIn(1000)
        }

        else if (contador == 0){
            contador += 3
            console.log(contador)
            $(".img").css({
                "grid-area": "img3"
            })
            $("#containerImg").css({
                "grid-template-areas":"before img3 after"
            })
            $("#img3").fadeIn(1000)
        }
        else if(contador == 2){
            console.log(contador)
            $(".img").css({
                "grid-area": "img2"
            })
            $("#containerImg").css({
                "grid-template-areas":"before img2 after"
            })
            $("#img2").fadeIn(1000)
        }
    });
    
    $("#after").click(function(){
        contador += 1;
        
        if (contador == 3){
            console.log(contador)
            $(".img").css({
                "grid-area": "img3"
            })
            $("#containerImg").css({
                "grid-template-areas":"before img3 after"
            })
            $("#img3").fadeIn(1000)
        }

        else if (contador == 4){
            contador -= 3
            console.log(contador)
            $("#containerImg").css({
                "grid-template-areas":"before img1 after"
            })
            $("#img1").fadeIn(1000)
        }
        else if(contador == 2){
            console.log(contador)
            $(".img").css({
                "grid-area": "img2"
            })
            $("#containerImg").css({
                "grid-template-areas":"before img2 after"
            })
            $("#img2").fadeIn(1000)
        }
    });

});




/* efectos enlaces */

$(window).scroll(function(){
    let pixel = $(window).scrollTop()
    console.log(pixel)
    if (500 < pixel <= 600){
        $("#containerEnlace1").fadeIn(1500);
        $("#containerEnlace2-3-4").fadeIn(1500);
    }
})

