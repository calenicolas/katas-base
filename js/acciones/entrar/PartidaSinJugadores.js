class PartidaSinJugadores {
    seSuma(jugador, partida) {
        jugador.enEsperaBuscandoRival();
        partida.sumaJugador(jugador);
    }
}

module.exports = PartidaSinJugadores;