const Jugador = require("./Jugador")

class EntrarALaCola {
    constructor(presentador, proveedorDePartidas) {
        this.presentador = presentador;
        this.proveedorDePartidas = proveedorDePartidas;
    }
    
    ejecutadoPor(nombreDelJugador) {
        const partida = this.proveedorDePartidas.entreguePartida();
        const jugador = new Jugador(nombreDelJugador, this);

        partida.seSuma(jugador);
    }

    muestraEnEspera() {
        this.presentador.mostrarMensajeDeEspera();
    }

    muestraQueArrancaAJugar(nombreDelRival) {
        this.presentador.mostrarPartidaArrancando(nombreDelRival);
    }
}

module.exports = EntrarALaCola;