export class modeloCliente {
    constructor (datoNombre,datoApellido,datoRol){
        this.nombre = datoNombre;
        this.apellido = datoApellido;
        this.rol = datoRol;
    };

    getNombre(){
        return this.nombre;
    };

    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    };

    getApellido(){
        return this.apellido;
    };

    setApellido(nuevoApellido){
        this.apellido = nuevoApellido;
    };

    getRol(){
        return this.rol;
    };

    setRol(nuevoRol){
        this.rol = nuevoRol;
    };
    
    esValido(){
        return this.nombre !== undefined &&
        this.nombre.length > 3;
    };
};

