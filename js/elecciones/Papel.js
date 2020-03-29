class Papel {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContraPiedra() {
        return this.nombre;
    }

    juegaContra(eleccion){
        return eleccion.juegaContraPapel(this.nombre);
    }
}

module.exports = Papel;