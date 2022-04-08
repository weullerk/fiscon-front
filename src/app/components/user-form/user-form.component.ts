import {Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {IUser} from '../../interfaces/IUser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Output() newUserEvent = new EventEmitter<IUser>();

  userForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    telefone: new FormControl('', [Validators.required, Validators.maxLength(16)])
  });

  onSubmit() {
    this.newUserEvent.emit(this.userForm.value);
  }

  onClean() {
    this.userForm.reset();
  }
}
