import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
@Input() allTasks: any[] = [];
@Output() important = new EventEmitter<any>();
@Output() complete = new EventEmitter<any>();
@Output() uncomplete = new EventEmitter<any>();
@Output() unimportant = new EventEmitter<any>(); 


markImportant(task : any){
this.important.emit(task);
}
markUnImportant(task : any){
  this.unimportant.emit(task);
  }

markComplete(task :any){
 this.complete.emit(task);
}
markUnComplete(task :any){
  this.uncomplete.emit(task);
 }
}
