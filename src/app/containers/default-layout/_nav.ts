import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  
  },
  {
    name: 'Consultas',
    url: '/consultas',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Registrar Paciente',
        url: '/consultas/AddPacientes',
      },
      {
        name:'Registrar Consulta',
        url: '/consultas/AddConsultas',
      }
    ]
   
  },
  {
    name: 'Calendario',
    url: '/calendar',
    iconComponent: { name: 'cil-calendar' }
  }
 
];
