import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoItems: Array<ToDoItem> = new Array<ToDoItem>();

  constructor() {
    this.todoItems.push(new ToDoItem(1, "Task1", "Task1 description", false));
    this.todoItems.push(new ToDoItem(1, "Task2", "Task2 description", false));
    this.todoItems.push(new ToDoItem(1, "Task3", "Task3 description", false));
    this.todoItems.push(new ToDoItem(1, "Task4", "Task4 description", false));
    this.todoItems.push(new ToDoItem(1, "Task5", "Task5 description", false));
  }

  public get ToDoItems(): Array<ToDoItem> {
    return this.todoItems;
  }
}
