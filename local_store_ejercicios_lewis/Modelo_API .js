export class apiModelo{
    constructor() {
        if (!localStorage.getItem("clientes")){
            localStorage.setItem("clientes", JSON.stringify([]));
        }
    }

    guardar_cliente(cliente){
        // Leer lista de clientes guardados
        let clientes = JSON.parse(localStorage.getItem("clientes"));

        // Revisar si ya existe (nombre + apellido)
        let existe = clientes.some(c => c.nombre === cliente.getNombre() && c.apellido === cliente.getApellido());

        if (!existe) {
            // Agregar nuevo cliente
            clientes.push({
                nombre: cliente.getNombre(),
                apellido: cliente.getApellido(),
                rol: cliente.getRol()
            });

            // Guardar lista actualizada
            localStorage.setItem("clientes", JSON.stringify(clientes));
            alert("Cliente registrado correctamente");
        } else {
            alert("El cliente ya existe en el directorio.");
        }
    }
}


