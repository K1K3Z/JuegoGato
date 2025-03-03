import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlayerInfoComponent } from './player-info.component';

@NgModule({
  declarations: [PlayerInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [PlayerInfoComponent] // ✅ Exportamos para que pueda usarse en otros módulos
})
export class PlayerInfoModule { }
