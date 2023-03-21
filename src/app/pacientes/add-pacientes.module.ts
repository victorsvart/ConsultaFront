import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPacientesRoutingModule } from './pacientes-routing.module';
import { InputGroupComponent } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {NgxMaskDirective} from 'ngx-mask';
import {NgxMaskPipe} from 'ngx-mask';
import { ButtonModule } from '@coreui/angular';


import {
 
  FormModule,
  
} from '@coreui/angular';
import { AddPacientesComponent } from './addPacientes/add-pacientes.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AddPacientesComponent,

  ],
  imports: [
    CommonModule,
    AddPacientesRoutingModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ButtonModule,
  ],
  
})
export class AddPacientesModule { }
