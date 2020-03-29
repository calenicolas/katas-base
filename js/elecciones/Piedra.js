class Piedra {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion) {
        return eleccion.juegaContraPiedra(this.nombre);
    }

    juegaContraPiedra() {
        return "empate";
    }
}

module.exports = Piedra;