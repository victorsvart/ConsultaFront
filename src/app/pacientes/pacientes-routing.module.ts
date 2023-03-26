import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultasComponent } from './add-consultas/add-consultas.component';
import { AddPacientesComponent } from './addPacientes/add-pacientes.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Pacientes`
  },
  children: [
    {
      path: 'AddPacientes',
      component: AddPacientesComponent,
      data:{
        title: $localize`Adicionar Pacientes`
      }
    },
    {
      path : 'AddConsultas',
      component: AddConsultasComponent,
      data:{
        title: $localize`Adicionar Consultas`
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
