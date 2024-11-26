import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule} from "@angular/forms";
import {NewTask} from "../../../models/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter()
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle: string = "";
  enteredSummary: string = ""
  enteredDate: string = ""
  today!: string;

  constructor() {
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
