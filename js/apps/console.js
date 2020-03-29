const readline = require('readline');
const FabricaDeElecciones = require("../elecciones/Fabrica");
const PartidaEnConsola = require("./PartidaEnConsola");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fabricaDeElecciones = new FabricaDeElecciones();

function makeQuestion(texto) {
    return new Promise((resolve) => {
        rl.question(texto, resolve);
    });
}

makeQuestion('Jugador uno: ')
    .then((jugadorUno) => {
        return makeQuestion('Jugador dos: ')
            .then((jugadorDos) => [jugadorUno, jugadorDos]);
    })
    .then(([jugadorUno, jugadorDos]) => {
        return makeQuestion('Jugador uno: [piedra, papel, tijera]')
            .then((eleccionUno) => [jugadorUno, jugadorDos, eleccionUno]);
    })
    .then(([jugadorUno, jugadorDos, eleccionUno]) => {
        return makeQuestion('Jugador dos: [piedra, papel, tijera]')
            .then((eleccionDos) => [jugadorUno, jugadorDos, eleccionUno, eleccionDos]);
    })
    .then(([jugadorUno, jugadorDos, eleccionUno, eleccionDos]) => {
        const uno = fabricaDeElecciones.crear(eleccionUno, jugadorUno);
        const dos = fabricaDeElecciones.crear(eleccionDos, jugadorDos);

        uno.juegaContra(dos, new PartidaEnConsola());
    })
    .finally(() => rl.close());