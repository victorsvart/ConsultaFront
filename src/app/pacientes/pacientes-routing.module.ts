import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPacientesComponent } from './addPacientes/add-pacientes.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Consultas`
  },
  children: [
    {
      path: 'AddPacientes',
      component: AddPacientesComponent,
      data:{
        title: $localize`Adicionar Pacientes`
      }

    }
  ]
} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPacientesRoutingModule { }
