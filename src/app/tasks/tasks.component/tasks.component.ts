import { Component , EventEmitter, Input, Output ,inject } from '@angular/core';
import { TaskComponent } from "../tasks/task/task.component";
import { OutletContext } from '@angular/router';
import { tasksArray } from '../tasks/task/task.model';
import { newTaskObject } from '../tasks/task/task.model';
import { NewTask } from '../new-task/new-task';
import { Card } from "../../shared/card/card";
import { taskservices } from '../task.services';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask, Card,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) userId!:string;  // The id of the user to whom the tasks belong
  @Input({required : true}) name!:string;
    
  @Output() addTask :EventEmitter<string>=new EventEmitter<string>() ;  // The name of the user 
  
  localTasks = tasksArray; // Local copy of tasks array to be used in the component
  isAddingTask = false;    // Flag to indicate if a task is being added
 
  private taskService = inject(taskservices); // DI Injecting the task service to get user tasks 
  // , one instance of the service is created and used throughout all components that use it

  selectedUserTasks() {
    return  this.taskService.getUserTasks(this.userId); // Fetching tasks for the specific user by service class
  }
  onCompleteTask(taskId: string) {
  return  this.taskService.onCompleteTask(taskId)// Remove the completed task from the tasks array
  }
  onAddingTask() {
    this.isAddingTask = true; // Set the flag to true to indicate a task is being added
    
  }
  onCancelTask() {
    this.isAddingTask = false; // Set the flag to false to indicate task addition is cancelled
  }
  onSubmitTask(task: newTaskObject) {
  this.taskService.onSubmitTask(task, this.userId);
  this.isAddingTask = false; // Set the flag to false to indicate task addition is completed
  }     // Submit the new task using the service
}
