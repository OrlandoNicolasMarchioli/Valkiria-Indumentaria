
/* Objeto productos */
function Productos(img,nombre,precio){
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;

}

const producto1 = new Productos("../img/productos/index/image2.jpeg","Top cocó","850")
const producto2 = new Productos("../img/productos/index/image8.jpeg","Pantalon Leg clásico","2600")
const producto3 = new Productos("../img/productos/index/image10.jpeg","Blazer Moscú","3100")
const producto4 = new Productos("../img/productos/index/image11.jpeg","Blusa Chloe","2100")
const producto5 = new Productos("../img/productos/index/image13.jpeg","jacket Atenas","2500")
const producto6 = new Productos("../img/productos/index/image14.jpeg","Wide Leg Sevilla","2600")
const producto7 = new Productos("../img/productos/index/image15.jpeg","Jean mom clásico","2500")
const producto8 = new Productos("../img/productos/index/image20.jpeg","Body Barcelona","900")


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

$("#botonCarrito").click( ()=> {

    if (contadorCarrito == 0){
        
        $("#carritoContainer").css({

            "display":"inline-block",
            "background-color": "white",
            "margin-right": "25vw"
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

function slider(){

    $(".next").on("click",function(){

        let currentImg = $(".active");
        let nextImg = currentImg.next();

        if (nextImg.length){
            currentImg.removeClass("active").css("z-index", -10)
            nextImg.addClass("active").css("z-index",10)
        }
    })
    $(".prev").on("click",function(){

        
        let currentImg = $(".active");
        let prevImg = currentImg.prev();

        if (prevImg.length){
            currentImg.removeClass("active").css("z-index", -10)
            prevImg.addClass("active").css("z-index",10)
        }
    })
}
slider()
/* fin slider */
/* fade in a las imagenes del carrousel */

/* efectos al cambio de imagen */
$(".active").fadeOut(1);
$(".active").fadeIn(1500);
function fadeImgSlider(){

    $(".next").click(()=>{
        console.log("Enctro al fade")
        $(".active").fadeOut(1);
        $(".active").fadeIn(1500)       
    })
    $(".prev").click(()=>{
        console.log("Enctro al fade")
        $(".active").fadeOut(1);
        $(".active").fadeIn(1500);         
    })
    
}
fadeImgSlider()
/* fin de efectos al cambio de iamgen del carrousel */

/* Efecto de movimiento de las flechas */



/* circulos posicionadores */

function circulosPosicionadores(){
    let contador = 0
    
    $(".next").click(()=>{
        contador += 1
        if (contador > 3){
            contador -=1
        }
        if (contador == 0){
            $(".circle1").css({"background-color":"#BFA399"});
            $(".circle1").fadeOut(1);
            $(".circle1").fadeIn(1000);
            $(".circle2").css({"background-color":"transparent"});
            $(".circle3").css({"background-color":"transparent"});
        }
        if (contador == 1){
            $(".circle2").css({"background-color":"#BFA399"})
            $(".circle2").fadeOut(1);
            $(".circle2").fadeIn(1000);
            $(".circle1").css({"background-color":"transparent"})
            $(".circle3").css({"background-color":"transparent"})
        }
        if (contador == 2){
            $(".circle3").css({"background-color":"#BFA399"})
            $(".circle3").fadeOut(1);
            $(".circle3").fadeIn(1000);
            $(".circle2").css({"background-color":"transparent"})
            $(".circle1").css({"background-color":"transparent"})
        }        
        
    })
    $(".prev").click(()=>{
        contador -= 1
        if (contador < 0){
            contador +=1
        }
        if (contador == 0){
            $(".circle1").css({"background-color":"#BFA399"})
            $(".circle1").fadeOut(1);
            $(".circle1").fadeIn(1000);
            $(".circle2").css({"background-color":"transparent"})
            $(".circle3").css({"background-color":"transparent"})
        }
        if (contador == 1){
            $(".circle2").css({"background-color":"#BFA399"})
            $(".circle2").fadeOut(1);
            $(".circle2").fadeIn(1000);
            $(".circle1").css({"background-color":"transparent"})
            $(".circle3").css({"background-color":"transparent"})
        }
        if (contador == 2){
            $(".circle3").css({"background-color":"#BFA399"})
            $(".circle3").fadeOut(1);
            $(".circle3").fadeIn(1000);
            $(".circle2").css({"background-color":"transparent"})
            $(".circle1").css({"background-color":"transparent"})
        }        

    })
}
circulosPosicionadores()

/* efectos enlaces */
$(".sticker").fadeOut()
$("#containerEnlace1").slideUp("fast");
        $("#containerEnlace2_3_4").slideUp("fast");
$(window).scroll(function(){
    let pixel = $(window).scrollTop()
    console.log(pixel)
    if (pixel >= 400){
        $(".sticker").fadeIn()
    }
    if ( pixel >= 800){
        $("#containerEnlace1").slideDown(1500);
        $("#containerEnlace2_3_4").slideDown(1500);
    }
})
/* $("#containerEnlace1").slideDown(1500);
$("#containerEnlace2_3_4").slideDown(1500);
 */