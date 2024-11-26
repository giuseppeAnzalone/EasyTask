import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required: true}) id!: string;
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Input({required: true}) selected!: boolean;

 @Output() select: EventEmitter<User> = new EventEmitter<User>();


 get imagePath(): string {
  return 'assets/users/' + this.avatar;
}

  onSelectUser(): void {
    const selectedUser: User = {
      id: this.id,
      avatar: this.avatar,
      name: this.name
    };
    this.select.emit(selectedUser);
  }
}
