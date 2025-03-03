import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  standalone: false
})
export class GameBoardComponent {
  turno: string = 'X';
  jugando: boolean = true;
  movimientos: number = 0;
  mensaje: string = 'INFO: Comienza X';

  // Nuevas variables para almacenar los nombres de los jugadores
  jugador1: string = 'Jugador 1';
  jugador2: string = 'Jugador 2';

  tablero: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  // Método para recibir los nombres de los jugadores desde el componente PlayerInfoComponent
  setJugadores(event: { jugador1: string, jugador2: string }) {
    this.jugador1 = event.jugador1;
    this.jugador2 = event.jugador2;
    console.log('Jugadores:', this.jugador1, this.jugador2);
  }

  jugar(fila: number, columna: number) {
    if (this.jugando && this.tablero[fila][columna] === '') {
      this.tablero[fila][columna] = this.turno;
      this.movimientos++;
      this.validar();

      if (this.movimientos === 9 && this.jugando) {
        this.jugando = false;
        this.mensaje = 'EMPATE!';
      } else if (this.jugando) {
        this.turno = this.turno === 'X' ? 'O' : 'X';
        this.mensaje = `Es el turno de ${this.turno}`;
      }
    }
  }

  validarLinea(a: number[], b: number[], c: number[]) {
    if (
      this.tablero[a[0]][a[1]] &&
      this.tablero[a[0]][a[1]] === this.tablero[b[0]][b[1]] &&
      this.tablero[a[0]][a[1]] === this.tablero[c[0]][c[1]]
    ) {
      this.mensaje = `¡Ganaste ${
        this.tablero[a[0]][a[1]] === 'X' ? this.jugador1 : this.jugador2
      }!`;
      this.jugando = false;

      // Marcar casillas ganadoras
      this.marcarGanador(a, b, c);
    }
  }

  validar() {
    const combinacionesGanadoras = [
      [[0, 0], [0, 1], [0, 2]], // Filas
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // Columnas
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // Diagonal principal
      [[0, 2], [1, 1], [2, 0]]  // Diagonal secundaria
    ];

    for (const linea of combinacionesGanadoras) {
      this.validarLinea(linea[0], linea[1], linea[2]);
    }
  }

  marcarGanador(...posiciones: number[][]) {
    posiciones.forEach(([x, y]) => {
      document.querySelectorAll('.casilla')[x * 3 + y].classList.add('ganador');
    });
  }

  reiniciarJuego() {
    this.tablero = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.turno = 'X';
    this.jugando = true;
    this.movimientos = 0;
    this.mensaje = 'INFO: Comienza X';

    // Remover la clase "ganador" de todas las casillas
    document.querySelectorAll('.casilla').forEach((casilla) => {
      casilla.classList.remove('ganador');
    });
  }
}
