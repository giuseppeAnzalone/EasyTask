import { Component } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {UserComponent} from "./components/user/user.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {User} from "./models/user.model";
import {DUMMY_USERS} from "./dummy-users";
import {dummyTasks} from "./dummy-task";
import {TasksService} from "./services/tasks.service";
import {Task} from "./models/task.model";
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  tasks: Task[] = dummyTasks;

  users: User[] = DUMMY_USERS;
  selectedUser: User | null = null;

  constructor( private tasksService: TasksService ) {}

  onSelectUser(user: User) {
    this.selectedUser = user;
  }

}
