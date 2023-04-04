import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ServicesService} from '../../services/services.service';
import { DatePipe } from '@angular/common';
import { Pacientes } from 'src/app/interfaces/pacientes';
import * as XLSX from 'xlsx';
import { DateAdapter } from '@angular/material/core';
import { Location } from '@angular/common';




@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  providers: [DatePipe]
})




export class DashboardComponent implements OnInit {
    pacientes:any;
    consultas: any;
    public visible = false;
    public popvisible = false;
    form: FormGroup;
    constructor(private service:ServicesService, private fb:FormBuilder, private datepipe: DatePipe, private dateadapter: DateAdapter<Date>, private location: Location){
      this.dateadapter.setLocale('pt-BR');
     }
    pacienteCPF: any;
    pacienteProcedimento: any;
    consultaData = new Date();
    horarioConsulta: any;
    pos: number;
    procedimentos: string[] = ["Limpeza", "Restauração", "Exame"];
    selectedProcedimento: string = '';
    date: any;
    consultaGet: any;
    horarioGet: any;
    procedimentoGet: any;
    isDeletedGet: any;
    formattedDate: any;
    temp: any;
    dateToString:any;
    wasPacientUpdated: number = 1;
     
  



    onOptionChange(value:string){
     
      this.selectedProcedimento = value;
      console.log(this.selectedProcedimento);
      
    }
    
    ngOnInit() {
      this.getAllPatients();
      
      this.form = this.fb.group({
        dataConsulta: [null, Validators.required],
        horarioConsulta: [null, Validators.required],
        procedimento: [null, Validators.required],
        isDeleted: [0, Validators.required]
      });
  
      


    }
    

   
    
    public getAllPatients(){
      this.service.getAllPatients().subscribe(
        (data)=>{
         this.pacientes = data, (error: any) => console.error(error);
         console.log(this.pacientes);
         this.pacientes.forEach((paciente) =>{
          paciente.consul.forEach((consulta) =>{
            consulta.dataConsulta = this.datepipe.transform(consulta.dataConsulta, 'dd/MM/yyyy');
          })

         })
        }

      )
    }
 
    openModal(i: any, z: any) {
      
      this.visible = !this.visible;
      this.pos = z;
      this.pacienteCPF = this.pacientes[i].cpf;
      this.consultaData = this.pacientes[i].consul[z].dataConsulta;
      
      this.horarioConsulta = this.pacientes[i].consul[z].horarioConsulta;
      this.selectedProcedimento = this.pacientes[i].consul[z].procedimento;
    
    
  
    }
    openModal2() {
      this.visible = !this.visible;
      
  
  
    }
    handleLiveDemoChange(event: any) {
      this.visible = event;
    }
    onSubmit(){
      this.service.updateConsulta(this.pacienteCPF, this.pos, this.form.value).subscribe();
      this.openModal2();
      

    }
    deleteConsulta(i: any, z: any){
      this.pacienteCPF = this.pacientes[i].cpf;
      this.consultaData = this.pacientes[i].consul[z].dataConsulta;
      this.horarioConsulta = this.pacientes[i].consul[z].horarioConsulta;
      this.pacienteProcedimento = this.pacientes[i].consul[z].procedimento;
      this.pos = z;

      this.dateToString = this.consultaData.toString();
      this.temp = this.dateToString.replace(/\//g, '-');

      this.formattedDate = new Date(this.temp);
      


      this.form.controls['isDeleted'].setValue(1);
      this.form.controls['dataConsulta'].setValue(this.formattedDate);
      this.form.controls['horarioConsulta'].setValue(this.formattedDate);
      this.form.controls['procedimento'].setValue(this.pacienteProcedimento);
      this.service.updateConsulta(this.pacienteCPF, this.pos, this.form.value).subscribe();
      location.reload();
      
      
      

    }

    public convertExcel(){
      const data = this.pacientes.map(paciente => {
      const consultas = paciente.consul.map(consulta => consulta.dataConsulta);
        return {
          Nome: paciente.firstName + ' ' + paciente.lastName,
          CPF: paciente.cpf,
          Endereco: paciente.endereco,
          Idade: paciente.age,
          Nascimento: paciente.nascimento,
          Telefone: paciente.telefone,
          Consultas: consultas.join(', ')
          //'Last Consultation': this.datepipe.transform(lastConsulta, 'dd-MM-yyyy')
        };
      });
    
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'patients');
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {type: 'application/octet-stream'});
      const url: string = window.URL.createObjectURL(data);
      const link: any = document.createElement('a');
      link.href = url;
      link.download = fileName + '.xlsx';
      link.click();
    }

     

   
   


  
}
