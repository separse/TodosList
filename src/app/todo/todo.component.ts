import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todos;
  @Output() deleteTodo: EventEmitter<Todos> = new EventEmitter();
  checked = false;

  constructor(private todosService: TodosService) { }

  toggleCheck() {
    this.checked = !this.checked;
    this.todosService.toggleChecked(this.todo);
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
