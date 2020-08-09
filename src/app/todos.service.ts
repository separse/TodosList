import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todos } from './todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'constant-type': 'aplication/json'})
};

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  todoUrl = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  get todo(): Observable<Todos[]> {
    return this.http.get<Todos[]>(this.todoUrl + '?_limit=5');
  }

  toggleChecked(todo: Todos): Observable<any> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todos): Observable<Todos> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.delete<Todos>(this.todoUrl, httpOptions);
  }

  addTodo(todo: Todos): Observable<Todos> {
    return this.http.post<Todos>(this.todoUrl, todo, httpOptions);
  }

}
