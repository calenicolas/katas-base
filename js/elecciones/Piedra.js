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
}

module.exports = Piedra;