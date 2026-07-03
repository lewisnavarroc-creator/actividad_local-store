class ClienteModelo{
    constructor(datoNombre, datoApellido, datoRoll){
        this.nombre= datoNombre;
        this.apellido= datoApellido;
        this.roll= datoRoll;
    }
    get_nombre(){
        return this.nombre
    }
    get_apellido(){
        return this.apellido
    }
    get_roll(){
        return this.roll
    }
    set_nombre(nuevo_nombre){
        this.nombre=nuevo_nombre
    }
    set_apellido(nuevo_apellido){
        this.apellido=nuevo_apellido
    }
    set_roll(nuevo_roll){
        this.roll=nuevo_roll
    }

}