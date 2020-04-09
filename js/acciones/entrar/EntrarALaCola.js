const Partida = require("./Partida")

class EntrarALaCola {
    constructor(presentador) {
        this.presentador = presentador;
    }
    
    ejecutadoPor() {
        this.presentador.mostrarMensajeDeEspera();
        
        return new Partida(this.presentador);
    }

}

module.exports = EntrarALaCola;