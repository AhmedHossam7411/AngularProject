import { Component , Input } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-tasks.component',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) name!:string;
}
