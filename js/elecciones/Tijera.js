class Tijera {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion, partida) {
        return eleccion.juegaContraTijera(this.nombre, partida);
    }

    juegaContraPiedra(otroNombre, partida) {
        return partida.gana(otroNombre);
    }

    juegaContraPapel() {
        return this.nombre;
    }

    juegaContraTijera(otroNombre, partida) {
        partida.empate();
    }
}

module.exports = Tijera;