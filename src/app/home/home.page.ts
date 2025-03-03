import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  jugador1: string = 'Jugador 1';
  jugador2: string = 'Jugador 2';

  setJugadores(event: { jugador1: string, jugador2: string }) {
    this.jugador1 = event.jugador1;
    this.jugador2 = event.jugador2;
    console.log('Jugadores:', this.jugador1, this.jugador2);}}