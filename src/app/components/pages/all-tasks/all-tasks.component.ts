import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent implements OnInit {
 newTask = "";
 allTasks : any[] = [];
 httpService = inject(HttpService);



 ngOnInit(): void {
   this.getAlltasks();
   
 }

 addTask(){
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask = "";
      this.getAlltasks();
    })
 }

 getAlltasks(){
  this.httpService.getAllTasks().subscribe((result:any)=>{
   this.allTasks = result;
  })
 }

 OnComplete(task : any){
  task.completed = true;
  console.log("complete");
  this.httpService.updateTask(task).subscribe(()=>{

  })
 }

 OnImportant(task:any){
  task.important = true;
  console.log("Important");
  this.httpService.updateTask(task).subscribe(()=>{

  })
 }

 OnUnComplete(task:any){
  task.completed = false;
  this.httpService.updateTask(task).subscribe(()=>{})
 }


 OnUnImportant(task:any){
  task.important = false;
  this.httpService.updateTask(task).subscribe(()=>{})
 }

}
