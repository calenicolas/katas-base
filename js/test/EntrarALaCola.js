const sinon = require("sinon");
const should = require("should");
const EntrarALaCola = require("../acciones/entrar/EntrarALaCola");
const Partida = require("../acciones/entrar/Partida");

describe("un jugador entra a la cola con su nombre", () => {
    it("deberia ver un mensaje de espera", () => {
        const presentador = {
            mostrarMensajeDeEspera: sinon.stub(),
            mostrarPartidaArrancando: sinon.stub(),
        };
        const proveedorDePartidas = {
            entreguePartida: () => new Partida()
        };
        const entrar = new EntrarALaCola(presentador, proveedorDePartidas);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
            .mostrarMensajeDeEspera
            .calledOnce
        ).be.true();
    });

    it("deberia mostrar que la partida esta arrancando cuando se conecta el otro jugador", () => {
        const partida = new Partida();
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const proveedorDePartidas = {
            entreguePartida: () => partida
        };
        const entrar = new EntrarALaCola(presentador, proveedorDePartidas);

        entrar.ejecutadoPor("pedro");
        entrar.ejecutadoPor("jorge");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledTwice
        ).be.true();
    });

    it("no deberia decirme que la partida arranca si no se conecta nadie", () => {
        const partida = new Partida();
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const proveedorDePartidas = {
            entreguePartida: () => partida
        };
        const entrar = new EntrarALaCola(presentador, proveedorDePartidas);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledOnce
        ).be.false();
    });

    it("cuando se conecta alguien deberia decirme contra quien voy a jugar", () => {
        const partida = new Partida();
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const proveedorDePartidas = {
            entreguePartida: () => partida
        };
        const entrar = new EntrarALaCola(presentador, proveedorDePartidas);

        entrar.ejecutadoPor("pedro");
        entrar.ejecutadoPor("jorge");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledWith('jorge')
        ).be.true();
    });

    it("cuando se conecta alguien deberia decirle contra quien va a jugar", () => {
        const partida = new Partida();
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const proveedorDePartidas = {
            entreguePartida: () => partida
        };
        const entrar = new EntrarALaCola(presentador, proveedorDePartidas);

        entrar.ejecutadoPor("pedro");
        entrar.ejecutadoPor("jorge");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledWith('pedro')
        ).be.true();
    });

    //proxima: hacer andar dos consolas jugando en paralelo
});