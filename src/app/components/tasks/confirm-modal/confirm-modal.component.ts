import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  @Input() message: string = "";
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }

}
