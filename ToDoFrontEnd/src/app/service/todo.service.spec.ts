import { TestBed } from '@angular/core/testing';
import { ToDoItem } from '../model/ToDoItem';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todoitems', () =>{
    expect(service.todoItems.length).toBe(5);
  });
  
  it('should create todo-item', () =>{
    const newTodoItem = new ToDoItem(10, "new todo", "new todo description", false);
    service.Create(newTodoItem);
    expect(service.todoItems.length).toBe(6);
    expect(service.todoItems[5].id === newTodoItem.id);
    expect(service.todoItems[5].title === newTodoItem.title);
    expect(service.todoItems[5].description === newTodoItem.description);
    expect(service.todoItems[5].isDone === newTodoItem.isDone);
  });
  
  it('should update todo-item', () =>{
    const updateTodoItem   = service.todoItems[0];
    updateTodoItem.description = "updated description";
    updateTodoItem.title = "updated title";
    updateTodoItem.isDone = true;
    service.UpdateTodoItem(updateTodoItem);
    expect(service.todoItems.length).toBe(5);
    expect(service.todoItems[0].description).toBe(updateTodoItem.description);
    expect(service.todoItems[0].title).toBe(updateTodoItem.title);
    expect(service.todoItems[0].isDone).toBe(updateTodoItem.isDone);
  });
});
