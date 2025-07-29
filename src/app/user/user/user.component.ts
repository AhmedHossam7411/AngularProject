import { Component,Input , Output , EventEmitter } from '@angular/core';
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
     // avatar = input<string>(); 

     @Input() avatar!: string; // Define an input property to receive the avatar from the parent component
     @Input() name!: string; // Define an input property to receive the name from the parent component
     @Input() id!: string;  // Define an input property to receive the id from the parent component
     
     @Output() select = new EventEmitter(); // Define an output event to emit when a user is selected
     
     onSelectUser(id : string){  // we have to tell typescript that this method will receive a string parameter
         this.select.emit(this.id); // Emit the selected user when the method is called
     }
    }

