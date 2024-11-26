import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTask, Task} from "../../models/task.model";
import {MatIconModule} from "@angular/material/icon";
import {TasksService} from "../../services/tasks.service";
import {ConfirmModalComponent} from "./confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, MatIconModule, ConfirmModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  @Input() tasks: Task[] = []

  isAddingTask: boolean = false;
  completedTaskIds: Set<string> = new Set();

  isDeleteTask: boolean = false;
  taskToDeleteId: string | null = null;


  constructor( private tasksService: TasksService ) {}

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTask(this.userId);
  }

  // START ADD TASK //
  onStartTask() {
    this.isAddingTask = true;
  }

  onCancel() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    const newTask: Task = {
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    };
    this.tasksService.tasks.unshift(newTask);
    this.tasksService.saveTask();
    this.isAddingTask = false;
  }

  // COMPLETE TASK //
  onCompleteTask(id: string) {
    this.completedTaskIds.add(id);
  }

  // START DELETE TASK //
  startDelete(id: string) {
    this.isDeleteTask = true;
    this.taskToDeleteId = id;
  }

  onCancelDelete() {
    this.isDeleteTask = false;
    this.taskToDeleteId = null;
  }

  onConfirmDelete() {
    if (this.taskToDeleteId) {
      this.deleteSingleTask(this.taskToDeleteId);
    }
    this.onCancelDelete();
  }

  deleteSingleTask(id: string) {
    this.tasksService.deleteTask(id);
    this.tasks = this.tasksService.getUserTask(this.userId);
  }

}
