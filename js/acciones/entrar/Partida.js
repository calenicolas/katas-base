const PartidaSinJugadores = require("./PartidaSinJugadores");
const PartidaConUnJugador = require("./PartidaConUnJugador");

class Partida{
    constructor(){
        this.estado = new PartidaSinJugadores();
    }

    seSuma(jugador){
        this.estado.seSuma(jugador, this);
    }

    seReinicia() {
        this.estado = new PartidaSinJugadores();
    }

    sumaJugador(jugador) {
        this.estado = new PartidaConUnJugador(jugador);
    }
}

module.exports = Partida