import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() newTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  addTodo() {
    const todo = {
      title: this.title,
      completed: false
    };
    this.newTodo.emit(todo);
  }

}
