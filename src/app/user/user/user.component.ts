import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Get a random index from the DUMMY_USERS array

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
     selectedUser = DUMMY_USERS[randomIndex]; // Select a random user from the DUMMY_USERS array
     get imagePath() {
         return `assets/users/${this.selectedUser.avatar}`; // Construct the image path using the selected user's avatar
     }
     onSelectUser(){
          const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Get a new random index
          this.selectedUser = DUMMY_USERS[randomIndex]; // Update the selected user with a new
     }
    }

