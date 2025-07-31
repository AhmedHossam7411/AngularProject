import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  enteredTitle= '';  // property to store newly added title by user input  // we add ngModel in html input field
                    //  can be used as signals also    
  onCancel() {
    this.cancel.emit(); // Emit the cancel event when the user cancels task addition
  }
}
