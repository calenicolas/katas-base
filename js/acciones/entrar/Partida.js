class Partida{
    constructor(presentador){
        this.presentador = presentador;
    }
    seConecto(jugador){
        this.presentador.mostrarPartidaArrancando(jugador);

    }
}

module.exports = Partida