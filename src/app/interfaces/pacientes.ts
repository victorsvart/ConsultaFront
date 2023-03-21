import { consultas } from "./consultas";
import { procedimentos } from "./procedimentos";

export interface Pacientes {
    id: number;
    firstName: string;
    lastName: string;
    rg: string;
    idade: number;
    telefone: string;
    endereco: string;
    nascimento: Date;
    laudo: string;
    profissao: string;
    procedimentosRealizados: procedimentos[];
    consultas: consultas[];
      
}
