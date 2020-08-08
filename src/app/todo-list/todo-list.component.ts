import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.todo.subscribe(todo => this.todos = todo);
  }

  onDelete(e: Todos) {
    this.todos = this.todos.filter(t => t.id !== e.id);
    }
  }
