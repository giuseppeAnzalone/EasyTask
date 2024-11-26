import { Injectable } from '@angular/core';
import { dummyTasks} from "../dummy-task";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = dummyTasks;

  constructor() {
    const tasks  = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  }


  saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTask();
  }
}
