let boton = document.getElementById("boton");
boton.addEventListener("click", enviarDatos);

function enviarDatos() {

    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let peso = document.getElementById("peso").value;
    let foto = document.getElementById("foto").value;

    let factura = {
        producto,
        cantidad,
        precio,
        peso,
        foto
    }

    console.log(factura);

    let URL = "http://localhost:8080/facturas/nuevo"

    let parametros = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(factura)

    }

    fetch(URL, parametros)
        .then(respuesta => respuesta.json())
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error))

}