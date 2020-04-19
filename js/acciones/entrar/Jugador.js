class Jugador {
    constructor(nombre, entrarALaCola) {
        this.nombre = nombre;
        this.entrarALaCola = entrarALaCola;
    }
    
    enEsperaBuscandoRival() {
        this.entrarALaCola.muestraEnEspera();
    }

    arrancaAJugar(rival) {
        this.entrarALaCola.muestraQueArrancaAJugar(rival.nombre);
    }
}

module.exports = Jugador;