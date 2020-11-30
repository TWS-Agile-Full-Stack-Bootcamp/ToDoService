import { TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';
import { TodoHttpclientService } from './todo-httpclient.service';
import { TodoStoreService } from './todo-store.service';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let todoHttpClientService: TodoHttpclientService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy };
  let todoStoreService: TodoStoreService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    todoStoreService = new TodoStoreService();
    todoHttpClientService = new TodoHttpclientService(<any>httpClientSpy)
    service = new TodoService(todoStoreService, todoHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todoitems', () => {
    const expectedTodoItems: ToDoItem[] = todoStoreService.GetAll();

    httpClientSpy.get.and.returnValue(of(expectedTodoItems));

    const todoItems = service.todoItems
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(service.todoItems.length).toBe(5);
  });

  it('should create todo-item', () => {
    const newTodoItem = new ToDoItem(10, "new todo", "new todo description", false);
    
    httpClientSpy.post.and.returnValue(of(newTodoItem));
    service.Create(newTodoItem);

    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should update todo-item', () => {
    const updateTodoItem = new ToDoItem(1, "", "", false);
    updateTodoItem.description = "updated description";
    updateTodoItem.title = "updated title";
    updateTodoItem.isDone = true;
    
    httpClientSpy.put.and.returnValue(of(updateTodoItem));
    service.UpdateTodoItem(updateTodoItem);
    
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });
});
