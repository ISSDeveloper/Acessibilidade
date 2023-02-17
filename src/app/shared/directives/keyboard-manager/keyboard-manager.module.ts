import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';



@NgModule({
  declarations: [
    KeyboardManagerDirective,
    KeyboardManagerItemDirective
  ],
  exports: [
    KeyboardManagerDirective,
    KeyboardManagerItemDirective
  ],
  imports: [
    CommonModule
  ]
})
export class KeyboardManagerModule { }
