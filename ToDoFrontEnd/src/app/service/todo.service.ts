import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoItems: Array<ToDoItem> = new Array<ToDoItem>();

  private updatingTodoItemId: number;
  public updatingToDoItem: ToDoItem;

  constructor() {
    this.todoItems.push(new ToDoItem(1, "Task1", "Task1 description", false));
    this.todoItems.push(new ToDoItem(2, "Task2", "Task2 description", false));
    this.todoItems.push(new ToDoItem(3, "Task3", "Task3 description", false));
    this.todoItems.push(new ToDoItem(4, "Task4", "Task4 description", false));
    this.todoItems.push(new ToDoItem(5, "Task5", "Task5 description", false));
    this.updatingTodoItemId = 0;
    this.updatingToDoItem = new ToDoItem(0, "", "", false);
  }

  public get ToDoItems(): Array<ToDoItem> {
    return this.todoItems;
  }

  public SetUpdatingTodoItemId(id: number): void {
    this.updatingTodoItemId = id;
    const foundTodoItem = this.ToDoItems.find(todoItem => todoItem.id === this.updatingTodoItemId);
    if (foundTodoItem !== undefined) {
      this.updatingToDoItem = Object.assign({}, foundTodoItem);
    }
  }

  public Create(todoItem: ToDoItem) {
    this.todoItems.push(todoItem);
  }

  public UpdateTodoItem(): void {
    const foundTodoItem = this.todoItems.find(item => item.id === this.updatingToDoItem.id);
    if (foundTodoItem) {
      foundTodoItem.description = this.updatingToDoItem.description;
      foundTodoItem.isDone = this.updatingToDoItem.isDone;
      foundTodoItem.title = this.updatingToDoItem.title;
    }
  }
}
