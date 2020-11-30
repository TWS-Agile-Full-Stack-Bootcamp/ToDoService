import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoitemComponent } from './list-todoitem/list-todoitem.component';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { UpdateTodoItemComponent } from './update-todo-item/update-todo-item.component';

export const routes: Routes = [
  { path: "", redirectTo: '/index', pathMatch: 'full' },
  { path: "index", component: ListTodoitemComponent },
  { path: "create", component: CreateTodoitemComponent },
  { path: "detail", component: TodoitemDetailComponent },
  { path: "edit", component: UpdateTodoItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
