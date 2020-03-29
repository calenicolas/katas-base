class EleccionInvalida {
    juegaContraPiedra(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraPapel(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraEleccionInvalida(partida) {
        partida.pierden();
    }

    juegaContra(eleccion, partida) {
        eleccion.juegaContraEleccionInvalida(partida);
    }
}

module.exports = EleccionInvalida;