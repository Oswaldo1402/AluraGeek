//lista de productos

async function listadeProductos(){
    const conexion = await fetch("http://localhost:3001/productos")
    const conexionConvertida = conexion.json()
    return conexionConvertida
}


//agregar producto  la lista

async function enviarProducto(producto,precio,imagen){
    const conexion =await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify({
            producto:producto,
            precio:precio,
            Imagen:imagen         
        })
    })
    const conexionConvertida= conexion.json();
    return conexionConvertida;
}


export const conexionAPI = {
    listadeProductos, enviarProducto
}