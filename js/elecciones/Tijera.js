class Tijera {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion) {
        return eleccion.juegaContraTijera(this.nombre);
    }

    juegaContraPiedra(otroNombre) {
        return otroNombre;
    }

    juegaContraPapel() {
        return this.nombre;
    }

    juegaContraTijera() {
        return "empate";
    }
}

module.exports = Tijera;