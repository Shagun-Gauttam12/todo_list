import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './components/pages/all-tasks/all-tasks.component';
import { ImportantTasksComponent } from './components/pages/important-tasks/important-tasks.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';

const routes: Routes = [
  {path : "", component : AllTasksComponent},
  {path : "important" , component : ImportantTasksComponent},
  {path : "completed", component : CompletedTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
