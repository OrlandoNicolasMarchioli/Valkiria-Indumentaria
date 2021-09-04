
let productos = ["remera","pantalon","cartera","cinturon","campera","billetera"]

let contrasenas = ["Miguel Gomez","12343552"]

for(const producto of productos){
    localStorage.setItem('producto',JSON.stringify(producto))
}

for(const contrasena of contrasenas){
    sessionStorage.setItem('contasena', JSON.stringify(contrasena))
}

let titulo = document.getElementsByClassName("tituloPrincipal"){
    color = pink
}




