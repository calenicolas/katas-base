const Piedra = require("./Piedra");
const Tijera = require("./Tijera");
const Papel = require("./Papel");
const EleccionInvalida = require("./EleccionInvalida");

class FabricaDeElecciones {
    crear(texto, nombre) {

        if(texto === "papel")
            return new Papel(nombre);

        if(texto === "tijera")
            return new Tijera(nombre);
        
        if(texto === "piedra")
            return new Piedra(nombre);
        else
            return new EleccionInvalida();
    }
}

module.exports = FabricaDeElecciones;