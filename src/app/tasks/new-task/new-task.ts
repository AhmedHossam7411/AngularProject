import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskObject } from '../tasks/task/task.model'; // Import the NewTask interface

@Component({
  selector: 'app-new-task',
  imports: [FormsModule,],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskObject>(); // Emit the new task object when a new task is added

   // Emit the task title when a new task is added
  
  enteredTitle= '';  // property to store newly added title by user input  // we add ngModel in html input field
                    //  can be used as signals also  
  enteredSummary = '';
  enteredDueDate = '';  
  onCancel() {
    this.cancel.emit(); // Emit the cancel event when the user cancels task addition
  }
  onSubmit()  // emitter to be emitted for tasks comp
  {
    this.add.emit({
      title: this.enteredTitle,  // Emit the entered title
      summary: this.enteredSummary,  // Emit the entered summary
      dueDate: this.enteredDueDate  // Emit the entered due date
    }); // Emit the add event with the new task details when the form is submitted
  }
}
