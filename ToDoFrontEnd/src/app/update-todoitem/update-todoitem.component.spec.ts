import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodoitemComponent } from './update-todoitem.component';

describe('UpdateTodoitemComponent', () => {
  let component: UpdateTodoitemComponent;
  let fixture: ComponentFixture<UpdateTodoitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTodoitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
