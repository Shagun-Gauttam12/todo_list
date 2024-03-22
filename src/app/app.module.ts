import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AllTasksComponent } from './components/pages/all-tasks/all-tasks.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    AllTasksComponent,
    CompletedTaskComponent,
    ImportantTasksComponent,
    PageTitleComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
