import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Pacientes } from '../interfaces/pacientes'
import {PacienteRequest } from '../interfaces/request/paciente-request'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  
   getAllPatients() {
    return this.http.get<Pacientes>('http://localhost:8080/api/consulta/getAllPacientes');
  }

  addPacientes(paciente: PacienteRequest){
    console.log(paciente);
    return this.http.post<PacienteRequest>('http://localhost:8080/api/consulta/addPaciente', paciente);
  }
}
