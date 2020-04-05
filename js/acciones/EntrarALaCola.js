class EntrarALaCola {
    constructor(presentador) {
        this.presentador = presentador;
    }
    
    ejecutadoPor() {
        this.presentador.mostrarMensajeDeEspera();
    }
}

module.exports = EntrarALaCola;