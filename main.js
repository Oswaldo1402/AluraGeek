import { conexionAPI } from "./js/conexionAPI.js"


// lista de productos

const lista= document.querySelector("[data-lista]")

function crearCard(producto,precio,imagen){
    const card= document.createElement("div");
    card.className ="producto";
    card.innerHTML=`  <div class="contenedor_imagen">
    <img class="imagen_producto" src="${imagen}" alt="">
    </div>
    <div class="nombre_producto">
        <p>${producto}</p>
    </div>
    <div class="contenedor_precio_eliminar">
        <p>S/ ${precio}</p>
        <img src="imagen/tacho_de_basura.png" alt="basura">
    </div>`

    return card;
}

async function listadeProductos(){
    const listaAPI =await conexionAPI.listadeProductos()

    listaAPI.forEach(producto=>lista.appendChild(crearCard(producto.producto,producto.precio,producto.imagen)))
}

listadeProductos()



// agregar productos a la lista

 const formulario = document.querySelector("[data-formulario]")

 async function crearProduto(evento){    
    evento.preventDefault();
const producto= document.querySelector("[data-nombre]").value
const precio= document.querySelector("[data-precio]").value
const imagen= document.querySelector("[data-imagen]").value

console.log(producto,precio,imagen);

await conexionAPI.enviarProducto(producto,precio,imagen);
}

formulario.addEventListener("submit",evento => crearProduto(evento));
