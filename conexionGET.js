let URL = "http://localhost:8080/facturas"

let parametros = {
    method: "GET"
}

fetch(URL, parametros)
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))