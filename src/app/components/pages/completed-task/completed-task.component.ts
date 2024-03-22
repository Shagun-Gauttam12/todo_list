import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent {
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
    this.allTasks = result.filter((x:any) => x = x.completed == true);
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
