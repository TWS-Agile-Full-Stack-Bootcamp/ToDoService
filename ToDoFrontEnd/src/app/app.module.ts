import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { ListTodoitemComponent } from './list-todoitem/list-todoitem.component';
import { UpdateTodoitemComponent } from './update-todoitem/update-todoitem.component';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoitemComponent,
    ListTodoitemComponent,
    UpdateTodoitemComponent,
    TodoitemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
