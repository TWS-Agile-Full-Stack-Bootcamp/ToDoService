/* tslint:disable:no-unused-variable */
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { routes } from "./app-routing.module";
import { ListTodoitemComponent } from './list-todoitem/list-todoitem.component';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { UpdateTodoItemComponent } from './update-todo-item/update-todo-item.component';

describe("Router: App", () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ListTodoitemComponent,
        TodoitemDetailComponent,
        CreateTodoitemComponent,
        UpdateTodoItemComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]);
    tick(50);
    expect(location.path()).toBe("/index");
  }));

  it('navigate to "create" redirects you to /create', fakeAsync(() => {
    router.navigate(["create"]);
    tick(50);
    expect(location.path()).toBe("/create");
  }));
});