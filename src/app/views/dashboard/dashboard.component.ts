import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';



@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})




export class DashboardComponent implements OnInit {
    pacientes:any;
    constructor(private service:ServicesService) { }

    ngOnInit() {
      this.getAllPatients();
    }

    public getAllPatients(){
      this.service.getAllPatients().subscribe(
        (data)=>{
         this.pacientes = data, (error: any) => console.error(error);
         console.log(this.pacientes);
        }
      )
    }
   


  
}
