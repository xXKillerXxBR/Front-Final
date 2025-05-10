<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Component , OnInit} from '@angular/core';
>>>>>>> Stashed changes
import { Tarefa } from "./tarefa";
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
<<<<<<< Updated upstream
export class AppComponent implements OnInit {
=======
export class AppComponent implements OnInit{
>>>>>>> Stashed changes
  title = 'TODOapp';

  arrayDeTarefas: Tarefa[] = [];
  apiURL : string;

constructor(private http: HttpClient) {
  console.log("chamou")
  this.apiURL = 'https://apitarefasthiagolira242631.onrender.com';
}

ngOnInit() {
  this.READ_tarefas();
}

CREATE_tarefa(descricaoNovaTarefa: string) {
  var novaTarefa = new Tarefa(descricaoNovaTarefa, false);
  this.http.post<Tarefa>(`${this.apiURL}/api/post`, novaTarefa).subscribe(
    resultado => { console.log(resultado); this.READ_tarefas(); });
  }

READ_tarefas() {
  this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`).subscribe(
    resultado => this.arrayDeTarefas=resultado);

}
DELETE_tarefa(tarefaAserRemovida : Tarefa) {
  var indice = this.arrayDeTarefas.indexOf(tarefaAserRemovida);
 var id = this.arrayDeTarefas[indice]._id;
 this.http.delete<Tarefa>(`${this.apiURL}/api/delete/${id}`).subscribe(
 resultado => { console.log(resultado); this.READ_tarefas(); });
 }

 UPDATE_tarefa(tarefaAserModificada: Tarefa) {
  var indice = this.arrayDeTarefas.indexOf(tarefaAserModificada);
  var id = this.arrayDeTarefas[indice]._id;
  this.http.patch<Tarefa>(`${this.apiURL}/api/update/${id}`,
  tarefaAserModificada).subscribe(
  resultado => { console.log(resultado); this.READ_tarefas(); });
 }


}
