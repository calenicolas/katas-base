const should = require("should");
const sinon = require("sinon");

const Tijera = require("../elecciones/Tijera");
const Piedra = require("../elecciones/Piedra");
const Papel = require("../elecciones/Papel");
const EleccionInvalida = require("../elecciones/EleccionInvalida");

describe("En las elecciones", () => {
  it("piedra le gana a tijera", () => {
    // Given
    const tijera = new Tijera("gaston");
    const piedra = new Piedra("patricio");
    const partida = {
      gana: sinon.stub()
    };

    // When
    piedra.juegaContra(tijera, partida);
    tijera.juegaContra(piedra, partida);

    // Then
    should(
      partida.gana
        .withArgs("patricio")
        .calledTwice
    ).be.true();
  });

  it("piedra pierde contra papel", () => {
    // Given
    const papel = new Papel("marian");
    const piedra = new Piedra("gallo");
    const partida = {
      gana: sinon.stub()
    };

    // When
    piedra.juegaContra(papel, partida);
    papel.juegaContra(piedra, partida);

    // Then
    should(
      partida.gana
        .withArgs("marian")
        .calledTwice
    ).be.true();
  });

  it("papel pierde contra tijera", () => {
    // Given
    const papel = new Papel("fede bravo");
    const tijera = new Tijera("gigio");
    const partida = {
      gana: sinon.stub()
    };

    // When
    papel.juegaContra(tijera, partida);
    tijera.juegaContra(papel, partida);

    // Then
    should(
      partida.gana
        .withArgs("gigio")
        .calledTwice
    ).be.true();
  });

  it("la tijera empata con la tijera", () => {
    // Given
    const tijeraUno = new Tijera("pato");
    const tijera = new Tijera("feijo");
    const partida = {
      empate: sinon.stub()
    };

    // When
    tijera.juegaContra(tijeraUno, partida);

    // Then
    should(partida.empate.callCount).be.eql(1);
  });

  it("la piedra empata con la piedra", () => {
    // Given
    const piedra = new Piedra("pato");
    const piedraDos = new Piedra("feijo");
    const partida = {
      empate: sinon.stub()
    };

    // When
    piedra.juegaContra(piedraDos, partida);

    // Then
    should(partida.empate.callCount).be.eql(1);
  });

  it("eleccion invalida pierde con la piedra", () => {
    // Given
    const piedra = new Piedra("pato");
    const eleccionInvalida = new EleccionInvalida();
    const partida = {
      gana: sinon.stub()
    };

    // When
    piedra.juegaContra(eleccionInvalida, partida);
    eleccionInvalida.juegaContra(piedra, partida);

    // Then
    should(
      partida.gana
        .withArgs("pato")
        .calledTwice
    ).be.true();
  });


  it("eleccion invalida pierde con la tijera", () => {
    // Given
    const tijera = new Tijera("pato");
    const eleccionInvalida = new EleccionInvalida();
    const partida = {
      gana: sinon.stub()
    };

    // When
    tijera.juegaContra(eleccionInvalida, partida);
    eleccionInvalida.juegaContra(tijera, partida);

    // Then
    should(
      partida.gana
        .withArgs("pato")
        .calledTwice
    ).be.true();
  });

  it("eleccion invalida pierde con el papel", () => {
    // Given
    const papel = new Papel("pato");
    const eleccionInvalida = new EleccionInvalida();
    const partida = {
      gana: sinon.stub()
    };

    // When
    papel.juegaContra(eleccionInvalida, partida);
    eleccionInvalida.juegaContra(papel, partida);

    // Then
    should(
      partida.gana
        .withArgs("pato")
        .calledTwice
    ).be.true();
  });

  it("eleccion invalida contra otra invalida pierden los dos", () => {
    // Given
    const eleccionInvalida = new EleccionInvalida();
    const eleccionInvalidaDos = new EleccionInvalida();
    const partida = {
      pierden: sinon.stub()
    };

    // When
    eleccionInvalida.juegaContra(eleccionInvalidaDos, partida);

    // Then
    should(partida.pierden.callCount).be.eql(1);
  });
});