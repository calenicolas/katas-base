const should = require("should");
const FabricaDeElecciones = require("../elecciones/Fabrica");
const Piedra = require("../elecciones/Piedra");
const Tijera = require("../elecciones/Tijera");
const Papel = require("../elecciones/Papel");
const EleccionInvalida = require("../elecciones/EleccionInvalida");

describe("La fabrica de elecciones", () => {
    it("deberia devolvernos una piedra si le paso un texto=piedra", () => {
        const texto = "piedra";
        const nombre = "Jorge";
        const fabrica = new FabricaDeElecciones();

        const piedra = fabrica.crear(texto, nombre);

        should(piedra).be.eql(new Piedra(nombre));
    });

    it("deberia devolvernos una piedra si le paso un texto=tijera", () => {
        const texto = "tijera";
        const nombre = "Jorge";
        const fabrica = new FabricaDeElecciones();

        const tijera = fabrica.crear(texto, nombre);

        should(tijera).be.eql(new Tijera(nombre));
    });

    it("deberia devolvernos una papel si le paso un texto=papel", () => {
        const texto = "papel";
        const nombre = "Jorge";
        const fabrica = new FabricaDeElecciones();

        const tijera = fabrica.crear(texto, nombre);

        should(tijera).be.eql(new Papel(nombre));
    });

    it("deberia devolvernos una papel si le paso un texto=papel", () => {
        const texto = "papel";
        const nombre = "Jorge";
        const fabrica = new FabricaDeElecciones();

        const tijera = fabrica.crear(texto, nombre);

        should(tijera).be.eql(new Papel(nombre));
    });

    it("deberia devolvernos una eleccion invalida si le paso falopa", () => {
        const texto = "falopa";
        const nombre = "Jorge";
        const fabrica = new FabricaDeElecciones();

        const tijera = fabrica.crear(texto, nombre);

        should(tijera).be.eql(new EleccionInvalida());
    });
});