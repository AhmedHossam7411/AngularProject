import { Component , EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model'; // Importing the Task model
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input({required:true}) taskInput!: Task; // The task object to be displayed
   @Output() complete = new EventEmitter<string>(); // Define an output event to emit when the task is completed
  
    onCompleteTask() { // Method to handle task completion
        this.complete.emit(this.taskInput.id); // Emit the complete event when the task is completed
    }
  }
