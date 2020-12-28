import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../core/models/user-model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  formGroup: FormGroup;
  @Output() credentials = new EventEmitter<UserModel>();
  @Input() formAction: string;

  // @ts-ignore
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public buildForm() {
    this.credentials.emit(this.formGroup.value);
  }

}
