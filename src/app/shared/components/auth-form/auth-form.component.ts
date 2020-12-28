import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../core/models/user-model/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UtilityFunctions} from "../../utils/app.utility";

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
  constructor(private formBuilder: FormBuilder, private utility: UtilityFunctions) {
    this.formGroup = this.formBuilder.group({
      email: ['', [this.utility.requiredValidator('email'),
                  this.utility.minlengthValidator('email', 3),
                  this.utility.maxlengthValidator('email', 25)]],
      password: ['', [
                  this.utility.requiredValidator('Password'),
                  this.utility.minlengthValidator('Password', 8),
                  this.utility.maxlengthValidator('Password', 16)]]
    });
  }

  public buildForm() {
    this.formGroup.markAllAsTouched();
    this.credentials.emit(this.formGroup.value);
  }

}
