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
  get selectedUsers() {console.log(this.selectedUserId);
    return DUMMY_USERS.find(user => user.id === this.selectedUserId)!;
  }
 

  dummyUsers = [  // Array of dummy user objects 
 // Each object represents a user with an id, name, and avatar
  {
    id: 'u1',
    name: 'Jasmine Washington',
    avatar: 'user-1.jpg',
  },
  {
    id: 'u2',
    name: 'Emily Thompson',
    avatar: 'user-2.jpg',
  },
  
  {
    id: 'u3',
    name: 'Marcus Johnson',
    avatar: 'user-3.jpg',
  },
  {
    id: 'u4',
    name: 'David Miller',
    avatar: 'user-4.jpg',
  },
  {
    id: 'u5',
    name: 'Priya Patel',
    avatar: 'user-5.jpg',
  },
  {
    id: 'u6',
    name: 'Arjun Singh',
    avatar: 'user-6.jpg',
  },
];// Expose the DUMMY_USERS array to the template
}
