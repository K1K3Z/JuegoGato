import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

// 🔹 Importamos el módulo del tablero
import { GameBoardModule } from '../game-board/game-board.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GameBoardModule // 🔹 Importamos en lugar de declarar
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
