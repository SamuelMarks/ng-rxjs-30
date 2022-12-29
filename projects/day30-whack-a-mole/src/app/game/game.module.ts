import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoleComponent } from './mole/mole.component';
import { WhackAMoleMessagePipe } from './pipes/whack-a-mole-message.pipe';

@NgModule({
  declarations: [
    MoleComponent,
    WhackAMoleMessagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoleComponent
  ]
})
export class GameModule { }