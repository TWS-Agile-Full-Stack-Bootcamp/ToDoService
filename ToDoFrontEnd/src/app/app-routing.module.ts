import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoitemComponent } from './list-todoitem/list-todoitem.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';

const routes: Routes = [
  { path: "", redirectTo: '/index', pathMatch: 'full' },
  { path: "index", component: ListTodoitemComponent },
  { path: "create", component: CreateTodoitemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
