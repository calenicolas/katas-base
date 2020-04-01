class Papel {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.gana(this.nombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContra(eleccion, partida){
        eleccion.juegaContraPapel(this.nombre, partida);
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Papel;