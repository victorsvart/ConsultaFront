import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { DateAdapter } from '@angular/material/core';
import {NgxMaskDirective} from 'ngx-mask';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pacientes',
  templateUrl: './add-pacientes.component.html',
  styleUrls: ['./add-pacientes.component.scss']
})
export class AddPacientesComponent implements OnInit{
  
  form: FormGroup;
  date = new Date();

  constructor(private fb: FormBuilder, private http: HttpClient, private service:ServicesService, private adapter:DateAdapter<Date>, private route: Router) {
    this.adapter.setLocale('pt-BR');
   }

   ngOnInit(): void {
       this.form = this.fb.group({
          firstName: [null, Validators.required],
          lastName: [null, Validators.required],
          endereco: [null, Validators.required],
          age: [null, Validators.required],
          nascimento: [null, Validators.required],
          telefone: [null, Validators.required],
          cpf: [null, Validators.required],
          procedimentosRealizados: [[], Validators.required],
          consul: [[], Validators.required],
          laudo: [null, Validators.required],
          profissao: [null, Validators.required],
       

          
       });
      //  this.form.controls['nascimento'].setValue("2020-01-01");
      //  this.form.controls['laudo'].setValue("teste");
      //  this.form.controls['profissao'].setValue("teste");

   }

   onSubmit() {
    this.service.addPacientes(this.form.value).subscribe();
    this.route.navigate(['/pacientes']);

   }

    

  
  
}
