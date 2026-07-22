// Traigo las clases que definí en los otros archivos
import {apiModelo} from "./Modelo_API .js";
import {modeloCliente} from "./Modelo_cliente.js";

// Creo el objeto API (inicializa Local Storage)
const objModeloApi = new apiModelo();

// Capturo el botón de la vista
const boton = document.getElementById("Boton__registrar");

// Escucho el clic en el botón
boton.addEventListener("click", function(event){
    // Capturo los valores del formulario
    const nombre = document.querySelector("#nombre__input").value;
    const apellido = document.querySelector("#apellido__input").value;
    const rol = document.querySelector("#rol__input").value;

    // Creo un objeto cliente con esos datos
    const objCliente = new modeloCliente(nombre, apellido, rol);
    console.log(objCliente);

    // Valido el cliente
    if (!objCliente.esValido()) {
        alert("El nombre debe tener más de 3 caracteres");
        return;
    }

    // Guardo el cliente en Local Storage
    objModeloApi.guardar_cliente(objCliente);

    // Muestro saludo en la vista
    document.getElementById("saludo").innerText = `Hola, ${objCliente.getNombre()}`;
});