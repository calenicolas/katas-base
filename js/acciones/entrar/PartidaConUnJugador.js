class PartidaConUnJugador {
    constructor(jugador) {
        this.jugadorEnEspera = jugador;
    }

    seSuma(rival, partida) {
        this.jugadorEnEspera.arrancaAJugar(rival);
        rival.arrancaAJugar(this.jugadorEnEspera);
        
        partida.seReinicia();
    }
}

module.exports = PartidaConUnJugador;