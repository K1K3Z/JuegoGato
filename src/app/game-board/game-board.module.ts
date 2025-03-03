import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ Importa IonicModule
import { GameBoardComponent } from './game-board.component';
import { PlayerInfoModule } from "../player-info/player-info.module";


@NgModule({
  declarations: [GameBoardComponent],
  imports: [
    CommonModule,
    IonicModule // ✅ Asegúrate de importar esto
    ,
    PlayerInfoModule
],
  exports: [GameBoardComponent]
})
export class GameBoardModule { }
