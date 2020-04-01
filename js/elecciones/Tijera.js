class Tijera {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion, partida) {
        return eleccion.juegaContraTijera(this.nombre, partida);
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraPapel(otroNombre, partida) {
        return partida.gana(this.nombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.empate();
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Tijera;