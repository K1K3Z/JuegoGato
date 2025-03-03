import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
  standalone: false
})
export class PlayerInfoComponent {
reiniciarJuego() {
throw new Error('Method not implemented.');
}
  jugador1: string = '';
  jugador2: string = '';
  
  @Output() iniciarJuego = new EventEmitter<{ jugador1: string, jugador2: string }>();

  seleccionarSimbolo(simbolo: string) {
    console.log(`Jugador seleccionó: ${simbolo}`);
  }

  reiniciar() {
    this.jugador1 = '';
    this.jugador2 = '';
    console.log('Juego reiniciado');
  }

  jugar() {
    if (this.jugador1.trim() && this.jugador2.trim()) {
      this.iniciarJuego.emit({ jugador1: this.jugador1, jugador2: this.jugador2 });
    } else {
      console.log('Ingrese ambos nombres para jugar');
    }
  }
}
