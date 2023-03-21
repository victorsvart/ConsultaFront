import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TesteComponent
  ]
})
export class TesteModule { }
