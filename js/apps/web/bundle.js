require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class EleccionInvalida {
    juegaContraPiedra(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraPapel(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraEleccionInvalida(partida) {
        partida.pierden();
    }

    juegaContra(eleccion, partida) {
        eleccion.juegaContraEleccionInvalida(partida);
    }
}

module.exports = EleccionInvalida;
},{}],2:[function(require,module,exports){
class Papel {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.gana(this.nombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContra(eleccion, partida){
        eleccion.juegaContraPapel(this.nombre, partida);
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Papel;
},{}],3:[function(require,module,exports){
class Piedra {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion, partida) {
        return eleccion.juegaContraPiedra(this.nombre, partida);
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.empate();
    }

    juegaContraPapel(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.gana(this.nombre);
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Piedra;
},{}],4:[function(require,module,exports){
class Tijera {
    constructor(nombre) {
        this.nombre = nombre;
    }

    juegaContra(eleccion, partida) {
        return eleccion.juegaContraTijera(this.nombre, partida);
    }

    juegaContraPiedra(otroNombre, partida) {
        partida.gana(otroNombre);
    }

    juegaContraPapel(otroNombre, partida) {
        return partida.gana(this.nombre);
    }

    juegaContraTijera(otroNombre, partida) {
        partida.empate();
    }

    juegaContraEleccionInvalida(partida) {
        partida.gana(this.nombre);
    }
}

module.exports = Tijera;
},{}],"Fabrica":[function(require,module,exports){
const Piedra = require("./Piedra");
const Tijera = require("./Tijera");
const Papel = require("./Papel");
const EleccionInvalida = require("./EleccionInvalida");

class FabricaDeElecciones {
    crear(texto, nombre) {

        if(texto === "papel")
            return new Papel(nombre);

        if(texto === "tijera")
            return new Tijera(nombre);
        
        if(texto === "piedra")
            return new Piedra(nombre);
        else
            return new EleccionInvalida();
    }
}

module.exports = FabricaDeElecciones;
},{"./EleccionInvalida":1,"./Papel":2,"./Piedra":3,"./Tijera":4}],"PartidaEnWeb":[function(require,module,exports){
class PartidaEnWeb {
    gana(ganador) {
        console.log("El ganador es " + ganador);
    }

    empate(){
        console.log("empate");
    }

    pierden(){
        console.log("forros");
    }
}

module.exports = PartidaEnWeb;
},{}]},{},[]);
