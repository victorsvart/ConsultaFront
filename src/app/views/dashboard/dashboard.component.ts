import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ServicesService} from '../../services/services.service';



@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})




export class DashboardComponent implements OnInit {
    pacientes:any;
    public visible = false;
    form: FormGroup;
    constructor(private service:ServicesService, private fb:FormBuilder) { }
    pacienteRG: any;
    consultaData = new Date();
    horarioConsulta: any;
    pos: number;
 
    
    ngOnInit() {
      this.getAllPatients();
      this.form = this.fb.group({
        dataConsulta: [null, Validators.required],
        horarioConsulta: [null, Validators.required],
        isDeleted: [0, Validators.required]
      });
      this.form.controls['dataConsulta'].setValue(this.consultaData);
      this.form.controls['horarioConsulta'].setValue(this.horarioConsulta);
      

      
      

    }
    
    public getAllPatients(){
      this.service.getAllPatients().subscribe(
        (data)=>{
         this.pacientes = data, (error: any) => console.error(error);
         console.log(this.pacientes);
        }

      )
    }
    openModal(i: any, z: any) {
      this.visible = !this.visible;
      this.pos = z;
      this.pacienteRG = this.pacientes[i].rg;
      this.consultaData = this.pacientes[i].consul[z].dataConsulta;
      this.horarioConsulta = this.pacientes[i].consul[z].horarioConsulta;
    
  
    }
    openModal2() {
      this.visible = !this.visible;
  
  
    }
    handleLiveDemoChange(event: any) {
      this.visible = event;
    }
    onSubmit(){
      this.service.updateConsulta(this.pacienteRG, this.pos, this.form.value).subscribe(response => {
        console.log(response);
      });

    }
    deleteConsulta(i: any, z: any){
      this.pacienteRG = this.pacientes[i].rg;
      this.consultaData = this.pacientes[i].consul[z].dataConsulta;
      this.horarioConsulta = this.pacientes[i].consul[z].horarioConsulta;
      this.pos = z;
      this.form.controls['isDeleted'].setValue(1);
      this.form.controls['dataConsulta'].setValue(this.consultaData);
      this.form.controls['horarioConsulta'].setValue(this.horarioConsulta);
      this.service.updateConsulta(this.pacienteRG, this.pos, this.form.value).subscribe(response => {
        console.log(response);
      });

     

    }

 
     

   
   


  
}
