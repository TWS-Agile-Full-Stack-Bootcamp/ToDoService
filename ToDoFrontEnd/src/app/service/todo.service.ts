import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoHttpclientService } from './todo-httpclient.service';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public updatingToDoItem: ToDoItem;
  public selectedTodoItem: ToDoItem;
  private currentId: number = 0;

  private _todoItems: Array<ToDoItem>;

  constructor(private todoStore: TodoStoreService,
    private todoHttpClient: TodoHttpclientService) {
    this._todoItems = new Array<ToDoItem>();
    this.updatingToDoItem = new ToDoItem(-1, "", "", false);
    this.selectedTodoItem = new ToDoItem(-1, "", "", false);
    this.currentId = this._todoItems.length;
  }

  public get todoItems(): Array<ToDoItem> {
    const allReturnTodoItem = new Array<ToDoItem>();
    this.todoHttpClient.GetAll().subscribe(items => {
      allReturnTodoItem.push(...items);
    }, error =>{
      console.log(error);
    });
    return allReturnTodoItem;
  }

  public SetUpdatingTodoItemId(id: number): void {
    const foundTodoItem = this.todoStore.FindById(id);

    if (foundTodoItem !== undefined) {
      this.updatingToDoItem = Object.assign({}, foundTodoItem);
    }
  }

  public Create(todoItem: ToDoItem) {
    this.todoHttpClient.Create(todoItem).subscribe(todoItem =>{
      console.log(todoItem);
    });
  }

  public UpdateTodoItem(updateTodoItems: ToDoItem): void {
    this.todoHttpClient.Update(updateTodoItems).subscribe(todoItem =>{
      console.log(todoItem);
    })
  }

  public DeleteTodoItem(id: number): void {
    this.todoStore.Delete(id);
  }

  public SetSelectedTodoItemId(id: number): void {
    this.selectedTodoItem = this.todoStore.FindById(id);
  }
}
