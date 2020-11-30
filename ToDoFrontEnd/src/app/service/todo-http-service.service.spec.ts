import { TestBed } from '@angular/core/testing';

import { TodoHttpServiceService } from './todo-http-service.service';

describe('TodoHttpServiceService', () => {
  let service: TodoHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
