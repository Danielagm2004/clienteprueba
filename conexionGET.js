let pedidos;

let URL = "http://localhost:8080/facturas"

let parametros = {
    method: "GET"
}

fetch(URL, parametros)
    .then(respuesta => respuesta.json())
    .then(function(respuesta){
        pedidos=respuesta.datos
        console.log(pedidos)
        let contenedorPadre=document.getElementById("padre");
        pedidos.forEach(function(pedido){

            let columna=document.createElement("div");
            columna.classList.add("col");
        
            let cuerpo=document.createElement("div");
            cuerpo.classList.add("card");
            cuerpo.classList.add("h-100");
        
            let imagen=document.createElement("img");      
            imagen.classList.add("card-img-top");
            imagen.src=pedido.foto;
        
            let cuerpo2=document.createElement("div");
            cuerpo2.classList.add("card-body");
            
        
            let titulo=document.createElement("h5");
            titulo.classList.add("card-title");
            titulo.textContent=`Producto: ${pedido.nombre}`;
        
            let texto=document.createElement("p");
            texto.classList.add("card-text");
            texto.textContent=`Precio: ${pedido.precio} USD`;
           
        
            let texto2=document.createElement("p");
            texto2.classList.add("card-text");
            texto2.textContent=`Cantidad: ${pedido.cantidad}`;
        
            let footer=document.createElement("div");
            footer.classList.add("card-footer");
        
            let boton1=document.createElement("button");
            boton1.classList.add("btn");
            boton1.classList.add("btn-danger");
            boton1.textContent="Eliminar";
        
            let icono=document.createElement("i");
            icono.classList.add("fas");
            icono.classList.add("fa-trash-alt");
            icono.classList.add("ms-1");
        
            let boton2=document.createElement("button");
            boton2.classList.add("btn");
            boton2.classList.add("btn-warning");
            boton2.classList.add("ms-2");
            boton2.textContent="Editar";
        
            let icono2=document.createElement("i");
            icono2.classList.add("far");
            icono2.classList.add("fa-edit");
            icono2.classList.add("ms-1")
        
        
            contenedorPadre.appendChild(columna);
            columna.appendChild(cuerpo);
            cuerpo.appendChild(imagen);
            cuerpo.appendChild(cuerpo2);
            cuerpo2.appendChild(titulo);
            cuerpo2.appendChild(texto);
            cuerpo2.appendChild(texto2);
            cuerpo.appendChild(footer);
            footer.appendChild(boton1);
            boton1.appendChild(icono);
            footer.appendChild(boton2);
            boton2.appendChild(icono2);
    });
})

    .catch(error => console.log(error))