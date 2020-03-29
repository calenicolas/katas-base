# Kata: Piedra Papel o Tijeras (o lo que quieras)

### Proposito: pasar la cuarentena del covid-19

### Focos tecnicos: TDD, OOP, OOD, Layered-arquitecture example

<b>Iteracion 1</b>: Implementar el juego como se conoce actualmente en una interfaz de consola (sin empate).

Flujo del juego:

Ingrese nombre del jugador uno:

Pato

Ingrese nombre del jugador dos:

Dani

jugador uno

piedra, papel o tijeras?:

piedra

jugador dos

piedra, papel o tijeras?:

papel

El ganador es Dani

<b>Iteracion 2</b>: Anadir el empate.

Flujo idem, cambia la salida a 

empate!

<b>Iteracion 3</b>: Implementar en un front-web, y una app. Implementar el juego entre rivales remotos (solo 1vs1, bien simple)

<b>Iteracion 4</b>: Sumar un par de elecciones mas.

<b>Iteracion 5</b>: Los jugadores apuestan. Para jugar, existiran 2 tipos de salas:

- Las salas de apostadores. -> Internamente se dividen por precio [0,25, 0,5, 1, 2, 5, 10, 50, 100]
- Las salas de no apostadores. -> Se dividen por pais, y cada una tiene un ranking por pais.

Los jugadores al querer jugar entran en la "lista de espera". Cuando en esa lista existen 2 jugadores luego de un contador

empieza el duelo (al estilo heart-stone).

<b>Iteracion 6</b>: Hay escudos que te dan una chance extra. Se elige antes de jugar si se utiliza o no, y el rival es coinciente de esto. Si usa escudo, pierde el 12% si gana el duelo. 
