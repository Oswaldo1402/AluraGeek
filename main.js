const nombre= document.querySelector("[data-nombre]")
const precio= document.querySelector("[data-precio]")
const imagen= document.querySelector("[data-imagen]")
const btnEnviar = document.querySelector("[data-boton-enviar]")
const btnLimpiar = document.querySelector("[data-boton-limpiar]")

btnEnviar.addEventListener("click", ()=>{
    console.log(nombre.value)
    console.log(precio.value)
    console.log(imagen.value)
})
