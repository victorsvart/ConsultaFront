import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-add-consultas',
  templateUrl: './add-consultas.component.html',
  styleUrls: ['./add-consultas.component.scss']
})
export class AddConsultasComponent implements OnInit{
  constructor(private service: ServicesService, private fb:FormBuilder, private adapter:DateAdapter<Date>) {
    this.adapter.setLocale('pt-BR');
   }

  public visible = false;
  form: FormGroup;
  pacienteRG: any;

  ngOnInit() {
    this.service.getAllPatients().subscribe(data => {
      this.pacientes = data;
    });
    this.form = this.fb.group({
      dataConsulta: [null, Validators.required],
      horarioConsulta: [null, Validators.required],
      isDeleted: [0, Validators.required],
    });
    
  }

  openModal(i: any) {
    this.visible = !this.visible;
    this.pacienteRG = this.pacientes[i].rg;

  }
  openModal2() {
    this.visible = !this.visible;


  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }


  pacientes: any;

  

  onSubmit() {
    this.service.addConsulta(this.pacienteRG, this.form.value).subscribe(response => {
      console.log(response);
    });
  }
}