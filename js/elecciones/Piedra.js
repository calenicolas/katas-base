class Piedra {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion, partida) {
        return eleccion.juegaContraPiedra(this.nombre, partida);
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.empate();
    }

    juegaContraPapel(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(this.nombre);
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Piedra;