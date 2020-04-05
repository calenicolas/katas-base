const sinon = require("sinon");
const should = require("should");
const EntrarALaCola = require("../acciones/EntrarALaCola");

describe("un jugador entra a la cola con su nombre", () => {
    it("deberia ver un mensaje de espera", () => {
        const presentador = {
            mostrarMensajeDeEspera: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
                .mostrarMensajeDeEspera
                .calledOnce
        ).be.true();
    });

    it("deberia mostrar que la partida esta arrancando", () => {
        const presentador = {
            mostrarPartidaArrancando: sinon.stub(),
        };
        const entrar = new EntrarALaCola(presentador);

        entrar.ejecutadoPor("pedro");

        should(
            presentador
                .mostrarPartidaArrancando
                .calledOnce
        ).be.true();
    });
});