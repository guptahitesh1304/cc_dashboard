import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinuteSecondsPipe } from './minuteSecondsPipe';



@NgModule({
  declarations: [MinuteSecondsPipe],
  imports: [
    CommonModule
  ],
  exports:[MinuteSecondsPipe]
})
export class MainPipeModule { }
