const should = require("should");
const sinon = require("sinon");

const Tijera = require("../elecciones/Tijera");
const Piedra = require("../elecciones/Piedra");
const Papel = require("../elecciones/Papel");

describe("example", () => {
  it("piedra le gana a tijera", () => {
    // Given
    const tijera = new Tijera("gaston");
    const piedra = new Piedra("patricio");

    // When
    const ganador = piedra.juegaContra(tijera);

    // Then
    should(ganador).be.eql("patricio");
  });

  it("piedra pierde contra papel", () => {
    // Given
    const papel = new Papel("marian");
    const piedra = new Piedra("gallo");

    // When
    const ganador = piedra.juegaContra(papel);

    // Then
    should(ganador).be.eql("marian");
  });

  it("papel pierde contra tijera", () => {
    // Given
    const papel = new Papel("fede bravo");
    const tijera = new Tijera("gigio");

    // When
    const ganador = papel.juegaContra(tijera);

    // Then
    should(ganador).be.eql("gigio");
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

    // When
    const empate = piedra.juegaContra(piedraDos);

    // Then
    should(empate).be.eql("empate");
  });
});
