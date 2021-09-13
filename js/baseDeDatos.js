const baseDeDatos = [
    {
        id: 1,
        nombre: "Sweater Wolf",
        precio: 2000,
        imagen: "..img/productos/index/1.jpeg"

    },
    {
        id: 2,
        nombre: "Jean 80's Syle",
        precio: 3500,
        imagen: "..img/productos/index/2.jpeg"

    },
    {
        id: 3,
        nombre: "Jean light blue",
        precio: 3200,
        imagen: "..img/productos/index/3.jpeg"

    },
    {
        id: 4,
        nombre: "Jean Dark blue",
        precio: 3500,
        imagen: "..img/productos/jeanRoto2.jpg"

    }
    
];

let carrito = []
let total = 0;
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

/* Funciones */

/* Genera los productos a partir de la base de datos */

function renderizarProductos(){
    baseDeDatos.forEach((info) =>{
        /* Estructura */
        const miNodo = document.createElement("div");
        miNodo.classList.add("card");
        /* Body */
        
    })
}