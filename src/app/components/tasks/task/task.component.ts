import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../../../models/task.model";
import {DatePipe, NgClass} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {TasksService} from "../../../services/tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, MatIconModule, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() isCompleted!: boolean;
  @Output() complete = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor( private tasksService: TasksService ) {}

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }

  OnDelete() {
    this.delete.emit(this.task.id)
  }

}
