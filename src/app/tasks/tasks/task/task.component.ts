import { Component , Input } from '@angular/core';

import { Task } from './task.model'; // Importing the Task model
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
   @Input({required:true}) taskInput!: Task; // The task object to be displayed
}
