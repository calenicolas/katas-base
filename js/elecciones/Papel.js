class Papel {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContraPiedra(otroNombre, partida) {
        return partida.gana(this.nombre);
    }

    juegaContra(eleccion, partida){
        return eleccion.juegaContraPapel(this.nombre, partida);
    }
}

module.exports = Papel;