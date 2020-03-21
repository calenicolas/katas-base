const should = require("should");
const Tijera = require("../elecciones/Tijera");
const Piedra = require("../elecciones/Piedra");
const Papel = require("../elecciones/Papel");

describe("example", () => {

  it("should be an example", () => {
    should(1).be.eql(1);
  });

  it.only("piedra le gana a tijera", () => {
    // Given
    const tijera = new Tijera();
    const piedra = new Piedra();

    // When
    const ganador = piedra.juegaContra(tijera);

    // Then
    should(ganador).be.eql(piedra);
  });

  it.only("piedra pierde contra papel", () => {
    // Given
    const papel = new Papel();
    const piedra = new Piedra();

    // When
    const ganador = piedra.juegaContra(papel);

    // Then
    should(ganador).be.eql(papel);
  });

  it.only("papel pierde contra tijera", () => {
    // Given
    const papel = new Papel();
    const tijera = new Tijera();

    // When
    const ganador = papel.juegaContra(tijera);

    // Then
    should(ganador).be.eql(tijera);
  });

  it("dos jugadores pueden jugar", () => {
    // Given
    const playerOne = new Player();
    const playerTwo = new Player();

    // When
    const play = playerOne.playsAgainst(playerTwo);

    // Then
    should(play).be.eql(true);
  });
});
