import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header.component";
import { UserComponent } from "./user/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  protected readonly title = signal('AngularProject');
  selectedUserId='u1'; // Default selected user ID

  onUserSelected(userId: string) { 
    this.selectedUserId = userId; // Update the selected user ID when a user is selected
   }
  get selectedUser() {console.log(this.selectedUserId);
    return DUMMY_USERS.find(user => user.id === this.selectedUserId)!;
  }
 

  Users = DUMMY_USERS; // Expose the DUMMY_USERS array to the template
}
