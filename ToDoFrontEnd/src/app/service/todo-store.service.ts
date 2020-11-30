import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  private _todoItems: Array<ToDoItem>;
  constructor() {
    this._todoItems = new Array<ToDoItem>();
    this._todoItems.push(new ToDoItem(0, "Task1", "Task1 description", false));
    this._todoItems.push(new ToDoItem(1, "Task2", "Task2 description", false));
    this._todoItems.push(new ToDoItem(2, "Task3", "Task3 description", false));
    this._todoItems.push(new ToDoItem(3, "Task4", "Task4 description", false));
    this._todoItems.push(new ToDoItem(4, "Task5", "Task5 description", false));
  }

  public GetAll(): Array<ToDoItem> {
    return this._todoItems;
  }

  public FindById(id: number): ToDoItem {
    let foundTodoItem = this._todoItems.find(todoItem => todoItem.id === id);
    if (foundTodoItem === undefined) {
      foundTodoItem = new ToDoItem(-1, "", "", false);
    }
    return foundTodoItem;
  }

  public Create(newTodoItem: ToDoItem): void{
    this._todoItems.push(newTodoItem);
  }
}
