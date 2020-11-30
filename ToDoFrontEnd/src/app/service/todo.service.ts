import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private updatingTodoItemId: number;
  public updatingToDoItem: ToDoItem;
  public selectedTodoItem: ToDoItem;
  private currentId: number = 0;

  private _todoItems: Array<ToDoItem>;

  constructor(private todoStore: TodoStoreService) {
    this._todoItems = todoStore.GetAll();
    this.updatingTodoItemId = -1;
    this.updatingToDoItem = new ToDoItem(-1, "", "", false);
    this.selectedTodoItem = new ToDoItem(-1, "", "", false);
    this.currentId = this.todoItems.length;
  }

  public get todoItems(): Array<ToDoItem> {
    return this._todoItems;
  }

  public SetUpdatingTodoItemId(id: number): void {
    this.updatingTodoItemId = id;
    const foundTodoItem = this._todoItems.find(todoItem => todoItem.id === this.updatingTodoItemId);
    if (foundTodoItem !== undefined) {
      this.updatingToDoItem = Object.assign({}, foundTodoItem);
    }
  }

  public Create(todoItem: ToDoItem) {
    todoItem.id = this.currentId;
    var newTodoItem = Object.assign({}, todoItem);
    this._todoItems.push(newTodoItem);
    this.currentId++;
  }

  public UpdateTodoItem(updateTodoItems: ToDoItem): void {
    const foundTodoItem = this._todoItems.find(item => item.id === updateTodoItems.id);
    if (foundTodoItem) {
      foundTodoItem.description = this.updatingToDoItem.description;
      foundTodoItem.isDone = this.updatingToDoItem.isDone;
      foundTodoItem.title = this.updatingToDoItem.title;
    }
  }

  public DeleteTodoItem(id: number):void{    
    const index = this._todoItems.findIndex(item => item.id === id);
    if (index >= 0) {
      this._todoItems.splice(index, 1);
    }
  }
}
