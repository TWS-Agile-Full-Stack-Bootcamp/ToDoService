import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-update-todo-item',
  templateUrl: './update-todo-item.component.html',
  styleUrls: ['./update-todo-item.component.css']
})
export class UpdateTodoItemComponent implements OnInit {

public updatingToDoItem: ToDoItem;

  constructor(private todoItemService: TodoService) { 
    this.updatingToDoItem = new ToDoItem(1, "", "", false);
    this.updatingToDoItem = this.todoItemService.updatingToDoItem;
  }

  ngOnInit(): void {
  }

  public updateTodoItem(): void{
    this.todoItemService.UpdateTodoItem();
  }
}
