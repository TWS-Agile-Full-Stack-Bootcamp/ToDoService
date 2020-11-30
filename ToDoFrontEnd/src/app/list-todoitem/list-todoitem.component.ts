import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list-todoitem',
  templateUrl: './list-todoitem.component.html',
  styleUrls: ['./list-todoitem.component.css']
})
export class ListTodoitemComponent implements OnInit {


  public toDoItems: ToDoItem[]

  constructor(private todoService: TodoService) {
    this.toDoItems = [];
  }

  ngOnInit(): void {
    this.toDoItems = this.todoService.todoItems;
  }

  public updateTodoItem(todoItem: ToDoItem): void {
    this.todoService.SetUpdatingTodoItemId(todoItem.id);
  }

  public deleteTodoItem(id: number): void{
    this.todoService.DeleteTodoItem(id);
  }

  public selectTodoItem(todoItem: ToDoItem): void{
    this.todoService.selectedTodoItem = todoItem;
    this.todoService.UpdateTodoItem(todoItem);
  }
}
