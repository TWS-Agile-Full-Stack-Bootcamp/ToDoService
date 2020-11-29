import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list-todoitem',
  templateUrl: './list-todoitem.component.html',
  styleUrls: ['./list-todoitem.component.css']
})
export class ListTodoitemComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public get toDoItems(): Array<ToDoItem> {
    return this.todoService.ToDoItems;
  }

}
