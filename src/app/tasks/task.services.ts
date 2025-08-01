import { inject, Injectable } from "@angular/core";
import { newTaskObject, tasksArray } from "./tasks/task/task.model";

@Injectable({providedIn: 'root'})
export class taskservices 
{
    localTasks = tasksArray; // Local copy of tasks array to be used in the service
    
    constructor() {
         // Initialize localTasks with the tasksArray
        const tasks = localStorage.getItem('tasks');
        if(tasks) {
            this.localTasks=JSON.parse(tasks);
        }
    }
    
    getUserTasks(userId: string)
    {
        return this.localTasks.filter(task => task.userId === userId);
    }

    onCompleteTask(taskId: string) {
    this.localTasks=tasksArray.filter((task) => task.id !== taskId);
    this.saveTasks();
    }
    onSubmitTask(task: newTaskObject, userId: string) {
        
    
        this.localTasks.unshift({
          id: Math.random().toString(),
          title: task.title,
          summary: task.summary,
          dueDate: task.dueDate,
          userId: userId
    });
        this.saveTasks(); // Set the flag to false to indicate task addition is completed
       
      }
      

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.localTasks));
    }
}
