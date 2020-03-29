const Piedra = require("./Piedra");
const Tijera = require("./Tijera");
const Papel = require("./Papel");

class FabricaDeElecciones {
    crear(texto, nombre) {

        if(texto === "papel")
            return new Papel(nombre);

        if(texto === "tijera")
            return new Tijera(nombre);
        else
            return new Piedra(nombre);
    }
}

module.exports = FabricaDeElecciones;