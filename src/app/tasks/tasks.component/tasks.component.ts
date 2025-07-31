import { Component , EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { OutletContext } from '@angular/router';
import { tasksArray } from '../tasks/task/task.model';
import { newTaskObject } from '../tasks/task/task.model';
import { NewTask } from '../new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) userId!:string;  // The id of the user to whom the tasks belong
  @Input({required : true}) name!:string;
    
  @Output() addTask :EventEmitter<string>=new EventEmitter<string>() ;  // The name of the user 
  
  localTasks = tasksArray; // Local copy of tasks array to be used in the component
  isAddingTask = false;    // Flag to indicate if a task is being added
  

  selectedUserTasks() {
    return  this.localTasks.filter(task => task.userId === this.userId);
  }
  onCompleteTask(taskId: string) {
  this.localTasks=    tasksArray.filter((task) => task.id !== taskId); // Remove the completed task from the tasks array
  }
  onAddingTask() {
    this.isAddingTask = true; // Set the flag to true to indicate a task is being added
    
  }
  onCancelTask() {
    this.isAddingTask = false; // Set the flag to false to indicate task addition is cancelled
  }
  onSubmitTask(task: newTaskObject) {
    

    this.localTasks.unshift({
      id: Math.random().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: this.userId
});
    this.isAddingTask = false; // Set the flag to false to indicate task addition is completed
   
  }
}
