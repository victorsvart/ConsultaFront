import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-consultas',
  templateUrl: './add-consultas.component.html',
  styleUrls: ['./add-consultas.component.scss']
})
export class AddConsultasComponent implements OnInit{
  constructor(private service: ServicesService, private fb:FormBuilder, private adapter:DateAdapter<Date>, private route: Router) {
    this.adapter.setLocale('pt-BR');
   }

  public visible = false;
  form: FormGroup;
  pacienteCPF: any;
  procedimentos: string[] = ["Limpeza", "Restauração", "Exame"];
  selectedProcedimento: string = '';

  onOptionChange(value:string){
    // you will get value here
    this.selectedProcedimento = value;
    console.log(this.selectedProcedimento)
   }

  ngOnInit() {
    this.service.getAllPatients().subscribe(data => {
      //console.log(data);
      this.pacientes = data;
    });
    this.form = this.fb.group({
      dataConsulta: [null, Validators.required],
      horarioConsulta: [null, Validators.required],
      procedimento: [null, Validators.required],
      isDeleted: [0, Validators.required],
    });
    
  }

  openModal(i: any) {
    this.visible = !this.visible;
    this.pacienteCPF = this.pacientes[i].cpf;
    console.log(this.pacienteCPF);

  }
  openModal2() {
    this.visible = !this.visible;


  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }


  pacientes: any;

  

  onSubmit() {
    this.service.addConsulta(this.pacienteCPF, this.form.value).subscribe();
    this.openModal2();
    this.route.navigate(['/pacientes']);
  }
}
