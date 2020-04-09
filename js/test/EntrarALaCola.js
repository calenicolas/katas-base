const sinon = require("sinon");
const should = require("should");
const EntrarALaCola = require("../acciones/entrar/EntrarALaCola");

describe("un jugador entra a la cola con su nombre", () => {
    it("deberia ver un mensaje de espera", () => {
        const presentador = {
            mostrarMensajeDeEspera: sinon.stub(),
            mostrarPartidaArrancando: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
            .mostrarMensajeDeEspera
            .calledOnce
        ).be.true();
    });


    it("deberia mostrar que la partida esta arrancando cuando se conecta el otro jugador", () => {
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        const partida = entrar.ejecutadoPor("pedro");
        
        partida.seConecto("jorge");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledOnce
        ).be.true();
    });

    it("no deberia decirme que la partida arranca si no se conecta nadie", () => {
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledOnce
        ).be.false();
    });

    it("cuando se conecta alguien deberia decirme contra quien voy a jugar", () => {
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        const partida = entrar.ejecutadoPor("pedro");
        partida.seConecto("jorge");

        should(
            presentador
            .mostrarPartidaArrancando
            .calledWith('jorge')
        ).be.true();
    });

    //proxima: hacer andar dos consolas jugando en paralelo
});